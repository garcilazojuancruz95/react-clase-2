import './ItemList'

function Item ({id, title, price, pictureUrl}) {
    return (
        <div key = {id}>
            <h3>{title}</h3>
            <p>$ {price}</p>
            <img src={pictureUrl} alt={id} />
        </div>
    )
}

export default Item;