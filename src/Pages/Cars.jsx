import { useSearchParams } from "react-router-dom";
 
import CarCard from "../Components/CarCard";
import Loader from "../Components/Loader";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";
import useFetchCars from "../hooks/useFetchCars";
 
import "../styles/cars.css";
 
function Cars() {
 
  const { cars, loading, error } = useFetchCars();
 
  const [searchParams, setSearchParams] = useSearchParams();
 
  const search = searchParams.get("search") || "";
 
  const page = Number(searchParams.get("page")) || 1;
 
  const carsPerPage = 6;
 
  const filteredCars = cars.filter((car) =>
    `${car.make} ${car.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
 
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
 
  const startIndex = (page - 1) * carsPerPage;
 
  const currentCars = filteredCars.slice(
    startIndex,
    startIndex + carsPerPage
  );
 
  function setSearch(value) {
 
    setSearchParams({
      search: value,
      page: 1,
    });
 
  }
 
  function setPage(value) {
 
    setSearchParams({
      search,
      page: value,
    });
 
  }
 
  if (loading) return <Loader />;
 
  if (error) return <h2>{error}</h2>;
 
  return (
 
    <div className="cars-page">
 
      <h1>Available Cars</h1>
 
      <SearchBar
 
        search={search}
 
        setSearch={setSearch}
 
      />
 
      <div className="car-grid">
 
        {currentCars.map((car) => (
 
          <CarCard
 
    key={car.id}
 
    id={car.id}
 
    image={car.image}
 
    name={`${car.make} ${car.model}`}
 
    year={car.year}
 
    price={`₹ ${car.price?.toLocaleString()}`}
 
/>
 
        ))}
 
      </div>
 
      <Pagination
 
        currentPage={page}
 
        totalPages={totalPages}
 
        setPage={setPage}
 
      />
 
    </div>
 
  );
 
}
 
export default Cars;
