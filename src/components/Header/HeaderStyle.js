import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const colors = { primary: '#6408AC' }
export const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: normalize(8),
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    buttonContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },


});