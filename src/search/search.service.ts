import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Search } from './search.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Search) private readonly repo: Repository<Search>,
  ) {}

  create(
    name: string,
    image: string,
    description: string,
    dateLastEdited: string,
  ) {
    const user = this.repo.create({ name, image, description, dateLastEdited });
    return this.repo.save(user);
  }
}
