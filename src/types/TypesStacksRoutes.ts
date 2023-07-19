import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined; 
  Create: undefined;
  ForgotPassword: undefined;
  Tab: undefined;
};

interface IMusicReturn {
  artistId: string,
  artistName: string,
  collectionId: string,
  collectionName: string,
  collectionPrice: string,
  artworkUrl100: string,
  releaseDate: string,
  trackCount: string,
}

type PropsHeading = {
  title: string
}

type PropsFeatureAlbuns = {
  title: string
}

type PropsRenderItem = {
  key: number,
  item: {
    artistId: string
    artistName: string
    collectionId: string
    collectionName: string
    collectionPrice: string
    artworkUrl100: string
    releaseDate: string
    trackCount: string
  }
}

type PropsStacksScreen = NativeStackScreenProps<RootStackParamList>;

export {
  IMusicReturn,
  PropsStacksScreen,
  PropsHeading,
  PropsFeatureAlbuns,
  PropsRenderItem
}