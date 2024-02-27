import styles from "./../../home/_home.module.scss";

const CarItem = ({ car }) => {
  return (
    <div>
      <div key={car.id} className={styles.card}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${car.image})`,
          }}
        ></div>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default CarItem;
