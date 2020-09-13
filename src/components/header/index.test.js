import Header from '.';

describe('header component', () => {
    it('it renders correctly', () => {
        expect(Header()).toMatchSnapshot();
    });
});
