import React from "react";
import styles from "./Card.module.scss";

function Сard(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
            alt="Plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Сard;
