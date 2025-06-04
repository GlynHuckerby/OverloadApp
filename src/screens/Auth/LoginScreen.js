import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/forms/InputField';
import Button from '../../components/common/Button';
import StyledText from '../../components/common/StyledText';

// You might want to add your logo to assets/images/logo.png
// const logo = require('../../../assets/images/logo.png');

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email:', email, 'Password:', password);
        // For now just navigate on login
        // in real app, authenticate then navigate
        navigation.navigate('ProgramDashboard');
    };

    const handleGoogleLogin = () => {
        console.log('Login with Google');
        // Implement google sign-in
    };

    const handleSignUp = () => {
        console.log('Navigate to Sign Up');
        // navigateion.navigate('SignUp');
    }

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} className="px-6">
                <View className="items-center mb-10">
                    {/* For logo: */}
                    {/* <Image source={logo} className="w-40 h-20 mb-2" resizeMode="contain" /> */}
                    <Text className="text-5xl font-bold text-black">Overload.</Text>
                    <StyledText className="text-gray-600 mt-1">To progress is to Overload.</StyledText>
                </View>

                <View className="big-white p-8 rounded-lg shadow-md">
                    <StyledText className="text-2xl font-semibold mb-6 text-center text-black">Login</StyledText>
                    <InputField
                        label="Email"
                        placeholder="m@example.com"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity onPress={() => console.log('Forgot Password')} className="mb-6">
                        <StyledText className="text-sm text-black text-right">Forgot your password?</StyledText>
                    </TouchableOpacity>

                    <Button title="Login" onPress={handleLogin} className="mb-4" />
                    <Button title="Login with Google" onPress={handleGoogleLogin} variant="secondary" className="mb-6" />

                    <View className="flex-row justify-center">
                        <StyledText className="text-gray-600">Don't have an account? </StyledText>
                        <TouchableOpacity onPress={handleSignUp}>
                        <StyledText className="font-semibold text-black">Sign up</StyledText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;