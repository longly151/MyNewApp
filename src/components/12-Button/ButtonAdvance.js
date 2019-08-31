import React, {Component} from 'react'
import {
  Alert, StyleSheet, View,
  Image, Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

export class ButtonAdvance extends Component {
  _onPressButton = () => {
    alert("You pressed the button !");
  }
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor='red'
          onShowUnderlay={() => {
            alert("onShowUnderlay button !");
          }}
        >
          <View style={{backgroundColor: 'green'}}>
            <Text style={{
              color: 'white',
              padding: 20,
              fontSize: 18
            }}>
              TouchableHighlight
            </Text>
          </View>
        </TouchableHighlight>

        {/* only on android */}
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          useForeground={true}
        >
          <View style={{
            width: 300,
            height: 50,
            margin: 20,
            backgroundColor: 'blue'
          }}>
            <Text style={{
              margin: 10,
              fontSize: 20,
              color: 'white',
              textAlign: 'center'
            }}>
              TouchableNativeFeedback
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableOpacity
          onPress={this._onPressButton}
          activeOpacity={0.2}
        >
          <View style={{
            width: 200,
            height: 50,
            backgroundColor: 'red'
          }}>
            <Text style={{
              margin: 10,
              fontSize: 20,
              color: 'white',
              textAlign: 'center'
            }}>TouchableOpacity
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          // onPress={this._onPressButton}
          onLongPress={() => {
            alert("onLongPress");
          }}
          // onPressIn={()=> {
          //     alert("onPressIn");
          // }}
          // onPressOut={()=> {
          //     alert("onPressOut");
          // }}
          disabled={false}
        >
          <View style={{
            width: 300,
            height: 50,
            margin: 20,
            backgroundColor: 'purple'
          }}>
            <Text style={{
              margin: 10,
              fontSize: 20,
              color: 'white',
              textAlign: 'center'
            }}>TouchableWithoutFeedback
            </Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

export default ButtonAdvance
