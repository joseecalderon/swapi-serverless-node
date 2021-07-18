export interface People {
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
