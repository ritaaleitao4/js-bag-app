import mockAxios from 'axios';
import BagService, { BagServiceUrls } from '.';

describe('bag service', () => {
    beforeEach(() => jest.clearAllMocks());

    describe('on getting the bag by id', () => {
        const bagId = 'bag1';
        const expectedResult = {
            id: bagId,
            items: [],
        };

        it('get existing by id', async () => {
            mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [expectedResult] }));
            expect.assertions(3);

            const actualResult = await BagService.getBagByIdAsync(bagId);

            expect(mockAxios.get).toBeCalledTimes(1);
            expect(mockAxios.get).toHaveBeenCalledWith(BagServiceUrls.getBagUrl(bagId));
            expect(actualResult).toEqual(expectedResult);
        });
    });
});
