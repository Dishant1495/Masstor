import CheckBox from '@react-native-community/checkbox';
import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, TextInput } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        minHeight: 55,
                        alignItems: 'center',
                        backgroundColor: 'white',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity onPress={() => console.log("AA")}>
                        <Image
                            style={{
                                width: 18,
                                height: 18,
                                marginHorizontal: 16,
                                resizeMode: 'contain',
                            }}
                            source={require('../utils/assets/Image/arrow.png')}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#532280' }}>
                            Apply for Admission
            </Text>
                    </View>

                    <Image
                        source={require('../utils/assets/Image/infomation.png')}
                        style={{
                            height: 16,
                            width: 16,
                            margin: wp(5),
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            margin: 16,
                            marginBottom: '20%',
                        }}>
                        <Text style={{ maxHeight: 100, marginTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.
            </Text>

                        <View style={{ marginTop: 15 }}>
                            <Text
                                style={{ fontWeight: 'bold', fontSize: 20, color: '#532280' }}>
                                Complete your application form
              </Text>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>First Name</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                    <Text style={{ flex: 1, fontWeight: 'bold' }}>Edit</Text>
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>Last Name</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                    <Text style={{ flex: 1, fontWeight: 'bold' }}>Edit</Text>
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>
                                    Mobile Number or Email address
                </Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                    <Text style={{ flex: 1, fontWeight: 'bold' }}>Edit</Text>
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>OTP Verification</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>Qualification</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>Standard</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                    <Text style={{ flex: 1, fontWeight: 'bold' }}>Edit</Text>
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>I Am</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>
                                    Parents/Guardian Phone Number
                </Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>Occupation</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>State</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View style={styles.spaceContainer}>
                                <Text style={styles.textContainer}>City</Text>
                                <View
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            flex: 8,
                                            fontSize: 20,
                                            alignItems: 'center',
                                        }}
                                        onChangeText={(text) => this.setState({ value: text })}
                                        value={this.state.value}
                                        placeholderTextColor={'#9B3189'}
                                        placeholder="xxxxxx"
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 8,
                                    alignItems: 'center',
                                }}>
                                <CheckBox></CheckBox>
                                <Text style={{ color: 'red' }}>Team & Condition applied*</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        padding: 8,
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 30,
                            width: '90%',
                            alignSelf: 'center',
                            backgroundColor: '#262060',
                        }}
                        onPress={() => this.props.navigation.navigate("KYC")}
                        >
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                            Continue for KYC Process
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
        color: '#532280',
        marginBottom: 8,
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
export default Apply;
