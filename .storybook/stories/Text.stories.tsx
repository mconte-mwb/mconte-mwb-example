import { HStack, Text, VStack } from '@gluestack-ui/themed';
import { type Meta, type StoryObj } from '@storybook/react-native';
import { config, componentsConfig } from 'config/gluestack-ui.config';

import { StoryWrapperDefault } from '.storybook/decorators';
import { ROBOTO } from '@/constants/roboto';

const gsComponentTheme = componentsConfig.Text.theme;

type Props = {
  size: keyof typeof gsComponentTheme.variants.size;
  fontWeight: keyof typeof config.tokens.fontWeights;
};

const meta: Meta<Props> = {
  component: Text,
  decorators: [StoryWrapperDefault],
  title: 'Text',
};

const text: StoryObj<Props> = {
  render: () => (
    <VStack flex={1} gap="$4">
      {(Object.keys(gsComponentTheme.variants.size) as Props['size'][]).map(size => (
        <Text key={size} size={size as Props['size']}>{`${size}`}</Text>
      ))}
    </VStack>
  ),
};

const textWeight: StoryObj<Props> = {
  render: () => (
    <HStack gap="$4">
      <VStack flex={1} gap="$4">
        {(Object.keys(config.tokens.fontWeights) as Props['fontWeight'][]).map(weight => (
          <Text key={weight} fontWeight={`$${weight}`}>
            weight: {weight}
          </Text>
        ))}
      </VStack>
      <VStack flex={1} gap="$4">
        {Object.values(ROBOTO)
          .filter(e => !e.includes('_Italic'))
          .map(f => (
            <Text key={f} style={{ fontFamily: f }}>
              {f.replace('Roboto_', '')}
            </Text>
          ))}
      </VStack>
    </HStack>
  ),
};

export default meta;
export { text, textWeight };
