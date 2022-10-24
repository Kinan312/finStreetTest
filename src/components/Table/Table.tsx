import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles, colors} from './TableStyle';
import {Button, DataTable} from 'react-native-paper';
import {connect, useDispatch} from 'react-redux';
import normalize from 'react-native-normalize';
import {SvgCss} from 'react-native-svg';
import {dataTable} from 'assets/ConstantsData';
import {chart} from 'assets/images/chartXml';
import KeysDialog from '../KeysDialog/KeysDialog';
import {showDialog} from 'store/reducers/GeneralReducers';

const Table = (props: any) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.sectionContainer}>
      <ScrollView horizontal removeClippedSubviews>
        <DataTable style={{backgroundColor: '#FFFFFF00'}}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title
              textStyle={styles.title}
              style={{width: normalize(60, 'width')}}>
              Seq
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.title}
              style={styles.largeCellWidth}>
              Current Name
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.title}
              style={styles.medTitleWidth}>
              Price
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.title}
              style={styles.smallTitleWidth}>
              Change
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.title}
              style={styles.smallTitleWidth}>
              Chart
            </DataTable.Title>
            <DataTable.Title
              textStyle={styles.title}
              style={styles.largeTitleWidth}>
              Quantum Key
            </DataTable.Title>
          </DataTable.Header>
          {dataTable.map((item: any, index: number) => {
            return (
              <DataTable.Row
                key={index}
                style={
                  index === dataTable.length - 1
                    ? styles.lastRow
                    : {backgroundColor: '#FFF', height: normalize(70, 'height')}
                }>
                <DataTable.Cell
                  textStyle={styles.cell}
                  style={{width: normalize(40, 'width')}}>
                  {item.seq}
                </DataTable.Cell>
                <DataTable.Cell style={[styles.largeCellWidth, styles.cell]}>
                  <SvgCss
                    width={normalize(40, 'width')}
                    height={normalize(30, 'height')}
                    xml={item.logo}
                  />
                  <Text style={styles.normalText}>{item.currentName} </Text>
                  <Text style={styles.shortText}>{item.short}</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  textStyle={styles.cell}
                  style={styles.medCellWidth}>
                  {item.price}
                </DataTable.Cell>
                <DataTable.Cell
                  style={styles.smallCellWidth}
                  textStyle={{color: colors.green}}>
                  {item.Change}
                </DataTable.Cell>
                <DataTable.Cell textStyle={styles.cell}>
                  <SvgCss
                    width={normalize(50, 'width')}
                    height={normalize(40, 'height')}
                    xml={chart}
                  />
                </DataTable.Cell>
                <DataTable.Cell numeric style={styles.btnContainer}>
                  <Button
                    mode="outlined"
                    style={styles.btn}
                    color={props.primaryColor}
                    labelStyle={{fontSize: normalize(12)}}
                    onPress={() =>
                      dispatch(showDialog({visible: true, data: item}))
                    }>
                    Generate Keys
                  </Button>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </ScrollView>
      <KeysDialog />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    primaryColor: state.authR.primaryColor,
  };
};

export default connect(mapStateToProps, {})(Table);
