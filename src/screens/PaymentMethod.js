import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    ScrollView
} from 'react-native';

class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            modalVisible: false,
        };
    }

    creditCardClick = () => {
        this.setState({ visible: !this.state.visible });
        // alert('creditCardClick');
    };

    onPayClick = () => { };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    };

    render() {
        const { modalVisible } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View
                                style={{
                                    flex: 1,
                                    // margin: 8,
                                    width: '100%',
                                    borderColor: 'white',
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                {/* <Text style={styles.modalText}>Hello World!</Text> */}

                                {/* <View style={{flex: 1.5}}> */}
                                <Image
                                    style={{
                                        width: 190,
                                        height: 130,
                                        margin: 16,
                                        marginHorizontal: 16,
                                        resizeMode: 'contain',
                                    }}
                                    source={require('../utils/assets/Image/celebration.png')}
                                />
                                {/* </View/> */}

                                <Text
                                    style={{ marginVertical: 16, fontSize: 20, color: 'white' }}>
                                    Congratulations
                </Text>

                                <Text
                                    style={{
                                        marginVertical: 8,
                                        textAlign: 'center',
                                        fontSize: 16,
                                        color: 'white',
                                    }}>
                                    Your payment is successfully done.
                </Text>

                                <TouchableHighlight
                                    style={{
                                        ...styles.openButton,
                                        margin: 16,
                                        backgroundColor: 'white',
                                    }}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                        this.props.navigation.navigate("JoinAdmission")
                                    }}>
                                    <Text style={styles.textStyle}>Download Payment Recipt</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
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
                                width: 22,
                                height: 22,
                                marginHorizontal: 16,
                                resizeMode: 'contain',
                            }}
                            source={require('../utils/assets/Image/back_arrow.png')}
                        />
                    </View>

                    <View style={{ flex: 8 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#532280' }}>
                            Pay Admission Test Fees
            </Text>
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <Image
                            source={require('../utils/assets/Image/infomation.png')}
                            style={{
                                height: 14,
                                width: 14,
                                //   right: 20,
                                resizeMode: 'cover',
                            }}
                        />
                    </View>
                </View>

                <ScrollView>
                    <View style={{ flex: 1, marginBottom: '20%' }}>
                        <View style={{ marginHorizontal: 16, marginVertical: 30 }}>
                            <Text
                                style={{ fontSize: 18, color: '#532280', fontWeight: 'bold' }}>
                                Checkout
              </Text>

                            <View
                                style={{
                                    height: 70,
                                    borderRadius: 20,

                                    marginTop: 20,
                                    fontSize: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#9B3189',
                                    //  shadowColor: 'red',
                                }}>
                                <Text style={{ fontSize: 14, color: 'white' }}>
                                    Order Summary
                </Text>
                            </View>

                            <Text
                                style={{
                                    fontSize: 18,
                                    marginTop: 25,
                                    marginBottom: 8,
                                    color: '#532280',
                                    fontWeight: 'bold',
                                }}>
                                Choose a Payment Methods
              </Text>

                            <TouchableOpacity
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    backgroundColor: this.state.visible ? '#262060' : 'white',
                                    marginVertical: 16,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12,
                                }}
                                onPress={this.creditCardClick}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: '#9B3189',
                                            color: this.state.visible ? 'white' : '#9B3189',
                                        }}>
                                        Credit/Debit Card
                  </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={this.creditCardClick}>
                                    {this.state.visible ? (
                                        <Image
                                            source={require('../utils/assets/Image/arrow_bottom.png')}
                                            style={{
                                                height: 10,
                                                width: 10,
                                                //   right: 20,
                                                resizeMode: 'contain',
                                            }}
                                        />
                                    ) : (
                                            <Image
                                                source={require('../utils/assets/Image/arrow_right.png')}
                                                style={{
                                                    height: 10,
                                                    width: 10,
                                                    //   right: 20,
                                                    resizeMode: 'contain',
                                                }}
                                            />
                                        )}
                                </TouchableOpacity>
                            </TouchableOpacity>
                            {this.state.visible ? (
                                <View style={{ flex: 1, marginHorizontal: 4 }}>
                                    <Text
                                        style={{
                                            color: '#532280',
                                            marginVertical: 16,
                                        }}>
                                        Card Number*
                  </Text>
                                    <View
                                        style={{
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            backgroundColor: 'white',
                                            // marginVertical: 8,
                                            backgroundColor: '#F2F3FA',
                                        }}>
                                        <View
                                            style={{
                                                height: 40,
                                                flex: 9.4,
                                                fontSize: 20,
                                                justifyContent: 'center',
                                                paddingHorizontal: 16,
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    color: '#9B3189',
                                                }}>
                                                0000 0000 0000 0000
                      </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={{
                                                borderRadius: 30,
                                                flex: 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                            <Image
                                                source={require('../utils/assets/Image/success_green.png')}
                                                style={{
                                                    height: 14,
                                                    width: 14,
                                                    //   right: 20,
                                                    resizeMode: 'contain',
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1, marginRight: 20 }}>
                                                <Text
                                                    style={{
                                                        color: '#532280',
                                                        marginVertical: 16,
                                                    }}>
                                                    Expiration Date*
                        </Text>
                                                <View
                                                    style={{
                                                        borderRadius: 10,
                                                        flexDirection: 'row',
                                                        backgroundColor: 'white',
                                                        // marginVertical: 8,
                                                        backgroundColor: '#F2F3FA',
                                                    }}>
                                                    <View
                                                        style={{
                                                            height: 40,
                                                            flex: 9.4,
                                                            fontSize: 20,
                                                            justifyContent: 'center',
                                                            paddingHorizontal: 16,
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                color: '#9B3189',
                                                            }}>
                                                            MM / YY
                            </Text>
                                                    </View>

                                                    <TouchableOpacity
                                                        style={{
                                                            borderRadius: 30,
                                                            flex: 0.3,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                        <Image
                                                            source={require('../utils/assets/Image/success_green.png')}
                                                            style={{
                                                                height: 14,
                                                                width: 14,
                                                                //   right: 20,
                                                                resizeMode: 'contain',
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                            <View style={{ flex: 1 }}>
                                                <Text
                                                    style={{
                                                        color: '#532280',
                                                        marginVertical: 16,
                                                    }}>
                                                    CVV*
                        </Text>
                                                <View
                                                    style={{
                                                        borderRadius: 10,
                                                        flexDirection: 'row',
                                                        backgroundColor: 'white',
                                                        // marginVertical: 8,
                                                        backgroundColor: '#F2F3FA',
                                                    }}>
                                                    <View
                                                        style={{
                                                            height: 40,
                                                            flex: 9.4,
                                                            fontSize: 20,
                                                            justifyContent: 'center',
                                                            paddingHorizontal: 16,
                                                        }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 14,
                                                                color: '#9B3189',
                                                            }}>
                                                            ----
                            </Text>
                                                    </View>

                                                    <TouchableOpacity
                                                        style={{
                                                            borderRadius: 30,
                                                            flex: 0.3,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}>
                                                        <Image
                                                            source={require('../utils/assets/Image/success_green.png')}
                                                            style={{
                                                                height: 14,
                                                                width: 14,
                                                                //   right: 20,
                                                                resizeMode: 'contain',
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, marginVertical: 4 }}>
                                        <Text
                                            style={{
                                                color: '#532280',
                                                marginVertical: 16,
                                            }}>
                                            Card Holder's Name*
                    </Text>
                                        <View
                                            style={{
                                                borderRadius: 10,
                                                flexDirection: 'row',
                                                backgroundColor: 'white',
                                                // marginVertical: 8,
                                                backgroundColor: '#F2F3FA',
                                            }}>
                                            <View
                                                style={{
                                                    height: 40,
                                                    flex: 9.4,
                                                    fontSize: 20,
                                                    justifyContent: 'center',
                                                    paddingHorizontal: 16,
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        color: '#9B3189',
                                                    }}>
                                                    Enter Card Holder Name
                        </Text>
                                            </View>

                                            <TouchableOpacity
                                                style={{
                                                    borderRadius: 30,
                                                    flex: 0.3,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                <Image
                                                    source={require('../utils/assets/Image/success_green.png')}
                                                    style={{
                                                        height: 14,
                                                        width: 14,
                                                        //   right: 20,
                                                        resizeMode: 'contain',
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ) : null}
                            <View
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    marginVertical: 8,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12,
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: '#9B3189',
                                        }}>
                                        Net Banking
                  </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={require('../utils/assets/Image/arrow_right.png')}
                                        style={{
                                            height: 10,
                                            width: 10,
                                            //   right: 20,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    backgroundColor: 'white',
                                    marginVertical: 8,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12,
                                }}>
                                <View
                                    style={{
                                        height: 40,
                                        flex: 8,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            color: '#9B3189',
                                        }}>
                                        UPI
                  </Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        borderRadius: 30,
                                        flex: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={require('../utils/assets/Image/arrow_right.png')}
                                        style={{
                                            height: 10,
                                            width: 10,
                                            //   right: 20,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        backgroundColor: 'white',
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
                            width: '87%',
                            minHeight: 40,
                            alignSelf: 'center',
                            backgroundColor: '#262060',
                        }}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        {/* onPr  ess={this.setModalVisible(true)}> */}
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                            Pay ₹ 500
            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 22,
        // backgroundColor:'red'
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        height: '70%',
        backgroundColor: '#A97BD3',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 10,

        elevation: 2,
    },
    textStyle: {
        color: '#532280',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default PaymentMethod;
