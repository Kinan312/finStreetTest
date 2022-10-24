import {SafeAreaView, ScrollView, View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {connect} from 'react-redux';
import {bgXml} from 'assets/images/backgroundXML';
import {blueBGClip} from 'assets/images/clipBGBlue';
import Header from 'components/Header/Header';
import HeaderDescription from 'components/HeaderDescription/HeaderDescription';
import MainHeaderImage from 'components/mainHeaderImage/MainHeaderImage';
import Table from 'components/Table/Table';
import {styles} from './HomeStyle';

const HomeScreen = (props: any) => {
  return (
    <SafeAreaView>
      <Header title="Home" />
      <ScrollView style={styles.container} removeClippedSubviews>
        <View>
          <MainHeaderImage />
          <HeaderDescription />
          {props.authenticated ? (
            <SvgCss
              style={styles.bgClip}
              width={'100%'}
              xml={blueBGClip}></SvgCss>
          ) : (
            <SvgCss style={styles.bgClip} width={'100%'} xml={bgXml}></SvgCss>
          )}
        </View>
        <Table />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    primaryColor: state.authR.primaryColor,
    authenticated: state.authR.authenticated,
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
