import React from 'react';
import { WishList } from '../Lists/WishList';


export default function WishListScreen() {
  return (
    <WishList/>
  )

}

WishListScreen.navigationOptions = {
  title: 'Wish List',
};
