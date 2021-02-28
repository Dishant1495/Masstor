import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SvgUri } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { assets } from '../utils/assets';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex:1}}>
        <KeyboardAwareScrollView>

          <LinearGradient colors={['#A97BD3', '#3A1859']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }} style={{ height: '100%', width: '100%' }}>


            <Image source={require('../utils/assets/Image/icon.png')} style={{ height: hp(14), width: wp(30), marginTop: hp(5), alignSelf: 'center' }} />

            <View style={{ backgroundColor: '#FFFFFF',width: '100%', borderTopLeftRadius: 45, borderTopRightRadius: 45, marginTop: hp(38) }}>

              <Image source={require('../utils/assets/Image/baby.png')} style={{ height: hp(75), width: wp(50), alignSelf: 'center', marginTop: hp(-53) }} />

              <Text style={{ textAlign: 'center', color: '#3A1859', fontSize: 25, marginTop: hp(-18), fontWeight: 'bold' }}>Welcome to Masstor</Text>

              <View style={{ marginLeft: wp(22) }}>

                <Text style={{ color: '#3A1859', fontWeight: 'bold', marginTop: hp(3) }}>Log in / Sign up</Text>

                <TextInput
                  style={{
                    marginTop: hp(1),
                    borderBottomWidth: 1,
                    borderBottomColor: '#f2f2f2',
                    fontSize: 14,
                    marginRight: wp(22)
                  }}
                  keyboardType={'phone-pad'}
                  placeholder="Enter Your Mobile Number"></TextInput>

                <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16, marginRight: 10, color: 'blue' }}>
                    Or Continue with
          </Text>
                  <Image
                    style={{ width: 20, height: 20 }}
                    resizeMode="cover"
                    source={assets.google} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Mobile')}>
                  <Text
                    style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', marginTop: 20, }}>
                    Skip
          </Text>
                </TouchableOpacity>
              </View>

            </View>

           <View style={{backgroundColor:'#FFFFFF',height:hp(5),width:'100%'}}>
             </View>       


          </LinearGradient>
        </KeyboardAwareScrollView>

      </View>
    );
  }
}
