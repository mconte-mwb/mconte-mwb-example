import type { Theme } from '@react-navigation/native';
import { colors } from 'config/colors';

const navigationTheme: { dark: Theme & { dark: true }; light: Theme & { dark: false } } = {
  dark: {
    colors: {
      background: colors.light900,
      border: colors.light600,
      card: colors.light700,
      notification: colors.red500, // i don't know what this is for
      primary: colors.light300,
      text: colors.white,
    },
    dark: true,
  },
  light: {
    colors: {
      background: colors.light100,
      border: colors.light400,
      card: colors.light300,
      notification: colors.red500, // i don't know what this is for
      primary: colors.light700,
      text: colors.black,
    },
    dark: false,
  },
};

export { navigationTheme };
