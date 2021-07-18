import { Films } from '@interfaces/films';

export function parseFilms(data: Record<string, any>[] | Record<string, any>): Films[] | Films {
    if (data && Array.isArray(data)) {
        return data.map(el => ({
            id: el.id,
            titulo: el.title,
            idepisodio: el.episode_id,
            rastreo_apertura: el.opening_crawl,
            director: el.director,
            productor: el.producer,
            fecha_lanzamiento: el.release_date,
            personajes: el.characters,
            planetas: el.planets,
            naves_estelares: el.starships,
            vehiculos: el.vehicles,
            especies: el.species,
            url: el.url,
            fecha_creacion: el.created,
            fecha_edicion: el.edited,
        })) as Films[];
    } else if ('object' === typeof data) {
        const obj = (data as Record<string, any>);
        return {
            id: obj.id,
            titulo: obj.title,
            idepisodio: obj.episode_id,
            rastreo_apertura: obj.opening_crawl,
            director: obj.director,
            productor: obj.producer,
            fecha_lanzamiento: obj.release_date,
            personajes: obj.characters,
            planetas: obj.planets,
            naves_estelares: obj.starships,
            vehiculos: obj.vehicles,
            especies: obj.species,
            url: obj.url,
            fecha_creacion: obj.created,
            fecha_edicion: obj.edited,
        } as Films;
    }
}
