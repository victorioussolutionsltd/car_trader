import React from 'react';
import { Text, View, Alert } from "react-native";
import { ProductConsumer } from '../Context';

export class Modal extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          if (value.modalOpen) {
            return Alert.alert(
              value.modalTitle,
              value.modalInformation,
              [
                {
                  text: "OK",
                  onPress: () => {
                    value.closeModal();
                    console.log("OK Pressed");
                  }
                }
              ],
              { cancelable: false }
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
