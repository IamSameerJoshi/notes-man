import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import { styles } from '../screens/home-screen.styles';

export default function FloatingActionButton({
  isInputVisible,
  hasSelection,
  isAnyDragging,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.fab,
        isInputVisible && styles.fabActive,
        hasSelection && styles.fabSelection,
        isAnyDragging && styles.fabHidden,
      ]}
      onPress={onPress}>
      <Ionicons
        name={hasSelection || isInputVisible ? 'close' : 'add'}
        size={36}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
}
