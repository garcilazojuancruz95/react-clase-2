import ItemList from './ItemList'

const ItemListContainer = ({item}) => {
    return(
        <>
        <div>
            {
            item.map( item =>
                <ItemList id= {item.id}
                title= {item.title}
                price= {item.price}
                pictureUrl= {item.pictureUrl} />
                <ItemList id= {item.id}
                title= {item.title}
                price= {item.price}
                pictureUrl= {item.pictureUrl} />
                <ItemList id= {item.id}
                title= {item.title}
                price= {item.price}
                pictureUrl= {item.pictureUrl} />
            )
            
            }
        </div>
           
        </>
    );
}

export default ItemListContainer;