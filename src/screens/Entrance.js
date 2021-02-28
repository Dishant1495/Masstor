import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Entrance extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <ScrollView>
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
                <Image
                  style={{
                    width: 22,
                    height: 22,
                    marginHorizontal: 16,
                    resizeMode: 'contain',
                  }}
                  source={require('../utils/assets/Image/white_arrow.png')}
                />
              </View>

              <View style={{ flex: 8 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                  Entrance Test
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

            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  //   marginBottom: '20%',
                }}>
                <View
                  style={{
                    backgroundColor: '#F2F3FA',
                    alignItems: 'center',
                    paddingBottom: 30,
                  }}>
                  <Image
                    style={{
                      width: 150,
                      height: 100,
                      marginVertical: '10%',
                      resizeMode: 'contain',
                    }}
                    source={require('../utils/assets/Image/camera_circle.png')}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginVertical: 10,
                        color: '#9B3189',
                      }}>
                      We access your camera
            </Text>
                    <TouchableOpacity
                      style={{
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        alignSelf: 'center',
                        width: 100,
                        padding: 10,
                        borderRadius: 30,
                        backgroundColor: '#532280',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: 'center',
                          color: 'white',
                          // fontWeight: 'bold',
                        }}>
                        Allow
              </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{ backgroundColor: 'white', flex: 1, marginHorizontal: 16 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 20,
                      marginVertical: 20,
                      //   backgroundColor: 'green',
                    }}>
                    <Image
                      source={require('../utils/assets/Image/infomation.png')}
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
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#9B3189',
                      }}>
                      Subject
            </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      //   justifyContent: 'space-between',
                      marginTop: 16,
                    }}>
                    <View style={styles.backContainer}>
                      <Image
                        style={{
                          width: 14,
                          height: 14,
                          resizeMode: 'contain',
                        }}
                        source={require('../utils/assets/Image/subject_icon.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>English</Text>
                    </View>
                    <View style={styles.backContainer}>
                      <Image
                        style={{
                          width: 14,
                          height: 14,
                          resizeMode: 'contain',
                        }}
                        source={require('../utils/assets/Image/subject_icon.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Math</Text>
                    </View>
                    <View style={styles.backContainer}>
                      <Image
                        style={{
                          width: 14,
                          height: 14,
                          resizeMode: 'contain',
                        }}
                        source={require('../utils/assets/Image/subject_icon.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Soical</Text>
                    </View>
                    <View style={styles.backContainer}>
                      <Image
                        style={{
                          width: 14,
                          height: 14,

                          resizeMode: 'contain',
                        }}
                        source={require('../utils/assets/Image/subject_icon.png')}
                      />
                      <Text style={{ textAlign: 'center' }}>Science</Text>
                    </View>
                  </View>

                  <View style={{ marginVertical: 30 }}>
                    <View style={{ justifyContent: 'space-between' }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginHorizontal: 20,
                          marginVertical: 2,
                          //   backgroundColor: 'green',
                        }}>
                        <Image
                          source={require('../utils/assets/Image/infomation.png')}
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
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: '#9B3189',
                          }}>
                          Time - 60 Minutes for each subject
                </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 2,
                          marginHorizontal: 20,
                          //   backgroundColor: 'green',
                        }}>
                        <Image
                          source={require('../utils/assets/Image/infomation.png')}
                          style={{
                            height: 14,
                            width: 14,
                            marginRight: 10,
                            resizeMode: 'cover',
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: '#9B3189',
                          }}>
                          Total Questions - 15 in each subject{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 2,
                          marginHorizontal: 20,
                          //   backgroundColor: 'green',
                        }}>
                        <Image
                          source={require('../utils/assets/Image/infomation.png')}
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
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: '#9B3189',
                          }}>
                          Total Marks - 30 in each subject{' '}
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
                  this.props.navigation.navigate("Joinadmis")
                }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                  Proceed to Test
        </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>

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
export default Entrance;
