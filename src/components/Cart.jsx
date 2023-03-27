import { useDataContext } from "../context/DataProvider";

function Cart() {
    const { cart, removeCart, addCart, formatPrice, totalCart } = useDataContext()

    return (
        <>
            {cart.map(item => {
                return (
                    <div key={item.id} className="row d-flex align-items-center justify-content-center my-2">
                        <div className="col-2">
                            <img src={item.img} className="img-fluid rounded" alt={item.name} />
                        </div>
                        <div className="col-3">
                            {item.name}
                        </div>
                        <div className="col-4">
                            <button onClick={() => removeCart(item.id)} type="button" className="btn btn-primary btn-sm mx-2">-</button>
                            {item.qty}
                            <button onClick={() => addCart(item.id)} type="button" className="btn btn-primary btn-sm mx-2">+</button>
                        </div>
                        <div className="col-2 me-auto">
                            <span className="badge bg-secondary fs-6">{formatPrice(item.qty * item.price)}</span>
                        </div>
                    </div>
                )
            })
            }
            <div className="row">
                <div className="col-12 fs-3 my-3 fw-bold">{totalCart}</div>
                <div className="col"><button type="button" className="btn btn-primary btn-sm">Ir a Pagar</button></div>
            </div>
        </>
    )
}

export default Cart