import { Center, Heading } from '@gluestack-ui/themed';
import { Link } from 'expo-router';

function ScreenIndex() {
  return (
    <Center flex={1}>
      <Heading>EntryScreen</Heading>
      <Link href="/(tabs)">TABS</Link>
    </Center>
  );
}

export { ScreenIndex };
