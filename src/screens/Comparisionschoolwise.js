import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, ImageBackground, TextInput } from 'react-native';
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

        var keyschool = [
            {
                keyschoolfirst: "Ownership", keyschoolsecond: "Private", keyschoolthird: "Private",
            },
            {
                keyschoolfirst: "Board", keyschoolsecond: "CBSE", keyschoolthird: "CBSE",
            }, {
                keyschoolfirst: "Year of Establishment", keyschoolsecond: "2016", keyschoolthird: "2010",
            }, {
                keyschoolfirst: "Co-Ed Status", keyschoolsecond: "Co-Education", keyschoolthird: "Co-Education",
            }, {
                keyschoolfirst: "Campus Size", keyschoolsecond: "20 Acres", keyschoolthird: "10 Acres",
            }, {
                keyschoolfirst: "School Type", keyschoolsecond: "Urban", keyschoolthird: "Rular",
            }, {
                keyschoolfirst: "Awards to School", keyschoolsecond: "-", keyschoolthird: "-",
            },

        ];
        var feestructure = [
            {
                feestructurefirst: "Registration Fees ", feestructuresecond: "Rs 2,000", feestructurethird: "Rs 2,000"
            }, {
                feestructurefirst: "Annual Charges", feestructuresecond: "Rs 2,79,000", feestructurethird: "Rs 2,79,000"
            }, {
                feestructurefirst: "Monthly Charges ", feestructuresecond: "Rs 13,270", feestructurethird: "Rs 13,270"
            }
        ];

        var keyschoolstats = [
            {
                keyschoolfirst: "Classes Offered", keyschoolsecond: "Pre-Nursery - Std 12", keyschoolthird: "Nursery - Std 12",
            }, {
                keyschoolfirst: "Language of Instruction", keyschoolsecond: "English", keyschoolthird: "English",
            }, {
                keyschoolfirst: "Academic Session", keyschoolsecond: "-", keyschoolthird: "April to March",
            }, {
                keyschoolfirst: "Student Faculty Ratio", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Total Faculty", keyschoolsecond: "-", keyschoolthird: "-",
            }

        ];

        var admissioncritearea = [
            {
                keyschoolfirst: "Documents Required", keyschoolsecond: "8", keyschoolthird: "8",
            }, {
                keyschoolfirst: "Written Test", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Student Interaction", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Parents Interaction", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Form Submission Mode", keyschoolsecond: "Online, Offline", keyschoolthird: "Online, Offline",
            }, {
                keyschoolfirst: "Form Fee Payment Mode", keyschoolsecond: "Online, Offline", keyschoolthird: "Online, Offline",
            },
            {
                keyschoolfirst: "Safety & Security", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Advance Facilities", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Extra-Curricular Activities", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Sports & Fitness", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Labs", keyschoolsecond: "-", keyschoolthird: "-",
            }, {
                keyschoolfirst: "Disable Friendly", keyschoolsecond: "-", keyschoolthird: "-",
            },

        ];

        var additionalinfo = [
            {
                keyschoolfirst: "Total Views", keyschoolsecond: "600", keyschoolthird: "300",
            },


        ];
        return (
            <View style={{ backgroundColor: '#FFFFFF', height: '100%' }}>

                <ScrollView>

                    <View>
                        <LinearGradient colors={['#9266BA', '#4B286C']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }} style={{ height: hp(16), width: '100%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Compareschool')}>
                                    <Image source={require('../utils/assets/Image/whiteback.png')} style={{ height: 35, width: 35, resizeMode: 'contain', marginTop: hp(5), marginLeft: wp(3) }} />
                                </TouchableOpacity>
                                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20, marginTop: hp(5), marginLeft: wp(5) }}>My School</Text>
                                <Image source={require('../utils/assets/Image/whitenotification.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginTop: hp(5), marginLeft: wp(3), right: 20, position: 'absolute' }} />

                            </View>

                        </LinearGradient>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: hp(4) }}>
                        <View>

                            <Image source={require('../utils/assets/Image/schoolsquare_a.png')} style={{ height: hp(14), width: wp(41), marginRight: 20, opacity: 0.4 }} />
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 9, marginLeft: 5, marginTop: hp(-12) }}>K.R. Mangalam World School</Text>
                            <View style={{ flexDirection: 'row', marginTop: hp(0.2) }}>
                                <Image source={require('../utils/assets/Image/white_location.png')} style={{ height: 8, width: 8, resizeMode: 'contain', marginLeft: wp(2) }} />
                                <Text style={{ color: '#FFFFFF', fontSize: 9, marginLeft: wp(2), }}>Noida,up</Text>
                            </View>

                            {/* <TouchableOpacity onPress={() => navigation.navigate('Addfavouriteschool')}> */}
                                <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', width: wp(20), borderRadius: 30, height: 25, marginTop: hp(3), marginLeft: wp(2) }}>
                                    <Text style={{ color: '#532280', fontSize: 13, fontWeight: 'bold' }}>Apply Now</Text>
                                </View>

                            {/* </TouchableOpacity> */}
                            <Image source={require('../utils/assets/Image/whitelike.png')} style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(-3), marginLeft: wp(35) }} />



                        </View>



                        <View>

                            <Image source={require('../utils/assets/Image/schoolsquare_b.png')} style={{ height: hp(14), width: wp(41), marginRight: 20, opacity: 0.4 }} />
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 9, marginLeft: 5, marginTop: hp(-12) }}>K.R. Mangalam World School</Text>
                            <View style={{ flexDirection: 'row', marginTop: hp(0.2) }}>
                                <Image source={require('../utils/assets/Image/white_location.png')} style={{ height: 8, width: 8, resizeMode: 'contain', marginLeft: wp(2) }} />
                                <Text style={{ color: '#FFFFFF', fontSize: 9, marginLeft: wp(2), }}>Noida,up</Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('Addfavouriteschool')}>

                                <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', width: wp(20), borderRadius: 30, height: 25, marginTop: hp(3), marginLeft: wp(2) }}>
                                    <Text style={{ color: '#532280', fontSize: 13, fontWeight: 'bold' }}>Apply Now</Text>
                                </View>
                            </TouchableOpacity>
                            <Image source={require('../utils/assets/Image/whitelike.png')} style={{ height: 15, width: 15, resizeMode: 'contain', marginTop: hp(-3), marginLeft: wp(35) }} />



                        </View>

                    </View>


                    <View style={{ height: hp(6), marginTop: hp(8), width: '90%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#532280' }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, marginTop: hp(1), marginLeft: wp(3) }}>Key School Stats</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: hp(0) }}
                        data={keyschool}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (

                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '40%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280' }}>{item.keyschoolfirst}</Text>
                                    </View>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolsecond}</Text>

                                    </View>
                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolthird}</Text>

                                    </View>
                                </View>
                            )

                        }} />


                    <View style={{ height: hp(6), marginTop: hp(8), width: '90%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#532280' }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, marginTop: hp(1), marginLeft: wp(3) }}>Fee Structure</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: hp(0) }}
                        data={feestructure}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (

                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '40%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280' }}>{item.feestructurefirst}</Text>
                                    </View>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.feestructuresecond}</Text>

                                    </View>
                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.feestructurethird}</Text>

                                    </View>
                                </View>
                            )

                        }} />


                    <View style={{ height: hp(6), marginTop: hp(8), width: '90%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#532280' }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, marginTop: hp(1), marginLeft: wp(3) }}>Key School Stats</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: hp(0) }}
                        data={keyschoolstats}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (

                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '40%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280' }}>{item.keyschoolfirst}</Text>
                                    </View>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolsecond}</Text>

                                    </View>
                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolthird}</Text>

                                    </View>
                                </View>
                            )

                        }} />


                    <View style={{ height: hp(6), marginTop: hp(8), width: '90%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#532280' }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, marginTop: hp(1), marginLeft: wp(3) }}>Admission Criteria & Eligibility</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: hp(0) }}
                        data={admissioncritearea}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (

                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '40%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280' }}>{item.keyschoolfirst}</Text>
                                    </View>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolsecond}</Text>

                                    </View>
                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolthird}</Text>

                                    </View>
                                </View>
                            )

                        }} />


                    <View style={{ height: hp(6), marginTop: hp(8), width: '90%', alignSelf: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#532280' }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18, marginTop: hp(1), marginLeft: wp(3) }}>Additional Information</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: hp(0), marginBottom: 40 }}
                        data={additionalinfo}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (

                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '40%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280' }}>{item.keyschoolfirst}</Text>
                                    </View>

                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolsecond}</Text>

                                    </View>
                                    <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', height: 30, width: '25%', alignSelf: 'center', borderColor: '#707070', borderWidth: 0.8 }}>
                                        <Text style={{ color: '#532280', fontWeight: 'bold' }}>{item.keyschoolthird}</Text>

                                    </View>
                                </View>
                            )

                        }} />

                </ScrollView>
            </View>



        );
    }
}
