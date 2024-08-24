import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, ImageBackground } from 'react-native';

import AssetExample from './components/AssetExample.js'
// Correctly importing the image
const floresta = require('./assets/forest.png'); // Use forward slashes

export default function App() {
  return (
    <ImageBackground style={styles.container}
      source={floresta}>
      <View style={styles.viewinputs}>
        <AssetExample></AssetExample>

        <View style={styles.inputs}>
          <TextInput style={styles.txtInput}
            placeholder="Username"></TextInput>
        </View>

        <View style={styles.inputs}>
          <TextInput style={styles.txtInput}
            placeholder='Password'></TextInput>
        </View>
        <View>
          <Button
            title='Login'
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'red',
  },
  headerButton: {
    color: 'purple',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 8,
  },
  viewinputs: {
    justifyContent: 'space-around',
    height: 400,
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  inputs: {
    alignItems: 'center',
  },
  txtInput: {
    color: 'darkgrey',
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
});
