import { Button, ButtonText, Center, Divider, HStack, Text, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';

function ScreenTabTwo() {
  return (
    <Center flex={1} px="$4">
      <VStack alignItems="center" gap="$4">
        <Text>Tab Two</Text>
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
          <ButtonText>go to modal</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}

export { ScreenTabTwo };
