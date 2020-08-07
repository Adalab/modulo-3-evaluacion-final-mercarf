This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Módulo 3: Ejercicio de evaluación final

#### Mercedes Carballal

## Buscador de personajes de Rick y Morty

El ejercicio consiste en desarrollar una página web con un **listado de personajes de Rick and Morty**, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.
Vamos de definir las distintas partes del ejercicio:

### INDICE

1. [Listado de personajes](#Listado-de-personajes)
2. [Filtrado de personajes](#Filtrado-de-personajes)
3. [Componentes del listado de personajes](#Componentes-del-listado-de-personajes)
4. [Detalle de personajes](#Detalle-de-personajes)
5. [Detallitos de calidad](#Detallitos-de-calidad)
6. [BONUS: Mejoras visuales](#BONUS:-Mejoras-visuales)
7. [BONUS: URL compartible](#BONUS:-URL-compartible)
7. [BONUS: Ordenación](#BONUS:-Ordenación)

1.  ### Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty.
Para eso, vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
- Foto
- Nombre
- Especie

2.  ### Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un `input` a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

3.  ### Componentes del listado de personajes

    El listado debe tener los siguientes componentes como mínimo:

        - Componente para los filtros

        - Componente para el listado

        - Componente para la tarjeta de cada personaje del listado

        - Componente para el detalle de cada personaje

4.  ### Detalle de personajes

Vamos a implementar una **nueva funcionalidad**: al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos *rutas y React router*.
En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está **vivo** o **muerto**.

5.  ### Detallitos de calidad

- Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta `form`.
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

6.  ### BONUS: Mejoras visuales

    Para terminar, podemos realizar algunas mejoras visuales del ejercicio. Por ejemplo:

          - Mostrar la especie y si un personajes está muerto con un icono.
          - Usar algún sistema de grid para pintar el listado de personajes.
          - Que funcione bien el responsive en dispositivos pequeños.

7.  ### BONUS: URL compartible

Como ejercicio se propone que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje. Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo _"El personaje que buscas no existe"_.

8.  ### BONUS: Ordenación

Un extra interesante sería ordenar el listado de personajes alfabéticamente por nombre.
