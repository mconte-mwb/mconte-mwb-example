import { Link, Tabs } from 'expo-router';
import { CodeIcon, InfoIcon } from 'lucide-react-native';
import { Pressable } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
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
