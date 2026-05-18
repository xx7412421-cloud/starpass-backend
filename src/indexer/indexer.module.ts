import { Module } from '@nestjs/common';
import { IndexerService } from './indexer.service';
import { StellarModule } from '../stellar/stellar.module';
import { TiersModule } from '../tiers/tiers.module';
import { PassesModule } from '../passes/passes.module';

@Module({
  imports: [StellarModule, TiersModule, PassesModule],
  providers: [IndexerService],
  exports: [IndexerService],
})
export class IndexerModule {}
