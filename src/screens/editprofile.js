import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <KeyboardAwareScrollView>

          <LinearGradient colors={['#9266BA', '#4B286C']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }} style={{ height: hp(70), width: '110%', borderRadius: 220, marginTop: hp(-40), alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', marginTop: hp(40) }}>

              <Image
                source={require('../utils/assets/Image/masstorwhite.png')}
                style={styles.mainlogo} />

              <TouchableOpacity>
                <Image
                  source={require('../utils/assets/Image/settinglogo.png')}
                  style={styles.notificationbell} />
              
                </TouchableOpacity>


            </View>
          </LinearGradient>

          <View style={{ height: 120, width: 120, alignSelf: 'center', marginTop: hp(-10), backgroundColor: '#FFFFFF', borderRadius: 250, justifyContent: 'center', alignItems: 'center', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>

            <Image source={require('../utils/assets/Image/cameralogo.png')} style={{ height: 80, resizeMode: 'contain', width: 60 }}></Image>
          </View>
          <View style={{ marginLeft: wp(10), marginTop: hp(5) }}>

            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../utils/assets/Svg/edit-profile.svg')} style={{ height: 27, resizeMode: 'contain', width: 27 }} />
              <Text style={{ fontSize: 20, marginLeft: 15, color: '#9B3189', fontWeight: 'bold' }}>Edit Profile</Text>
            </View>

            <Text style={{ marginTop: hp(3), fontSize: 15 }}>First Name</Text>

            <View style={{ height: 50, marginTop: hp(1), width: '85%', borderColor: 'black', borderWidth: 1 }}>
              <TextInput placeholder="Enter First name" style={{ height: 50, width: '85%' }} />
            </View>

            <Text style={{ marginTop: hp(3), fontSize: 15 }}>Last Name</Text>

            <View style={{ height: 50, marginTop: hp(1), width: '85%', borderColor: 'black', borderWidth: 1 }}>
              <TextInput placeholder="Enter Last name" style={{ height: 50, width: '85%' }} />
            </View>

            <Text style={{ marginTop: hp(3), fontSize: 15 }}>Mobile Number</Text>

            <View style={{ height: 50, marginTop: hp(1), width: '85%', borderColor: 'black', borderWidth: 1 }}>
              <TextInput keyboardType="number-pad" placeholder="Mobile Number" style={{ height: 50, width: '85%' }} />
            </View>

            <Text style={{ marginTop: hp(3), fontSize: 15 }}> Email id</Text>

            <View style={{ height: 50, marginTop: hp(1), width: '85%', borderColor: 'black', borderWidth: 1 }}>
              <TextInput keyboardType="email-address" placeholder="Email Address" style={{ height: 50, width: '85%' }} />
            </View>

          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Myaccount')}>

            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center', width: 150, alignSelf: 'center', borderRadius: 30, borderColor: '#707070', borderWidth: 1, marginTop: hp(5), marginBottom: 10 }}>
              <Text style={{ color: '#532280', fontWeight: 'bold', fontSize: 14 }}>Save Changes</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAwareScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainlogo: {
    width: wp(25), height: 30, marginLeft: wp(8), marginTop: hp(3.12), resizeMode: 'contain'
  },
  notificationbell: {

    width: 23, height: 22, resizeMode:'contain', marginTop: hp(3.12), left:wp(60), position: 'absolute'
  },

});