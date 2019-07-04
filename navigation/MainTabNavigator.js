import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import WishListScreen from '../screens/WishListScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-car'
          : 'md-car'
      }
    />
  ),
};

HomeStack.path = '';

const CartStack = createStackNavigator(
  {
    Cart: CartScreen,
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'} />
  ),
};

CartStack.path = '';

const WishListStack = createStackNavigator(
  {
    Settings: WishListScreen,
  },
  config
);

WishListStack.navigationOptions = {
  tabBarLabel: 'Wishlist',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'} />
  ),
};

WishListStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack: CartStack,
  WishListStack: WishListStack,
});

tabNavigator.path = '';

export default tabNavigator;
