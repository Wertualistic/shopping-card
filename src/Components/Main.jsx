import React from "react";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loader from "./Loader";
import BasketList from "./BasketList";
import { toast } from "react-toastify";

function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    toast.success("Successfully Added!")
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeFromBasket = (itemID) => {
    const newOrder = order.filter((item) => item.mainId !== itemID);
    setOrder(newOrder);
    toast.error("Successfully Deleted!")
  };

  const incrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemID) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemID) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
        console.log(data.shop);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <GoodList goods={goods} addToBasket={addToBasket} />
        </>
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
    </div>
  );
}

export default Main;
