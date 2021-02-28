import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { assets } from '../utils/assets';
import { useNavigation } from '@react-navigation/native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class accesslocation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ backgroundColor: '#FDFDFE', height: '100%' }}>

             <TouchableOpacity onPress={()=>navigation.navigate('OTP')}>
             <Image
                    style={{ width: 18, height: 18, marginTop: hp(5.79), marginLeft: wp(10),resizeMode:'contain' }}
                    source={require('../utils/assets/Image/arrow.png')} />


             </TouchableOpacity>
             
               

                <Image
                    style={{ width: 268, height: 189, marginTop: hp(20), marginLeft: wp(45) }}
                    resizeMode="contain"
                    source={require('../utils/assets/Image/locationlogo.png')} />

                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: hp(2) }}>We access your location</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(3) }}>

                    <View style={{ backgroundColor: 'white', borderColor: '#532280', borderWidth: 2, height: 40, width: 115, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#532280' }}>Deny</Text>

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Enterlocation')}>

                        <View
                            style={{ backgroundColor: '#532280', borderColor: '#532280', borderWidth: 2, height: 40, width: 115, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 25 }}>
                            <Text style={{ color: 'white' }}>Allow</Text>

                        </View>

                    </TouchableOpacity>

                </View>

                <Image
                    style={{ bottom: -85, position: 'absolute', alignItems: 'center', justifyContent: 'center', marginLeft: wp(35) }}
                    resizeMode={'contain'}
                    source={require('../utils/assets/Image/bottomcircle.png')}
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({




});
