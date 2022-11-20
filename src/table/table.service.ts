import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.table.findMany();
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = createTableDto;
    return this.prismaService.table.create({
      data: table,
    });
  }
}
