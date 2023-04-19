//app.js

import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://6440163ab9e6d064be078d62.mockapi.io/Items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6440163ab9e6d064be078d62.mockapi.io/Cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6440163ab9e6d064be078d62.mockapi.io/Favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddtoCart = (obj) => {
    axios.post("https://6440163ab9e6d064be078d62.mockapi.io/Cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6440163ab9e6d064be078d62.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddtoFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://6440163ab9e6d064be078d62.mockapi.io/Favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://6440163ab9e6d064be078d62.mockapi.io/Favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
    }

    const onChangeSearchValue = (event) => {
      setSearchValue(event.target.value);
    };

    return (
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchValue={onChangeSearchValue}
            onAddtoFavorite={onAddtoFavorite}
            onAddtoCart={onAddtoCart}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites items={favorites} onAddtoFavorite={onAddtoFavorite} />
        </Route>
      </div>
    );
  };
}

export default App;