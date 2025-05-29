import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Workout from '../screens/Workout';

export type RootTabParamList = {
    Home: undefined;
    Workout: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Workout" component={Workout}/>
        </Tab.Navigator>
    );
};