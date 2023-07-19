import React, { useState, useContext } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  View,
} from 'react-native';
import { Hearder } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { FeatureAlbuns } from '../../components/FeatureAlbuns';

export function Home() {

  return (
      <ScrollView style={{paddingBottom: 500}}>
        <Hearder />
        <Heading title='Os melhores hits de 2023'/>
        <FeatureAlbuns title='hits' /> 
        <Heading title='Só as melhores dos Racionais'/>
        <FeatureAlbuns title='Racionais' />
        <Heading title='Vamos de pagode na lage?'/>
        <FeatureAlbuns title='Pagode' />
        <Heading title='A resenha começou'/>
        <FeatureAlbuns title='Funk' />
        <Heading title='As melhores sofrencias'/>
        <FeatureAlbuns title='Sertanejo' />
        <Heading title='Só Trap atualizado'/>
        <FeatureAlbuns title='Trap' />
        <Heading title='Seguindo o hit do Kpop'/>
        <FeatureAlbuns title='Kpop' />
      </ ScrollView>
  );
}
