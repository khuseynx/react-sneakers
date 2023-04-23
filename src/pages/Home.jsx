import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchValue,
  onAddtoFavorite,
  onAddtoCart,
  isLoading,
}) {


  
const renderItems = () => {
  const filteredItems = items.filter((item) => 
  item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
  return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => {
    console.log(item?.imageUrl);
    return (
    <Card
      key={index}
      imageUrl={item?.imageUrl}
      onFavorite={(obj) => onAddtoFavorite(obj)}
      onPlus={(obj) => onAddtoCart(obj)}
      loading={isLoading}
      {...item}
    />
  )});
};


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
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <img src="img/search.svg" alt="Search" />
          <input
            onChange={onChangeSearchValue}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;