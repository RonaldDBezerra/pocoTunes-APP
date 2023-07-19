// import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';
import { Search } from '../screens/Search';

const tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string = '';
          let colorApp: string | boolean = '';

          if (route.name === 'Home') {
            iconName = 'home-outline';
            colorApp = focused && '#3a49f9';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Favorites') {
            iconName = 'heart-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />

      <tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
    </tab.Navigator>
  );
}
