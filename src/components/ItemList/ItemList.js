import productos from '../ItemList/productos'
import Item from '../ItemList/Item'

function ItemList ({items}) {
    return (
        productos.map(p =>
            <Item key = {p.id}
            title = {p.title}
            pictureUrl = {p.pictureUrl}
            price = {p.price} 
            />
        )
    )
}

export default ItemList