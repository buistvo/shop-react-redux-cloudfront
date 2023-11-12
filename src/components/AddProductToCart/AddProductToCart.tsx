import Typography from "@mui/material/Typography";
import { Product } from "~/models/Product";
import CartIcon from "@mui/icons-material/ShoppingCart";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { useCart, useInvalidateCart, useUpsertCart } from "~/queries/cart";

type AddProductToCartProps = {
  product: Product;
};

export default function AddProductToCart({ product }: AddProductToCartProps) {
  const { data, isFetching } = useCart();
  const cart = data?.data.cart;

  const { mutate: upsertCart } = useUpsertCart();
  const invalidateCart = useInvalidateCart();
  const cartItems = cart?.cartItems ?? [];

  const cartItem = cart?.cartItems.find((i) => i.product.id === product.id);

  const addProduct = () => {
    const updatedItemDto = {
      product_id: product.id ?? "",
      count: cartItem ? cartItem.count + 1 : 1,
    };
    upsertCart([
      ...cartItems.map((ci) => ({
        product_id: ci.product.id ?? "",
        count: ci.count,
      })),
      updatedItemDto,
    ]),
      {
        onSuccess: invalidateCart,
      };
  };

  const removeProduct = () => {
    if (cartItem) {
      upsertCart(
        cartItems.map((ci) => ({
          product_id: ci.product.id ?? "",
          count:
            cartItem.product.id === product.id ? cartItem.count - 1 : ci.count,
        })),

        { onSuccess: invalidateCart }
      );
    }
  };

  return cartItem ? (
    <>
      <IconButton disabled={isFetching} onClick={removeProduct} size="large">
        <Remove color={"secondary"} />
      </IconButton>
      <Typography align="center">{cartItem.count}</Typography>
      <IconButton disabled={isFetching} onClick={addProduct} size="large">
        <Add color={"secondary"} />
      </IconButton>
    </>
  ) : (
    <IconButton disabled={isFetching} onClick={addProduct} size="large">
      <CartIcon color={"secondary"} />
    </IconButton>
  );
}
