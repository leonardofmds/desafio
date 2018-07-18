import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container:
    {
      backgroundColor: colors.white,
      height: metrics.headerHeight,
      paddingTop: metrics.headerPadding,
      paddingHorizontal: metrics.padding,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  title:
    {
      fontSize: fonts.big,
      fontWeight: 'bold',
      color: colors.titleColor,
    },
});

export default styles;
