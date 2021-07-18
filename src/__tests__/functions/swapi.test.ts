import { Config } from '@config/constants/config';
import { get } from '@config/http/http';

describe('Test SWAPI', () => {
    describe('Test SWAPI PEOPLE', () => {
        it('debería retornar un arreglo de objetos persona', async () => {
          expect.assertions(2);
      
          const { data } = await get(`${Config.SWAPI_PATH}/people`);
      
          expect(data.results).toBeInstanceOf(Array);
          expect(data['results'].length).toBeGreaterThan(1);
        });

        it('debería retornar un objetos persona', async () => {
          expect.assertions(1);
      
          const { data } = await get(`${Config.SWAPI_PATH}/people/${1}`);
          expect(data).toBeInstanceOf(Object);
        });
        
    });

    describe('Test SWAPI PLANETS', () => {
      it('debería retornar un arreglo de objetos planeta', async () => {
        expect.assertions(2);
    
        const { data } = await get(`${Config.SWAPI_PATH}/planets`);
    
        expect(data.results).toBeInstanceOf(Array);
        expect(data['results'].length).toBeGreaterThan(1);
      });

      it('debería retornar un objeto planeta', async () => {
        expect.assertions(1);
    
        const { data } = await get(`${Config.SWAPI_PATH}/planets/${1}`);
        expect(data).toBeInstanceOf(Object);
      });
      
  });

  describe('Test SWAPI FILMS', () => {
    it('debería retornar un arreglo de objetos pelicula', async () => {
      expect.assertions(2);
  
      const { data } = await get(`${Config.SWAPI_PATH}/films`);
  
      expect(data.results).toBeInstanceOf(Array);
      expect(data['results'].length).toBeGreaterThan(1);
    });

    it('debería retornar un objeto pelicula', async () => {
      expect.assertions(1);
  
      const { data } = await get(`${Config.SWAPI_PATH}/films/${1}`);
      expect(data).toBeInstanceOf(Object);
    });  
  });
});
