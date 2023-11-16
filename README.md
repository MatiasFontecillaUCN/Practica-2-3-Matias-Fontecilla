## Paso 1: Clonar el repositorio ##
Puede descargar el repositorio como un archivo ZIP o clonarlo usando Git en su terminal:

```+
$ git clone https://github.com/MatiasFontecillaUCN/Practica-2-Matias-Fontecilla.git
```


# Instalar Backend-Laravel #

### Requisitos Previos ###

* [XAMPP](https://www.apachefriends.org/index.html)
* [Composer](https://getcomposer.org)
* [MySQL](https://dev.mysql.com/downloads/mysql/)
  
### Paso 3: Entrar a la carpeta del backend ###
```+
$ cd backend-laravel
```

### Paso 4: Instalar composer ###
```+
$ composer install
```
### Paso 5: Copia el archivo .env.example y crea un nuevo archivo llamado .env. ###
```+
$ cp .env.example .env
```
En el acrchivo .env se deben configurar los campos relacionados a la base de datos:

### Paso 5: Generar clave de la aplicacion ###
```+
$ php artisan key:generate
```
### Paso 6: Migrar y seedear base de datos ###

```+
$ php artisan migrate:fresh --seed
```
### Paso 7: Ejecutar servidor ###
```+
$ php artisan serve
```
# Instalacion Frontend-React
### Requisitos Previos ###

* [Node.js](https://nodejs.org/en)

### Paso 8: Instalar dependencias de react ###
```+
$ npm install
```
### Paso 9: Iniciar aplicacion ###
```+
$ npm start
```
