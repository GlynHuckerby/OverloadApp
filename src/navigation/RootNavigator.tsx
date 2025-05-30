import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainTabs from './MainTabs';
import Login from '../screens/Login';

export type RootStackParamList = {
    Login: undefined;
    MainTabs: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown:false}}/>
            <Stack.Screen 
                name="MainTabs" 
                component={MainTabs}
                options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}