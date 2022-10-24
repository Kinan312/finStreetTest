import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-native-paper';
import {connect} from 'react-redux';
import MyTabs from 'components/TabsNav';

const Starter = (props: any) => {
  return (
    <Provider>
      <StatusBar backgroundColor={props.primaryColor}></StatusBar>
      <MyTabs />
    </Provider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    primaryColor: state.authR.primaryColor,
    authenticated: state.authR.authenticated,
  };
};

export default connect(mapStateToProps, {})(Starter);
