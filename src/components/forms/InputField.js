import React from "react";
import { TextInput, View, Text } from 'react-native';
import StyledText from '../common/StyledText';

const InputField = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    className = '',
    labelStyle = ''
}) => {
    return (
        <View className={'mb-4 ${className}'}>
            {label && <StyledText className={`mb-1 text-sm font-medium text-gray-700 ${labelStyle}`}>{label}</StyledText>}
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                className="border border-gray-300 p-3 rounded-md bg-white text-gray-900 focus:border-black"
                placeholderTextColor="9CA3AF" 
            />
        </View>
    );
};

export default InputField;