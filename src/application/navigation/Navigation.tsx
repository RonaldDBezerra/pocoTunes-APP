import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login";
import { Create } from "../screens/Create";
import { ForgotPassword } from "../screens/ForgotPassword";
// import { TabNavigation } from "./TabNavigation";

const {Screen, Navigator} = createNativeStackNavigator();

export function Navigation() {

  return(
    <Navigator> 
    
        <Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
          />

        <Screen
          name="Create"
          component={Create}
          options={{headerShown: false}}
          />

        <Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
          />

        {/* <Screen
          name="Tab"
          component={TabNavigation}
          options={{headerShown: false, tabBarShowLabel: false}}
          /> */}
    </Navigator>
  )
}