import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { assets } from '../utils/assets';
import { useNavigation } from '@react-navigation/native';
import CircleOTP from '../components/CircleOTP';

const OTP = () => {
  const navigation = useNavigation();

  const [counter, setCounter] = useState(1);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);


  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const input_4 = useRef(null);

  const onSubmit = () => {
    navigation.navigate('Accesslocation');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'white'
      }}>
      <Image
        style={{ position: 'absolute', right: 0 }}
        resizeMode="cover"
        source={assets.babble}
      />
      <View style={{ marginHorizontal: '10%' }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Mobile')}>
          <Image
            style={{ width: 18, height: 18, marginTop: '10%',resizeMode:'contain' }}
            source={require('../utils/assets/Svg/back.svg')}
          />


        </TouchableOpacity>

        <View style={{ marginTop: '10%' }}>
          <Text style={{ fontSize: 16, color: '#7A2985' }}>
            Please enter 4-digit code sent to you at +91 980830XXX
          </Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>


            <KeyboardAvoidingView>
              <View style={{ flexDirection: 'row', }}>
                <CircleOTP
                  value={value}
                  onChangeText={(value) => {
                    setValue(value);
                    if (value) input_2.current.focus();
                  }}
                />

                <CircleOTP
                  childRef={input_2}
                  value={value2}
                  onChangeText={(value) => {
                    setValue2(value);

                    if (value) input_3.current.focus();
                  }}
                />

                <CircleOTP
                  childRef={input_3}
                  value={value3}
                  onChangeText={(value) => {
                    setValue3(value);

                    if (value) input_4.current.focus();
                  }}
                />

                <CircleOTP
                  childRef={input_4}
                  value={value4}
                  returnKeyType="done"
                  contextMenuHidden={true}
                  onChangeText={(value) => {
                    setValue4(value);
                  }}
                />
              </View>


            </KeyboardAvoidingView>
          </View>

          <View style={{ alignItems: 'center', marginTop: '10%' }}>
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
              Resend code in 0.59 s
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

export default OTP;
