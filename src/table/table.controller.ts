import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { TableDto } from './dto/table.dto';
import { TableService } from './table.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Table } from './entities/table.entity';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'List the tables.',
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get one table.',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a table.',
  })
  create(@Body() createTableDto: TableDto): Promise<Table> {
    return this.tableService.create(createTableDto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a table number.',
  })
  update(
    @Param('id') id: string,
    @Body() updateTableDto: TableDto,
  ): Promise<Table> {
    return this.tableService.update(id, updateTableDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a table.',
  })
  delete(@Param('id') id: string): Promise<Table> {
    return this.tableService.delete(id);
  }
}
