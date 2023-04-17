import React from "react";
import styles from "./Card.module.scss";

function Сard({ title, imageUrl, price, onFavorite, onPlus, id }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({id, title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card} id={id}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
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