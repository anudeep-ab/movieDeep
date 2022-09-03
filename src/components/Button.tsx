import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useFocusable} from '@noriginmedia/norigin-spatial-navigation';
import {Colors} from '../config/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const {title, onPress, color = 'primary'} = props;

  const {ref, focused, focusSelf} = useFocusable();

  const buttonStyles = [
    styles.button,
    focused ? styles.buttonFocused : null,
    {borderColor: color === 'white' ? Colors.primary : Colors.white},
    {backgroundColor: Colors[color]},
  ];

  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.8}
      onFocus={focusSelf}
      onPress={onPress}
      style={buttonStyles}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
  },
  buttonFocused: {
    borderWidth: 2,
  },
});

export default Button;
