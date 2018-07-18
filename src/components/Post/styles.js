import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container:
    {
      backgroundColor: colors.white,
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: metrics.margin,
      marginTop: metrics.margin,
      borderRadius: 5,
    },
  titleContainer:
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '88%',
      paddingTop: metrics.padding,
      paddingBottom: metrics.padding / 2,
      borderBottomWidth: 1,
      borderColor: colors.borderColor,
      marginHorizontal: metrics.margin,

    },
  title:
    {
      fontSize: fonts.big,
      fontWeight: 'bold',
      color: colors.titleColor,
    },
  author:
    {

    },
  textContainer:
  {
    paddingHorizontal: metrics.padding,
    paddingTop: metrics.padding / 2,
    paddingBottom: metrics.padding,
  },
  text:
  {

  },
});

export default styles;
