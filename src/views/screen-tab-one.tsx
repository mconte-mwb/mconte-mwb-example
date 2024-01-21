import { Button, ButtonText, Divider, HStack, Text, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';

function ScreenTabOne() {
  return (
    <VStack alignItems="center" flex={1} gap="$4" justifyContent="center" px="$4">
      <Text>Tab One</Text>
      {/* I don't know, added HStack, also putting w='$full' did not worked */}
      <HStack>
        <Divider />
      </HStack>
      <Text>Something!</Text>
      <HStack>
        <Divider />
      </HStack>
      <Button onPress={() => router.push('/')}>
        <ButtonText>go to index</ButtonText>
      </Button>
      <HStack>
        <Divider />
      </HStack>
      <Button onPress={() => router.push('/modal')}>
        <ButtonText>open modal</ButtonText>
      </Button>
    </VStack>
  );
}

export { ScreenTabOne };
