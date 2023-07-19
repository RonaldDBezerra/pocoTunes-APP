import React, { useState, useContext } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useTheme,
  Appbar,
  Button,
  Paragraph,
  ActivityIndicator,
  Title,
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {PropsStacksScreen} from '../../types/TypesStacksRoutes';
import Icon from 'react-native-vector-icons/Feather';
import Lottie from 'lottie-react-native';
import Styles from '../../styles/Styles';
import {
  emailValidation,
  passWordValidation,
} from '../../middleware/FormValidation';

export function Search({ navigation }: PropsStacksScreen) {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [isDisbled, setIsDisabled] = useState(false);

  function handleSingIn(): undefined | null {
    setIsDisabled(true);

    if (!passWordValidation(passWord) || !emailValidation(email)) {
      Alert.alert('Conta', 'E-mail ou senha invalido');
      setIsDisabled(false);
      return null;
    }

    auth()
      .signInWithEmailAndPassword(email, passWord)
      .catch((e) => {
        console.log(e)
        Alert.alert("Login", "Não foi possivel acessar sua conta!")
        setIsDisabled(false)
      })
  }

  return (
    <View style={Styles.Container}>
      <Text>Search</Text>
    </View>
  );
}
