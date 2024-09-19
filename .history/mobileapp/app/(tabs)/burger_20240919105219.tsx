import { View,Text } from 'react-native';
import { Link } from 'expo-router';

export default function Burger() {
  return (
  <View>
      <Text>This is an burger page 🍔</Text>;
      <Link href="/icecream"></Link>
  </View>
  )
}
