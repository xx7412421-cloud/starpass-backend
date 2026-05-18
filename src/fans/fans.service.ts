import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class FansService {
  constructor(private prisma: PrismaService) {}

  async findByAddress(stellarAddress: string) {
    const fan = await this.prisma.fan.findUnique({
      where: { stellarAddress },
      include: {
        passes: {
          where: { active: true, expiresAt: { gt: new Date() } },
          include: { tier: true, creator: true },
        },
      },
    });

    if (!fan) throw new NotFoundException('Fan not found');
    return fan;
  }

  async getSubscriptions(stellarAddress: string) {
    const fan = await this.prisma.fan.findUnique({
      where: { stellarAddress },
    });

    if (!fan) throw new NotFoundException('Fan not found');

    const now = new Date();
    return this.prisma.pass.findMany({
      where: { fanId: fan.id, active: true, expiresAt: { gt: now } },
      include: { creator: true, tier: true },
      orderBy: { expiresAt: 'asc' },
    });
  }
}
