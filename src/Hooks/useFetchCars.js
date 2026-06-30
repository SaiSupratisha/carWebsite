import { useEffect, useState } from "react";
import axios from "axios";
 
function useFetchCars() {
 
    const [cars, setCars] = useState([]);
 
    const [loading, setLoading] = useState(true);
 
    const [error, setError] = useState("");
 
    useEffect(() => {
 
        async function fetchCars() {
 
            try {
 
                const response = await axios.get(
                    "https://freetestapi.com/api/v1/cars"
                );
 
                setCars(response.data);
 
            } catch (err) {
 
                setError("Unable to fetch cars.");
 
            } finally {
 
                setLoading(false);
 
            }
 
        }
 
        fetchCars();
 
    }, []);
 
    return { cars, loading, error };
 
}
 
export default useFetchCars;