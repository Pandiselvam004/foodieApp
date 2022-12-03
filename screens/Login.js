import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import styles from './styles/auth';
import AuthInput from './components/AuthInput';
import Button from './components/Button';
import BottomSection from './components/login/BottomSection';
import SocialAuth from './components/login/SocialAuth';

function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headTitle}>Sign In</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.loginContainer}>
                <View>
                    <Text style={styles.headTitle}>Welcome Back</Text>
                    <AuthInput label="Email" />
                    <AuthInput label="Password" />
                    <View>
                        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
                        <Button buttonText="SIGN IN" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <BottomSection text="or login with" />
                        <SocialAuth />
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.bottomText}>Dont You Have Account?</Text>
                <Link to={{ screen: "Home" }} style={styles.bottomTextBold}>
                    Create New One
                </Link>
            </View>
        </SafeAreaView>
    );
}

export default Login;
