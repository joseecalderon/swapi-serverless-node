import { Planetas } from '@interfaces/planets';
import { Config } from '@config/constants/config';
import { post, get } from '@config/http/http';

const JupiterDataTest: Partial<Planetas> = {
    // id: '99689896-291B-4173-B69D-579F0E97E6F8',
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
};

describe('Test Planets', () => {
    const url = Config.URL_DEV + '/planet';

    it('debería guardar un objeto del tipo planeta', async () => {
        expect.assertions(2);
        const { data: jupiterInserted }: any = await post(url, JSON.stringify(JupiterDataTest));
        expect(jupiterInserted).toBeInstanceOf(Object);
        expect(jupiterInserted).toHaveProperty('id');
    });

    it('debería retornar una lista de planetas de dynamodb', async () => {
        expect.assertions(1);
        const { data } = await get(url);
        expect(data).toBeInstanceOf(Array);
    });
});
