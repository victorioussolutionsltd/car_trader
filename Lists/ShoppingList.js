import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Product } from "../components/Product";
import { ProductConsumer } from "../Context";
export const ShoppingList = () => (<ProductConsumer>
  {value => {
    return (
      <FlatList
        data={value.products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Product
            item={item}
            handleAddToWishList={id => {
              value.addToWishList(id);
              value.openModal(id, "Wish List");
            }}
            handleAddToCart={id => {
              value.addToCart(id);
              value.openModal(id, "Cart");
            }}
          />
        )}
      />
    );
  }}
</ProductConsumer>);
