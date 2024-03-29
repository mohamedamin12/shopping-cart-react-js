import React from "react";
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
      <div className="mt-auto">
        {quantity === 0 ? (
          <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
            {" "}
            Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: "0.5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <span className="fs-3">{quantity} IN CART</span>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StoreItem;
