import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import StyledText from './StyledText';

const Button = ({ title, onPress, variant = 'primary', className = '', textClassName = '' }) => {
  const baseStyle = "py-3 px-4 rounded-md items-center justify-center";
  let variantStyle, textVariantStyle;

  switch (variant) {
    case 'secondary':
      variantStyle = "bg-white border border-gray-300";
      textVariantStyle = "text-black";
      break;
    case 'primary':
    default:
      variantStyle = "bg-black";
      textVariantStyle = "text-white";
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} className={`${baseStyle} ${variantStyle} ${className}`}>
      <StyledText className={`font-semibold ${textVariantStyle} ${textClassName}`}>{title}</StyledText>
    </TouchableOpacity>
  );
};

export default Button;