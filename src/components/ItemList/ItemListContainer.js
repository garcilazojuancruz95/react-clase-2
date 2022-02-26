import { useEffect, useState } from 'react';
import {customFetch} from '../../utils/customFetch'
import ItemList from './ItemList';
const { productos } = require('../../utils/productos');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {
        customFetch(2000, productos)
            .then(response =>setDatos(response))
            .catch(error => console.log(error))
    })
    return (
        <>  
            <ItemList items={productos} />
        </>
    );
}

export default ItemListContainer;