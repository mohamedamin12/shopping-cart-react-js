import React from "react";
import { Button, Stack } from "react-bootstrap";
import StoreItems from "../Data/StoreItems.json";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const items = StoreItems.find((item) => item.id === id);
  if (items == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={items.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {items.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {FormatCurrency(items.price)}
          </div>
        </div>
        </div>
        <div>{FormatCurrency(items.price * quantity)}</div>
      <Button
      variant="outline-danger"
      size="sm"
      onClick={() => removeFromCart(items.id)}
    >
      &times;
    </Button>
    </Stack>
  );
};

export default CartItem;
