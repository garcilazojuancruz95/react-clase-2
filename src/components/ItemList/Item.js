import './ItemList'
import '../ItemList/Item.css'
import { Link } from 'react-router-dom'

function Item ({id, title, price, stock, pictureUrl}) {
    return (
        <div className='container'>
            <div className='card' key = {id}>
                <h3>{title}</h3>
                <img src={pictureUrl} alt={id} />
                <p>$ {price}</p>
                <p>Stock: {stock}</p>
                <Link className='link' to={`${id}`}>Detalle</Link>
            </div>
        </div>
    )
}

export default Item;