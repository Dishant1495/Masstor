import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

class PayAdmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible: false,
        };
    }

    pmClick = () => {
        alert('pmClick');
    };

    amClick = () => {
        alert('amClick');
    };

    KycRejeacted = () => {
        this.props.navigation.navigate('PaymentMethod');
    };

    showDatePicker = () => {
        // setDatePickerVisibility(true);
        this.setState({ isDatePickerVisible: !this.state.isDatePickerVisible });
    };

    hideDatePicker = () => {
        // setDatePickerVisibility(false);
        this.setState({ isDatePickerVisible: false });
    };

    handleConfirm = (date) => {
        console.warn('A date has been picked: ', date);
        hideDatePicker();
    };

    showTimePicker = () => {
        // setDatePickerVisibility(true);
        this.setState({ isTimePickerVisible: !this.state.isTimePickerVisible });
    };

    hideTimePicker = () => {
        // setDatePickerVisibility(false);
        this.setState({ isTimePickerVisible: false });
    };

    handleTimeConfirm = (time) => {
        console.warn('A time has been picked: ', time);
        hideTimePicker();
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

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ marginHorizontal: 16, marginVertical: 30 }}>
                        <Text style={{ fontSize: 18, color: '#532280', fontWeight: 'bold' }}>
                            Schedule your Admission Test
            </Text>

                        <Text
                            style={{
                                color: '#9B3189',
                                marginVertical: 20,
                            }}>
                            Select Date
            </Text>
                        <TouchableOpacity
                            style={{
                                borderRadius: 10,
                                flexDirection: 'row',
                                backgroundColor: '#F2F3FA',
                            }}
                            onPress={this.showDatePicker}>
                            <View
                                style={{
                                    height: 40,
                                    flex: 8,
                                    fontSize: 20,
                                    justifyContent: 'center',
                                    paddingHorizontal: 16,
                                    // alignItems: 'center',
                                }}>
                                <Text style={{ fontSize: 14, color: '#532280' }}>
                                    MM-DD-YYYY{' '}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    borderRadius: 30,
                                    flex: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={this.showDatePicker}>
                                <Image
                                    source={require('../utils/assets/Image/bottom_arrow.png')}
                                    style={{
                                        height: 10,
                                        width: 10,
                                        //   right: 20,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <DateTimePickerModal
                            isVisible={this.state.isDatePickerVisible}
                            mode="date"
                            onConfirm={this.handleConfirm}
                            onCancel={this.hideDatePicker}
                        />
                        <DateTimePickerModal
                            isVisible={this.state.isTimePickerVisible}
                            mode="time"
                            onConfirm={this.handleTimeConfirm}
                            onCancel={this.hideTimePicker}
                        />
                        <Text
                            style={{
                                color: '#9B3189',
                                marginVertical: 20,
                            }}>
                            Select Time
            </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 10,
                                    marginRight: 20,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}
                                onPress={this.showTimePicker}>
                                <View
                                    style={{
                                        height: 40,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        // alignItems: 'center',
                                    }}>
                                    <Text style={{ fontSize: 14, color: '#532280' }}>00:00</Text>
                                </View>
                            </TouchableOpacity>

                            <View
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    backgroundColor: '#F2F3FA',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        height: 40,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        borderRadius: 10,
                                        // backgroundColor: '#532280',
                                    }}
                                    onPress={this.amClick}>
                                    <Text style={{ fontSize: 14, color: '#532280' }}>AM</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        height: 40,
                                        fontSize: 20,
                                        justifyContent: 'center',
                                        paddingHorizontal: 16,
                                        borderRadius: 10,
                                        // alignItems: 'center',
                                        backgroundColor: '#532280',
                                    }}
                                    onPress={this.pmClick}>
                                    <Text style={{ fontSize: 14, color: 'white' }}>PM</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: 'blue',
                                    marginVertical: 20,
                                    marginRight: 3,
                                    fontWeight: 'bold',
                                }}>
                                Reschedule
              </Text>
                            <Text
                                style={{
                                    color: '#9B3189',
                                    marginVertical: 20,
                                    fontWeight: 'bold',
                                }}>
                                your admission test timeing
              </Text>
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
                            width: '87%',
                            minHeight: 40,
                            alignSelf: 'center',
                            backgroundColor: '#262060',
                        }}
                        onPress={this.KycRejeacted}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                            Continue with Payment
            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'red',
    },
};
export default PayAdmission;
