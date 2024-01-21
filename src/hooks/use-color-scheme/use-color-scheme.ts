import { useColorScheme as useRNCloseScheme } from 'react-native';

function useColorScheme() {
  const rawColorScheme = useRNCloseScheme();
  const colorScheme: 'dark' | 'light' = rawColorScheme === 'dark' ? 'dark' : 'light';
  return { rawColorScheme, colorScheme };
}

export { useColorScheme };
