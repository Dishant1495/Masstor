import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Switch, toggleSwitch } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
export default class myaccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <ScrollView>

          <LinearGradient colors={['#9266BA', '#4B286C']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }} style={{ height: hp(70), width: '110%', borderRadius: 220, marginTop: hp(-40), alignSelf: 'center' }}>

            <View style={{ flexDirection: 'row', marginTop: hp(40) }}>

              <Image
                source={require('../utils/assets/Image/masstorwhite.png')}
                style={styles.mainlogo} />


              <Image
                source={require('../utils/assets/Image/settinglogo.png')}
                style={styles.notificationbell} />

            </View>
          </LinearGradient>

          <View style={{ height: 120, width: 120, alignSelf: 'center', marginTop: hp(-10), backgroundColor: '#FFFFFF', borderRadius: 250, justifyContent: 'center', alignItems: 'center', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>

            <Image source={require('../utils/assets/Image/cameralogo.png')} style={{ height: 80, resizeMode: 'contain', width: 60 }}></Image>
          </View>

          <Text style={{ textAlign: 'center', fontSize: 22, color: '#532280', fontWeight: 'bold' }}>Hero Bruh</Text>
          <Text style={{ textAlign: 'center', fontSize: 12, color: '#532280' }}>Herobruh9447@gmail.com</Text>
          <Text style={{ textAlign: 'center', fontSize: 12, color: '#532280', marginTop: hp(1) }}>+91 98085858888</Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: hp(2.5) }}>
            <Image source={require('../utils/assets/Svg/edit-profile.svg')} style={{ height: 15, resizeMode: 'contain', width: 15 }} />

            <Text style={{ fontSize: 12, marginLeft: 15, color: '#9B3189', fontWeight: 'bold' }} onPress={() => navigation.navigate('Editprofile')}>Edit Profile</Text>

          </View>

          <View style={{ marginLeft: wp(10), marginTop: hp(8) }}>

            <TouchableOpacity onPress={() => navigation.navigate('Myschool_a')}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../utils/assets/Svg/my-school.svg')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ color: '#532280', fontSize: 18, marginLeft: wp(5), fontWeight: 'bold' }}>My School</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Discoverlocality')}>
              <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
                <Image source={require('../utils/assets/Svg/location.svg')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ color: '#532280', fontSize: 18, marginLeft: wp(5), fontWeight: 'bold' }}>Discover Localities</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Compareschool')}>
              <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
                <Image source={require('../utils/assets/Svg/my-school.svg')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ color: '#532280', fontSize: 18, marginLeft: wp(5), fontWeight: 'bold' }}>Compare Schools</Text>
              </View>


            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Addfavouriteschool')}>
              <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
                <Image source={require('../utils/assets/Svg/favourite.svg')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
                <Text style={{ color: '#532280', fontSize: 18, marginLeft: wp(5), fontWeight: 'bold' }}>Favourites</Text>
              </View>


            </TouchableOpacity>



            <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
              <Image source={require('../utils/assets/Svg/notifications.svg')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
              <Text style={{ color: '#532280', fontSize: 18, marginLeft: wp(5), fontWeight: 'bold' }}>Notification</Text>
              <Switch
                style={{ right: 35, position: 'absolute' }}
                trackColor={{ false: "#532280", true: "#532280" }}
                // onValueChange={toggleSwitch}

                value={this.state.isEnabled}

              />
            </View>

            <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
              <Image source={require('../utils/assets/Svg/sign-out.svg')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
              <Text style={{ color: '#532280', fontSize: 18, marginLeft: wp(5), fontWeight: 'bold' }}>Sign Out</Text>
            </View>

          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainlogo: {
    width: wp(25), height: 30, marginLeft: wp(8), marginTop: hp(3.12), resizeMode: 'contain'
  },
  notificationbell: {

    width: 23, height: 22, resizeMode: 'contain', marginTop: hp(3.12), right: 50, position: 'absolute'
  },

});