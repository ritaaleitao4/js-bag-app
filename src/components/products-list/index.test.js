import mockDatabase from '../../../server/database';
import ProductList from '.';

describe('product list component', () => {
    it('it renders correctly', () => {
        const productList = mockDatabase.bag[0].items;

        expect(ProductList(productList)).toMatchSnapshot();
    });
});
