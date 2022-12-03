import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import {
    GoogleSignin
} from '@react-native-google-signin/google-signin';

import {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';

const SocialAuth = () => {
    const [userInfo, setUserInfo] = useState({});
    const getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id, name,  first_name, last_name',
            },
        };
        const profileRequest = new GraphRequest(
            '/me',
            { token, parameters: PROFILE_REQUEST_PARAMS },
            (error, result) => {
                if (error) {
                    console.log('login info has error: ' + error);
                } else {
                    setUserInfo({ userInfo: result });
                    console.log('result:', result);
                }
            },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };

    const loginWithFacebook = () => {
        // Attempt a login using the Facebook login dialog asking for default permissions.
        LoginManager.logInWithPermissions(["public_profile"]).then(
            login => {
                if (login.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        const accessToken = data.accessToken.toString();
                        getInfoFromToken(accessToken);
                    });
                }
            },
            error => {
                console.log('Login fail with error: ' + error);
            },
        );
    };

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <SocialIcon
                light
                onPress={() => {
                    GoogleSignin.configure({
                        iosClientId: '857849011710-78uoa822ncktol6d6g2q0qrm5tdpvg61.apps.googleusercontent.com',
                    });
                    GoogleSignin.hasPlayServices().then((hasPlayService) => {
                        if (hasPlayService) {
                            GoogleSignin.signIn().then((userInfo) => {
                                console.log(JSON.stringify(userInfo))
                            }).catch((e) => {
                                console.log("ERROR IS: " + JSON.stringify(e));
                            })
                        }
                    }).catch((e) => {
                        console.log("ERROR IS: " + JSON.stringify(e));
                    })
                }}
                type='google'
            />
            <SocialIcon
                light
                type='facebook'
                onPress={loginWithFacebook}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    socialIcon: {
        backgroundColor: "white",
        padding: 25,
        margin: 15,
        borderRadius: 50,
        shadowColor: '#adadad',
        shadowRadius: 10,
        shadowOpacity: 3,
    }
})

export default SocialAuth;
