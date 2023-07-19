import React, { useState, useContext } from 'react';
import { PropsHeading } from '../types/TypesStacksRoutes';
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
import { View } from 'react-native';
import Styles from '../styles/Styles';


export function Heading({ title }: PropsHeading) {
  return (
    <View style={Styles.HeadingContent}>
      <Title style={Styles.HeadingTitle}>{title}</Title>
    </View>
  );
}
