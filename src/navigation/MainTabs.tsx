import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Stats from "../screens/Stats";
import Programs from "../screens/Programs";
import Settings from "../screens/Settings";
import { Box } from "@/components/ui/box"

export type MainTabParamList = {
    Home: undefined;
    Stats: undefined;
    Programs: undefined;
    Settings: undefined;        
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Box
                            style={{
                                width: size,
                                height: size,
                                borderRadius: size / 2,
                                backgroundColor: color
                            }} />
                    )
                }} />
            <Tab.Screen
                name="Stats"
                component={Stats}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Box
                            style={{
                                width: size,
                                height: size,
                                borderRadius: size / 2,
                                backgroundColor: color
                            }} />
                    )
                }} />
            <Tab.Screen
                name="Programs"
                component={Programs}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Box
                            style={{
                                width: size,
                                height: size,
                                borderRadius: size / 2,
                                backgroundColor: color
                            }} />
                    )
                }} />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Box
                            style={{
                                width: size,
                                height: size,
                                borderRadius: size / 2,
                                backgroundColor: color
                            }} />
                    )
                }} />
        </Tab.Navigator>
    )
}