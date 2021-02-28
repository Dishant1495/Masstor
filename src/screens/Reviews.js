import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, TextInput, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import keyboardawarescrollview, { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Reviews extends Component {
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

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Criteria</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Admission')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>Admission</Text>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={navigation.navigate('Faqs')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15, marginRight: 15 }}>FAQs</Text>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={navigation.navigate('Reviews')}>

                                    <Text style={{ color: '#9B3189', fontSize: 15,fontWeight: 'bold' ,marginRight: 15 }}>Reviews</Text>

                                </TouchableOpacity>                    
                                        </ScrollView>

                        </View>

                        <Text style={{ color: '#451D6A', marginTop: hp(4), fontSize: 17 }}>People talk about School</Text>

                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ height: 70, width: 70, backgroundColor: '#F2F3FA', borderRadius: 40, marginTop: hp(5) }}>
                                <Image source={require('../utils/assets/Image/staffimage.png')} />
                            </View>
                            <View>
                                <Text style={{ color: '#451D6A', fontSize: 18, marginTop: hp(7), marginLeft: wp(3), fontWeight: '800' }}>Aman Sagar</Text>
                                <Text style={{ color: '#451D6A', fontSize: 15, marginTop: hp(0), marginLeft: wp(3), fontWeight: '800' }}>Student</Text>

                            </View>

                            <View>
                                <Image source={require('../utils/assets/Svg/rating.svg')} style={{ marginTop: hp(8), height: 28, width: 28, left: 90, position: 'absolute', resizeMode: 'contain' }} />
                                <Text style={{ color: '#451D6A', fontSize: 25, left: 120, marginTop: hp(7.5), fontWeight: 'bold', fontStyle: 'italic', position: 'absolute' }}>4.5</Text>
                            </View>

                        </View>

                        <Text style={{ marginTop: hp(3), fontSize: 14, color: '#9B3189' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Text>

                        <View style={{ backgroundColor: '#FFFFFF', marginVertical: hp(5), flexDirection: 'row', height: 45, width: '95%', borderRadius: 25, borderColor: '#707070', borderWidth: 1.5 }}>

                            <View style={{ backgroundColor: '#F2F3FA', height: 30, width: 30, marginTop: hp(1), marginLeft: wp(2), borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../utils/assets/Image/man.png')} style={{ height: 25, width: 25, marginTop: 10, resizeMode: 'contain' }} />
                            </View>

                            {/* <Text style={{fontWeight:'bold',fontSize:14,marginTop:hp(2),marginLeft:wp(2)}}>Write your comment...……….</Text> */}

                            <TextInput
                                placeholderTextColor={'#532280'}
                                placeholder="Write your comment...………." />
                            <Image source={require('../utils/assets/Svg/writecomment.svg')} style={{ resizeMode: 'contain', height: 35, width: 22, right: 20, marginTop: hp(0.5), position: 'absolute' }} />

                        </View>


                        <Text style={{ color: '#532280', fontWeight: 'bold', fontSize: 17 }}>Rate this School!</Text>

                        <View style={{ height: 15, width: '90%', marginTop: hp(3), borderRadius: 17, borderColor: '#707070', borderWidth: 1.2 }}>

                            <View style={{ height: 17, width: 17, borderRadius: 25, backgroundColor: '#9B3189' }}>

                            </View>

                        </View>



                        <View style={{ flexDirection: 'row', marginTop: hp(2) }}>

                            <View style={styles.reviewview}>
                                <Text style={{ color: '#532280', fontSize: 15, fontWeight: 'bold' }}>1</Text>
                            </View>
                            <View style={styles.reviewview}>
                                <Text style={{ color: '#532280', fontSize: 15, fontWeight: 'bold', }}>2</Text>
                            </View>
                            <View style={styles.reviewview}>
                                <Text style={{ color: '#532280', fontSize: 15, fontWeight: 'bold' }}>3</Text>
                            </View>
                            <View style={styles.reviewview}>
                                <Text style={{ color: '#532280', fontSize: 15, fontWeight: 'bold' }}>4</Text>
                            </View>
                            <View style={styles.reviewview}>
                                <Text style={{ color: '#532280', fontSize: 15, fontWeight: 'bold' }}>5</Text>
                            </View>


                        </View>

                        <TouchableOpacity onPress={navigation.navigate('Reviewscommentadd')}>
                            <View style={styles.submitbutton}>
                                <Text style={{ color: '#FFFFFF' }}>Submit</Text>
                            </View>

                        </TouchableOpacity>





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

const styles = StyleSheet.create({

    reviewview: {
        height: 40, width: 40, borderRadius: 40, borderColor: '#532280', marginHorizontal: wp(3), borderWidth: 1.5, justifyContent: 'center', alignItems: 'center'
    },
    submitbutton: {
        height: 40,
        width: '40%',
        backgroundColor: '#532280',
        borderRadius: 25,
        alignSelf: 'center',
        marginLeft: wp(-10),
        marginVertical: hp(7), justifyContent: 'center',
        alignItems: 'center'
    }

});