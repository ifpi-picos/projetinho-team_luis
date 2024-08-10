<h1>Projeto de Gestão de Livros</h1>

<p>Este projeto é uma aplicação simples para gerenciar livros disponíveis, livros emprestados e o histórico de empréstimos. Ele foi desenvolvido utilizando TypeScript e simula operações de CRUD (Create, Read, Update, Delete) em uma base de dados JSON.</p>

<h2>Estrutura do Projeto</h2>

<pre><code>
projetinho-team_luis
│   package.json
│   package-lock.json
│   tsconfig.json
│   README.md
└───src
    │   routes.ts
    │   server.ts
    ├───controller
    │   ├───avaliableBooks
    │   │   ├── deleteBookController.ts
    │   │   ├── getDataController.ts
    │   │   ├── postDataController.ts
    │   │   └── updateBookController.ts
    │   ├───borrowedBooks
    │   │   ├── getBorrowedBooksController.ts
    │   │   ├── loanBookController.ts
    │   │   └── returnBookController.ts
    │   └───loanHistoric
    │       ├── getLoanHistoricByBooksController.ts
    │       └── getLoanHistoricByUserController.ts
    ├───database
    │   ├── avaliableBooks.json
    │   ├── borrowedBooks.json
    │   └── loanHistoric.json
    ├───models
    │   ├── BookInterface.ts
    │   ├── BorrowedBookInterface.ts
    │   ├── HttpResponseInterface.ts
    │   └── LoanHistoricInterface.ts
    ├───services
    │   ├───avaliableBooks
    │   │   ├── deleteBookService.ts
    │   │   ├── getDataService.ts
    │   │   ├── postDataService.ts
    │   │   └── updateBookService.ts
    │   ├───borrowedBooks
    │   │   ├── getBorrowedBooksService.ts
    │   │   ├── loanBookService.ts
    │   │   └── returnBookService.ts
    │   └───loanHistoric
    │       ├── getLoanHistoricByBooksServices.ts
    │       └── getLoanHistoricByUserService.ts
    └───utils
        ├── dateGenerator.ts
        ├── GetJson.ts
        ├── HttpHelper.ts
        └── IdGenerator.ts
</code></pre>

<h2>Como Utilizar</h2>

<h3>Pré-requisitos</h3>

<ul>
  <li>Node.js (v14.x ou superior)</li>
  <li>npm (v6.x ou superior)</li>
</ul>

<h3>Instalação</h3>

<p>Clone o repositório e instale as dependências:</p>

<pre><code>
git clone "URL_DO_REPOSITORIO"
cd projetinho-team_luis
npm install
</code></pre>

<p>OBS: Você deve criar um arquivo chamado .env e colocar o seguinte código:</p>
<pre><code>
PORT=3000
</code></pre>

<h3>Executando o Projeto</h3>

<p>Para iniciar o servidor, execute:</p>

<pre><code>npm start</code></pre>

<p>O servidor estará disponível em <code>http://localhost:3000</code>.</p>

<h2>Endpoints Disponíveis</h2>

<h3>Livros Disponíveis</h3>

<ul>
  <li><code>GET /books</code> - Lista todos os livros disponíveis.</li>
  <li><code>POST /books</code> - Adiciona um novo livro.</li>
  <li><code>PUT /books/:id</code> - Atualiza os dados de um livro existente.</li>
  <li><code>DELETE /books/:id</code> - Deleta um livro.</li>
</ul>

<h3>Livros Emprestados</h3>

<ul>
  <li><code>GET /borrowedBooks</code> - Lista todos os livros emprestados.</li>
  <li><code>POST /borrowBook</code> - Registra o empréstimo de um livro.</li>
  <li><code>POST /returnBook/:id</code> - Registra a devolução de um livro.</li>
</ul>

<h3>Histórico de Empréstimos</h3>

<ul>
  <li><code>GET /loanHistoric/book/:bookId</code> - Exibe o histórico de empréstimos de um livro.</li>
  <li><code>GET /loanHistoric/user/:userId</code> - Exibe o histórico de empréstimos de um usuário.</li>
</ul>

<h2>Estrutura dos Dados</h2>

<h3>Livro (BookInterface)</h3>

<pre><code>interface BookInterface {
  id: string;
  title: string;
  author: string;
  available: boolean;
}
</code></pre>

<h3>Livro Emprestado (BorrowedBookInterface)</h3>

<pre><code>interface BorrowedBookInterface {
  id: string;
  bookId: string;
  userId: string;
  borrowedDate: string;
}
</code></pre>

<h3>Histórico de Empréstimos (LoanHistoricInterface)</h3>

<pre><code>interface LoanHistoricInterface {
  id: string;
  bookId: string;
  userId: string;
  borrowedDate: string;
  returnedDate?: string;
}
</code></pre>

<h2>Contribuindo</h2>

<p>Sinta-se à vontade para contribuir com o projeto. Para isso:</p>

<ol>
  <li>Faça um fork do projeto.</li>
  <li>Crie uma branch para sua feature (<code>git checkout -b feature/nova-feature</code>).</li>
  <li>Faça commit das suas alterações (<code>git commit -m 'Adiciona nova feature'</code>).</li>
  <li>Faça o push para a branch (<code>git push origin feature/nova-feature</code>).</li>
  <li>Abra um Pull Request.</li>
</ol>
