export interface Planetas {
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

export interface PlanetaDynamo {
    TableName: string;
    Item: Partial<Planetas>;
}
