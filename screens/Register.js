import { View, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
import styles from './styles/auth';
import AuthInput from './components/AuthInput';
import Button from './components/Button';
import BottomSection from './components/login/BottomSection';
import SocialAuth from './components/login/SocialAuth';

function Regitser() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headTitle}>Sign Up</Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.loginContainer}>
                <View>
                    <Text style={styles.headTitle}>Welcome</Text>
                    <AuthInput label="User Name" />
                    <AuthInput label="Email" />
                    <AuthInput label="Password" />
                    <View>
                        <Button buttonText="SIGN UP" />
                    </View>
                    <View style={{ flex: 1 }}>
                        <BottomSection text="or signup with" />
                        <SocialAuth />
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.bottomText}>You have Account?</Text>
                <Link to={{ screen: "Login" }} style={styles.bottomTextBold}>
                    Sign In
                </Link>
            </View>
        </SafeAreaView>
    );
}

export default Regitser;
