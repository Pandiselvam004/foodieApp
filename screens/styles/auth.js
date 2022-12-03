import { StyleSheet } from 'react-native';
import app from '../helpers/AppHelper';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headTitle: {
    fontSize: 30,
    margin: 22,
    color: app.textPrimary,
    fontFamily: app.fontFamily,
    fontWeight: '700',
  },
  forgetPasswordText: {
    marginTop: 15,
    fontSize: 20,
    marginRight: 25,
    color: app.textSecondary,
    fontFamily: app.fontFamily,
    textAlign: 'right',
  },
  bottomText: {
    marginTop: 15,
    fontSize: 20,
    marginRight: 5,
    color: app.textSecondary,
    fontFamily: app.fontFamily,
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomTextBold: {
    marginTop: 15,
    fontSize: 20,
    marginRight: 15,
    color: app.primaryColor,
    fontFamily: app.fontFamily,
    textAlign: 'center',
  },
});

export default styles;
