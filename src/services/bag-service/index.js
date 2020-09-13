import axios from 'axios';

const client = axios.create();

export const BagServiceUrls = {
    base() {
        return 'http://localhost:3000/bag/';
    },
    getBagUrl(id) {
        return `${this.base()}${id}`;
    },
    getBagItemUrl(id, itemId) {
        return `${this.base()}${id}/items/${itemId}`;
    },
};

const BagService = {
    async getBagByIdAsync(bagId) {
        return client.get(BagServiceUrls.getBagUrl(bagId))
            .then(res => res.data[0]);
    },

    // Add deleteBagItemById
    async deleteBagItemById(bagId, itemId) {
        return client.delete(BagServiceUrls.getBagItemUrl(bagId, itemId))
            .then(res => res.status === 200);
    },
};

export default BagService;
