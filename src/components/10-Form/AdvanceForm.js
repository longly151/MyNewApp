import React, {Component} from 'react'
import {Text, View, TextInput, Keyboard} from 'react-native'


export class AdvanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'please type your text',
      typedPassword: '',
      typedDescription: ''
    };
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(() => {
        return {typedText: 'Keyboard is shown'}
      })
    });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(() => {
        return {typedText: 'Keyboard is hide'}
      })
    })
  }
  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 100,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          multiline={true}
          borderBottomColor='green'
          borderBottomWidth={3}
          borderLeftColor='green'
          borderLeftWidth={3}
          borderRightColor='green'
          borderRightWidth={3}
          editable={true}
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => {
            this.setState(() => {
              return {
                typedDescription: text
              };
            })
          }}
        />
        <Text style={{marginLeft: 20}}>{this.state.typedText}</Text>
      </View>
    )
  }
}

export default AdvanceForm
