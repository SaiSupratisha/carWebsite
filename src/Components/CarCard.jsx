import { useNavigate } from "react-router-dom";
import "../styles/card.css";
 
function CarCard({ id, image, name, year, price }) {
 
    const navigate = useNavigate();
 
    return (
 
        <div className="car-card">
 
            <img src={image} alt={name} />
 
            <div className="card-content">
 
                <h3>{name}</h3>
 
                <p>Year : {year}</p>
 
                <h2>{price}</h2>
 
                <button
                    onClick={() => navigate(`/cars/${id}`)}
>
                    View Details
</button>
 
            </div>
 
        </div>
 
    );
 
}
 
export default CarCard;