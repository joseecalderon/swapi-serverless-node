export interface Films {
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