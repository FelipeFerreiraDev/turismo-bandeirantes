import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detalhe } from '../screens/Detalhe';
import { Hotel } from '../screens/Hotel';
import { Restaurantes } from '../screens/Restaurantes';
import { Turismo } from '../screens/Turismo';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Turismo" component={Turismo} />
      <Stack.Screen name="Restaurante" component={Restaurantes} />
      <Stack.Screen name="Hotel" component={Hotel} />
      <Stack.Screen name="Detalhe" component={Detalhe} />
    </Stack.Navigator>
  );
}