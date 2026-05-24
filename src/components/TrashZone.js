import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import { styles } from '../screens/home-screen.styles';

export default function TrashZone({ visible }) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.trashZone}>
      <View style={styles.trashIconCircle}>
        <Ionicons name="trash" size={32} color={COLORS.secondary} />
      </View>
      <Text style={styles.trashText}>DRAG HERE TO DELETE</Text>
    </View>
  );
}
