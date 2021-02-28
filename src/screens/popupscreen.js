import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default class popupscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {



        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: 'center', position: 'absolute' }}>



                <View style={{ height: hp(41), width: '100%', borderRadius: 30, marginTop: hp(30) }}>

                    <LinearGradient colors={['#432164', '#9E71C7']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }} style={{ height: '100%', width: '100%', borderRadius: 30 }}>

                        <Image source={require('../utils/assets/Image/popupback.png')} style={{ height: 280, width: 415 }} />


                        <Text style={{ color: 'white', marginTop: hp(-35), textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Enter your standard</Text>


                        <View style={styles.middleselector}>

                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Typesearchscreen')}>

                            <View style={styles.continuebutton}>

                                <Text style={{ color: '#451D6A', fontsize: 22 }}>Continue</Text>

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
    middleselector: {
        height: 50, width: '90%', alignSelf: 'center', borderRadius: 35, borderColor: '#FFFFFF', borderWidth: 1.5, marginTop: hp(5)
    },
    continuebutton: {
        height: 50, justifyContent: 'center', alignItems: 'center', width: '35%', alignSelf: 'center', borderRadius: 35, backgroundColor: 'white', marginTop: hp(5)
    }



});