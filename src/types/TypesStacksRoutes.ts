import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined; 
  Create: undefined;
  ForgotPassword: undefined;
};

type PropsStacksScreen = NativeStackScreenProps<RootStackParamList>;

export default PropsStacksScreen