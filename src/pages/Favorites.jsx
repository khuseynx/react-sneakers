import React from 'react';
import Card from "../components/Card";
import AppContext from '../context';


function Favorites() {
const {favorites, onAddtoFavorite} = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between md-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => ( 
        <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddtoFavorite}
            {...item}
          />
        ))}
    
      </div>
    </div>
  );
}

export default Favorites;