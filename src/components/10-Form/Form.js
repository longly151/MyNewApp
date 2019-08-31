import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'Please type your text',
      typedPassword: ''
    };
  }
  render() {
    return (
      <View>
        <TextInput style={ {
                height: 40,
                margin: 20,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1
            } }
            keyboardType='email-address'
            placeholder='Enter your email'
            placeholderTextColor='red'
            onChangeText={
                (text) => {
                    // this.state =
                    this.setState(
                        (previousState) => {
                            return {
                                typedText: text
                            };
                        }
                    );
                }
            }
        />
        <Text style= {{marginLeft:20}}>{this.state.typedText}</Text>
        <TextInput
              style={{height: 40,
                  margin: 20,
                  padding: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
              }}
              keyboardType='default'
              placeholder='Enter your password'
              secureTextEntry= {true}
              onChangeText={(text) => {this.setState(() => {
                  return {
                        typedPassword: text
                  };
              })}}
            />
            <Text style= {{marginLeft:20}}>{this.state.typedPassword}</Text>
      </View>
    )
  }
}

export default Form
