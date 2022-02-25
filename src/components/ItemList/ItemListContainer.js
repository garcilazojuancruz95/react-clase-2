import ItemList from './ItemList';
const { productos } = require('../../utils/productos');

const ItemListContainer = () => {
    return (
        <>  
            <ItemList items={productos} />
        </>
    );
}

export default ItemListContainer;