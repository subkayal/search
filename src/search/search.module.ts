import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { Search } from './search.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Search])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
