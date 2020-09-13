import ProductCard from '.';

const mockItem = {
    id: 'item1',
    name: 'BRAND 1',
    image: 'https://via.placeholder.com/130x175',
    price: '100.40',
};

describe('product card component', () => {
    it('it renders correctly', () => {
        expect(ProductCard(mockItem)).toMatchSnapshot();
    });
});
