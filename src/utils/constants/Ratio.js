import {  Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size +
  (horizontalScale(size) - size) * factor
//    +
//   (deviceInfoModule.isTablet() ? 2 : 0);

export function screenPadding() {
  return moderateScale(16);
}
export {horizontalScale, verticalScale, moderateScale};
