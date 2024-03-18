import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/Fundo.png')}
      style={styles.imageBackground}
      >
        <Title/>
        <Form/>
    
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
});
