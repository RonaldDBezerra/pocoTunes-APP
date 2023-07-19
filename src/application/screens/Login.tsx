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
import { PropsStacksScreen } from '../../types/TypesStacksRoutes';
import Icon from 'react-native-vector-icons/Feather';
import Lottie from 'lottie-react-native';
import Styles from '../../styles/Styles';
import {
  emailValidation,
  passWordValidation,
} from '../../middleware/FormValidation';

export function Login({ navigation }: PropsStacksScreen) {
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
      .catch(e => {
        console.log(e);
        Alert.alert('Login', 'Não foi possivel acessar sua conta!');
        setIsDisabled(false);
      });
  }

  return (
    <View style={Styles.Container}>
      <View>
        <Lottie
          style={Styles.Animations}
          source={require('../../asserts/78126-secure-login.json')}
          autoPlay
          loop
        />
      </View>

      <View>
        <View style={Styles.ContainerForm}>
          <Icon name="mail" size={30} />
          <TextInput
            style={Styles.InputForm}
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            autoCapitalize="none"
          />
        </View>

        <View style={Styles.MenssageValidateFormContent}>
          <Text style={Styles.TextMenssageValidate}>Enter a valid email</Text>
        </View>

        <View style={Styles.ContainerForm}>
          <Icon name="lock" size={30} />
          <TextInput
            onChangeText={setPassWord}
            value={passWord}
            maxLength={10}
            secureTextEntry
            style={Styles.InputForm}
            placeholder="Password"
          />
        </View>

        <View style={Styles.MenssageValidateFormContent}>
          <Text style={Styles.TextMenssageValidate}>
            Enter a valid password
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            uppercase
            onPress={() => handleSingIn()}
            loading={isDisbled}
            mode="contained"
            style={Styles.ButtonForm}
          >
            Login
          </Button>
        </View>
      </View>

      <View style={Styles.LinksForm}>
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
