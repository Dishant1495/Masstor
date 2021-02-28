import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

class KYC extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    KycRejeacted = () => {
        this.props.navigation.navigate('KycRejeacted');
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        minHeight: 62,
                        alignItems: 'center',
                        paddingHorizontal: 8,
                        backgroundColor: '#F2F3FA',
                        flexDirection: 'row',
                    }}>
                    <View style={{ flex: 1.5 }}>
                        <Image
                            style={{
                                width: 18,
                                height: 18,
                                marginHorizontal: 16,
                                resizeMode: 'contain',
                            }}
                            source={require('../utils/assets/Image/header_users.png')}
                        />
                    </View>

                    <View style={{ flex: 8 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#532280' }}>
                            Complete KYC Process
            </Text>
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <Image
                            source={require('../utils/assets/Image/back_arrow.png')}
                            style={{
                                height: 24,
                                width: 24,
                                //   right: 20,
                                resizeMode: 'cover',
                            }}
                        />
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <View style={{ flex: 1, margin: 20 }}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#532280',
                                fontWeight: 'bold',
                            }}>
                            Submit your below Documents
                    </Text>

                        <View style={styles.spaceContainer}>
                            <Text style={styles.textContainer}>Birth Certificate*</Text>
                            <View
                                style={{
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        // alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 14, color: 'green' }}>
                                        /certificate.jpeg
                  </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 5,
                                        backgroundColor: '#262060',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        Upload
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.spaceContainer}>
                            <Text style={styles.textContainer}>Birth Certificate*</Text>
                            <View
                                style={{
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        // alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 14, color: 'green' }}>
                                        {/* /certificate.jpeg */}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 5,
                                        backgroundColor: '#9B3189',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        Upload
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.spaceContainer}>
                            <Text style={styles.textContainer}>
                                Progress Report of Previous class (Class I upwards)*
              </Text>
                            <View
                                style={{
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        // alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 14, color: 'green' }}>
                                        {/* /certificate.jpeg */}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 5,
                                        backgroundColor: '#9B3189',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        Upload
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.spaceContainer}>
                            <Text style={styles.textContainer}>
                                Two latest passport size-coloured photographs (Parents)*
              </Text>
                            <View
                                style={{
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        // alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 14, color: 'green' }}>
                                        {/* /certificate.jpeg */}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 5,
                                        backgroundColor: '#9B3189',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        Upload
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.spaceContainer}>
                            <Text style={styles.textContainer}>
                                Transfer Certificate (from Class I onwards)*
              </Text>
                            <View
                                style={{
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        // alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 14, color: 'green' }}>
                                        {/* /certificate.jpeg */}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 5,
                                        backgroundColor: '#9B3189',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: 'white',
                                        }}>
                                        Upload
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 8,
                            borderTopColor: 'grey',
                            borderTopWidth: 0.3,
                        }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                padding: 14,
                                borderRadius: 30,
                                width: '90%',
                                minHeight: 40,
                                alignSelf: 'center',
                                backgroundColor: '#262060',
                            }}
                            onPress={this.KycRejeacted}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                                Submit & Wait for Approval
              </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // backgroundColor: 'red',
    },
    oval: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        transform: [{ scaleX: 2 }],
        position: 'absolute',
    },
    spaceContainer: {
        marginTop: '5%',
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        maxHeight: 35,
        marginTop: 10,
        color: '#9B3189',
        fontSize: 20,
        // padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textContainer: {
        color: '#9B3189',
        marginBottom: 14,
    },
    saveContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 15,
        borderWidth: 0.2,
        borderColor: 'grey',
    },
};
export default KYC;
