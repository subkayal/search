import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('/search')
export class SearchController {
  constructor(private searchService: SearchService) {}
}
