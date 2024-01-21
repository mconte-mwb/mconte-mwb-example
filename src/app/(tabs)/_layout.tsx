import { Link, Tabs } from 'expo-router';
import { CodeIcon, InfoIcon } from 'lucide-react-native';
import { Pressable } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <CodeIcon color={color} />,
          headerRight: () => (
            <Link asChild={true} href="/modal">
              <Pressable>{({ pressed }) => <InfoIcon />}</Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <CodeIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
