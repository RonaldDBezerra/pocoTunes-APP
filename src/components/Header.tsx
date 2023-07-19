import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import {
  useTheme,
  Appbar,
  Button,
  Paragraph,
  ActivityIndicator,
  Title,
  Avatar,
  Text,
} from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from '../styles/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Hearder() {
  return (
    <SafeAreaView>
      <View style={Styles.ContainerHeader}>
        <View style={Styles.ContainerTextsHeader}>
          <View style={{marginBottom: 15}}>
            <Avatar.Icon size={50} icon="music" style={{backgroundColor: "red"}}/>
          </View>
          <View>
            <Title style={Styles.HeaderTitle}>Seja bem vindo!!!</Title>
            <Text style={Styles.HeaderText}>Pronto para ouvir as mais tocadas?</Text>
          </View>
        </View>
        <View>
          <Icon name={'exit-outline'} size={35} color={"white"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
