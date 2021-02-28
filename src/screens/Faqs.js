import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Faqs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textstyle: false,
            pressed: false
        };
    }


    render() {

        const { navigation } = this.props;


        const renderimage = [
            {

                img: require('../utils/assets/Image/schoolsquare_a.png')
            },
            {

                img: require('../utils/assets/Image/schoolsquare_b.png')
            },

        ];


        return (
            <View style={{ height: '100%', backgroundColor: '#FFFFFF' }}>
                <ScrollView>

                    <View style={{ height: hp(8), backgroundColor: '#F2F3FA' }}>

                        <View style={{ flexDirection: 'row', marginLeft: wp(5) }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Favouritescreen')}>
                                <Image source={require('../utils/assets/Svg/back.svg')} style={{ resizeMode: 'contain', height: 35, width: 20 }} />
                            </TouchableOpacity>

                            <Text style={{ color: '#451D6A', marginTop: hp(1), marginLeft: wp(5) }}>K.R. Mangalam World School</Text>

                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: wp(1.5) }}>
                            <Image source={require('../utils/assets/Svg/location.svg')} style={{ resizeMode: 'contain', height: 12, width: 12, marginLeft: wp(13) }} />
                            <Text style={{ color: '#9B3189', marginTop: hp(-0.5), marginLeft: wp(2) }}>Noida, UP</Text>

                        </View>
                        <Image source={require('../utils/assets/Svg/verified.svg')} style={{ right: 15, position: 'absolute', marginTop: hp(2.3), resizeMode: 'contain' }} />
                    </View>



                    <FlatList
                        style={{ marginTop: hp(1), marginBottom: 15, }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={renderimage}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (
                                <Image source={item.img} style={{ width: wp(70), height: hp(25), marginLeft: wp(5), resizeMode: 'contain' }} />

                            )

                        }} />
                    <View style={{ marginLeft: wp(10) }}>

                        <View style={{ flexDirection: 'row' }}>

                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Overview</Text>

                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Fee Structure</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Criteria</Text>

                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Admission</Text>

                                </TouchableOpacity>
                                <TouchableOpacity>

                                    <Text style={{ color: '#9B3189', fontSize: 15, fontWeight: 'bold', marginRight: 15 }}>FAQs</Text>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>navigation.navigate('Reviews')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, fontWeight: 'bold', marginRight: 15 }}>Reviews</Text>

                                </TouchableOpacity>
                            </ScrollView>

                        </View>

                        <Text style={{ color: '#451D6A', marginTop: hp(4), fontSize: 17 }}>Question in your mind</Text>

                        <View style={{ backgroundColor: '#F2F3FA', height: 50, width: '90%', marginTop: hp(3), borderRadius: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', fontWeight: 'bold', marginTop: 15, marginLeft: 15 }}>Which board is this school affiliated to?</Text>
                            <Image source={require('../utils/assets/Image/downringani.png')} style={{ resizeMode: 'contain', right: 15, position: 'absolute', height: 17, width: 17, marginTop: 15 }} />
                        </View>

                        <View style={{ backgroundColor: '#FFFFFF', height: 100, marginTop: hp(-0.5), width: '90%', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 2, elevation: 7 }}>
                            <Text style={{ color: '#9B3189', marginTop: 10, alignSelf: 'center', marginLeft: 5 }}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud </Text>
                        </View>

                        <View style={{ backgroundColor: '#F2F3FA', height: 50, width: '90%', marginTop: hp(2), borderRadius: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', fontWeight: 'bold', marginTop: 15, marginLeft: 15 }}>Does this school offer Hostel facility?</Text>
                            <Image source={require('../utils/assets/Image/downringani.png')} style={{ resizeMode: 'contain', right: 15, position: 'absolute', height: 17, width: 17, marginTop: 15 }} />
                        </View>


                        <View style={{ backgroundColor: '#F2F3FA', height: 50, width: '90%', marginTop: hp(2), borderRadius: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', fontWeight: 'bold', marginTop: 15, marginLeft: 15 }}>What facility are available in this school?</Text>
                            <Image source={require('../utils/assets/Image/downringani.png')} style={{ resizeMode: 'contain', right: 15, position: 'absolute', height: 17, width: 17, marginTop: 15 }} />
                        </View>


                        <View style={{ backgroundColor: '#F2F3FA', height: 50, width: '90%', marginTop: hp(2), borderRadius: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', fontWeight: 'bold', marginTop: 15, marginLeft: 15 }}>Is this school co-educational?</Text>
                            <Image source={require('../utils/assets/Image/downringani.png')} style={{ resizeMode: 'contain', right: 15, position: 'absolute', height: 17, width: 17, marginTop: 15 }} />
                        </View>

                        <View style={{ backgroundColor: '#F2F3FA', height: 50, width: '90%', marginBottom: 45, marginTop: hp(2), borderRadius: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', fontWeight: 'bold', marginTop: 15, marginLeft: 15 }}>Can I study Online from Home?</Text>
                            <Image source={require('../utils/assets/Image/downringani.png')} style={{ resizeMode: 'contain', right: 15, position: 'absolute', height: 17, width: 17, marginTop: 15 }} />
                        </View>


                    </View>

                </ScrollView>

                <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '100%', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 9, flexDirection: 'row' }}>

                    <View style={{ backgroundColor: '#532280', height: hp(5), borderRadius: 10, marginLeft: wp(8), width: wp(30), alignSelf: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginTop: 3 }}>Apply for Admission</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 8, textAlign: 'center', marginTop: 1.5 }}>Online Classes - 1500</Text>

                    </View>

                    <View style={{ height: hp(5), width: wp(32), borderColor: '#532280', borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginLeft: wp(5) }}>
                        <Text style={{ color: '#532280', alignSelf: 'center' }}>Get Fee Structure</Text>
                        <Text style={{ color: '#532280', alignSelf: 'center', marginTop: hp(-0.8) }}>Free</Text>

                    </View>
                    <Image source={require('../utils/assets/Svg/favourite.svg')} style={{ alignSelf: 'center', marginLeft: wp(10), height: 25, width: 25, resizeMode: 'contain' }} />
                </View>

            </View>
        );
    }
}
