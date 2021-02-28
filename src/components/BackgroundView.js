import React, {Component} from 'react';
import {Image,Dimensions} from 'react-native';

import {assets} from '../utils/assets';

const  WINDOWSIZE = Dimensions.get('window');

/**
 * Displays  gif in background
 */
export default class BackgroundView extends Component {
  render() {
    return (
      <Image
        resizeMode="stretch"
        source={assets.back}
        style={styles.background}
      />
    );
  }
}

const styles = {
  background: {
    position: 'absolute',
    top: 0,
    width: WINDOWSIZE.width,
    height: WINDOWSIZE.height,
  },
};
