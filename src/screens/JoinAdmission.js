import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

class JoinAdmission extends Component {
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


        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
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
                            Your exam will be schedule
            </Text>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ marginHorizontal: 16, marginBottom: '23%' }}>
                        <Text style={{ fontSize: 27, textAlign: 'center', color: '#532280' }}>
                            Time Left
            </Text>

                        <Text
                            style={{
                                fontSize: 27,
                                textAlign: 'center',
                                color: '#532280',
                                fontWeight: 'bold',
                            }}>
                            2 Days 23 Mins
            </Text>

                        <Image
                            style={{
                                width: 300,
                                height: 200,
                                marginVertical: '10%',
                                resizeMode: 'cover',
                            }}
                            source={require('../utils/assets/Image/girls.png')}
                        />

                        <Text
                            style={{
                                fontSize: 14,
                                // textAlign: 'center',
                                marginHorizontal: 16,
                                color: '#9B3189',
                            }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co{' '}
                        </Text>
                    </View>
                </View>

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
                            marginVertical: 10,
                            alignSelf: 'center',
                            backgroundColor: '#F2F3FA',
                        }}
                        onPress={() => {
                            this.props.navigation.navigate("Entrance")
                        }}>
                        {/* onPr  ess={this.setModalVisible(true)}> */}
                        <Text style={{ color: '#532280', textAlign: 'center', fontSize: 14 }}>
                            Give Test
            </Text>
                    </TouchableOpacity>
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
                        }}>
                        {/* onPr  ess={this.setModalVisible(true)}> */}
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                            Check Preview Test
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
export default JoinAdmission;
