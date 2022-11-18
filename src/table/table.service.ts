import { Injectable } from '@nestjs/common';

@Injectable()
export class TableService {
  findAll() {
    return 'Find all tables.';
  }

  create() {
    return 'Create a table';
  }
}
