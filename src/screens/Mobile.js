import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { assets } from '../utils/assets';
import { useNavigation } from '@react-navigation/native';

const Mobile = () => {
  const navigation = useNavigation();

  const onSubmit = () => {
    navigation.navigate('OTP');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FDFDFE'
      }}>
      <Image
        style={{ position: 'absolute', right: 0 }}
        resizeMode="cover"
        source={assets.babble}
      />
      <View style={{ marginHorizontal: '10%' }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Image
            style={{ width: 18, height: 18, marginTop: '10%',resizeMode:'contain' }}
            source={require('../utils/assets/Svg/back.svg')}
          />


        </TouchableOpacity>

        <View style={{ marginTop: '10%' }}>
          <Text style={{ fontSize: 16, color: '#7A2985' }}>
            Enter Your Mobile Number
          </Text>

          <TextInput
            placeholder={' Enter Your Mobile Number'}
            keyboardType="decimal-pad"
            maxLength={10}
            style={{
              marginTop: 16,
              borderRadius: 35,
              borderWidth: 0.3,
              maxHeight: 40,
              paddingLeft:25
            }}
          />
          <View style={{ alignItems: 'center', marginTop: '20%' }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#7A2985',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
              }}
              onPress={onSubmit}>
              <Text style={{ color: 'white', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
            <Text style={{ color: '#7A2985', marginTop: '10%' }}>
              By continue you may receive SMS for verification. Message & data
              rates may apply
            </Text>
            <Image
              style={{ marginTop: '10%' }}
              resizeMode="cover"
              source={assets.hand}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  background: {
    position: 'absolute',
    // top: 0,
    width: '100%',
    height: '100%',
  },
};

export default Mobile;
