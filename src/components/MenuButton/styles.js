import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  btnIcon: {
    height: 20,
    width: 20
  },
  btnText: {
    paddingLeft:5,
    fontSize: 17,
    marginLeft: 10,
    marginTop: 2,
    fontWeight: 'bold'
  }
});

export default styles;
