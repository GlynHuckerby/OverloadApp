import React from "react";
import { Text } from 'react-native';

const StyledText = ({ children, className, ...props}) => {
    return (
        <Text className={'text-base text-gray-800 ${className}'} {...props}>
            {children}
        </Text>
    );
};

export default StyledText;