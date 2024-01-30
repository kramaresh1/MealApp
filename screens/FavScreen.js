
import { useDispatch,useSelector } from "react-redux";
import { View ,Text, StyleSheet, FlatList} from "react-native";
import { useLayoutEffect } from "react";
import { MEAL } from "../Data/dummy-data";
import MealsItems from "../components/MealsItems";
 
function FavScreens({route,navigation}){
const favMealIds1=useSelector((state)=>state.favItems.ids);
    const displayedMeals = MEAL.filter((mealItem) => {
       return favMealIds1.includes(mealItem.id)
    });
    function  loadMealsItem(itemData){
        const mealData={
            title:itemData.item.title,
            image:itemData.item.imageURL,
            affordability:itemData.item.affordability,
            complexity:itemData.item.complexity,
            mealId:itemData.item.id,
            
        }
    
          return <MealsItems mealData={mealData}/>
        }
    const favMealIds=   useSelector((state)=>state.favItems.ids) ;
    
 
    return <View style={styles.mainContainer}>
    <FlatList  
    numColumns={1}
    data={displayedMeals}
    keyExtractor={(item)=> item.id}
    renderItem={loadMealsItem}
    />
 </View>
  }
export default FavScreens;
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      
      
    }
    
    
    })