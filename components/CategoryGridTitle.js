import { Pressable, View, StyleSheet, Text, Dimensions } from "react-native";

function CategoryGridTitle({ title, color,onPress }) {
    return <View style={[styles.mainContainer,{ backgroundColor: color }] }>
        
        <Pressable android_ripple={{color:'grey'}} style={({ pressed }) => [styles.button, pressed ? styles.prssedButton : null]}
         onPress={onPress} ><View style={[styles.innerContainer]}>
                <Text style={styles.text}>{title}</Text>
            </View></Pressable>
            <View>
          
            </View>
    </View>
}
export default CategoryGridTitle;
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        margin: 16,
        padding: 10
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: Dimensions.OS == 'android' ? 'hidden' : 'visible',
        
    },
    button: {
        flex: 1
    },
    prssedButton: {
        color: 'light grey'
    },
    text:{
        fontSize:18
    }
})

