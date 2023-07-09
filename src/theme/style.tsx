import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  calculadoraContainer:{
    flex:1,
    backgroundColor:'#000',
    padding:40,
    justifyContent:'flex-end',
  },
  calculadoraText:{
    fontSize:70,
    color:'#fff',
    textAlign:'right',
  },
  calculadoraTextSec:{
    fontSize:30,
    color:'#fff',
    textAlign:'right',
  },
  calculadoraContainerBtn:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
  },
  calculadoraButton:{
    width:80,
    height:80,
    padding: 10,
    marginHorizontal: 5,
    borderRadius:100,
    backgroundColor:'#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#3E3432',
    borderWidth:1,

  },
  calculadoraBtnText:{
    fontSize:35,
    color:'#000',
  },
});
