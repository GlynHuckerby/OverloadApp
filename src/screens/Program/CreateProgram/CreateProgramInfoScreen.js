import React, { useState } from 'react';
import { View, ScrollView, Text, Picker } from 'react-native'; // Picker is basic, consider a custom dropdown
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../../components/forms/InputField';
import Button from '../../../components/common/Button';
import StyledText from '../../../components/common/StyledText';
import '../../../../global.css';

const PROGRAM_INTENTS = [
  "Strength", "Hypertrophy", "Power", "Conditioning",
  "Hybrid", "Crossfit", "Hyrox", "Mixed", "Custom"
];

const CreateProgramInfoScreen = ({ navigation }) => {
    const [programName, setProgramName] = useState('');
    const [intent, setIntent] = useState(PROGRAM_INTENTS[0]);
    const [notes, setNotes] = useState('');

    const [splitDays, setSplitDays] = useState('');
    const [startDate, setStartDate] = useState('');
    const [duration, setDuration] = useState('');

    const handleNext = () => {
        const programData = {
            programName,
            intent,
            notes,
            splitDays,
            startDate,
            duration,
            // deloadWeeks: [] // Add later
        };
        console.log('Program Info:', programData);
        // Navigate to next step, passing data
        // navigation.navigate('CreateProgramStructure', { programData });
        // For now, just log and go back
        alert('Program Info Captured! Next step would be adding days/exercises.');
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView className="p-6">

                <StyledText className="text-2xl font-bold mb-6 text-black">
                    Create New Program
                </StyledText>

                <StyledText className="text-lg font-semibold mb-2 text-gray-700">
                    Program Detais
                </StyledText>
                <InputField
                    label="Program Name"
                    placeholder="e.g., Strength Phase 1"
                    value={programName}
                    onChangeText={setProgramName}
                />

                <StyledText className="mb-1 text-sm font-medium text-gray-700">
                    Intent of Program
                </StyledText>
                <View className="border border-gray-300 rounded-md bg-white mb-4">
                    <Picker
                        selectedValue={intent}
                        onValueChange={(itemValue) => setIntent(itemValue)}
                        style={{ height: 50, width: '100%' }} // Basic styling
                    >
                        {PROGRAM_INTENTS.map((goal) => 
                            <Picker.Item key={goal} label={goal} value={goal}/>
                        )}
                    </Picker>
                </View>

                <InputField
                    label="Notes (Optional)"
                    placeholder="e.g. Focus on compound lifts"
                    value={notes}
                    onChangeText={setNotes}
                    // multiline // Adjust InputField for multiline
                    // numberOfLines={3}
                />

                <View className="my-6 border-t border-gray-200"/>

                <StyledText className="text-lg font-semibold mb-2 text-gray-700">
                    Program Structure
                </StyledText>
                <InputField
                    label="Split (How many training days in rotation)"
                    placeholder="e.g., 3, 5, 7"
                    value={splitDays}
                    onChangeText={setSplitDays}
                    keyboardType="numeric"
                />

                {/* For Start Date and Duration, you'd ideally use a calendar interface. */}
                {/* For now, simple text inputs. */}
                <InputField
                    label="Start Date (Optional)"
                    placeholder="YYYY-MMD-DD or 'Next Monday'"
                    value={startDate}
                    onChangeText={setStartDate}
                />
                
                <InputField
                    label="Duration (Optional)"
                    placeholder="e.g., 8 weeks, 3 months"
                    value={duration}
                    onChangeText={setDuration}
                />

                {/* Deload weeks input can be added here later */}

                <Button title="Next: Add Days & Exercises" onPress={handleNext} className='mt-6'/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateProgramInfoScreen;