import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CartList } from '../Lists/CartList';

export default function CartScreen() {
  return (
      <CartList />
  );
}

CartScreen.navigationOptions = {
  title: 'Items in your basket',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
