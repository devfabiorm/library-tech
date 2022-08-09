import { Livro } from './livro.model';

export class LivrosService {
  produtos: Livro[] = [
    // new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Livro('LIV02', 'Livro Iniciando com Flutter', 39.9),
    // new Livro('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  obterTodos(): Livro[] {
    return this.produtos;
  }

  obterUm(id: number): Livro {
    return this.produtos[0];
  }

  criar(produto: Livro) {
    this.produtos.push(produto);
  }

  alterar(produto: Livro) {
    return produto;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}
