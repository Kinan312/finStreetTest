import * as React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {SvgCss} from 'react-native-svg';
import {connect, useDispatch} from 'react-redux';
import normalize from 'react-native-normalize';
import {xml} from 'assets/images/LogoXml';
import {LogoBlue} from 'assets/images/LogoBlueXML';
import {styles} from './HeaderStyle';
import {logIn, logOut} from 'store/reducers/AuthReducers';

const Header = (props: any) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.sectionContainer}>
      {props.authenticated ? (
        <>
          <SvgCss
            width={normalize(125, 'width')}
            height={normalize(60, 'height')}
            xml={LogoBlue}
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color={props.primaryColor}
              labelStyle={{fontSize: 12}}
              onPress={() => dispatch(logOut())}>
              Sign Out
            </Button>
          </View>
        </>
      ) : (
        <>
          <SvgCss
            width={normalize(125, 'width')}
            height={normalize(60, 'height')}
            xml={xml}
          />
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color={props.primaryColor}
              labelStyle={{fontSize: 12}}
              onPress={() => dispatch(logIn())}>
              Sign In
            </Button>

            <Button
              mode="text"
              labelStyle={{fontSize: 12}}
              onPress={() => console.log('Pressed')}>
              Get Started
            </Button>
          </View>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    primaryColor: state.authR.primaryColor,
    authenticated: state.authR.authenticated,
  };
};

export default connect(mapStateToProps, {})(Header);
