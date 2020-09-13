import './index.scss';
import ProductCard from '../product-card';

const ProductList = items => `<main class="product-list alignCenter">
                    ${items.map(item => ProductCard(item)).join('')}
                </main>`;

export default ProductList;
