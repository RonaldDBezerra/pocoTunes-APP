'use strict';
import { StyleSheet, Dimensions, Platform, I18nManager } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  ////// FORM STYLE ////////

  Container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Animations: {
    marginTop: -75,
    marginBottom: -100,
    height: 250,
  },
  ContainerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    width: 300,
  },
  InputForm: {
    borderColor: '#0EA5EB',
    borderWidth: 1,
    padding: 3,
    width: 250,
    marginLeft: 10,
    fontSize: 18,
  },
  ButtonForm: {
    width: 200,
    justifyContent: 'center',
    backgroundColor: '#0EA5EB',
    marginLeft: 25,
  },
  LinksForm: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: 35,
    width: 350,
  },
  MenssageValidateFormContent: {
    marginBottom: 13,
    paddingLeft: 40,
  },
  TextMenssageValidate: {
    color: '#FB1B00',
  },

  ////// Header Style ////////

  ContainerHeader: {
    backgroundColor: '#000000',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ContainerTextsHeader: {
    justifyContent: 'space-evenly',
    width: 300,
  },
  HeaderTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  HeaderText: {
    color: 'white',
    opacity: 0.7,
    fontSize: 15,
  },

  ////// Heading Style ////////

  HeadingContent: {
    backgroundColor: '#000000',
    padding: 25,
  },

  HeadingTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  //////// FEATURE ALBUNS ///////

  CardContainer: {
    width: 200,
    height: 260,
    backgroundColor: '#000000',
    marginRight: 10,
    borderColor: '#21212E',
    borderWidth: 3,
    padding: 8,
  },

  TextCard: {
    color: 'white',
    opacity: 0.6,
    marginTop: 10,
  },
});
