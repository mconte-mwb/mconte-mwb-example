import { Divider, HStack, Button, ButtonText, Heading, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';

function ScreenIndex() {
  return (
    <VStack alignItems="center" flex={1} gap="$4" justifyContent="center" px="$4">
      <Heading>EntryScreen</Heading>
      <HStack>
        <Divider />
      </HStack>
      <Button onPress={() => router.push('/(tabs)/one')}>
        <ButtonText>go to tabs</ButtonText>
      </Button>
      <Button onPress={() => router.push('/public/page')}>
        <ButtonText>go to public</ButtonText>
      </Button>
    </VStack>
  );
}

export { ScreenIndex };
