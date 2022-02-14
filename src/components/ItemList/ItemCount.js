import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [valoraciones, setValoraciones] = useState(1);

    const increment = () => {
        if(valoraciones < stock){
            setValoraciones(valoraciones+1)}
    }

    const decrement = () => {
        if(valoraciones > initial){
        setValoraciones(valoraciones-1)}
    }
    
    return (
        <div>
            <p><button onClick={decrement}> - </button> {valoraciones} <button onClick={increment}> + </button></p>
        </div>
    )
}

export default ItemCount;