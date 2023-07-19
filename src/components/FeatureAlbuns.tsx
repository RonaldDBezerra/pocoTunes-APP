import React, { useState, useContext, useEffect } from 'react';
import {
  PropsFeatureAlbuns,
  PropsRenderItem,
} from '../types/TypesStacksRoutes';
import searchAlbumsAPI from '../services/SearchAlbunsAPI';
import TouchableScale from 'react-native-touchable-scale';
import {
  useTheme,
  Appbar,
  Button,
  Paragraph,
  ActivityIndicator,
  Title,
  Avatar,
  // Text,
  Card,
} from 'react-native-paper';
import { ScrollView, View, Text } from 'react-native';
import Styles from '../styles/Styles';

export function FeatureAlbuns({ title }: PropsFeatureAlbuns) {
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    searchAlbumsAPI(title)
      .then(data => {
        setAlbuns(data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={{ backgroundColor: '#000000' }}>
      <ScrollView
        style={{ width: '100%', paddingLeft: 25 }}
        contentContainerStyle={{ paddingRight: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {albuns.map((item, index) => (
          <RenderItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

function RenderItem(props: PropsRenderItem) {
  // const navigation = useNavigation()

  // const onChangeScreen = (recipeCategory, title) => {
  //   navigation.navigate('searchresults', {
  //     title,
  //     whereRecipe: {
  //       recipeCategory
  //     }
  //   })
  // }

  const { item } = props;
  const {
    artistId,
    artistName,
    collectionId,
    collectionName,
    collectionPrice,
    artworkUrl100,
    releaseDate,
    trackCount,
  } = item;

  return (
    <View>
      <TouchableScale activeScale={0.98} tension={100} friction={10}>
        <Card style={Styles.CardContainer}>
          <Card.Cover source={{ uri: artworkUrl100 }} />
          <Text style={Styles.TextCard} numberOfLines={2}>
            {collectionName}
          </Text>
        </Card>
      </TouchableScale>
    </View>
  );
}
