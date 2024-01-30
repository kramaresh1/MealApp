import { View } from "react-native";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Icon from 'react-native-vector-icons/FontAwesome';
import { addFavItem,removeFavItem } from "./redux/Fav";
import { useDispatch,useSelector } from "react-redux";

 
function MealItemDetails({route,navigation}){
    const selectedMeal=route.params.mealId;
   const favMealIds=   useSelector((state)=>state.favItems.ids) ;
   let mealFav=favMealIds.includes(selectedMeal);
 
  const dispatch=useDispatch();
    function blinkIcon(){
        if(mealFav){
          
            dispatch(removeFavItem({id:selectedMeal}));
        }else{
           
            dispatch(addFavItem({id:selectedMeal}));
        }
        
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
   headerRight:()=>{
  
     return <Icon.Button name="star" backgroundColor="brown" color={ mealFav ? "red" : "white"} onPress={blinkIcon}></Icon.Button>
   }
        },)
    },[navigation,mealFav])
return <View>
       <MealDetails mealId={selectedMeal}/>
    </View>
}
export default MealItemDetails;