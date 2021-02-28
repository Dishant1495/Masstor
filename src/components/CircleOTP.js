import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
// import Theme from '../screens/styles/Theme';

class CircleOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input:''
    };
  }

  render() {
    return (
      <View>
        <TextInput
          maxLength={1}
          ref={this.props.childRef}
          keyboardType={'numeric'}
          style={styles.otpContainer}
          value={this.props.value}
          returnKeyType={this.props.returnKeyType}
          onChangeText={(input) => {
            this.setState({input});
            this.props.onChangeText(input);
           
          }}
          onSubmitEditing={this.props.onSubmitEditing}
          contextMenuHidden={this.props.contextMenuHidden}


        />
      </View>
    );
  }
}

const styles = {
  otpContainer: {
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 7,
    fontWeight: 'bold',
    fontSize: 20,
    // fontFamily: Theme.fontFamily.rb_medium,
    textAlign: 'center',
    marginVertical: 30,
    shadowColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
};

export default CircleOTP;
