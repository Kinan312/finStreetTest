import {View} from 'react-native';
import {Button, Dialog, IconButton, Portal, Text} from 'react-native-paper';
import {SvgCss} from 'react-native-svg';
import {connect, useDispatch} from 'react-redux';
import {showDialog} from 'store/reducers/GeneralReducers';
import {styles} from './DialogStyle';

const KeysDialog = (props: any) => {
  const dispatch = useDispatch();

  const hideDialog = () => {
    dispatch(showDialog({visible: false, data: props.data}));
  };
  return (
    <Portal>
      <Dialog
        visible={props.visible}
        onDismiss={hideDialog}
        style={styles.dialogContainer}>
        <Dialog.Content>
          <View style={styles.flexDisplay}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <SvgCss width={30} height={30} xml={props.data.logo} />
              <Text style={styles.normalText}>{props.data.currentName}</Text>
            </View>
            <View>
              <IconButton
                icon="close"
                color="#F24C00"
                size={20}
                onPress={hideDialog}
              />
            </View>
          </View>
          <View style={styles.flexDisplay}>
            <Text style={styles.boldText}>{props.data.chainKey[0]}</Text>
            <Button
              color={props.primaryColor}
              mode="outlined"
              onPress={() => console.log('copied')}>
              Copy
            </Button>
          </View>

          <View style={styles.flexDisplay}>
            <Text style={styles.boldText}>{props.data.chainKey[1]}</Text>
            <Button
              color={props.primaryColor}
              mode="outlined"
              onPress={() => console.log('copied')}>
              Copy
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
const mapStateToProps = (state: any) => {
  return {
    visible: state.generalR.dialogVisible,
    data: state.generalR.dialogContent,
    primaryColor: state.authR.primaryColor,
  };
};

export default connect(mapStateToProps, {})(KeysDialog);
