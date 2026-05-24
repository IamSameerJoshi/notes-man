import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import { styles } from '../screens/home-screen.styles';

export default function SelectionBar({ count, onCancel, onDeleteSelected }) {
  if (count === 0) {
    return null;
  }

  return (
    <View style={styles.selectionBar}>
      <Text style={styles.selectionCount}>{count} selected</Text>
      <View style={styles.selectionActions}>
        <TouchableOpacity style={styles.selectionButton} onPress={onCancel}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.selectionButton, styles.deleteSelectedButton]}
          onPress={onDeleteSelected}>
          <Ionicons name="trash" size={18} color={COLORS.white} />
          <Text style={styles.deleteSelectedText}>Delete All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
