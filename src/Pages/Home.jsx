import CarCard from "../components/CarCard";
import "../styles/home.css";
 
function Home() {
 
  const featuredCars = [
 
    {
      id:1,
      name:"BMW M4 Competition",
      year:2025,
      price:"₹1.55 Cr",
      image:"https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },
 
    {
      id:2,
      name:"Mercedes AMG GT",
      year:2025,
      price:"₹2.25 Cr",
      image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
 
    {
      id:3,
      name:"Audi RS7",
      year:2025,
      price:"₹2.10 Cr",
      image:"https://images.unsplash.com/photo-1549924231-f129b911e442"
    }
 
  ];
 
  return (
 
    <>
 
      <section className="hero">
 
        <div className="hero-content">
 
          <h1>
            Drive Your Dream Car Today
</h1>
 
          <p>
            Discover premium luxury vehicles at unbeatable prices.
</p>
 
          <button>
            Explore Cars
</button>
 
        </div>
 
      </section>
 
      <section className="featured">
 
        <h1>Featured Cars</h1>
 
        <div className="car-grid">
 
          {
            featuredCars.map(car=>(
<CarCard
                key={car.id}
                image={car.image}
                name={car.name}
                year={car.year}
                price={car.price}
              />
            ))
          }
 
        </div>
 
      </section>
 
      <section className="stats">
 
        <div>
 
          <h1>500+</h1>
 
          <p>Cars Available</p>
 
        </div>
 
        <div>
 
          <h1>50+</h1>
 
          <p>Brands</p>
 
        </div>
 
        <div>
 
          <h1>20K+</h1>
 
          <p>Happy Customers</p>
 
        </div>
 
        <div>
 
          <h1>15</h1>
 
          <p>Years Experience</p>
 
        </div>
 
      </section>
 
    </>
 
  );
 
}
 
export default Home;