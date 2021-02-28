import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList,TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class myschool_a extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const { navigation } = this.props;

        var schoolinfo = [
            {
                schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
                schoolname: "K.R. Mangalam World School",
                schoollocation: "Noida, UP",
                standard: "Std 4th  to 10th",
                fees: "Rs- 500-10000 "

            },
            {
                schoolimage: require('../utils/assets/Image/Schoolimage_b.png'),
                schoolname: "Delhi Public School (DPS)",
                schoollocation: "Delhi",
                standard: "Std 1st  to 10th",
                fees: "Rs- 500-10000 "

            }
        ];

        var popularschool = [
            {
                schoolimage: require('../utils/assets/Image/Schoolimage_b.png'),
                schoolname: "Delhi Public School (DPS)",
                schoollocation: "Delhi",
                standard: "Std 1st  to 10th",
                fees: "Rs- 500-10000 "

            },
            {
                schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
                schoolname: "Delhi Public School (DPS)",
                schoollocation: "Delhi",
                standard: "Std 1st  to 10th",
                fees: "Rs- 500-10000 "

            }

        ];

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

                    <View style={{
                        backgroundColor: 'white', height: 38, width: wp(80), justifyContent: 'center', marginLeft: wp(10), marginTop: hp(3),
                        borderRadius: 18, marginBottom: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 8
                    }}>

                        {/* <Text style={{ color: '#532280', fontSize: 14, fontWeight: 'bold', marginLeft: wp(5) }}>Search City</Text> */}

                    <TextInput
                    placeholder="Search City"
                    placeholderTextColor="#9B3189"
                    style={{paddingLeft:20}}
                    />

                        <Image
                            style={{ width: 22, height: 22, right: 0, position: 'absolute', marginRight: 10, resizeMode: 'contain' }}
                            source={require('../utils/assets/Image/searchicon.png')} />

                    </View>
                    <View style={{ marginLeft: wp(10), marginTop: hp(3) }}>


                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={require('../utils/assets/Svg/agra.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../utils/assets/Svg/noida.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image source={require('../utils/assets/Svg/delhi.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            </TouchableOpacity>


                        </View>


                        <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                            <Image source={require('../utils/assets/Svg/mumbai.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            <Image source={require('../utils/assets/Svg/ahmedabad.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            <Image source={require('../utils/assets/Svg/chennai.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                            <Image source={require('../utils/assets/Svg/pune.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            <Image source={require('../utils/assets/Svg/bangalore.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />
                            <Image source={require('../utils/assets/Svg/kolkatta.svg')} style={{ resizeMode: 'contain', height: hp(13), width: wp(23), marginRight: 20 }} />

                        </View>

                        <Text style={{ color: '#532280', fontSize: 20, fontWeight: 'bold', marginTop: hp(3) }}>Locality wise School</Text>
                        <FlatList
                            style={{ marginTop: hp(1), marginBottom: 15 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={schoolinfo}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {

                                return (
                                    <View style={{ marginTop: hp(2), marginRight: wp(5), backgroundColor: 'white', height: hp(37), width: wp(62), borderRadius: 30, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 8 }}>

                                        <Image source={item.schoolimage} style={{ width: wp(62), borderTopLeftRadius: 30, borderTopRightRadius: 30, height: hp(20) }}></Image>

                                        <View style={{ backgroundColor: '#4CC632', height: hp(5), width: wp(30), borderBottomRightRadius: 25, borderTopLeftRadius: 30, marginTop: hp(-20) }}>

                                            <Text style={{ color: '#FDFDFE', textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>Admission Open</Text>
                                            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                                <Image source={require('../utils/assets/Image/seatlogo.png')} style={{ height: 10, width: 10, resizeMode: 'contain' }}></Image>
                                                <Text style={{ color: 'white', fontSize: 12 }}>20 Seat Left</Text>
                                            </View>
                                        </View>
                                        <View style={{ backgroundColor: '#FFFFFF', height: hp(5), width: wp(12), right: 0, position: 'absolute', borderBottomLeftRadius: 25, borderTopRightRadius: 30, alignItems: 'center', justifyContent: 'center', borderColor: '#707070', borderWidth: 1 }}>
                                            <Image source={require('../utils/assets/Svg/favourite.svg')} style={{ height: 18, width: 18, resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ backgroundColor: '#FFFFFF', height: hp(5), width: wp(18), borderTopRightRadius: 8, borderBottomRightRadius: 8, opacity: 0.6, marginTop: hp(8), justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#9B3189', fontWeight: 'bold' }}>CBSE</Text>
                                            </View>
                                            <View style={{ backgroundColor: '#FFFFFF', height: hp(5), width: wp(18), borderTopLeftRadius: 8, borderBottomLeftRadius: 8, opacity: 0.6, shadowColor: '#000000', marginTop: hp(8), justifyContent: 'center', alignItems: 'center', right: 0, position: 'absolute', flexDirection: 'row' }}>
                                                <Text style={{ color: '#9B3189', fontWeight: 'bold' }}>1.2 k</Text>
                                                <Image source={require('../utils/assets/Svg/views.svg')} style={{ height: 18, width: 18, resizeMode: 'contain', marginLeft: 8 }} />

                                            </View>


                                        </View>
                                        <Text style={{ marginTop: hp(3), marginLeft: wp(2), color: '#9B3189' }}>{item.schoolname}</Text>

                                        <View style={{ flexDirection: 'row', marginTop: hp(1) }}>
                                            <Image source={require('../utils/assets/Svg/location.svg')} style={{ height: 18, width: 18, resizeMode: 'contain', marginLeft: 8 }} />

                                            <Text style={{ color: '#9B3189', marginLeft: wp(2) }}>{item.schoollocation}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', marginTop: hp(0.8) }}>
                                            <Image source={require('../utils/assets/Svg/standard.svg')} style={{ height: 18, width: 18, resizeMode: 'contain', marginLeft: 8 }} />

                                            <Text style={{ color: '#9B3189', marginLeft: wp(2) }}>{item.standard}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: hp(0.8) }}>
                                            <Image source={require('../utils/assets/Svg/money.svg')} style={{ height: 18, width: 18, resizeMode: 'contain', marginLeft: 8 }} />

                                            <Text style={{ color: '#9B3189', marginLeft: wp(2) }}>{item.fees} </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', backgroundColor: '#F5F5F6', height: hp(7), width: wp(20), marginTop: hp(-10), marginLeft: wp(40), borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../utils/assets/Image/officialpartner.png')} style={{ height: 25, width: 50, marginLeft: wp(5), resizeMode: 'contain' }}></Image>
                                            <Image source={require('../utils/assets/Image/info.png')} style={{ height: 10, width: 10, marginTop: hp(3), marginLeft: wp(0), resizeMode: 'contain' }}></Image>

                                        </View>

                                        <View style={{ backgroundColor: 'white', height: hp(4), width: wp(30), right: 0, bottom: 0, position: 'absolute', borderTopLeftRadius: 30, borderBottomRightRadius: 30, borderColor: '#532280', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#9B3189', fontSize: 9, fontWeight: 'bold' }}> Check Admission Date</Text>
                                        </View>

                                    </View>
                                )

                            }} />

                    </View>




                </ScrollView>

            </View>
        );
    }
}
