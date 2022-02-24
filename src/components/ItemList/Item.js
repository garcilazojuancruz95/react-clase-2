import './ItemList'

function Item ({id, title, price, stock, pictureUrl}) {
    return (
        <div key = {id}>
            <h3>{title}</h3>
            <p>$ {price}</p>
            <p>Stock: {stock}</p>
            <img src={pictureUrl} alt={id} />
        </div>
    )
}

export default Item;