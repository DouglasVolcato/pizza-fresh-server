import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TableDto } from './dto/table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Table[]> {
    return this.prismaService.table.findMany();
  }

  findOne(tableId: string): Promise<Table> {
    return this.prismaService.table.findUnique({
      where: {
        id: tableId,
      },
    });
  }

  create(createTableDto: TableDto): Promise<Table> {
    const table: Table = createTableDto;
    return this.prismaService.table.create({
      data: table,
    });
  }

  update(tableId: string, updateTableDto: TableDto) {
    return this.prismaService.table.update({
      where: { id: tableId },
      data: updateTableDto,
    });
  }
}
