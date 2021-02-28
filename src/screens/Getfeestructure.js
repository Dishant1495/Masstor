import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default class Getfeestructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        // const {navigation}=this.props;

        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', position: 'absolute' }}>

                {/* <View style={{ flexDirection: 'row' }}>

                    <Image
                        source={require('../utils/assets/Image/masstorlogo.png')}
                        style={styles.mainlogo} />


                    <Image
                        source={require('../utils/assets/Image/notificationbell.png')}
                        style={styles.notificationbell} />


                </View> */}


                <View style={{ height: hp(65), width: '90%',alignSelf:'center', borderRadius: 30, marginTop: hp(0) }}>

                    <LinearGradient colors={['#432164', '#9E71C7']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }} style={{ height: '100%', width: '100%', borderRadius: 30 }}>

                        <Image source={require('../utils/assets/Image/longfeeback.png')} style={{height:'100%',width:'100%'}}/>


                        <Text style={{ color: 'white', marginTop: hp(-60), textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Get Fees Structure</Text>


                        <View style={styles.enterdetail}>

                            <TextInput placeholder="Enter Your Name"
                                placeholderTextColor={'#FFFFFF'}
                                style={{ paddingLeft: 15 }} />

                        </View>



                        <View style={styles.enterdetail}>

                            <TextInput placeholder="Enter Email"
                                placeholderTextColor={'#FFFFFF'}
                                style={{ paddingLeft: 15 }} />

                        </View>



                        <View style={styles.enterdetail}>

                            <TextInput placeholder=" Enter Mobile Number"
                                placeholderTextColor={'#FFFFFF'}
                                style={{ paddingLeft: 15 }} />

                        </View>


                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Typesearchscreen')}>

                            <View style={styles.continuebutton}>

                                <Text style={{ color: '#451D6A', fontsize: 22 }}>Download</Text>

                            </View>

                        </TouchableOpacity>



                    </LinearGradient>

                </View>



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
    enterdetail: {
        height: 50, width: '90%', alignSelf: 'center', borderRadius: 12, borderColor: '#FFFFFF', borderWidth: 1.5, marginTop: hp(5)
    },
    continuebutton: {
        height: 50, justifyContent: 'center', alignItems: 'center', width: '35%', alignSelf: 'center', borderRadius: 35, backgroundColor: 'white', marginTop: hp(5)
    }



});