import { StyleSheet, View, ImageBackground} from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import Buttons from './src/components/Buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/Fundo.png')}
      style={styles.imageBackground}
      >
        <Buttons/>
        <Title/>
        <Form/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height:"auto"
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
});
