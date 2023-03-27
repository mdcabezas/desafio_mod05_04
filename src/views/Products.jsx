import { useDataContext } from "../context/DataProvider";
import Product from "../components/Product";
import Carousel from "../components/Carousel";

function Products() {
  const { products } = useDataContext()
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <Carousel items={products} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <div className="card">
            <div className="card-header py-1">
              Pizzas
            </div>
            <div className="card-body">
              <div className="row">
                {products.map(product =>
                  <div key={product.id} className="col-12 col-lg-3">
                    <Product item={product} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Products