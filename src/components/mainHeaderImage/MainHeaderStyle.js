import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const colors = { primary: '#6408AC' }
export const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: normalize(8),
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    screen: {
        width: '58%',
        height: '75%',
        zIndex: 100,
        position: 'absolute',
        marginTop: '2%',


    },

    device: {
        width: '40%',
        height: '50%',
        zIndex: 100,
        position: 'absolute',
        right: '1%',
        top: '73%'
    },
    mac: {
        width: '100%',
        height: normalize(200, 'height'),
        zIndex: 100,
        marginTop: '3%'
    }
});