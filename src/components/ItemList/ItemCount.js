import { useState } from "react";

function ItemCount({ Stock, Initial,  onAdd }) {
    const [valoraciones, setValoraciones] = useState(1);

    const increment = (Stock) => {
        setValoraciones(valoraciones+1)
    }

    const decrement = (Initial) => {
        setValoraciones(valoraciones-1)
    }
    
    return (
        <div>
            <p><button onClick={decrement}> - </button> {valoraciones} <button onClick={increment}> + </button></p>
        </div>
    )
}

export default ItemCount;