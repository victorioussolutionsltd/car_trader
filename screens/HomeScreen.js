import * as WebBrowser from "expo-web-browser";
import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles";
import { WelcomeInformation } from "../components/WelcomeInformation";
import { ShoppingList } from "../Lists/ShoppingList";
import { Modal } from '../components/Modal'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <WelcomeInformation />
        <ShoppingList />
      </ScrollView>
      <Modal />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
