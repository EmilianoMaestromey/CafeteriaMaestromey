import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css'

const ItemCount = (props) => {

    let [amount, setAmount] = useState(1);

    const increment = () => {
        if (amount < props.stock) {
            setAmount(amount + 1)
        }
    };

    const decrement = () => {
        if (amount > props.initial) {
            setAmount(amount - 1)
        }
    }

    return (
        <div className="card card-width">
            <div className="card-body">
                <h5 className="class-title">Producto 1</h5>
                <h6 className="class-subtitle mb-2 text-muted">En stock: {props.stock}</h6>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-danger" onClick={() => decrement()}>-</button>
                    <button type="button" className="btn btn-outline-danger" disabled>{amount}</button>
                    <button type="button" className="btn btn-danger" onClick={() => increment()}>+</button>
                </div>
            </div>
        </div>
    );
  
};

export default ItemCount;