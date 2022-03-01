import './ItemList'
import { Link } from 'react-router-dom'

function Item ({id, title, price, stock, pictureUrl}) {
    return (
        <div key = {id}>
            <h3>{title}</h3>
            <p>$ {price}</p>
            <p>Stock: {stock}</p>
            <img src={pictureUrl} alt={id} />
            <Link to={`${id}`}>Detalle</Link>
        </div>
    )
}

export default Item;