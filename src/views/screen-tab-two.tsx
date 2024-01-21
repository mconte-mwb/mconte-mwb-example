import { Button, ButtonText, Divider, Heading, HStack, VStack } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SwipeableFlatList } from '@/components';

function ScreenTabTwo() {
  const insets = useSafeAreaInsets();
  return (
    <SwipeableFlatList
      contentContainerStyle={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      data={[1, 2, 3, 4, 5]}
      ItemSeparatorComponent={Divider}
      renderItem={({ item }) => {
        return (
          <VStack $dark-bg="$black" bg="$white" p="$4">
            <Heading>Number {item}</Heading>
          </VStack>
        );
      }}
      renderRightActions={() => {
        return (
          <HStack>
            <Button action="positive" h="$full">
              <ButtonText>positive action</ButtonText>
            </Button>
            <Button action="negative" h="$full">
              <ButtonText>negative action</ButtonText>
            </Button>
          </HStack>
        );
      }}
    />
  );
}

export { ScreenTabTwo };
