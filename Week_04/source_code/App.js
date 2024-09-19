import { Text, SafeAreaView, StyleSheet, View, Pressable } from 'react-native';
import ProductCard from './components/ProductCard';
import DiscountForm from './components/DiscountForm';

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.cardWrap}>
        <ProductCard />
        <DiscountForm />
      </View>
      <View style={styles.cardWrap}>
      </View>
      <View style={styles.cardWrap}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: 'start',
    backgroundColor: '#999999',
  },
  cardWrap: {
    padding: 16,
    gap: 16,
    backgroundColor: 'white'
  },
});
