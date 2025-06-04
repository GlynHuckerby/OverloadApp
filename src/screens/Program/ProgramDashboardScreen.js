import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/common/Button';
import StyledText from '../../components/common/StyledText';

// Mock icons for now, replace with actual icon components later
const MenuIcon = () => <Text className="text-2xl">☰</Text>;
const UserIcon = () => <Text className="text-2xl">👤</Text>;
const HomeIcon = () => <Text className="text-2xl">🏠</Text>;
const StatsIcon = () => <Text className="text-2xl">📊</Text>;
const BookmarkIcon = () => <Text className="text-2xl">🔖</Text>;
const DumbbellIcon = () => <Text className="text-4xl">🏋️</Text>; // Bigger icon for FAB

const ProgramDashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
        <TouchableOpacity>
          <MenuIcon />
        </TouchableOpacity>
        <Text className="text-3xl font-bold">O.</Text>
        <TouchableOpacity>
          <UserIcon />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View className="flex-1 p-6 items-center mt-10">
        <StyledText className="text-xl text-gray-700 mb-6">Welcome, what are we training today?</StyledText>
        <Button
          title="Start Programmed Session"
          onPress={() => console.log('Start Programmed Session')}
          className="w-full"
        />
        {/* Placeholder for program list */}
        <View className="mt-10">
            <Button
            title="Create New Program"
            onPress={() => navigation.navigate('CreateProgramInfo')}
            variant="secondary"
            className="w-full mt-4"
            />
            {/* <StyledText className="mt-6 text-lg">Your Programs:</StyledText> */}
            {/* List programs here */}
        </View>
      </View>

      {/* Floating Action Button (FAB) - Placeholder for session tracking */}
      <TouchableOpacity
        className="absolute right-6 bottom-20 bg-black rounded-full p-4 shadow-lg"
        onPress={() => console.log('FAB pressed - Quick Start Workout?')}
      >
        <DumbbellIcon />
      </TouchableOpacity>

      {/* Bottom Tab Bar - Placeholder */}
      <View className="flex-row justify-around items-center p-4 border-t border-gray-200 bg-white">
        <TouchableOpacity className="items-center">
          <HomeIcon />
          {/* <StyledText className="text-xs">Home</StyledText> */}
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <StatsIcon />
          {/* <StyledText className="text-xs">Progress</StyledText> */}
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <BookmarkIcon />
          {/* <StyledText className="text-xs">Saved</StyledText> */}
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <MenuIcon /> {/* Or a different icon for 'More' or 'Settings' */}
          {/* <StyledText className="text-xs">Routines</StyledText> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProgramDashboardScreen;