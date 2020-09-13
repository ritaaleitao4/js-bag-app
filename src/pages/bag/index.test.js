import mockDatabase from '../../../server/database';
import BagService from '../../services/bag-service';
import BagPage from '.';

jest.mock('../../services/bag-service');
const bagId = 'bag1';

describe('bag page', () => {
    beforeEach(() => jest.clearAllMocks());

    it('it renders correctly', async () => {
        BagService
            .getBagByIdAsync
            .mockImplementationOnce(() => Promise.resolve(mockDatabase.bag[0]));

        expect(await BagPage.load(bagId)).toMatchSnapshot();
    });

    it('it renders differently when there is an error', async () => {
        BagService
            .getBagByIdAsync
            .mockImplementationOnce(() => Promise.reject());

        expect(await BagPage.load(bagId)).toMatchSnapshot();
    });
});
