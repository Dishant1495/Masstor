import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Feestrucutre extends Component {
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

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Overview</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Feestructure')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Fee Structure</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Critearea')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, fontWeight: 'bold',marginRight: 15 }}>Criteria</Text>

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

                        <Text style={{ color: '#451D6A', marginTop: hp(4), fontSize: 20 }}>Admission Criteria</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', marginTop: hp(4), fontWeight: 'bold', fontSize: 17 }}>Pre Nursery, Nursery & KG:</Text>
                            <Text style={{ color: '#9B3189', marginTop: hp(4), fontSize: 17, width: '50%' }}> Interaction with Parents and
Child.</Text>


                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontWeight: 'bold', fontSize: 17 }}>CLASSES I - VII:  </Text>
                            <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontSize: 17 }}>  Entrance Test.</Text>


                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontWeight: 'bold', fontSize: 17 }}>CLASSES IX:   </Text>
                            <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontSize: 17 }}>  Merit and Entrance Test.</Text>


                        </View>


                        <Text style={{ color: '#451D6A', marginTop: hp(4), fontSize: 20 }}>Documents</Text>

                        <Text style={{ color: '#9B3189', marginTop: hp(3), fontSize: 17 }}> 1- Birth Certificate</Text>
                        <Text style={{ color: '#9B3189', marginTop: hp(1.5), fontSize: 17 }}> 2- Aadhar Card/Passport</Text>
                        <Text style={{ color: '#9B3189', marginTop: hp(1.5), fontSize: 17 }}> 3- Progress Report of Previous class (Class I   upwards)</Text>
                        <Text style={{ color: '#9B3189', marginTop: hp(1.5), fontSize: 17 }}> 4- Two latest passport  size-coloured photographs (Parents)</Text>
                        <Text style={{ color: '#9B3189', marginTop: hp(1.5), fontSize: 17 }}> 5- Five latest passport size-coloured photographs (Student)</Text>
                        <Text style={{ color: '#9B3189', marginTop: hp(1.5), fontSize: 17 }}> 6- Transfer Certificate (from Class I onwards)</Text>


                        <Text style={{ color: '#451D6A', marginTop: hp(4), fontSize: 20 }}>Age Criteria</Text>

                        <Text style={{ color: '#9B3189', marginTop: hp(3.5), fontSize: 17 }}> 1- Pre Nursery: 2+ years as on 1st April of the year seeking
                            admission.</Text>


                        <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontSize: 17 }}> 2- Nursery: 3+ years as on 1st April of the year seeking
                            admission.</Text>

                        <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontSize: 17 }}> 3- KG: 4+ years as on 1st April of the year seeking
                            admission.</Text>

                        <Text style={{ color: '#9B3189', marginTop: hp(2.5), fontSize: 17, marginBottom: 35 }}> 4- Class I: 4+ years as on 1st April of the year seeking
                                admission.</Text>

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
