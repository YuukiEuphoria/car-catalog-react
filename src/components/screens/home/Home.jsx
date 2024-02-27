import { useEffect } from "react";
import CarItem from "./car-item/CarItem";
import { useState } from "react";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.log("Ошибка", error));
  }, []);

  return (
    <div className="home">
      <div className="container">
        <header>
          <h1>Cars catalog</h1>
        </header>

        <div className="home__inner">
          {cars.length ? (
            cars.map((car) => <CarItem key={car.id} car={car} />)
          ) : (
            <p>There are no cars</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
