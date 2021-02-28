import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Joinadmis extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View
                    style={{
                        minHeight: 62,
                        alignItems: 'center',
                        paddingHorizontal: 8,
                        backgroundColor: '#532280',
                        flexDirection: 'row',
                    }}>
                    <View style={{ flex: 1.5 }}>
                        <View
                            style={{
                                flex: 1,
                                marginHorizontal: 16,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    borderBottomColor: 'yellow',
                                    borderBottomWidth: 1,
                                }}>
                                ENGLISH
              </Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>MATH</Text>

                            <Text
                                style={{
                                    //   flex: 1,
                                    color: 'white',
                                    fontSize: 16,
                                    //   borderBottomColor: 'yellow',
                                    //   borderBottomWidth: 1,
                                }}>
                                SCIENCE
              </Text>
                            <Image
                                source={require('../utils/assets/Image/infomation.png')}
                                style={{
                                    //   flex: 0.5,
                                    height: 14,
                                    width: 14,
                                    //   right: 20,
                                    marginRight: 10,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <View
                            style={{
                                backgroundColor: '#F2F3FA',
                                alignItems: 'center',
                                paddingTop: 20,
                            }}>
                            <Image
                                style={{
                                    width: 70,
                                    position: 'absolute',
                                    height: 20,
                                    right: 10,
                                    top: 10,
                                    marginTop: 10,
                                    resizeMode: 'contain',
                                }}
                                source={require('../utils/assets/Image/live_green.png')}
                            />
                            <Image
                                style={{
                                    width: 150,
                                    height: 270,
                                    resizeMode: 'contain',
                                }}
                                source={require('../utils/assets/Image/join_user.png')}
                            />
                        </View>

                        <View
                            style={{ backgroundColor: 'white', flex: 1, marginHorizontal: 16 }}>
                            <View
                                style={{
                                    marginHorizontal: 20,
                                    marginVertical: 20,
                                    //   backgroundColor: 'green',
                                }}>
                                <View
                                    style={{
                                        // backgroundColor: 'red',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                            color: '#9B3189',
                                        }}>
                                        Q1. How to learn?
                  </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                            color: '#262060',
                                        }}>
                                        1/15
                  </Text>
                                </View>
                                <View style={{ margin: 20 }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginVertical: 4,
                                            alignItems: 'center',
                                            //   backgroundColor: 'green',
                                        }}>
                                        <Image
                                            source={require('../utils/assets/Image/rectangle.png')}
                                            style={{
                                                height: 14,
                                                width: 14,
                                                //   right: 20,
                                                marginRight: 10,
                                                resizeMode: 'cover',
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#9B3189',
                                            }}>
                                            Answer 1
                    </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginVertical: 4,
                                            alignItems: 'center',
                                            //   backgroundColor: 'green',
                                        }}>
                                        <Image
                                            source={require('../utils/assets/Image/rectangle.png')}
                                            style={{
                                                height: 14,
                                                width: 14,
                                                //   right: 20,
                                                marginRight: 10,
                                                resizeMode: 'cover',
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#9B3189',
                                            }}>
                                            Answer 2
                    </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginVertical: 4,
                                            alignItems: 'center',
                                            //   backgroundColor: 'green',
                                        }}>
                                        <Image
                                            source={require('../utils/assets/Image/rectangle.png')}
                                            style={{
                                                height: 14,
                                                width: 14,
                                                //   right: 20,
                                                marginRight: 10,
                                                resizeMode: 'cover',
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#9B3189',
                                            }}>
                                            Answer 3
                    </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginVertical: 4,
                                            alignItems: 'center',
                                            //   backgroundColor: 'green',
                                        }}>
                                        <Image
                                            source={require('../utils/assets/Image/rectangle.png')}
                                            style={{
                                                height: 14,
                                                width: 14,
                                                //   right: 20,
                                                marginRight: 10,
                                                resizeMode: 'cover',
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#9B3189',
                                            }}>
                                            Answer 4
                    </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        backgroundColor: 'white',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 8,
                        flexDirection: 'row',
                        borderTopColor: 'grey',
                        borderTopWidth: 0.3,
                    }}>
                    <TouchableOpacity
                        style={{
                            padding: 14,
                            //   borderRadius: 30,
                            minHeight: 40,
                            alignSelf: 'center',
                            //   backgroundColor: '#F2F3FA',
                        }}
                        onPress={() => {
                           this.props.navigation.goBack()
                        }}>
                        {/* onPr  ess={this.setModalVisible(true)}> */}
                        <Text style={{ color: '#262060', textAlign: 'center', fontSize: 14 }}>
                            Back
            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            //   flex: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderRadius: 30,
                            //   minHeight: 40,
                            //   alignSelf: 'center',
                            backgroundColor: '#262060',
                        }}
                        onPress={() => {

                        }}>
                        {/* onPr  ess={this.setModalVisible(true)}> */}
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                            Next{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modeConatiner: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F6',
        height: hp(6),
        width: wp(27),
        borderRadius: 25,
    },
    modeViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        marginRight: 5,
    },
    modeTextConatainer: { fontSize: 18, fontWeight: 'bold', color: '#532280' },
    officialImageContainer: {
        height: 25,
        width: 50,
        marginLeft: wp(5),
        resizeMode: 'cover',
    },
    lineContainer: {
        height: 30,
        width: 60,

        marginLeft: wp(2),
        // resizeMode: 'contain',
    },
    backContainer: {
        flex: 1,
        backgroundColor: 'white',
        // opacity:1,
        alignItems: 'center',
        padding: 14,
        justifyContent: 'space-evenly',
        marginHorizontal: 4,
        borderRadius: 10,
        shadowColor: 'red',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
});
export default Joinadmis;
