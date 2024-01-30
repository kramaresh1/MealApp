import { FlatList } from "react-native";
import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { useLayoutEffect } from "react";
function CategoryScreen({navigation}){
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'All categories'
        })
    },[navigation])
    function renderCategoryItem(itemDate){
      
        function navigatePage(){
            navigation.navigate('MealOverView',{
                catogeryId:itemDate.item.id
            });
        }
       
       return <CategoryGridTitle title={itemDate.item.title} color={itemDate.item.color} onPress={navigatePage}/>
    }
  return <FlatList 
    numColumns={2}
    data={CATEGORIES}
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}  
     />
}

export default CategoryScreen;