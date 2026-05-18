import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FansService } from './fans.service';

@ApiTags('fans')
@Controller('fans')
export class FansController {
  constructor(private fansService: FansService) {}

  @Get(':address')
  @ApiOperation({ summary: 'Get fan profile by Stellar address' })
  findOne(@Param('address') address: string) {
    return this.fansService.findByAddress(address);
  }

  @Get(':address/subscriptions')
  @ApiOperation({ summary: 'Get active subscriptions for a fan' })
  getSubscriptions(@Param('address') address: string) {
    return this.fansService.getSubscriptions(address);
  }
}
