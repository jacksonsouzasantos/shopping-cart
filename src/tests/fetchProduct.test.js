import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  it('testa se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('testa se a execução do fetch é chamado', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('testa se fetch foi chamado com argumento correto', async () => {
    const expectedEndpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(expectedEndpoint);
  });

  it('Testa o retorno de fetchProduct com argumento recebido é igual ao objeto', async () => {
    await expect (fetchProduct('MLB1405519561')).resolves.toEqual(product);
  });

  it('Chamar função sem argumento retorna menssagem de erro', () => {
   expect(fetchProduct()).rejects.toEqual(new Error('ID não informado'));
  });
});
