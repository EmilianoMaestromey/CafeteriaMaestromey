import { useEffect, useState } from "react";
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css';

function ItemList () {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        let is_ok = true
        let product = [
            {
                "id": 0,
                "title": "Café",
                "price": 120,
                "pictureUrl": "https://images.app.goo.gl/SaMM3K4T9Z1ELSPNA",
            },
            {
                "id": 1,
                "title": "Café cortado",
                "price": 140,
                "pictureUrl": "https://images.app.goo.gl/CKrMVX7RtapJ2QGn7",
            },
            {
                "id": 2,
                "title": "Café con leche",
                "price": 260,
                "pictureUrl": "https://images.app.goo.gl/E8TJbruKMdL6d4xt9",
            }
        ]

        let mostrarDatos = (product) => {
            return product;
        }

        let consultaDatos = (time, task) => {
            return new Promise((resolve, reject) => {
                if (is_ok) {
                    setTimeout(() => {
                        resolve(task)
                    }, time);
                } else {
                    reject("Error")
                }
            })
        }

        consultaDatos(2000, mostrarDatos(product))
                .then(respuesta => setDatos(respuesta))
                .catch(err => console.log(err))
    })
 
    return (
        <>
        {datos.map((product) => (
            <div className="container">
                <div className="row">
                    <div className='itemCont col-xl-4' id={product.id}>
                        <div>
                            <h4>{product.title}</h4>
                            <hr />
                            <img src={product.pictureUrl} alt='product' />
                        </div>
                        <div>
                            <p>Precio: ${product.price}</p>
                        </div>
                        <hr />
                        <div className="center">
                            <ItemCount stock="5" initial="1" />
                        </div>       
                    </div>
                </div>
            </div>)
        )}
        </>
    )
}

export default ItemList