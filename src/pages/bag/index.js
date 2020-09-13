import './index.scss';
import Footer from '../../components/footer';
import Header from '../../components/header';
import ProductsList from '../../components/products-list';
import BagService from '../../services/bag-service';
/*async function BagPage(bagId) {
    let bag;
    try {
        bag = await BagService.getBagByIdAsync(bagId);

    } catch (e) {
        return '<div class="error">Error loading bag items...</div>';
    }
    return `<div class="page">
                ${Header(bag.items)}
                ${ProductsList(bag.items)}
                ${Footer()}
            </div>`;
}
export default BagPage;
*/

const body = document.querySelector('body');
let bag;

const BagPage = {
    async load(bagId) {
        try {
            bag = await BagService.getBagByIdAsync(bagId);
        } catch (e) {
            return '<div class="error">Error loading bag items...</div>';
        }

        return `<div class="page">
              ${Header(bag.items)}
              ${ProductsList(bag.items)}
              ${Footer()}
            </div>`;
    },

    // Add events to remove bag items
    setEventToRemoveItems(bagId) {
        const removeItemButtons = document.querySelectorAll('.product-card .remove-btn');

        if (removeItemButtons) {
            removeItemButtons.forEach( (item) => {
                item.addEventListener('click', async event => {
                    let itemId = event.target.id;
                    const isItemReadyToBeRemoved = await BagService.deleteBagItemById(bagId, itemId)

                    if (isItemReadyToBeRemoved) {
                        bag.items = bag.items.filter(item => item.id !== itemId);
                        this.reRender();
                    }
                });
            });
        }
    },

    reRender() {
        body.innerHTML = `<div class="page">
                      ${Header(bag.items)}
                      ${ProductsList(bag.items)}
                      ${Footer()}
                    </div>`;
        /* se a chamada nao fosse feita aqui, ignorava todos os restantes cliques porque so rendirizava a primeira vez no srcc/index.js*/
        this.setEventToRemoveItems(bag.id);
    },
};

export default BagPage;
