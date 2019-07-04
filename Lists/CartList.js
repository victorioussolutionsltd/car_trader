import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { PendingItem } from "../components/PendingItem";
import { ProductConsumer } from "../Context";
import {View, Text } from 'react-native';
import { noItems } from '../styles';

export const CartList = () => (
         <ProductConsumer>
           {value => {
             return (
               <FlatList
                 data={value.products.filter(
                   item => item.inCart == true
                 )}
                 ListEmptyComponent={
                   <View style={noItems.container}>
                     <Text style={noItems.text}>Empty Basket</Text>
                   </View>
                 }
                 keyExtractor={item => item.id.toString()}
                 renderItem={({ item }) => (
                   <PendingItem
                     item={item}
                     showPrice
                     handleRemove={id => {
                       value.removeFromCart(id);
                     }}
                   />
                 )}
               />
             );
           }}
         </ProductConsumer>
       );