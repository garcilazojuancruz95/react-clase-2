import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const [datos] = useState([]);


    useEffect(() => {
    }, [datos]);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;