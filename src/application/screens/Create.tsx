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
import {
  emailValidation,
  passWordValidation,
} from '../../middleware/FormValidation';
import auth from '@react-native-firebase/auth';
import {PropsStacksScreen} from '../../types/TypesStacksRoutes';
import Icon from 'react-native-vector-icons/Feather';
import Lottie from 'lottie-react-native';
import Styles from '../../styles/Styles';

export function Create({ navigation }: PropsStacksScreen) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [isDisbled, setIsDisabled] = useState(false);

  function handleNewAcount(): undefined | null {
    setIsDisabled(true);

    if (!passWordValidation(passWord) || !emailValidation(email)) {
      Alert.alert('Conta', 'E-mail ou senha com formato incorreto');
      setIsDisabled(false);
      return null;
    }

    auth()
      .createUserWithEmailAndPassword(email, passWord)
      .then(() => Alert.alert('Conta', 'Cadastrado com sucesso'))
      .catch(e => console.log(e))
      .finally(() => setIsDisabled(false));
  }

  return (
    <View style={Styles.Container}>
      <View>
        <Lottie
          style={Styles.Animations}
          source={require('../../asserts/87845-hello.json')}
          autoPlay
          loop
        />
      </View>

      <View>
        <View style={Styles.ContainerForm}>
          <Icon name="user" size={30} />
          <TextInput
            maxLength={10}
            onChangeText={setName}
            style={Styles.InputForm}
            placeholder="Name"
            autoCapitalize="none"
          />
        </View>

        <View style={Styles.MenssageValidateFormContent}>
          <Text style={Styles.TextMenssageValidate}>Enter your first name</Text>
        </View>

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

        <View style={Styles.ContainerForm}>
          <Icon name="lock" size={30} />
          <TextInput
            secureTextEntry
            maxLength={10}
            onChangeText={setPassWord}
            style={Styles.InputForm}
            placeholder="Password"
          />
        </View>

        <View style={Styles.MenssageValidateFormContent}>
          <Text style={Styles.TextMenssageValidate}>
            Your password must contain 6 characters
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            uppercase
            mode="contained"
            loading={isDisbled}
            style={Styles.ButtonForm}
            onPress={() => handleNewAcount()}
          >
            Register
          </Button>
        </View>
      </View>

      <View style={Styles.LinksForm}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
