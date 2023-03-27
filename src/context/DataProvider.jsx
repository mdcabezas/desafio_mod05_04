import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'
const endpoint = "/pizzas.json";

const dataContext = createContext()

export function useDataContext() {
    return useContext(dataContext)
}

function DataProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(endpoint)
        setProducts(data)
    }

    const addCart = (id) => {
        const indexItemCart = cart.findIndex(c => c.id === id)
        if (indexItemCart >= 0) {
            cart[indexItemCart].qty++
            setCart([...cart])
        }
        else {
            const newItemCart = products.find(p => p.id === id)
            setCart([...cart, { id, name: newItemCart.name, price:newItemCart.price, img: newItemCart.img, qty: 1 }])
        }
    }

    const removeCart = (id) => {
        const existItemCart = cart.find(c => c.id === id)
        if (existItemCart) {
            const decrementItem = cart.map(c => c.id === existItemCart.id ? ({ ...c, qty: c.qty - 1 }) : c)
            existItemCart.qty > 1 ? setCart(decrementItem) : deleteCart(id)
        }
    }

    const deleteCart = id => setCart(cart.filter(c => c.id !== id))

    const formatPrice = (value)=> new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP'}).format(value)

    const totalCart = formatPrice(cart.reduce((a, c) => a + (c.qty * c.price), 0))

    useEffect(() => {
        getData()
    }, [])

    return (
        <dataContext.Provider value={{ products, cart, removeCart, addCart, deleteCart, formatPrice, totalCart }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider