import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function Burger() {
  return (
  <View>
      <Text>This is an burger page 🍔</Text>;
      <Link href=/ice></Link>
  </View>
  )
}
