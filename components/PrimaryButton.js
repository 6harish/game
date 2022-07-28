import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PrimaryButton = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    padding: 5,
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },
  text: {
    color: '#fff',
  },
  pressed: {
    opacity: 0.75,
  },
});
