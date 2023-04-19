import React from 'react';
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchValue,
  onAddtoFavorite,
  onAddtoCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between md-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchValue}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              {...item}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddtoFavorite(obj)}
              onPlus={(obj) => onAddtoCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
