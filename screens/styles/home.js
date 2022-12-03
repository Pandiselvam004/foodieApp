import { StyleSheet } from 'react-native';
import app from '../helpers/AppHelper';

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    categoryTitle: {
        fontSize: 18,
        margin: 12,
        color: app.textPrimary,
        fontFamily: app.fontFamily,
        fontWeight: '700',
    },
    areaText: {
        fontSize: 21,
        color: app.textPrimary,
        fontFamily: app.fontFamily,
        fontWeight: '700',
    },
    countryText: {
        fontSize: 19,
        color: app.textSecondary,
        fontFamily: app.fontFamily,
    },
    avatarStyle: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: app.primaryColor
    }
});

export default styles;