<p align="center">
  <a href="https://prozeducacao.com.br/" target="blank"><img src="https://prozeducacao.com.br/wp-content/uploads/2021/12/logotipo_proz.svg" width="200" alt="Proz Logo" /></a>
</p>

<p align="center">Desafio front-end para a Proz Educação. O app consiste em um sistema básico de notificações.</p>

## Iniciando projeto

Utilizamos Docker para um ambiante padronizado, evitar preocupação com instalações de pacotes e melhor comunicação entre os serviços front-end e back-end.

Na raiz do projeto, execute o comando:

```bash
$ docker-compose up
```

O comando irá subir dois containers, um contendo o front-end e outro com o back-end, ambos na mesma rede interna do Docker.

Front-end: `http://localhost:3000`
Backend: `http://localhost:3333`

## Front-end

<p align="center">
  <img src="https://i.imgur.com/ujDuHUX.png" width="1000" alt="Tela frontend" />
</p>

Bibliotecas utilizadas:

- @headlessui/react
- @heroicons/react
- @radix-ui/react-dialog
- @radix-ui/react-dropdown-menu
- @tailwindcss/line-clamp
- @types/node
- @types/react
- @types/react-dom
- autoprefixer
- axios
- classnames
- clsx
- dayjs
- eslint
- eslint-config-next
- next
- postcss
- react
- react-dom
- tailwindcss
- typescript

Principais Recursos:

- Utilização do Tailwind CSS para estilização, oferecendo uma ampla gama de componentes pré-construídos e personalizáveis.
- Integração com o Next.js para renderização do lado do servidor (SSR) e roteamento.
- Gerenciamento de estado utilizando o React Hooks e o contexto da aplicação.
- Integração com a biblioteca Axios para realizar requisições HTTP eficientes.
- Uso do Day.js para manipulação e formatação de datas.
- Componentes UI personalizados utilizando as bibliotecas @headlessui/react, @heroicons/react, @radix-ui/react-dialog e @radix-ui/react-dropdown-menu.
- Configuração do ESLint para garantir boas práticas de código e consistência.
- Suporte para TypeScript, oferecendo tipagem estática para um desenvolvimento mais seguro e eficiente.

## Backend

<p align="center">
  <img src="https://i.imgur.com/q1uBRjF.png" width="1000" alt="Tela backend" />
</p>

<h3 align="center">Para teste de envio de notificações, acessar o link http://localhost:3333/api</h3>

Bibliotecas utilizadas:

- @nestjs/common
- @nestjs/core
- @nestjs/mapped-types
- @nestjs/platform-express
- @nestjs/swagger
- reflect-metadata
- rxjs
- uuid
- @nestjs/cli
- @nestjs/schematics
- @nestjs/testing
- @types/express
- @types/jest
- @types/node
- @types/supertest
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- jest
- prettier
- source-map-support
- supertest
- ts-jest
- ts-loader
- ts-node
- tsconfig-paths
- typescript

Principais Recursos:

- Utilização do Nest.js para criar uma aplicação backend modular e fácil de manter.
- Uso do TypeScript para fornecer tipagem estática e melhorar a produtividade e a segurança do código.
- Integração com o Swagger através da biblioteca @nestjs/swagger para gerar documentação automática da API.
- Uso de UUID para geração de identificadores únicos em entidades e recursos.
- Suporte ao padrão de arquitetura MVC (Model-View-Controller) para separação de responsabilidades.
- Utilização de bibliotecas para linting e formatação de código (ESLint, Prettier).
- Ferramentas de desenvolvimento e teste configuradas para uma experiência de desenvolvimento aprimorada.

## Considerações finais

Apenas do curto tempo disponível para desenvolvimento, espero ter conseguido mostrar minha qualidades como desenvolvedor. Sei que não era necessário um back-end, mas para simular um ambiente mais realista, resolvi aproveitar o Docker + Nest e desenvolver algo.

Obrigado pela oportunidade!
