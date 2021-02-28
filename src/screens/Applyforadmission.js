import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default class Applyforadmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ height: '100%' }}>

                <View style={{ height: '100%', backgroundColor: '#FDFDFE', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>

                    <View style={{ marginLeft: wp(10) }}>
                        <ScrollView>


                            <View style={{ flexDirection: 'row', marginTop: hp(5) }}>
                                <Text style={{ color: '#451D6A', fontSize: 17 }}>How to apply for admission</Text>
                                <View style={{ backgroundColor: '#532280', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 15, position: 'absolute', borderRadius: 25 }}>
                                    <Image source={require('../utils/assets/Image/close.png')} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                                </View>
                            </View>


                            <View style={{ marginTop: 20 }}>
                                <Image source={require('../utils/assets/Image/schoolsquare_a.png')} style={{ height: 150, width: '90%', resizeMode: 'contain', opacity: 0.5, borderRadius: 5, marginTop: hp(2) }}>

                                </Image>

                                <View style={{ backgroundColor: '#FFFFFF', height: 50, position: 'absolute', width: 50, borderRadius: 25, marginTop: hp(10), marginLeft: wp(10) }}></View>
                                <Image source={require('../utils/assets/Image/playvideo.png')} style={{ marginTop: hp(12.2), marginLeft: wp(14.3), resizeMode: 'contain', position: 'absolute' }} />

                                <Text style={{ color: '#FFFFFF', resizeMode: 'contain', fontWeight: 'bold', fontSize: 16, marginLeft: wp(25), marginTop: hp(10), position: 'absolute' }}>Watch Video</Text>
                                <Text style={{ color: '#FFFFFF', resizeMode: 'contain', fontWeight: 'bold', fontSize: 16, marginLeft: wp(25), marginTop: hp(13), position: 'absolute' }}>How Admission Process works</Text>

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: hp(8) }}>

                                <View>
                                    <LinearGradient colors={['#432164', '#9E71C7']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }} style={styles.feebox}>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: '#00FF11', marginTop: hp(2), marginLeft: wp(2) }}>Online class</Text>
                                            <Text style={{ color: '#FFFFFF', marginTop: hp(2), marginLeft: wp(2), fontWeight: 'bold' }}>20%</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', marginTop: hp(-1) }}>
                                            <Text style={{ color: '#FFFFFF', marginTop: hp(2), marginLeft: wp(2) }}>Cheaper than</Text>
                                            <Text style={{ color: '#00FF11', marginTop: hp(2), marginLeft: wp(2), fontWeight: 'bold' }}>Offline</Text>

                                        </View>

                                        <View style={{ flexDirection: 'row', marginTop: hp(-1) }}>
                                            <Text style={{ color: '#FFFFFF', marginTop: hp(2), marginLeft: wp(2), fontWeight: 'bold' }}>Save </Text>
                                            <Text style={{ color: '#FFFFFF', marginTop: hp(2), marginLeft: wp(2) }}>₹ 1720</Text>

                                        </View>

                                        <Text style={{ color: '#FFFFFF', marginTop: hp(2), marginLeft: wp(2), fontSize: 10 }}>People Interested 2382</Text>


                                    </LinearGradient>

                                </View>

                                <View style={styles.feebox_second}>

                                    <Text style={{ marginTop: hp(2), marginLeft: wp(2), color: '#532280' }}>Offline Class</Text>
                                    <Text style={{ marginTop: hp(1), marginLeft: wp(2), color: '#532280', fontWeight: 'bold', fontStyle: 'italic', fontSize: 17 }}>₹ 2500</Text>
                                    <Text style={{ marginTop: hp(4), fontSize: 12, marginLeft: wp(2), color: '#532280' }}>People Interested 1500</Text>

                                </View>


                            </View>

                            <Text style={{ marginTop: hp(4), fontSize: 17, marginLeft: wp(2), color: '#532280' }}>Online Admission Procedure</Text>

                            <Text style={{ marginTop: hp(4), fontSize: 14, marginLeft: wp(2), color: '#9B3189' }}>1- Apply for Admission.</Text>
                            <Text style={styles.textlist}>2- Complete KYC/Submit Documents.</Text>
                            <Text style={styles.textlist}>3- Wait for your Application/Request to approve from
School.</Text>
                            <Text style={styles.textlist}>4- Pay Admission Test Fee.(If Approved)</Text>
                            <Text style={styles.textlist}>5- Appear for Admission Test.</Text>
                            <Text style={styles.textlist}>6- Wait for Results.</Text>
                            <Text style={styles.textlist}>7- Pay Your Admission Fee, (If Passed).</Text>
                            <Text style={styles.textlist}>8- Get your Classroom Credentials.</Text>
                            <Text style={styles.textlist}>9- Loin to your Class/School.</Text>
                            <Text style={styles.textlist}>10- Attend Classes.</Text>

                        </ScrollView>


                    </View>

                </View>






                <View style={{ backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', bottom: 0, position: 'absolute', height: 60, width: '100%', shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 9, flexDirection: 'row' }}>

                        <View style={styles.button}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }}>Admission Entrance Test</Text>
                        </View>





                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({

    feebox: {

        height: hp(18),
        width: wp(39),
        borderRadius: 20,
        marginRight: wp(8)
    },
    feebox_second: {

        height: hp(18),
        width: wp(39),
        borderRadius: 20,
        borderColor: '#000000', borderWidth: 1.5, borderRadius: 20
    },
    textlist: {
        marginTop: hp(1.5), fontSize: 14, marginLeft: wp(2), color: '#9B3189'
    },
    button: {
        backgroundColor: '#532280',
        height: 40,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }

});