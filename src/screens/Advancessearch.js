import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';

export default class Advancedsearch extends Component {
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
                schoollocation: "Noida, UP"
            },
            {
                schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
                schoolname: "K.R. Mangalam World School",
                schoollocation: "Noida, UP"
            },

        ]
        return (
            <View style={{ backgroundColor: '#FDFDFE', height: '100%', width: '100%', justifyContent: 'center', position: 'absolute' }}>
                <ScrollView>

                    <View style={{ marginLeft: wp(8) }}>


                        <View style={{ flexDirection: 'row', }}>

                            <Image
                                source={require('../utils/assets/Image/masstorlogo.png')}
                                style={styles.mainlogo} />


                            <Image
                                source={require('../utils/assets/Image/notificationbell.png')}
                                style={styles.notificationbell} />


                        </View>

                        <View style={styles.searchbox}>

                            {/* <Text style={{ color: '#532280', fontSize: 14, fontWeight: 'bold', marginLeft: wp(5) }}>Search City</Text> */}

                            <TextInput
                                placeholderTextColor="#9B3189"
                                placeholder="Search City"
                                style={{ left: 0, position: 'absolute', paddingLeft: 15 }} />

                            <Image
                                style={styles.searchicon}
                                resizeMode="contain"
                                source={require('../utils/assets/Image/searchicon.png')} />

                        </View>
                    </View>



                    <View style={{ height: '80%', width: '100%', backgroundColor: '#F2F3FA', borderTopLeftRadius: 30, borderTopRightRadius: 30, }}>

                        <View style={{ marginLeft: wp(10) }}>
                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}>Standard</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('Editprofile')}>

                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                        <Text style={{ color: '#9B3189' }}>Nur</Text>
                                    </View>

                                    <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                        <Text style={{ color: '#9B3189' }}>KG</Text>
                                    </View>
                                    <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                        <Text style={{ color: '#9B3189' }}>I</Text>
                                    </View>
                                    <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                        <Text style={{ color: '#9B3189' }}>II</Text>
                                    </View>
                                    <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                        <Text style={{ color: '#9B3189' }}>III</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>IV</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>V</Text>
                                </View>
                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>VI</Text>
                                </View>
                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>VII</Text>
                                </View>
                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>VIII</Text>
                                </View>

                            </View>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>IX</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>X</Text>
                                </View>

                            </View>

                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}>Board</Text>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>CBSE</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>CISCE</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>IGCSE</Text>
                                </View>
                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>IB</Text>
                                </View>
                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 85, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>State Board</Text>
                                </View>

                            </View>



                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Dubai</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Kindergarten</Text>
                                </View>
                            </View>


                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}>Learning Mode</Text>


                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Online</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Offline</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Both</Text>
                                </View>
                            </View>

                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}>School Type</Text>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 55, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Private</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Private Aided</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Govt</Text>
                                </View>
                            </View>

                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}>School Format</Text>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 75, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Girls only</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Boys only</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 95, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Both</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}> CO-ED Status</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 85, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Day School</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 125, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Boarding School</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 140, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Day Boarding School</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 160, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Disabled Friendly School</Text>
                                </View>
                            </View>

                            <Text style={{ fontSize: 18, marginTop: hp(2), color: '#532280', fontWeight: 'bold' }}>Language of intruction</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 65, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>English</Text>
                                </View>

                                <View style={{ height: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center', width: 65, marginTop: 12, borderRadius: 30, borderColor: '#9B3189', borderWidth: 1.3 }}>
                                    <Text style={{ color: '#9B3189' }}>Hindi</Text>
                                </View>
                            </View>
                        </View>


                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainlogo: {
        width: wp(23), height: 25, marginLeft: wp(5), marginTop: hp(3.12), resizeMode: 'contain'
    },
    notificationbell: {

        width: 15, height: 19, marginTop: hp(3.12), right: 30, position: 'absolute'
    },
    middleselector: {
        height: 50, width: '90%', alignSelf: 'center', borderRadius: 35, borderColor: '#FFFFFF', borderWidth: 1.5, marginTop: hp(5)
    },
    continuebutton: {
        height: 50, justifyContent: 'center', alignItems: 'center', width: '35%', alignSelf: 'center', borderRadius: 35, backgroundColor: 'white', marginTop: hp(5)
    },
    searchicon: {
        right: 10, position: 'absolute'
    },
    searchbox: {
        flexDirection: 'row', backgroundColor: '#FFFFFF', height: 40, paddingLeft: 15, marginTop: hp(5), marginBottom: hp(5), borderColor: 'black', borderRadius: 25, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center', width: '90%'
    }



});