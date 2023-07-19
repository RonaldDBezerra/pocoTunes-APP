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
} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {PropsStacksScreen} from '../../types/TypesStacksRoutes';
import Icon from 'react-native-vector-icons/Feather';
import Lottie from 'lottie-react-native';
import Styles from '../../styles/Styles';
import { emailValidation } from '../../middleware/FormValidation';

export function ForgotPassword({ navigation }: PropsStacksScreen) {
  const [email, setEmail] = useState('');
  const [isDisbled, setIsDisabled] = useState(false);

  function handleForgotPassword(): undefined | null {
    setIsDisabled(true);

    if (!emailValidation(email)) {
      Alert.alert('Conta', 'E-mail com formato incorreto');
      setIsDisabled(false);
      return null;
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert('Redefinir senha', 'Enviamos um link para o seu email')
      )
      .catch(e => console.log(e))
      .finally(() => setIsDisabled(false));
  }

  return (
    <View style={Styles.Container}>
      <View>
        <Lottie
          style={Styles.Animations}
          source={require('../../asserts/108609-forgot-password.json')}
          autoPlay
          loop
        />
      </View>

      <View>
        <View style={Styles.ContainerForm}>
          <Icon name="mail" size={30} />
          <TextInput
            onChangeText={setEmail}
            value={email}
            style={Styles.InputForm}
            placeholder="E-mail"
            autoCapitalize="none"
          />
        </View>

        <View style={Styles.MenssageValidateFormContent}>
          <Text style={Styles.TextMenssageValidate}>Enter a valid email</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            onPress={() => handleForgotPassword()}
            loading={isDisbled}
            uppercase
            mode="contained"
            style={Styles.ButtonForm}
          >
            Send
          </Button>
        </View>
      </View>

      <View style={Styles.LinksForm}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
