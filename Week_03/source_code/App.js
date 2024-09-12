import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View>
          <Image source={{uri: 'https://picsum.photos/200'}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.heroText} >
            GROW YOUR BUSSINESS
          </Text>
        </View>
        <View>
          <Text style={styles.description} >
            We will help you realize your dream unless you don't cheat us
          </Text>
        </View>
        <View style={styles.buttonWrap}>
          <Pressable style={styles.button} >
            Login
          </Pressable >
          <Pressable style={styles.button} >
            Sign up
          </Pressable >
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 48,
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#6dc3fc'
  },
  image: {
    width: 100,
    height: 100,
  },
  heroText: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  description: {
    fontWeight: 600,
    textAlign: 'center',
  },
  buttonWrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end'
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'yellow',
    fontWeight: 600,
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});
