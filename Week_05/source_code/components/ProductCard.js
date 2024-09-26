import { Text, SafeAreaView, StyleSheet, View, Pressable, Image } from 'react-native';
import { useState } from 'react';


export default ProductCard = () => {

  const [count, setCount] = useState(1);
  const price = 144000;

  const increseCount = () => {
    setCount((prev) => {
      return prev + 1;
    })
  }

  const descreaseCount = () => {
    if (count > 1) {
      setCount(prev => {
        return prev - 1;
      })
    }
  }

  return (
    <>
      <View style={styles.productWrap}>
        <Image style={styles.productImage} source={{uri: 'https://picsum.photos/200'}} />
        <View style={styles.productDetail}>
          <Text style={styles.productName}>  
            Hey to make your image responsive is simple
          </Text>
          <Text style={styles.productBran}>  
            I tried other solutions
          </Text>
          <Text style={styles.productPrice}>  
            {price * count} VND
          </Text>
          <Text style={styles.productPriceBase}>  
            {price} VND
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.productCounter}>
              <Pressable onPress={descreaseCount} style={styles.productCountBtn}>
                -
              </Pressable>
              <Text style={styles.productName}>  
                {count}
              </Text>
              <Pressable onPress={increseCount} style={styles.productCountBtn}>
                +
              </Pressable>
            </View>
            <Text style={{color: 'blue', fontSize: 12}}>  
              Mua sau
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.popupProductPrice}>
        <Text style={{fontSize: 16, fontWeight: 600, color: '#999999'}}>  
          Thanh tien
        </Text>
        <Text style={styles.productPrice}>  
          {price * count} VND
        </Text>
        <Pressable style={{width: '100%', backgroundColor: 'red', padding: 8, color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 600, textTransform: 'uppercase'}}>
          Dat hang
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  popupProductPrice: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white'
  },
  productImage: {
    width: '33%',
    aspectRatio: '10/16',
    justifyContent: 'start',
    backgroundColor: '#ecf0f1',
    resizeMode: 'cover',
  },
  productWrap: {
    flexDirection: 'row',
    gap: 16,
  },
  productDetail: {
    flex: 1,
    gap: 8
  },
  productName: {
    fontSize: 14,
    fontWeight: 600,
  },
  productBran: {
    fontSize: 14,
    fontWeight: 600
  },
  productPrice: {
    fontSize: 18,
    color: 'red',
    fontWeight: 600
  },
  productPriceBase: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 600,
    textDecoration: 'line-through'
  },
  productCounter: {
    flexDirection: 'row',
    gap: 16
  },
  productCountBtn: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999999'
  }
});
