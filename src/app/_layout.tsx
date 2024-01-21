import { GluestackUIProvider } from '@gluestack-ui/themed';
import { ThemeProvider } from '@react-navigation/native';
import { config } from 'config/gluestack-ui.config';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme, useRobotoFonts } from '@/hooks';
import { navigationTheme } from '@/theme';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const { isLoading: isLoadingFont } = useRobotoFonts();
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    if (!isLoadingFont) {
      SplashScreen.hideAsync();
    }
  }, [isLoadingFont]);

  if (isLoadingFont) {
    return null;
  }

  return (
    <GluestackUIProvider colorMode={colorScheme} config={config}>
      <ThemeProvider value={navigationTheme[colorScheme]}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ headerShown: false, presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}

export default RootLayout;
