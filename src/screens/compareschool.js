import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class compareschool extends Component {
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

                    <Text style={{ marginLeft: wp(10), color: '#9B3189', width: '70%', marginTop: 20 }}>Confused between too many? Compare them
                    on multiple criteria such as fees, facility, admi
-ssion & more.</Text>

                    <View style={{
                        backgroundColor: 'white', height: 38, width: wp(80), justifyContent: 'center', marginLeft: wp(10), marginTop: hp(3),
                        borderRadius: 18, marginBottom: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 8
                    }}>

                        <TextInput
                            placeholderTextColor="#9B3189"
                            placeholder="Search School" style={{ paddingLeft: 20 }} />

                        <Image
                            style={{ width: 22, height: 22, right: 0, position: 'absolute', marginRight: 10, resizeMode: 'contain' }}
                            source={require('../utils/assets/Image/searchicon.png')} />

                    </View>

                    <View style={{
                        backgroundColor: 'white', height: 38, width: wp(80), justifyContent: 'center', marginLeft: wp(10), marginTop: hp(5),
                        borderRadius: 18, marginBottom: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 8
                    }}>

                        <TextInput
                            placeholderTextColor="#9B3189"
                            placeholder="Search School" style={{ paddingLeft: 20 }} />

                        <Image
                            style={{ width: 22, height: 22, right: 0, position: 'absolute', marginRight: 10, resizeMode: 'contain' }}
                            source={require('../utils/assets/Image/searchicon.png')} />

                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Comparisionschoolwise')}>
                        <View style={{ backgroundColor: "#532280", justifyContent: 'center', alignItems: 'center', width: '40%', height: 50, borderRadius: 12, alignSelf: 'center', marginTop: hp(5) }}>

                            <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Compare</Text>
                        </View>

                    </TouchableOpacity>

                    <Image source={require('../utils/assets/Image/illustrationcompare.png')} style={{ alignSelf: 'center', marginTop: hp(3) }} />

                    <Text style={{ alignSelf: 'center', color: '#532280', fontWeight: 'bold', marginTop: hp(2) }}>We are ready.</Text>
                    <Text style={{ alignSelf: 'center', color: '#9A3088', marginTop: hp(1), marginBottom: 30 }}>Select Schools to get started.</Text>

                </ScrollView>
            </View>



        );
    }
}
