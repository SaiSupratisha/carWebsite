import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
 
import "../styles/details.css";

import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
 
function CarDetails() {
 
    const { id } = useParams();
 
    const { dispatch } = useContext(WishlistContext);
 
    const [car, setCar] = useState(null);
 
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
 
        async function fetchCar() {
 
            try {
 
                const response = await axios.get(

                    `https://freetestapi.com/api/v1/cars/${id}`

                );
 
                setCar(response.data);
 
            } catch (error) {
 
                console.log(error);
 
            } finally {
 
                setLoading(false);
 
            }
 
        }
 
        fetchCar();
 
    }, [id]);
 
    if (loading) {
 
        return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
 
    }
 
    if (!car) {
 
        return <h1>Car Not Found</h1>;
 
    }
 
    return (
 
        <div className="details">
 
            <img
 
                src={car.image}
 
                alt={car.make}
 
            />
 
            <div className="details-content">
 
                <h1>
 
                    {car.make} {car.model}
 
                </h1>
 
                <h2>
 
                    ₹ {car.price?.toLocaleString()}
 
                </h2>
 
                <p>
 
                    <strong>Year :</strong> {car.year}
 
                </p>
 
                <p>
 
                    <strong>Fuel :</strong> {car.fuelType}
 
                </p>
 
                <p>
 
                    <strong>Transmission :</strong> {car.transmission}
 
                </p>
 
                <p>
 
                    <strong>Mileage :</strong> {car.mileage}
 
                </p>
 
                <button
    onClick={() =>
        dispatch({
            type: "ADD",
            payload: car,
        })
    }
>
    Add To Wishlist
</button>
            </div>
 
        </div>
 
    );
 
}
 
export default CarDetails;
 