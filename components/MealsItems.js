import { View ,Text,Image ,StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

function MealsItems({mealData }){
    const navigation = useNavigation();
    function mealsHandler(){
        console.log("mealId",mealData.mealId)
        navigation.navigate("MealItemsDetails",{
             mealId:mealData.mealId,
        })
    }
 return <View style={styles.mainContainer}>
          <Pressable  style={({ pressed }) => [styles.press, pressed ? styles.prssedButton : null]} android_ripple={{color:'grey'}}
          onPress={mealsHandler}>
       <Image
        source={{  uri: mealData.image  }}
        style={styles.imageContainer} />
      
       <Text style={styles.text}>{mealData.title}</Text>
       <View style={{paddingVertical:5}}>
      <Text style={styles.text2}> {'Affordability:-  '}{mealData.affordability}</Text>
      <Text  style={styles.text2}>{'Complexity:-  '}{mealData.complexity}</Text>
      </View >
      </Pressable>
    </View>
}
export default MealsItems;

const styles=StyleSheet.create({

       mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
         width:300,
         margin:5,
         marginTop:10,
         elevation:5,
         backgroundColor:'white',
         borderRadius:10,overflow:'hidden'
       },
       press:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
       
     
       
       },
       prssedButton: {
        color: 'light grey',
        opacity:0.75
    },
       text:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
       },
       text2:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'left',
        margin:5,
        fontSize:15,
        backgroundColor:'#b0d4e8'
       },
       imageContainer:{
        width:'100%',
         height:200,
         flex:1,
         backgroundColor:'white',
         borderTopRightRadius:10,
         borderTopLeftRadius:10
       
       }
})