import { Center, ScrollView } from '@gluestack-ui/themed';
import { type PartialStoryFn } from '@storybook/addons';
import { type ReactNode } from 'react';

function StoryWrapperDefault(storyFn: PartialStoryFn<ReactNode>) {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
      }}>
      <Center flex={1}>{storyFn()}</Center>
    </ScrollView>
  );
}

export { StoryWrapperDefault };
