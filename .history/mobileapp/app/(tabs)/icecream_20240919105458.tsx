import { Text } from 'react-native';
import { Link } from 'expo-router';

export default function IceCream() {
  return (
    <View>
    <Text>This is an ice cream page🍦</Text>;
    <Link href="/burger">Ice cream</Link>
</View>
    )
  }
