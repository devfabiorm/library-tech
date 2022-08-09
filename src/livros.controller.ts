import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.services';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Livro) {
    this.livrosService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Livro): Livro {
    return this.livrosService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
