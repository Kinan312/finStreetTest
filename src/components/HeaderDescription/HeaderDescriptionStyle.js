import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const colors = { primary: '#6408AC' }
export const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(16),
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
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
    firstParagraph: {
        marginTop: normalize(10),
        paddingVertical: normalize(10),
        color: '#585858',
        fontWeight: '600'
    },
    secondParagraph: {
        paddingVertical: normalize(10),
        color: '#000',
        fontWeight: '900',
        fontSize: normalize(34),
        width: '70%',
        textAlign: 'center'
    },
    thirdParagraph: {
        paddingVertical: normalize(2),
        color: '#000',
        fontWeight: '400',
        fontSize: normalize(18),
        width: '100%',
        textAlign: 'center'
    },
    btn: {
        paddingVertical: normalize(5),
        marginVertical: normalize(10),
        zIndex: 100
    }
});