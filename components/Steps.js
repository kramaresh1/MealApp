import { Text,StyleSheet ,View} from "react-native";

function StepsDetailer({meal}){
return    meal.isVegan.map((step)=>(
    <Text  key={step}  style={styles.textStyle}>{step}</Text>
     ));
   
}
export default StepsDetailer ;
const styles=StyleSheet.create({
  textStyle:{
    color:'#eba434',
    fontSize:15,
    fontWeight:'bold',
    margin:2,
    padding:10,
    borderRadius:8,
    borderWidth:2,
    borderColor:'#eba434',
    backgroundColor:'#63481d'
    
  },

});