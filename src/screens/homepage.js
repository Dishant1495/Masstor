import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Popover, PopoverController } from 'react-native-modal-popover';
import myaccount from './Myaccount';
import Apply from "./Apply"

const Tab = createBottomTabNavigator();

class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touch: false,
      isSelected: false,
      all: true,
      cbse: false,
      cisce: false,
      igcse: false,
      ib: false,
      stateboard: false,
      FlatListItems: [
        { key: 'Relevance', isSelected: false },
        { key: 'Price - Low to High', isSelected: false },
        { key: 'Price High to Low', isSelected: false },
        { key: 'Seat availablity', isSelected: false },
        { key: 'Admission ongoing', isSelected: false },
      ],
    };
  }

  overView = () => {
  };

  all = () => {
    this.setState({
      all: !this.state.all,
      cbse: !this.state.cbse,
      cisce: !this.state.cisce,
      igcse: !this.state.igcse,
      ib: !this.state.ib,
      stateboard: !this.state.stateboard,
    });
  };

  cbse = () => {
    this.setState({ cbse: !this.state.cbse });
  };

  cisce = () => {
    this.setState({ cisce: true });
  };

  igcse = () => {
    this.setState({ igcse: !this.state.igcse });
  };
  ib = () => {
    this.setState({ ib: !this.state.ib });
  };
  stateboard = () => {
    this.setState({ stateboard: !this.state.stateboard });
  };
  render() {
    var schoolinfo = [
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'K.R. Mangalam World School',
        schoollocation: 'Noida, UP',
        standard: 'Std 4th  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_b.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
    ];

    var popularschool = [
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_b.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
      {
        schoolimage: require('../utils/assets/Image/Schoolimage_a.png'),
        schoolname: 'Delhi Public School (DPS)',
        schoollocation: 'Delhi',
        standard: 'Std 1st  to 10th',
        fees: 'Rs- 500-10000 ',
      },
    ];

    return (
      <View style={{ backgroundColor: '#FDFDFE', height: '100%' }}>
        <ScrollView>
          <View style={{ margin: wp(1), marginHorizontal: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'red',
              }}>
              <Image
                source={require('../utils/assets/Image/masstorlogo.png')}
                style={styles.mainlogo}
              />

              <Image
                source={require('../utils/assets/Image/notificationbell.png')}
                style={styles.notificationbell}
              />
            </View>

            <View style={[styles.searchbox, { alignSelf: 'center' }]}>
              <Text
                style={{
                  color: '#532280',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: wp(5),
                }}>
                Search City
              </Text>

              <Image
                style={styles.searchicon}
                resizeMode="contain"
                source={require('../utils/assets/Image/searchicon.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 16,
                marginTop: 30,
                marginBottom: 15,
                // margin: 16,
                // backgroundColor: 'green',
              }}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <TouchableOpacity onPress={this.all}>
                  <View
                    style={{
                      height: 30,
                      width: 55,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                      borderColor: '#9B3189',
                      borderWidth: 2,
                      backgroundColor:
                        this.state.all == true ? '#9B3189' : 'white',
                    }}>
                    <Text
                      style={{
                        color: this.state.all == true ? 'white' : '#9B3189',
                      }}>
                      All
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.cbse}>
                  <View
                    style={{
                      height: 30,
                      width: 65,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                      borderColor: '#9B3189',
                      borderWidth: 2,
                      marginHorizontal: 8,
                      backgroundColor:
                        this.state.cbse == true ? '#9B3189' : 'white',
                    }}>
                    <Text
                      style={{
                        color: this.state.cbse == true ? 'white' : '#9B3189',
                      }}>
                      CBSE
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.cisce}>
                  <View
                    style={{
                      height: 30,
                      width: 65,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                      borderColor: '#9B3189',
                      borderWidth: 2,
                      marginHorizontal: 8,
                      backgroundColor:
                        this.state.cisce == true ? '#9B3189' : 'white',
                    }}>
                    <Text
                      style={{
                        color: this.state.cisce == true ? 'white' : '#9B3189',
                      }}>
                      CISCE
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.igcse}>
                  <View
                    style={{
                      height: 30,
                      width: 75,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                      borderColor: '#9B3189',
                      borderWidth: 2,
                      marginHorizontal: 8,
                      backgroundColor:
                        this.state.igcse == true ? '#9B3189' : 'white',
                    }}>
                    <Text
                      style={{
                        color: this.state.igcse == true ? 'white' : '#9B3189',
                      }}>
                      IGCSE
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.ib}>
                  <View
                    style={{
                      height: 30,
                      width: 75,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                      borderColor: '#9B3189',
                      borderWidth: 2,
                      marginHorizontal: 8,
                      backgroundColor:
                        this.state.ib == true ? '#9B3189' : 'white',
                    }}>
                    <Text
                      style={{
                        color: this.state.ib == true ? 'white' : '#9B3189',
                      }}>
                      IB
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.stateboard}>
                  <View
                    style={{
                      height: 30,
                      width: 75,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                      borderColor: '#9B3189',
                      borderWidth: 2,
                      marginHorizontal: 8,
                      backgroundColor:
                        this.state.stateboard == true ? '#9B3189' : 'white',
                    }}>
                    <Text
                      style={{
                        color:
                          this.state.stateboard == true ? 'white' : '#9B3189',
                      }}>
                      State Board
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'red',
              }}>
              <View style={{ justifyContent: 'center', left: 20 }}>
                <Text style={styles.schooltext}>Schools For You</Text>
              </View>
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
                        height: 55,
                        width: 55,
                        // backgroundColor: 'red',
                      }}
                      activeOpacity={0.5}
                      ref={setPopoverAnchor}
                      onPress={openPopover}>
                      <Image
                        source={require('../utils/assets/Image/option.png')}
                        style={{
                          // marginTop: hp(4),
                          right: hp(1.5),
                          height: 15,
                          width: 20,
                          resizeMode: 'contain',
                          // position: 'absolute',
                        }}
                      />
                    </TouchableOpacity>
                    <Popover
                      placement="bottom"
                      contentStyle={{
                        padding: 15,
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        borderRadius: 8,
                      }}
                      arrowStyle={{ borderTopColor: 'white' }}
                      backgroundStyle={styles.background}
                      visible={popoverVisible}
                      onClose={closePopover}
                      fromRect={popoverAnchorRect}
                      supportedOrientations={['portrait', 'landscape']}>
                      <View style={styles.MainContainer}>
                        <FlatList
                          data={this.state.FlatListItems}
                          // ItemSeparatorComponent={this.FlatListItemSeparator}
                          renderItem={({ item }) => (
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                              }}>
                              <CheckBox
                                boxType="circle"
                                value={this.state.isSelected}
                                // onValueChange={this.setState({
                                //   isSelected: !this.state.isSelected,
                                // })}
                                onValueChange={() =>
                                  item.isSelected
                                    ? this.setState({ isSelected: false })
                                    : this.setState({ isSelected: true })
                                }
                                style={{ alignSelf: 'center' }}
                              />
                              <Text style={styles.label}>{item.key} </Text>
                            </View>
                          )}
                        />
                      </View>
                    </Popover>
                  </React.Fragment>
                )}
              </PopoverController>
            </View>

            {/* //FlatList */}

            <FlatList
              style={{ marginTop: hp(1) }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={schoolinfo}
              keyExtractor={(item, index) => index}
              // keyExtractor={(item, index) => item.index_id}

              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      // marginTop: hp(2),
                      // marginRight: wp(5),
                      backgroundColor: 'white',
                      height: hp(37),
                      width: wp(75),
                      borderRadius: 30,

                      shadowOffset: { width: 3, height: 3 },
                      shadowColor: 'black',
                      shadowOpacity: 1,
                      elevation: 8,
                      marginRight: 14,
                      marginLeft: 8,
                      marginVertical: 13,
                    }}>
                    <TouchableOpacity onPress={this.overView}>
                      <Image
                        source={item.schoolimage}
                        style={{
                          width: wp(75),
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                          height: hp(20),
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
                        {item.schoolname}
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
                          {item.schoollocation}
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
                          {item.standard}
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
                          {item.fees}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F5F5F6',
                        height: hp(6),
                        width: wp(27),
                        marginTop: hp(-7),
                        marginLeft: wp(44),
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
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci tation ullamcorper suscipit
                                lobortis nisl ut aliquip ex ea co
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
                );
              }}
            />

            {/* //popular schools in india */}

            <Text style={styles.schooltext}> Popular Schools In India </Text>

            <FlatList
              style={{ marginTop: hp(1) }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={popularschool}
              keyExtractor={(item, index) => index}
              // keyExtractor={(item, index) => item.index_id}

              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      // marginTop: hp(2),
                      // marginRight: wp(5),
                      backgroundColor: 'white',
                      height: hp(37),
                      width: wp(75),
                      borderRadius: 30,

                      shadowOffset: { width: 3, height: 3 },
                      shadowColor: 'black',
                      shadowOpacity: 1,
                      elevation: 8,
                      marginRight: 14,
                      marginLeft: 8,
                      marginVertical: 13,
                    }}>
                    <TouchableOpacity onPress={this.overView}>
                      <Image
                        source={item.schoolimage}
                        style={{
                          width: wp(75),
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                          height: hp(20),
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
                        {item.schoolname}
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
                          {item.schoollocation}
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
                          {item.standard}
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
                          {item.fees}{' '}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F5F5F6',
                        height: hp(6),
                        width: wp(27),
                        marginTop: hp(-7),
                        marginLeft: wp(44),
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
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci tation ullamcorper suscipit
                                lobortis nisl ut aliquip ex ea co
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
                );
              }}
            />

            {/* //CBSE SCHOOL IN INDIA */}
            <Text style={styles.schooltext}> CBSE Schools In India </Text>

            <FlatList
              style={{ marginTop: hp(1) }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={popularschool}
              keyExtractor={(item, index) => index}
              // keyExtractor={(item, index) => item.index_id}

              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      // marginTop: hp(2),
                      // marginRight: wp(5),
                      backgroundColor: 'white',
                      height: hp(37),
                      width: wp(75),
                      borderRadius: 30,

                      shadowOffset: { width: 3, height: 3 },
                      shadowColor: 'black',
                      shadowOpacity: 1,
                      elevation: 8,
                      marginRight: 14,
                      marginLeft: 8,
                      marginVertical: 13,
                    }}>
                    <TouchableOpacity onPress={this.overView}>
                      <Image
                        source={item.schoolimage}
                        style={{
                          width: wp(75),
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                          height: hp(20),
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
                        {item.schoolname}
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
                          {item.schoollocation}
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
                          {item.standard}
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
                          {item.fees}{' '}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F5F5F6',
                        height: hp(6),
                        width: wp(27),
                        marginTop: hp(-7),
                        marginLeft: wp(44),
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
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci tation ullamcorper suscipit
                                lobortis nisl ut aliquip ex ea co
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
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainlogo: {
    width: wp(23),
    height: 25,
    marginTop: hp(3.12),
    left: 20,
    resizeMode: 'contain',
  },
  notificationbell: {
    width: 15,
    height: 19,
    marginTop: hp(3.12),
    right: 20,
    // position: 'absolute',
  },
  searchbox: {
    backgroundColor: 'white',
    height: 38,
    width: wp(88),
    justifyContent: 'center',
    marginTop: hp(3),
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
    // marginTop: hp(3),
    fontSize: 18,
    color: '#532280',
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    backgroundColor: '#0E2F57',
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  arrow: {
    borderTopColor: '#0E2F57',
  },
  background: {
    // backgroundColor: 'rgba(0, 0, 255, 0.5)',
  },
});

//bottom tab navigation
export default function Bottomtab() {
  const customTabBarStyle = {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    style: { backgroundColor: '#532280', minHeight: 60, paddingBottom: 10 },
  };
  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor="#532280"
      tabBarOptions={customTabBarStyle}
      shifting="false">
      <Tab.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../utils/assets/Image/home.png')}
              style={{
                height: 35,
                width: 35,
                resizeMode: 'cover',
                // marginLeft: 8,
              }}
            />
            // <SvgUri
            //   width="20"
            //   height="20"
            //   source={require('../utils/assets/Image/account.svg')}
            // />
            // <Ionicons name="home" color={'white'} size={20} />
          ),
        }}
        component={homepage}
      />

      <Tab.Screen
        name="MySchool"
        options={{
          tabBarLabel: 'My School',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: -5, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../utils/assets/Image/my_school.png')}
                style={{
                  height: 51,
                  width: 50,
                  resizeMode: 'cover',
                  marginLeft: 8,
                }}
              />
              {/* <Ionicons name="school" color={color} size={57} /> */}
            </View>
          ),
        }}
        component={Apply}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../utils/assets/Image/account.png')}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'cover',
                // marginLeft: 8,
              }}
            />
            // <Ionicons name="information-circle" color={color} size={24} />
          ),
        }}
        component={myaccount}
      />
    </Tab.Navigator>
  );
}
