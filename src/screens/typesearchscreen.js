import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default class popupscreen extends Component {
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
            <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', marginTop: hp(25), height: '100%', width: '100%' }}>
                {/* 
                <View style={{ flexDirection: 'row' }}>

                    <Image
                        source={require('../utils/assets/Image/masstorlogo.png')}
                        style={styles.mainlogo} />


                    <Image
                        source={require('../utils/assets/Image/notificationbell.png')}
                        style={styles.notificationbell} />


                </View> */}


                <View style={{ height: hp(41), width: '100%', backgroundColor: '#F2F3FA', borderRadius: 30 }}>

                    <FlatList
                        style={{ marginTop: hp(1) }}
                        showsHorizontalScrollIndicator={false}
                        data={schoolinfo}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => {

                            return (

                                <View style={{ flexDirection: 'row', marginTop: hp(1.5) }}>

                                    <Image source={require('../utils/assets/Image/Schoolimage_a.png')} style={{ height: 100, width: 100, borderRadius: 50, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 8 }} />
                                    <View style={{ marginTop: hp(2) }}>
                                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#9B3189', marginLeft: wp(8), marginTop: hp(2) }}>{item.schoolname}</Text>
                                        <Text style={{ fontSize: 15, color: '#9B3189', marginLeft: wp(8) }}>{item.schoollocation}</Text>


                                        <View style={{ width: 350, marginTop: hp(2), height: 1, backgroundColor: '#A8A4A4', marginLeft: wp(8) }}>

                                        </View>
                                    </View>

                                </View>
                            );
                        }} />
                   
                    <Text onPress={()=>this.props.navigation.navigate('Advancesearch')} style={{marginBottom:15,marginLeft:wp(7),fontStyle:'italic',color:'#9B3189',fontWeight:'bold',fontSize:15}}>Advanced Search?</Text>

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