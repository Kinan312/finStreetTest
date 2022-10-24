import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
export const styles = StyleSheet.create({
    dialogContainer: {
        borderRadius: normalize(16)
    },

    normalText: {
        marginHorizontal: '3%',
        marginBottom: '2%',
        fontSize: normalize(20),
        fontWeight: '600'
    },
    boldText: {
        marginHorizontal: '2%',
        marginVertical: '10%',
        fontSize: normalize(16),
        fontWeight: '900'
    },

    flexDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }
});