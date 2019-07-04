import React from "react";
import { Text , View, Image, Button } from "react-native";
import { product } from '../styles'
 
export class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, inCart, img, onWishList, price } = this.props.item;

    return (
      <View style={product.container}>
        <Text style={product.title}>{title}</Text>
        <Text>Price: £{price}</Text>
        <View style={product.buttonsHorizontal}>
          <Button title="Add to wishlist" disabled={onWishList} onPress={ ()=> this.props.handleAddToWishList(id)} />
          <Button
            title="Add to cart"
            disabled={inCart}
            onPress={() => this.props.handleAddToCart(id)}
          />
        </View>

        <Image style={product.image} source={img} />
      </View>
    ); 

  }
}
