import React, { useEffect } from 'react';

import { View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { assets } from '../utils/assets';
import {

  moderateScale,
} from '../utils/constants/Ratio';

Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('Login');
    }, 1500);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        source={assets.splash}

        // style={{width:200,height:200}}
        style={{ width: moderateScale(200), height: moderateScale(200) }}

      />
    </View>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default Splash;
