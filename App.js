import {StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StartGame from './screens/StartGame';
import React from 'react';

const App = () => {
  return (
    <LinearGradient
      colors={['#42f548', '#5b5998', '#162f6a']}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imagetrans}>
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imagetrans: {
    opacity: 0.2,
  },
});
