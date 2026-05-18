import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TiersService } from './tiers.service';

@ApiTags('tiers')
@Controller('tiers')
export class TiersController {
  constructor(private tiersService: TiersService) {}

  @Get('creator/:address')
  @ApiOperation({ summary: 'Get all active tiers for a creator' })
  findByCreator(@Param('address') address: string) {
    return this.tiersService.findByCreator(address);
  }

  @Get('creator/:address/:onChainId')
  @ApiOperation({ summary: 'Get a specific tier by on-chain ID' })
  findOne(
    @Param('address') address: string,
    @Param('onChainId', ParseIntPipe) onChainId: number,
  ) {
    return this.tiersService.findOne(address, onChainId);
  }
}
