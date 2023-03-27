import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";

function Product({ item }) {
    const { addCart, formatPrice, cart, removeCart } = useDataContext()

    const existItem = cart.find(c => c.id === item.id)

    return (
        <div className="card my-3">
            <Link to={`/pizza/${item.id}`}>
            <img loading="lazy" src={item.img} className="card-img-top" alt={item.name} />
            </Link>
            <div className="card-body">
                <h5 className="card-title text-capitalize">{item.name}</h5>
            </div>

            <div>
                {(item.ingredients).map(ingredient => <span key={ingredient} className="badge bg-secondary mx-1 p-1">{ingredient}</span>)}
            </div>

            <h4 className="card-title mt-2 mb-0">{formatPrice(item.price)}</h4>

            <div className="card-body">

                {!existItem ?
                    
                    <button onClick={() => addCart(item.id)} type="button" className="btn btn-primary btn-sm">Agregar</button>

                    :
                    <>
                        <button onClick={() => removeCart(item.id)} type="button" className="btn btn-primary btn-sm">-</button>
                        <span className="badge bg-light fs-6">{existItem.qty}</span>
                        <button onClick={() => addCart(item.id)} type="button" className="btn btn-primary btn-sm">+</button>
                    </>

                }

            </div>
        </div>
    )
}

export default Product