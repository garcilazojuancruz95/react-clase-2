import { useEffect, useState } from 'react';
import {customFetch} from '../../utils/customFetch'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
const { productos } = require('../../utils/productos')

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        customFetch(2000, productos.filter(item => {
            if (categoryId === undefined) return item
            return item.category === categoryId
        }))
            .then(response =>setDatos(response))
            .catch(error => console.log(error))
    }, [categoryId])
    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;