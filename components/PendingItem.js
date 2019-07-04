import React from "react";
import { Text, View, Image, Button } from "react-native";
import { pendingItem } from "../styles";

export class PendingItem extends React.Component {

  render() {
    const { id, title, img, price } = this.props.item;

    return (
      <View style={pendingItem.container}>
        <Image style={pendingItem.image} source={img} />
        <View style={pendingItem.wrapper}><Text style={pendingItem.text}>{title}</Text></View>
        { this.props.showPrice ? (<View style={pendingItem.wrapper}><Text style={pendingItem.text}>{price}</Text></View> )  : (<View></View>) }
        <View style={pendingItem.wrapper}><Button title="Remove" onPress={ () => { this.props.handleRemove(id) } } /></View>
      </View>
    );
  }
}
