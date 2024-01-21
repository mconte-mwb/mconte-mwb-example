import { Center, Divider, Text } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function ModalScreen() {
  return (
    <Center flex={1}>
      <Text>Modal Screen</Text>
      <Divider />
      <Text>There was a component here</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </Center>
  );
}
