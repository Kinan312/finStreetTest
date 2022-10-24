import * as React from 'react';
import {View, Text} from 'react-native';
import {styles} from './HeaderDescriptionStyle';
import {Button} from 'react-native-paper';
import {connect} from 'react-redux';

const HeaderDescription = (props: any) => {
  return (
    <View style={styles.sectionContainer}>
      <Button
        mode="text"
        icon="arrow-right-thin"
        color={props.primaryColor}
        contentStyle={{flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 16}}
        style={styles.firstParagraph}
        onPress={() => console.log('Pressed')}>
        Start Your Portfolio
      </Button>
      <Text style={styles.secondParagraph}>Most Secure Key On Earth</Text>
      <Text style={styles.thirdParagraph}>
        Infinite randomness of the number with quantum random number generation.
      </Text>

      <Button
        mode="contained"
        icon="arrow-right-thin"
        color={props.primaryColor}
        contentStyle={{flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 16}}
        style={styles.btn}
        onPress={() => console.log('Pressed')}>
        Start With Your Email
      </Button>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    primaryColor: state.authR.primaryColor,
    authenticated: state.authR.authenticated,
  };
};

export default connect(mapStateToProps, {})(HeaderDescription);
