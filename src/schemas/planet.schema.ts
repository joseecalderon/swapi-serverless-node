export default {
  description: 'Un planeta.',
  title: 'Planeta',
  required: [
    'nombre',
    'clima',
    'diametro',
    'gravedad',
    'periodo_orbital',
    'poblacion',
    'periodo_rotacion',
    'superficie_agua',
    'terreno',
  ],
  $schema: 'http://json-schema.org/draft-04/schema',
  type: 'object',
  properties: {
    nombre: {
      type: 'string',
      description: 'El nombre del planeta.',
    },
    clima: {
      type: 'string',
      description: 'El clima del planeta. Separar por coma si es diverso',
    },
    diametro: {
      type: 'string',
      description: 'El diámetro del planeta en kilómetros.',
    },
    gravedad: {
      type: 'string',
      description: 'Gravedad del planeta',
    },
    periodo_orbital: {
      type: 'string',
      description:
        'Días que le toma al planeta completar una orbita en torno a una estrella.',
    },
    poblacion: {
      type: 'string',
      description: 'Habitantes promedio en el planeta',
    },
    residentes: {
      type: 'array',
      description:
        'Una variedad de recursos de URL de personas que viven en este planeta.',
    },
    periodo_rotacion: {
      type: 'string',
      description:
        'Numero de horas que toma al planeta girar sobre su mismo eje',
    },
    superficie_agua: {
      type: 'string',
      description: 'Porcentaje de agua en el planeta.',
    },
    terreno: {
      type: 'string',
      description: 'Terreno del planeta. Separar en coma si es diverso.',
    },
    url: {
      type: 'string',
      description: 'Url de la petición',
      format: 'uri',
    },
    peliculas: {
      type: 'array',
      description:
        'Una serie de recursos de URL de películas en los que ha aparecido este planeta.',
    },
  },
} as const;
