import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import CarItem from './components/CarItem';
export default function App() {
  return (
    <View style={styles.container}>
     <CarItem/>
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
