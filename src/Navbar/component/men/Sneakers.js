import '../../navbar.css';

const products = [
  {
    name: "Adidas Yeezy Boost 350",
    brand: "Adidas",
    price: "$150",
    image: "/pictures/sneakers1.jpg"
  },
  {
    name: "Nike Air Max 270",
    brand: "Nike",
    price: "$220",
    image: "/pictures/sneakers2.jfif"
  },
  {
    name: "Vans Classic Old Skool",
    brand: "Vans",
    price: "$65",
    image: "/pictures/sneakers3.jpg"
  },
  {
    name: "Converse Chuck 70",
    brand: "Converse",
    price: "$70",
    image: "/pictures/Flexon.jpg"
  },{ name: "Nike Dunk Low Retro",
    brand: "Nike",
     price: "$110",
      image: "/pictures/sneakers5.jpg" 
  },
  { name: "Skechers Bobs Sport-Men",
     brand: "Adidas", 
     price: "$90",
      image: "/pictures/sneakers6.jpg"
  },
];

export default function Sneakers({ addtocart }) {
  return (
    <>
    <section className="products">
      <h2>Featured Sneakers</h2>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="card-content">
            <h3>{item.name}</h3>
            <p>{item.brand}</p>
            <p className="price">{item.price}</p>
            <button onClick={() => addtocart(item)} className="add-btn">
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <footer>
        &copy; <span id="year"></span> SneakerShop — Designed by NxStep
    </footer>
    </>
  );
}
