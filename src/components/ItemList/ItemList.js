import Item from './Item'

function Item ({ items }) {
        return (
            <div>
                <div>
                    <img src={items.pictureUrl} />
                </div>
                <div>
                    <h3>{items.title}</h3>
                    <p>{items.price}</p>
                </div>
            </div>
        )
    }

export default ItemList;