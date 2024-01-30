import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import FavScreens from './screens/FavScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealItemDetails from './screens/MealItemsDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { Store } from './screens/redux/Store';



export default function App() {
  const Stack=createNativeStackNavigator();
  const Drawer=createDrawerNavigator();
  function HrawerHandler(){
  return      <Drawer.Navigator screenOptions={
    {
      drawerActiveBackgroundColor:'lightblue',
      drawerStyle: {
        backgroundColor: '#c6cbef',
      },
      headerStyle:{backgroundColor:'red'},
      sceneContainerStyle:{backgroundColor:'#24180f'}
    }
  }>
            <Drawer.Screen name='MealsCategories'  component={CategoryScreen}  />
            <Drawer.Screen name='Favorite Meals'  component={FavScreens}  />
         </Drawer.Navigator>
  }
  return (
   
    <>
    <StatusBar style="light" /> 
    <Provider store={Store}>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      contentStyle:{backgroundColor:'#24180f'},
      headerTintColor:'white',
      headerStyle:{backgroundColor:'brown',
    }
    }}>
        <Stack.Screen name='drawer' component={HrawerHandler} options={{headerShown:false}}/>
    
      <Stack.Screen  name='MealOverView' component={MealsOverViewScreen}

      />
    
      <Stack.Screen name='MealItemsDetails' component={MealItemDetails}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
   
   
     </>
     
  );
}

const styles = StyleSheet.create({

});
