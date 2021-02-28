import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Popover, PopoverController } from 'react-native-modal-popover';

class KycRejeacted extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          style={{
            minHeight: 62,
            alignItems: 'center',
            backgroundColor: '#F2F3FA',
            flexDirection: 'row',
          }}>
          <Image
            style={styles.oval}
            // resizeMode="contain"
            source={require('../utils/assets/Image/topbackground.png')}
          />
          <View style={{ flex: 1.5 }}>
            <Image
              style={{
                width: 24,
                height: 24,
                marginHorizontal: 16,
                resizeMode: 'contain',
              }}
              source={require('../utils/assets/Image/white_arrow.png')}
            />
          </View>

          <View style={{ flex: 8, marginLeft: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
              My School
            </Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Image
              source={require('../utils/assets/Image/white_notification.png')}
              style={{
                height: 18,
                width: 18,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 20 }}>
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
              <Text
                style={{ fontWeight: 'bold', fontSize: 18, color: '#532280' }}>
                KYC Status
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', marginHorizontal: 16 }}>
            <View
              style={{
                // marginTop: hp(2),
                // marginRight: wp(5),
                backgroundColor: 'white',
                height: hp(37),
                width: wp(85),
                borderRadius: 30,

                shadowOffset: { width: 3, height: 3 },
                shadowColor: 'black',
                shadowOpacity: 1,
                elevation: 8,
              }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("PayAdmission")}>
                <Image
                  source={require('../utils/assets/Image/Schoolimage_b.png')}
                  style={{
                    width: wp(85),
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: hp(22),
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#4CC632', //4CC632
                  height: hp(5),
                  width: wp(38),
                  borderBottomRightRadius: 32,
                  borderTopLeftRadius: 30,
                  marginTop: hp(-20),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#FDFDFE',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  Admission Open
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../utils/assets/Image/seatlogo.png')}
                    style={{
                      height: 10,
                      width: 10,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text style={{ color: 'white', fontSize: 12 }}>
                    20 Seat Left
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#F2F3FA',
                  height: hp(5),
                  width: wp(15),
                  right: 0,
                  position: 'absolute',
                  borderBottomLeftRadius: 30,
                  borderTopRightRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // borderColor: '#707070',
                  // borderWidth: 1,
                }}>
                <Image
                  source={require('../utils/assets/Image/love.png')}
                  style={{ height: 18, width: 18, resizeMode: 'contain' }}
                />
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    height: hp(5),
                    width: wp(18),
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    opacity: 0.8,
                    marginTop: hp(8),
                    bottom: 8,

                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{ color: '#9B3189', fontWeight: 'bold' }}>
                    CBSE
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    height: hp(5),
                    width: wp(18),
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                    opacity: 0.8,
                    shadowColor: '#000000',
                    marginTop: hp(8),
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: 0,
                    bottom: 8,
                    position: 'absolute',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#9B3189',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    1.2 k
                  </Text>
                  <Image
                    source={require('../utils/assets/Image/eye.png')}
                    style={{
                      height: 15,
                      width: 15,
                      alignItems: 'center',
                      resizeMode: 'cover',
                      marginLeft: 8,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingLeft: 10,
                }}>
                <Text
                  style={{
                    marginTop: hp(1.5),
                    marginLeft: wp(2),
                    color: '#532280',
                    fontWeight: 'bold',
                  }}>
                  Delhi Public School (DPS)
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: hp(1),
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../utils/assets/Image/map.png')}
                    style={{
                      height: 12,
                      width: 12,
                      resizeMode: 'contain',
                      marginLeft: 8,
                    }}
                  />

                  <Text style={{ color: '#9B3189', marginLeft: wp(2) }}>
                    Delhi
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: hp(0.8),
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../utils/assets/Image/std.png')}
                    style={{
                      height: 12,
                      width: 12,
                      resizeMode: 'contain',
                      marginLeft: 8,
                    }}
                  />

                  <Text style={{ color: '#532280', marginLeft: wp(2) }}>
                    Std 1st to 10th
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: hp(0.8),
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../utils/assets/Image/rs.png')}
                    style={{
                      height: 12,
                      width: 12,
                      resizeMode: 'contain',
                      marginLeft: 8,
                    }}
                  />

                  <Text style={{ color: '#532280', marginLeft: wp(2) }}>
                    Rs- 500-10000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F5F5F6',
                  height: hp(6),
                  width: wp(27),
                  marginTop: hp(-9),
                  marginLeft: wp(55),
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <PopoverController>
                  {({
                    openPopover,
                    closePopover,
                    popoverVisible,
                    setPopoverAnchor,
                    popoverAnchorRect,
                  }) => (
                    <React.Fragment>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 45,
                          marginRight: 5,
                        }}
                        activeOpacity={0.5}
                        ref={setPopoverAnchor}
                        onPress={openPopover}>
                        <Image
                          source={require('../utils/assets/Image/officialpartner.png')}
                          style={{
                            height: 25,
                            width: 50,
                            marginLeft: wp(5),
                            resizeMode: 'cover',
                          }}
                        />
                        <Image
                          source={require('../utils/assets/Image/info.png')}
                          style={{
                            height: 10,
                            width: 10,
                            marginTop: hp(1),
                            marginLeft: wp(3),
                            resizeMode: 'cover',
                          }}
                        />
                      </TouchableOpacity>
                      <Popover
                        placement="bottom"
                        contentStyle={styles.content}
                        arrowStyle={styles.arrow}
                        backgroundStyle={styles.background}
                        visible={popoverVisible}
                        onClose={closePopover}
                        fromRect={popoverAnchorRect}
                        supportedOrientations={['portrait', 'landscape']}>
                        <Text
                          style={{
                            color: 'white',
                            // backgroundColor: 'red',
                          }}>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation
                          ullamcorper suscipit lobortis nisl ut aliquip ex ea co
                        </Text>
                      </Popover>
                    </React.Fragment>
                  )}
                </PopoverController>
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  height: hp(4),
                  width: wp(40),
                  right: 0,
                  bottom: 0,
                  position: 'absolute',
                  borderTopLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderColor: '#9B3189',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#9B3189',
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}>
                  Check Admission Date
                </Text>
              </View>
            </View>
          </View>

          <View style={{ margin: '5%' }}>
            <View
              style={{
                borderRadius: 15,
                flexDirection: 'row',
                backgroundColor: '#FEF1F1',
              }}>
              <PopoverController>
                {({
                  openPopover,
                  closePopover,
                  popoverVisible,
                  setPopoverAnchor,
                  popoverAnchorRect,
                }) => (
                  <React.Fragment>
                    <TouchableOpacity
                      style={{
                        height: 40,
                        flex: 8,
                        fontSize: 20,
                        flexDirection: 'row',
                        paddingHorizontal: 8,
                        alignItems: 'center',
                      }}
                      ref={setPopoverAnchor}
                      onPress={openPopover}>
                      <Image
                        style={{
                          width: 12,
                          height: 12,
                          marginHorizontal: 16,
                          resizeMode: 'cover',
                        }}
                        source={require('../utils/assets/Image/info_red.png')}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: '#262060',
                        }}>
                        Resubmit Aadhar Card
                      </Text>
                    </TouchableOpacity>
                    <Popover
                      contentStyle={styles.content}
                      arrowStyle={styles.arrow}
                      backgroundStyle={styles.background}
                      visible={popoverVisible}
                      onClose={closePopover}
                      fromRect={popoverAnchorRect}
                      supportedOrientations={['portrait', 'landscape']}>
                      <Text
                        style={{
                          color: 'white',
                          // backgroundColor: 'red',
                        }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea co
                      </Text>
                    </Popover>
                  </React.Fragment>
                )}
              </PopoverController>
            </View>
          </View>

          {/* <View
            style={{
              borderRadius: 15,
              flexDirection: 'row',
              backgroundColor: '#FEF1F1',
            }}>
            <PopoverController>
              {({
                openPopover,
                closePopover,
                popoverVisible,
                setPopoverAnchor,
                popoverAnchorRect,
              }) => (
                <React.Fragment>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 45,
                      marginRight: 5,
                    }}
                    activeOpacity={0.5}
                    ref={setPopoverAnchor}
                    onPress={openPopover}>
                    <Image
                      source={require('../utils/assets/Image/officialpartner.png')}
                      style={{
                        height: 25,
                        width: 50,
                        marginLeft: wp(5),
                        resizeMode: 'cover',
                      }}
                    />
                    <Image
                      source={require('../utils/assets/Image/info.png')}
                      style={{
                        height: 10,
                        width: 10,
                        marginTop: hp(1),
                        marginLeft: wp(3),
                        resizeMode: 'cover',
                      }}></Image>
                  </TouchableOpacity>
                  <Popover
                    contentStyle={styles.content}
                    arrowStyle={styles.arrow}
                    backgroundStyle={styles.background}
                    visible={popoverVisible}
                    onClose={closePopover}
                    fromRect={popoverAnchorRect}
                    supportedOrientations={['portrait', 'landscape']}>
                    <Text
                      style={{
                        color: 'white',
                        // backgroundColor: 'red',
                      }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea co
                    </Text>
                  </Popover>
                </React.Fragment>
              )}
            </PopoverController>
          </View> */}
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
  oval: {
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // transform: [{scaleX: 3}],
    position: 'absolute',
  },
  searchbox: {
    backgroundColor: 'white',
    height: 38,
    width: wp(85),
    justifyContent: 'center',
    marginTop: '20%',
    borderRadius: 18,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8,
  },
  searchicon: {
    width: 22,
    height: 22,
    right: 0,
    position: 'absolute',
    resizeMode: 'contain',
    marginRight: 10,
  },
  schooltext: {
    marginTop: hp(3),
    fontSize: 18,
    color: '#532280',
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    backgroundColor: '#F66F6F',
    width: 250,
    height: 150,
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: '#F66F6F',
  },
  background: {
    // backgroundColor: 'F66F6F',
  },
};
export default KycRejeacted;
