import React from "react";
import axios from "axios";
import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const {onAddtoFavorite, onAddtoCart} = React.useContext(AppContext);
  const [orders, setorders] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://6440163ab9e6d064be078d62.mockapi.io/Orders"
        );
        setorders(data.reduce((prev, obj) => [...prev, obj.items], []));
        setisLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказа');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between md-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            imageUrl={item?.imageUrl}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
