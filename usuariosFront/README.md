# UsuariosFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

* Validar environment la ip del backend

* Descargar dependencias con npm install

* NOTA IMPORTANTE!!!!
  * Se debe crear el usuario admin, debe de estar activo!
    INSERT INTO public.usuarios(
    pnombre, snombre, papellid, sapellid, fechaingreso, salario, activo, "createdAt", "updatedAt", cargo, esadmin, username, usuarios.password)
    VALUES ( 'admin', null, 'admin', null, '2010-06-22', '0', true, current_timestamp, current_timestamp, null,true,'admin', 'YWRtaW4=');
  

  La clave queda encryptada en base64

  * User admin->    admin admin
  * User normal->   user  user
  

    * Sólo user admin puede crear usuarios
    * Sólo el user normal puede listar los usuarios a través de apiexterna


* Como Compilar Estilos Scss

  * Instalar Node Sass de forma global "sudo npm install -g node-sass --unsafe-perm=true --allow-root"
  
  * Convertir Estilos scss a css,  copiar y remplazar el resultado(css) en carpeta    assets/layout/css/

    * node-sass --output-style compressed /Users/andres/usuariosFront/src/themes/layout/scss/layout-blue-dark.scss  > /Users/andres/usuariosFront/src/assets/layout/css/layout-blue-dark.css
  
    * node-sass --output-style compressed /Users/andres/usuariosFront/src/themes/layout/scss/layout-blue-light.scss  > /Users/andres/usuariosFront/src/assets/layout/css/layout-blue-light.css
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
