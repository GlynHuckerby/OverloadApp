import React from "react";
import { View } from "react-native";
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button"

export default function Workout() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button size="lg" variant="solid" action="primary">
                <ButtonText>Start Workout</ButtonText>
            </Button>
        </View>
    );
};