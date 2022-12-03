import { React, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import Login from './screens/Login';
import Regitser from './screens/Register';
import TouchID from 'react-native-touch-id';
import { Alert, StatusBar } from 'react-native';
import Home from './screens/Home';

function Navigation() {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const isVerifed = useSelector((state) => state.BioMetricReducer.data.isVerifed);

  const optionalConfigObject = {
    title: "Authentication Required", // Android
    color: "#e00606", // Android,
    fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
  }

  const BioMetricAuth = () => TouchID.authenticate('to demo this react-native component', optionalConfigObject)
    .then(success => {
      dispatch({
        type: 'BIOMETRIC_VERFIED',
        payload: {
          isVerifed: true
        }
      });
    })
    .catch(error => {
      Alert.alert(
        "Security Alert",
        "Foodie App Protects your data to avoid unauthorized access, please unlock to continue",
        [
          {
            text: "OK",
            onPress: () => {
              dispatch({
                type: 'BIOMETRIC_FAILED',
                payload: {
                  isVerifed: true
                }
              });
              BioMetricAuth()
            },
            style: "cancel"
          },
        ]
      );
    });

  useEffect(() => {
    if (!isVerifed) {
      BioMetricAuth();
    }
  }, []);


  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator intialRouteName="Login">
        {/* <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Register" component={Regitser} /> */}
        <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Home" component={Home} />
        {/* <Stack.Screen options={{ headerShown: false, gestureEnabled: false }} name="Login" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
