import { Button, ButtonText, Divider, HStack, Text, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';

function ScreenPublicPage() {
  return (
    <VStack alignItems="center" flex={1} gap="$4" justifyContent="center" px="$4">
      <Text>Public Page</Text>
      <HStack>
        <Divider />
      </HStack>
      <Text>Public Page</Text>
      <HStack>
        <Divider />
      </HStack>
      <Button onPress={() => router.push('/public/modal')}>
        <ButtonText>open modal</ButtonText>
      </Button>
      <Button onPress={() => router.back()}>
        <ButtonText>go to index</ButtonText>
      </Button>
    </VStack>
  );
}

export { ScreenPublicPage };
