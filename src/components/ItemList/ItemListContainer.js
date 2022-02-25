import ItemList from './ItemList';
const { productos } = require('./productos');

const ItemListContainer = () => {
    return (
        <>  
            <ItemList items={productos} />
        </>
    );
}

export default ItemListContainer;