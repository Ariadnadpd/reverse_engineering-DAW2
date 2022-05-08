# Reverse Engineering - DAW2

Aplicación que gestiona una plantilla de jugadores del equipo de fútbol del Sevilla FC. Está desarrollada utilizando un proyecto base y con el framework de [Angular](https://angular.io/), [Angular Material](https://material.angular.io/) y [Bootstrap](https://getbootstrap.com/).

Para poder usar la aplicación, hay que iniciar sesión con las siguientes credenciales:

* Usuario: admin@gmail.com
* Contraseña: admindaw2

En primera instancia, la aplicación muestra una página de introducción del equipo del Sevilla FC donde se puede acceder desde ahí a la plantilla del equipo. Se puede ver un listado de la plantilla al completo del equipo en el año 2022, se puede editar la información de los jugadores, eliminar a un jugador y crear uno nuevo.

El formulario que se ha realizado para crear y editar los jugadores contiene diferentes campos, los cuales hay que rellenarlos todos obligatoriamente con texto (para el nombre, los apellidos y la nacionalidad), números (para el número, la edad y la altura) y finalmente, hay que seleccionar una posición.


## Requerimientos

1. Tener instalado [Node.js y npm](https://nodejs.org/es/).
2. Tener instalada la `versión 13.2.6` del CLI Angular.
3. Tener instalado un navegador, preferiblemente el de `Google Chroome`.
4. Tener instalado los paquetes necesarios para `Angular Material` y `Bootstrap`.

## Cómo ejecutar el proyecto

En primer lugar, para ejecutar el proyecto localmente hay que descargar la carpeta del proyecto y descomprimirla. Luego, hay que realizar los siguientes pasos desde la terminal del equipo o desde la terminal de un IDE (Visual Studio Code, por ejemplo):

* Ir a la carpeta del proyecto: cd `reverse_engineering-DAW2-master`.
* Ejecutar el siguiente comando para descargar todas las dependencias que encuentre en el fichero **package.json** del proyecto: `npm install`.
* Por último, ejecutar el comando `ng serve` para arrancar el servidor de desarrollo, es decir, para ejecutar la aplicación. Después, navegar a `http://localhost:4200/`.
* También, se puede ejecutar `ng -o serve` para que la aplicación se ejecute y se abra automáticamente en el navegador por defecto. La aplicación, en ambos casos, se recargará automáticamente si cambia alguno de los archivos de origen.

Otra manera más sencila de acceder al proyecto realizado es haciendo clic [aquí](https://reverse-engineering-angular.netlify.app/). **Recomendación:** acceder al proyecto desde Google Chrome para una visualización más rápida. 
