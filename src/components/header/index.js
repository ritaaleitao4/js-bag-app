import './index.scss';

const Header = bagItems => {
    const total = bagItems.reduce((total, item) => total + parseFloat(item.price), 0)
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

    return `<header class="header alignCenter">
            <h1 >My Bag</h1>
            <p>Total: € ${total}</p>
          </header>`;
}

export default Header;
