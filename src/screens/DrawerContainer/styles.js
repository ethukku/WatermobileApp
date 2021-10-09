import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawer:{
    flex: 1,
    height:"100%",
    width:200,
  },
  accountcontent:{
    flex:1,
    backgroundColor:"blue",
    height:200,
    width:200,
    marginBottom:500,
    paddingLeft:200
  },
  content: {
    flex: 4,
    flexDirection: 'row',
    height:"100%",
    width:"100%",
  },
  container: {
    flex:1,
    alignItems:'flex-start',
    height:100,
    width:"100%",
    marginTop:500,
    paddingRight:200
  }
});

export default styles;
