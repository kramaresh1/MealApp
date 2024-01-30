import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEAL } from "../Data/dummy-data";
import StepsDetailer from "./Steps";
import IngredientsDetailer from "./IngradientsDetailer";

function MealDetails({ mealId }) {
    const MealDetails = MEAL.find((item) => item.id === mealId);

    return  < ><ScrollView>
        <View style={styles.mainContainer}>
            <Image
                source={{ uri: MealDetails.imageURL }}
                style={styles.imageContainer} />
            <Text style={styles.title}>{MealDetails.title}</Text>
        </View>
        <View style={styles.innerContainer2}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Steps</Text>
         
        </View>
        <View style={styles.componentContainer}>
        <StepsDetailer meal={MealDetails} />
        </View>
        <View style={styles.innerContainer}>
         <Text  style={styles.text}>Ingredients</Text>
     
        </View>
        <View style={styles.componentContainer}>
        <IngredientsDetailer ingredients={MealDetails} />
        </View>
        </View>
        <View style={styles.innerContainer2}>
        <View style={{marginTop:10,paddingVertical:5, borderTopWidth:2,width:'80%',borderColor:'yellow'}}>
            <View style={styles.flexRow}>
             <Text style={styles.text2}> Affordability:</Text>
             <Text style={styles.text3}>{MealDetails.affordability}</Text>
            
            </View>
            <View  style={styles.flexRow}>
            <Text style={styles.text2}> Complexity:</Text>
            <Text  style={styles.text3}>{MealDetails.complexity}</Text>
           </View>
  
      
      </View >
      </View>
      </ScrollView> 
    </>
    
}
export default MealDetails;
const styles = StyleSheet.create({
    mainContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        width: '100%',

        marginTop: 10,
        marginVertical: 10,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10, overflow: 'hidden'

    },
    textColor:{
      color:'#eba434'
    },
    flexRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'space-between',
    margin:4,
    padding:10,
    borderRadius:8,
    borderWidth:2,
    borderColor:'#eba434',
    backgroundColor:'#63481d'
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10

    },
    innerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        width:'80%',
        borderBottomWidth:2,
        borderColor:'yellow',
        margin:10,
        padding:5
    }, text2:{
     
        margin:5,
        fontSize:15,
        color:'white',
        
     //   backgroundColor:'#b0d4e8'
       },
       text3:{
     
        margin:5,
        fontSize:15,
        color:'white',
        
       color:'#eba434'
       },
    innerContainer2:{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center', 
     
    },
    title:{
       padding:20,
       fontSize:20 ,
       fontWeight:'bold'
    },
    text:{
     color:'white',
     fontSize:17
    },

    componentContainer:{
     justifyContent:'center',
     marginHorizontal:10,
     width:'80%',
     borderRadius:8,
   
    }
})