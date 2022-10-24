import * as React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './MainHeaderStyle';
import macImg from 'assets/images/Studio-Display.png';
import deviceImg from 'assets/images/Mac-Studio.png';
import screenImg from 'assets/images/Mockup.png';

const MainHeaderImage = (props: any) => {
  return (
    <View style={styles.sectionContainer}>
      <FastImage
        style={styles.mac}
        source={macImg}
        resizeMode={FastImage.resizeMode.contain}
      />
      <FastImage
        style={styles.device}
        source={deviceImg}
        resizeMode={FastImage.resizeMode.contain}
      />
      <FastImage
        style={styles.screen}
        source={screenImg}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default MainHeaderImage;
