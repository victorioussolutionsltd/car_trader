import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";
export class WelcomeInformation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          This is a mocked list of products available to add to cart and wish
          list{" "}
        </Text>
      </View>
    );
  }
}
