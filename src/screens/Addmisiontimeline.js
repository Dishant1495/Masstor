import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Addmisiontimeline extends Component {
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
                                <TouchableOpacity onPress={navigation.navigate('Addmisiontimeline')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, fontWeight: 'bold', marginRight: 15 }}>Overview</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Feestructure')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Fee Structure</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Critearea')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Criteria</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Admission')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Admission</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Faqs')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>FAQs</Text>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={navigation.navigate('Reviews')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Reviews</Text>

                                </TouchableOpacity>

                            </ScrollView>

                        </View>

                        <View style={{ marginTop: hp(3), flexDirection: 'row' }}>
                            <Text style={{ color: '#451D6A', fontSize: 17 }}>Mode of Learning</Text>
                            <Image source={require('../utils/assets/Image/officialpartner.png')} style={{ right: wp(5), resizeMode: 'contain', position: 'absolute', marginTop: hp(1) }} />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
                                <Image source={require('../utils/assets/Image/onlinegreenlogo.png')} style={{ marginRight: wp(2.5) }} />
                                <Image source={require('../utils/assets/Image/offlinebluelogo.png')} />
                            </View>
                            <View style={{ backgroundColor: '#9B3189', height: hp(8), borderRadius: 12, marginLeft: wp(3.5), marginTop: hp(1.2), width: wp(35) }}>
                                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 13, textAlign: 'center', marginTop: hp(0.8) }}>Admission Timeline</Text>
                                <Text style={{ color: '#FFFFFF', fontSize: 13, textAlign: 'center', marginTop: hp(0.3) }}>11 Jan-15 March</Text>

                            </View>

                        </View>



                        <View style={{ flexDirection: 'row', marginTop: hp(2.5) }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


                                <View style={{ backgroundColor: '#F2F3FA', height: hp(18), width: wp(30), borderRadius: 13, marginRight: wp(3) }}>
                                    <Image source={require('../utils/assets/Image/girlboys.png')} style={{ resizeMode: 'contain', alignSelf: 'center', height: hp(15), width: wp(12) }} />
                                    <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(-3.5) }}>1239</Text>
                                    <Text style={{ color: '#451D6A', alignSelf: 'center' }}>Students</Text>
                                </View>

                                <View style={{ backgroundColor: '#F2F3FA', height: hp(18), width: wp(30), borderRadius: 13, marginRight: wp(3) }}>
                                    <Image source={require('../utils/assets/Svg/standard.svg')} style={{ resizeMode: 'contain', alignSelf: 'center', height: hp(8), marginTop: hp(4), width: wp(8) }} />
                                    <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(-0.5) }}>Standard</Text>
                                    <Text style={{ color: '#451D6A', alignSelf: 'center' }}>1 to 10</Text>
                                </View>

                                <View style={{ backgroundColor: '#F2F3FA', height: hp(18), width: wp(30), borderRadius: 13, marginRight: wp(3) }}>
                                    <Image source={require('../utils/assets/Svg/seats-left.svg')} style={{ resizeMode: 'contain', alignSelf: 'center', height: hp(8), marginTop: hp(4), width: wp(8) }} />
                                    <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(-0.5) }}>200</Text>
                                    <Text style={{ color: '#451D6A', alignSelf: 'center' }}>Seat Left</Text>
                                </View>

                                <View style={{ backgroundColor: '#F2F3FA', height: hp(18), width: wp(30), borderRadius: 13, marginRight: wp(3) }}>
                                    <Image source={require('../utils/assets/Svg/rating.svg')} style={{ resizeMode: 'contain', alignSelf: 'center', height: hp(8), marginTop: hp(4), width: wp(8) }} />
                                    <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(-0.5) }}>+4.5</Text>
                                    <Text style={{ color: '#451D6A', alignSelf: 'center' }}>Rates</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <Text style={{ color: '#451D6A', fontSize: 20, marginTop: hp(3) }}>About School</Text>

                        <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 6, marginTop: hp(3) }}>K.R. Mangalam World School Greater Noida Branch, a new milestone added in the legacy of the KRM brand stands tall for reputed value systems and xyzzzzzzzz
zzzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzz see more.....</Text>

                        <Text style={{ color: '#451D6A', fontSize: 20, marginTop: hp(3) }}>School Amenities</Text>


                        <View>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(4), marginTop: hp(-0.5) }}>Laboratories</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2), marginLeft: wp(10) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Auditorium</Text>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Canteen</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2), marginLeft: wp(18.5) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Sport Area</Text>
                                </View>


                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Garden & Lawns</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2), marginLeft: wp(5.5) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Day Care Facility</Text>
                                </View>


                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Meditation</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2), marginLeft: wp(15) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Amphipheatre</Text>
                                </View>


                            </View>


                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Transport Services</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2), marginLeft: wp(2) }}>

                                    <Image source={require('../utils/assets/Svg/tick.svg')} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                    <Text style={{ color: '#451D6A', fontSize: 15, marginLeft: wp(3), marginTop: hp(-0.5) }}>Conference room </Text>
                                </View>


                            </View>
                        </View>


                        <Text style={{ color: '#451D6A', fontSize: 20, marginTop: hp(3) }}>Staff</Text>

                        <View style={{ marginBottom: 15 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={{ backgroundColor: '#FFFFFF', marginRight: 15, height: hp(28), width: wp(39), marginTop: hp(2), marginBottom: 15, borderRadius: 15, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                    <View style={{ height: hp(8), backgroundColor: '#F2F3FA', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

                                        <View style={{ backgroundColor: '#FFFFFF', height: 85, width: 85, borderRadius: 50, alignSelf: 'center', marginTop: hp(3), shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                            <Image source={require('../utils/assets/Image/staffimage.png')} style={{ height: 85, width: 85, resizeMode: 'contain' }} />

                                        </View>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontWeight: 'bold' }}>Dr. Aman Sagar</Text>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontWeight: 'bold' }}>Assistant Professor</Text>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontSize: 10 }}>Std. 4 to 6 | Exp. 12y | Science</Text>


                                    </View>
                                </View>


                                <View style={{ backgroundColor: '#FFFFFF', marginRight: 15, height: hp(28), width: wp(39), marginTop: hp(2), marginBottom: 15, borderRadius: 15, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                    <View style={{ height: hp(8), backgroundColor: '#F2F3FA', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

                                        <View style={{ backgroundColor: '#FFFFFF', height: 85, width: 85, borderRadius: 50, alignSelf: 'center', marginTop: hp(3), shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                            <Image source={require('../utils/assets/Image/staffimage.png')} style={{ height: 85, width: 85, resizeMode: 'contain' }} />

                                        </View>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontWeight: 'bold' }}>Dr. Aman Sagar</Text>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontWeight: 'bold' }}>Assistant Professor</Text>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontSize: 10 }}>Std. 4 to 6 | Exp. 12y | Science</Text>


                                    </View>
                                </View>


                                <View style={{ backgroundColor: '#FFFFFF', marginRight: 15, height: hp(28), width: wp(39), marginTop: hp(2), marginBottom: 15, borderRadius: 15, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                    <View style={{ height: hp(8), backgroundColor: '#F2F3FA', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

                                        <View style={{ backgroundColor: '#FFFFFF', height: 85, width: 85, borderRadius: 50, alignSelf: 'center', marginTop: hp(3), shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 7 }}>
                                            <Image source={require('../utils/assets/Image/staffimage.png')} style={{ height: 85, width: 85, resizeMode: 'contain' }} />

                                        </View>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontWeight: 'bold' }}>Dr. Aman Sagar</Text>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontWeight: 'bold' }}>Assistant Professor</Text>
                                        <Text style={{ color: '#451D6A', alignSelf: 'center', marginTop: hp(1), fontSize: 10 }}>Std. 4 to 6 | Exp. 12y | Science</Text>


                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    </View>

                </ScrollView>

                <View style={{ backgroundColor: '#FFFFFF', height: 50, width: '100%', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 9, flexDirection: 'row' }}>

                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#532280', height: hp(5), borderRadius: 10, marginLeft: wp(8), width: wp(30), alignSelf: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginTop: 3 }}>Apply for Admission</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 8, textAlign: 'center', marginTop: 1.5 }}>Online Classes - 1500</Text>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ height: hp(5), width: wp(32), borderColor: '#532280', borderWidth: 1, borderRadius: 10, alignSelf: 'center', marginLeft: wp(5) }}>
                            <Text style={{ color: '#532280', alignSelf: 'center' }}>Get Fee Structure</Text>
                            <Text style={{ color: '#532280', alignSelf: 'center', marginTop: hp(-0.8) }}>Free</Text>

                        </View>

                    </TouchableOpacity>
                    <Image source={require('../utils/assets/Svg/favourite.svg')} style={{ alignSelf: 'center', marginLeft: wp(10), height: 25, width: 25, resizeMode: 'contain' }} />
                </View>

            </View>
        );
    }
}
