import { Controller, Get } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  findAll() {
    return 'find all tables.';
  }
}
