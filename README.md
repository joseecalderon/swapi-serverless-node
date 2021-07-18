######  PARA MAS DETALLE VER: https://app.swaggerhub.com/apis/joseecalderon/swapi-serverless-node/1

## Instalar dependencias y correr en local

```
npm ci
npm run dev
```

### Testeando con **Jest**

```
npm run test:jest
```

### Desplegando en AWS modo desarrollo

```
npm run deploy:dev 					 O 						serverless deploy
```

### Desplegando en AWS para producción

```
npm run deploy:prod
```
---
<br>
### FUNCIONES LAMBDA:

- #### Peliculas (SWAPI - mapeo a español de propiedades)

  - `GET /films` Obtener todas las peliculas

  ```
  https://fsfaoinck0.execute-api.us-east-1.amazonaws.com/production/films
  ```

  - `GET /films/{id}` Obtiene un _film_ por el _id_

  ```
  https://fsfaoinck0.execute-api.us-east-1.amazonaws.com/production/films/{id}
  ```
  <br>

- #### Personas (SWAPI - mapeo a español de propiedades)

  - `GET /people` Obtener lista de personas

  ```
  https://fsfaoinck0.execute-api.us-east-1.amazonaws.com/production/people
  ```

  - `GET /people/{id}` Obtener persona por id

  ```
  https://fsfaoinck0.execute-api.us-east-1.amazonaws.com/production/people/{id}
  ```
	<br>
- #### Peliculas (Usando dynamodb para persistencia de datos)

	- `GET /planet` Obtener lista de planetas

  ```
  https://fsfaoinck0.execute-api.us-east-1.amazonaws.com/production/planet
  ```

	- `GET /people/{id}` Obtener planeta por _id_

  ```
  https://fsfaoinck0.execute-api.us-east-1.amazonaws.com/production/planet/{id}
  ```

	- `POST /planet` Crear un nuevo planeta

  ```
  https://xxxx....amazonaws.com/{stage}/planet/{id}
  ```

	- `PUT /planet/{id}` Actualizar un planeta por el _id_

  ```
  https://xxxx....amazonaws.com/{stage}/planet/{id}
  ```
------------
<br>

### MODELOS

  ```ts
interface  planeta {
	id: number | string;
	nombre: string;
	clima: string;
	diametro: string;
	gravedad: string;
	periodo_orbital: string;
	poblacion: string;
	residentes: string[];
	periodo_rotacion: string;
	superficie_agua: string;
	terreno: string;
	url?: string;
	fecha_creacion: Date | number;
	fecha_edicion?: Date | number;
	peliculas?: string[];
}

  // Ejemplo:
  {
	  nombre: 'Jupiter',
	  clima: 'tormentoso',
	  diametro: '139820',
	  gravedad: '24',
	  periodo_orbital: '1',
	  poblacion: '4380',
	  residentes: [],
	  periodo_rotacion: '9',
	  superficie_agua: 'desconocido',
	  terreno: '123456789',
	  fecha_creacion: 1626583301104
  }
  
  interface Films {
	  id: string | number;
	  titulo: string;
	  idepisodio: number;
	  rastreo_apertura: string;
	  director: string;
	  productor: string;
	  fecha_lanzamiento: Date | number;
	  personajes: string[];
	  planetas: string[];
	  naves_estelares: string[];
	  vehiculos: string[];
	  especies: string[];
	  url?: string;
	  fecha_creacion?: Date | number;
	  fecha_edicion?: Date | number;
}

interface People {
	id: string | number;
	nombre: string;
	altura: string;
	masa: string;
	color_cabello: string;
	color_piel: string;
	color_ojos: string;
	anio_nacimiento: string;
	genero: string;
	lugar_natal: string;
	peliculas: string[];
	especies: string[];
	vehiculos: string[];
	naves_estelares: string[];
	url?: string;
	fecha_creacion?: Date | number;
	fecha_edicion?: Date | number;
}
  ```

