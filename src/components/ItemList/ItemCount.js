import { useState } from "react";

const ItemCount = (props) => {
    const [valoraciones, setValoraciones] = useState(0);

    const increment = () => {
        setValoraciones(valoraciones+1)
    }

    const decrement = () => {
        setValoraciones(valoraciones-1)

    }
    return (
        <div>
            <p><button onClick={decrement}> - </button> {valoraciones} <button onClick={increment}> + </button></p>
        </div>
    )
}

export default ItemCount;