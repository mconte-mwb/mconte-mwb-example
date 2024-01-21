import { Tabs } from 'expo-router';
import { CodeIcon } from 'lucide-react-native';

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="one"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <CodeIcon color={color} />,
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
