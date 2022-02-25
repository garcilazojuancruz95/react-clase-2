import productos from './productos'
import Item from '../ItemList/Item'

function ItemList ({items}) {
    return (
        productos.map(p =>
            <Item key = {p.id}
            title = {p.title}
            pictureUrl = {p.pictureUrl}
            price = {p.price}
            stock = {p.stock}
            />
        )
    )
}

export default ItemList