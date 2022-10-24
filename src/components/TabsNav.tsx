import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import normalize from 'react-native-normalize';
import HomeScreen from '../pages/Home/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = (props: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      labelStyle={{fontSize: normalize(16)}}
      barStyle={{
        backgroundColor: props.primaryColor,
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20),
        borderWidth: 1,
        borderColor: props.primaryColor,
      }}
      style={{
        backgroundColor: '#FFFFFF00',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FFFFFF00',

          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'home'} color={'#FFF'} size={normalize(16)} />
          ),
        }}
      />
      <Tab.Screen
        name="BlockChain"
        component={HomeScreen}
        options={{
          tabBarLabel: 'BlockChain',
          tabBarColor: '#FFFFFF00',
          tabBarIcon: ({color}) => (
            <FontAwesome name={'chain'} color={'#FFF'} size={normalize(16)} />
          ),
        }}
      />
      <Tab.Screen
        name="Otp"
        component={HomeScreen}
        options={{
          tabBarLabel: 'OTP Service',
          tabBarColor: '#FFFFFF00',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'qrcode'} color={'#FFF'} size={normalize(16)} />
          ),
        }}
      />
      <Tab.Screen
        name="QRNG"
        component={HomeScreen}
        options={{
          tabBarLabel: 'QRNG Docs',
          tabBarColor: '#FFFFFF00',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'file-document-multiple'}
              color={'#FFF'}
              size={normalize(16)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Live Number"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Live Number',
          tabBarColor: '#FFFFFF00',
          tabBarIcon: ({color}) => (
            <Octicons name={'number'} color={'#FFF'} size={normalize(16)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state: any) => {
  return {
    primaryColor: state.authR.primaryColor,
  };
};

export default connect(mapStateToProps, {})(MyTabs);
