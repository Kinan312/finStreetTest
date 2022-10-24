import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export const colors = { primary: '#6408AC', black: '#000000', green: '#0B7B08', red: '#F24C00', grey: '#585858' }
export const styles = StyleSheet.create({
    sectionContainer: {
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(16),
        backgroundColor: '#FFFFFF00',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '15%'
    },
    tableHeader: {
        marginBottom: normalize(10),
        backgroundColor: '#fff',
        borderTopLeftRadius: normalize(10),
        borderTopRightRadius: normalize(10),
    },

    lastRow: {
        borderBottomLeftRadius: normalize(10),
        borderBottomRightRadius: normalize(10),
        backgroundColor: '#FFF'
    },

    table: {
        width: normalize(100, 'width'),
        flexGrow: 1
    },
    smallCellWidth: {
        width: normalize(80, 'width')
    },
    medCellWidth: {
        width: normalize(120, 'width')
    },
    largeCellWidth: {
        width: normalize(200, 'width')
    },
    smallTitleWidth: {
        width: normalize(80, 'width'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    medTitleWidth: {
        width: normalize(120, 'width'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    largeTitleWidth: {
        width: normalize(200, 'width'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.grey,
        fontWeight: '500',
        textAlign: 'justify',
    },

    shortText: {
        color: colors.grey,
        height: normalize(50, 'height')
    },
    normalText: {
        marginHorizontal: '1%',
        marginBottom: '2%',
    },
    btn: {
        padding: '2%'
    },
    btnContainer: {
        width: normalize(160, 'width')
    },
    cell: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});