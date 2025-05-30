import React from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import ChartPlaceholder from '../components/ChartPlaceholder';

export default function Home() {
    return(
        <Box className="flex-1 p-4">
            <VStack space="lg">
                <Heading size="md">Welcome to Overload</Heading>

                <Button onPress={() => {}}>
                    <ButtonText>Start Programmed Session</ButtonText>
                </Button>

                <ChartPlaceholder/>
            </VStack>
        </Box>
    )
}