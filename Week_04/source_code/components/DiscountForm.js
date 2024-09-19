import { Text, SafeAreaView, StyleSheet, View, Pressable, Image, TextInput } from 'react-native';
import { useState } from 'react';

function makeid(length) {
    let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
  }

export default DiscountForm = () => {
  const [value, setValue] = useState('')
  const handleGenerateStr = () => {
    setValue(makeid(10));
  }

  return (
    <View style={styles.discountForm}>
      <TextInput
        style={styles.discountInput}
        placeholder="Ma giam gia"
        value={value}
        onChangeText={(newValue) => setValue(newValue)}
      />
      <Pressable onPress={handleGenerateStr} style={styles.discountBtn}>
       Ap dung
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  discountForm: {
    flexDirection: 'row',
    gap: 24
  },
  discountInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999999',
    padding: 10,
  },
  discountBtn: {
    padding: 10,
    backgroundColor: 'blue',
    color: 'white'
  }
});