import { View ,Text, StyleSheet, FlatList} from "react-native";
import { useLayoutEffect } from "react";
import { MEAL } from "../Data/dummy-data";
import MealsItems from "../components/MealsItems";



function MealsOverViewScreen({route,navigation}){
    const catId=route.params.catogeryId;
    const displayedMeals = MEAL.filter((mealItem) => {
        return mealItem.categoryId.indexOf(catId) >= 0;
    });
  console.log("displayedMeals    ",displayedMeals)

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:route.params.title
        })
    },[navigation,route])
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
 
  return <View style={styles.mainContainer}>
      <FlatList  
      numColumns={1}
      data={displayedMeals}
      keyExtractor={(item)=> item.id}
      renderItem={loadMealsItem}
      />
   </View>
    }
 


export default MealsOverViewScreen;
const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  
  
}


})