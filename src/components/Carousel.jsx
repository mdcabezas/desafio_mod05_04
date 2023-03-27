
function Carousel({ items }) {
    return (
        <div id="carouselProducts" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {items.map((_, id) =><button key={id} type="button" data-bs-target="#carouselProducts" data-bs-slide-to={id} className={id === 0 && 'active'}></button> )}
            </div>
            <div className="carousel-inner bg-secondary">
                {items.map((item, id) => {
                    return (
                        <div key={item.id} className={`carousel-item  ${id === 0 && 'active'}`} data-bs-interval="6000" >
                            <img src={item.img} alt={item.name} className="ms-auto"/>
                            {/* <p>{item.desc}</p> */}
                            <div className="carousel-caption  w-50 mx-auto">
                                <p className="fs-2 text-capitalize text-light fw-bold">{item.name}</p>
                                <p className="text-center bg-dark rounded mx-5 d-none d-md-block">{item.desc}</p>
                                
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel