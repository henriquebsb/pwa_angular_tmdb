## Selecionar Idioma
- [`[Inglês]`](https://github.com/henriquebsb/pwa_angular_tmdb/blob/master/README.md)
- [`[Português]`](https://github.com/henriquebsb/pwa_angular_tmdb/blob/master/README-pt.md)

## Introdução
Projeto de estudo para desenvolvimento de aplicativo PWA com Angular.

## Versão 0.0.26
#### Concluídas
- [x] Internacionalização(i18n);
- [x] Verificação automática de versão;
#### Planejadas
- [ ] Controle e gerenciamento de instalação do aplicativo PWA;
- [ ] Adaptação da tela para web tanto smarthphone;

## Angular
Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.
  - Foi utilizado em app.module.ts { provide: LocationStrategy, useClass: HashLocationStrategy }, para o browser acessar as rotas diretamente

## Pacotes/Dependências Utilizadas
  - @ngx-translate/core: tradução do site para outras línguas.
  - after-build.js ou post-build.js para atualização automática da aplicação
  - @ngx-translate/core & @ngx-translate/http-loader para internacionalização(i18n). Pasta de config: assets/i18n

## Servidor de desenvolvimento

Execute `ng serve` para servidor dev. Navegar para `http://localhost:4200/`.

## Code scaffolding

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Ajuda

Para mais ajuda sobre Angular CLI, usar `ng help` ou acessar [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
