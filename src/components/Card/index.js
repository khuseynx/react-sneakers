import React from "react";
import styles from "./Card.module.scss";

function Сard({ title, imageUrl, price, onFavorite, onPlus, id, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({id, title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({id, title, imageUrl, price});
    setIsIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card} id={id}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
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