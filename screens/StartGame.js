import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';

const StartGame = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be in between 1 - 99', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
    }
  }

  return (
    <LinearGradient colors={['#162f6a', '#5b5998']} style={styles.constainer}>
      <TextInput
        style={styles.keyboard}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonrow}>
        <View style={styles.buttonflex}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonflex}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </LinearGradient>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    height: 200,
    backgroundColor: '#f45',
    borderRadius: 6,
    elevation: 6,
    margin: 10,
    padding: 6,
    justifyContent: 'center',
    // width: '100%',
    // marginTop: 100,
  },
  keyboard: {
    borderBottomWidth: 2,
    fontWeight: '600',
    borderBottomColor: '#dd4',
    color: '#dd4',
    width: 50,
    fontSize: 32,
  },
  buttonrow: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buttonflex: {
    flex: 1,
  },
});
