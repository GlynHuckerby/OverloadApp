import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/LoginScreen';
import ProgramDashboardScreen from '../screens/Program/ProgramDashboardScreen';
import CreateProgramInfoScreen from '../screens/Program/CreateProgram/CreateProgramInfoScreen';

// Add more program creation steps/screens as needed
// import CreateProgramStructureScreen from '../screens/Program/CreateProgram/CreateProgramStructureScreen';
// import AddDayScreen from '../screens/Program/CreateProgram/AddDayScreen';
// import AddExerciseScreen from '../screens/Program/CreateProgram/AddExerciseScreen';

const Stack = createStackNavigator();

// Simple auth flow (Replace with context api later)
const isAuthenticated = true;

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                {/* You can conditionally render stacks based on authentication state */}
                {!isAuthenticated ? (
                <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                <>
                    <Stack.Screen name="ProgramDashboard" component={ProgramDashboardScreen} />
                    <Stack.Screen name="CreateProgramInfo" component={CreateProgramInfoScreen} />
                    {/* Add other screens for program creation flow */}
                </>
                )}
                {/* Fallback or always accessible screens if any */}
                {/* For testing, you might want to access screens directly */}
                {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
                {/* <Stack.Screen name="ProgramDashboard" component={ProgramDashboardScreen} /> */}
                {/* <Stack.Screen name="CreateProgramInfo" component={CreateProgramInfoScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;