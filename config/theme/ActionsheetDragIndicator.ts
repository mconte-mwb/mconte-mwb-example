import { createStyle } from '@gluestack-style/react';

export const ActionsheetDragIndicator = createStyle({
  height: '$1',
  width: '$16',
  bg: '$backgroundLight400',
  borderRadius: '$full',
  _dark: {
    bg: '$backgroundDark500',
  },
});
