import { People } from '@interfaces/people';

export function parsePeople(data: Record<string, any>[] | Record<string, any>): People[] | People {
    if (data && Array.isArray(data)) {
        return data.map(el => ({
            id: el.id,
            nombre: el.name,
            altura: el.height,
            masa: el.mass,
            color_cabello: el.hair_color,
            color_piel: el.skin_color,
            color_ojos: el.eye_color,
            anio_nacimiento: el.birth_year,
            genero: el.gender,
            lugar_natal: el.homeworld,
            peliculas: el.films,
            especies: el.species,
            vehiculos: el.vehicles,
            naves_estelares: el.starships,
            url: el.url,
            fecha_creacion: el.created,
            fecha_edicion: el.edited,
        })) as People[];
    } else if ('object' === typeof data) {
        const obj = (data as Record<string, any>);
        return {
            id: obj.id,
            nombre: obj.name,
            altura: obj.height,
            masa: obj.mass,
            color_cabello: obj.hair_color,
            color_piel: obj.skin_color,
            color_ojos: obj.eye_color,
            anio_nacimiento: obj.birth_year,
            genero: obj.gender,
            lugar_natal: obj.homeworld,
            peliculas: obj.films,
            especies: obj.species,
            vehiculos: obj.vehicles,
            naves_estelares: obj.starships,
            url: obj.url,
            fecha_creacion: obj.created,
            fecha_edicion: obj.edited,
        } as People;
    }
}
