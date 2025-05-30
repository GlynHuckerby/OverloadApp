import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Link, LinkText} from "@/components/ui/link"

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return(
        <Center className="flex-1 p-4">
            <Box className="w-4/5">
                <VStack space="md">
                    <Heading size="md" className="text-center mb-2">Login</Heading>
                    <Input>
                        <InputField
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                    </Input>

                    <Input>
                        <InputField
                            placeholder="Password"
                            type="password"
                        />
                    </Input>

                    <Button onPress={() => navigation.navigate('MainTabs')}>
                        <ButtonText>Login</ButtonText>
                    </Button>
                </VStack>
            </Box>
        </Center>
    )
}