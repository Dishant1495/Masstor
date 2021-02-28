import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class addfavouriteschool extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>

                <ScrollView>

                    <View>
                        <LinearGradient colors={['#9266BA', '#4B286C']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }} style={{ height: hp(16), width: '100%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Myaccount')}>
                                    <Image source={require('../utils/assets/Image/whiteback.png')} style={{ height: 35, width: 35, resizeMode: 'contain', marginTop: hp(5), marginLeft: wp(3) }} />
                                </TouchableOpacity>
                                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, marginTop: hp(5), marginLeft: wp(5) }}>My School</Text>
                                <Image source={require('../utils/assets/Image/whitenotification.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginTop: hp(5), marginLeft: wp(3), right: 20, position: 'absolute' }} />

                            </View>

                        </LinearGradient>

                    </View>
                    <Image source={require('../utils/assets/Image/favouritefamily.png')} style={{ height: 205, width: 285, alignSelf: 'center', marginTop: hp(13), resizeMode: 'contain' }} />
                    <View style={{ height: '100%', width: '100%', marginTop: hp(7), borderTopRightRadius: 50, borderTopLeftRadius: 50, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5 }}>

                        <Text style={{ marginLeft: wp(10), marginTop: hp(4) }}>Click on heart and add your favourite Schools.</Text>

                        <View style={{ height: hp(21), marginTop: hp(5), justifyContent: 'center', alignItems: 'center', marginBottom: 40, width: wp(84), alignSelf: 'center', borderRadius: 30, backgroundColor: 'white', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Favouritescreen')}>

                                <Image source={require('../utils/assets/Svg/heartzero.svg')} />

                            </TouchableOpacity>

                        </View>




                    </View>
                </ScrollView>

            </View>
        );
    }
}
