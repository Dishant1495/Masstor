import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { assets } from '../utils/assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class enterlocation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={{ backgroundColor: '#FDFDFE', height: '100%' }}>


                <Image
                    style={{ width: 99, height: 90, marginTop: hp(0), right: 0, position: 'absolute' }}
                    resizeMode="contain"
                    source={require('../utils/assets/Image/babble.png')} />

                <TouchableOpacity onPress={() => navigation.navigate('Accesslocation')}>

                    <Image
                        style={{ width: 18, height: 18, marginTop: hp(5.79), marginLeft: wp(10), resizeMode: 'contain' }}
                        source={require('../utils/assets/Image/arrow.png')} />

                </TouchableOpacity>



                <Text style={{ color: '#532280', fontSize: 14, marginTop: hp(14), marginLeft: wp(10), fontWeight: 'bold' }}>Enter Your Location</Text>

                <View style={{
                    backgroundColor: 'white', height: 38, width: wp(80), justifyContent: 'center', marginLeft: wp(10), marginTop: hp(3),
                    borderRadius: 18, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 8
                }}>


                    <Image
                        style={{ width: 22, height: 22, right: 0, position: 'absolute', marginRight: 10 }}
                        resizeMode="contain"
                        source={require('../utils/assets/Image/locationdetector.png')} />

                </View>


                <View style={{ marginLeft: wp(80), marginTop: hp(40), position: 'relative' }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Searchcity')}>

                        <Image
                            style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            source={require('../utils/assets/Image/nextforward.png')} />

                    </TouchableOpacity>

                </View>



                <Image
                    style={{ width: 374, height: 560, marginTop: hp(8), marginLeft: wp(15) }}
                    resizeMode="contain"
                    source={require('../utils/assets/Image/blurbackground.png')} />


            </View>
        );
    }
}
