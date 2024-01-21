import { Pressable } from '@gluestack-ui/themed';
import { Link, Tabs } from 'expo-router';
import { CodeIcon, InfoIcon } from 'lucide-react-native';

function TabLayout() {
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
              <Pressable>
                <InfoIcon />
              </Pressable>
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

export default TabLayout;
