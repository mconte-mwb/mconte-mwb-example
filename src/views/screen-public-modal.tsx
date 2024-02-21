import { Button, ButtonText, Divider, HStack, Text, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

function ScreenPublicModal() {
  return (
    <VStack alignItems="center" flex={1} gap="$4" justifyContent="center" px="$4">
      <Text>Public Modal Screen 2</Text>
      <HStack>
        <Divider />
      </HStack>
      <Text>Modal Screen 2</Text>
      <HStack>
        <Divider />
      </HStack>
      <Button onPress={() => router.back()}>
        <ButtonText>close modal</ButtonText>
      </Button>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </VStack>
  );
}

export { ScreenPublicModal };
