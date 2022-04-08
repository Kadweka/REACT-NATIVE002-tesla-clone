import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';
export default function App() {
  return (
    <View style={styles.container}>
     <CarItem 
     name={"Model X"}
     tagline={"Order Online For"}
     taglineCTA={"Touchless Delivery"}
     image={require("./assets/images/mdls.jpeg")}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
