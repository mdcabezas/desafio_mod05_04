import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";

function Detail() {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate()
    const { products, formatPrice, addCart } = useDataContext();

    useEffect(() => {
        setProduct(products.find(p => p.id === id))
    }, [products, id])

    const addAndNavigate = (id) => {
        addCart(id);
        navigate("/")
    }

    return (
        <div className="container mt-3">
            {product ?
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img loading="lazy" src={product.img} className="img-fluid rounded-start" alt={product.img} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">{product.name}</h5>
                                <p className="card-text">{product.desc}</p>
                                <ul>
                                    {(product.ingredients).map(ingredient => <li key={ingredient} className="list-group-item">🍕 {ingredient}</li>)}
                                </ul>
                                <p className="card-text fs-3">Precio: {formatPrice(product.price)}</p>
                                <button onClick={() => addAndNavigate(product.id)} type="button" className="btn btn-primary btn-sm ms-2">Añadir</button>

                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default Detail