import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import { styles } from '../screens/home-screen.styles';

export default function NotesTabs({
  activeTab,
  isVaultLocked,
  tabIndicatorX,
  onSelectRegular,
  onSelectVault,
}) {
  return (
    <View style={styles.tabContainer}>
      <Animated.View
        style={[styles.tabIndicator, { transform: [{ translateX: tabIndicatorX }] }]}
      />
      <TouchableOpacity style={styles.tabButton} onPress={onSelectRegular}>
        <Ionicons
          name="list"
          size={18}
          color={activeTab === 'regular' ? COLORS.primary : COLORS.textSecondary}
        />
        <Text style={[styles.tabText, activeTab === 'regular' && styles.tabTextActive]}>
          Regular
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={onSelectVault}>
        <Ionicons
          name={isVaultLocked ? 'lock-closed' : 'shield-checkmark'}
          size={18}
          color={activeTab === 'vault' ? COLORS.primary : COLORS.textSecondary}
        />
        <Text style={[styles.tabText, activeTab === 'vault' && styles.tabTextActive]}>
          Vault
        </Text>
      </TouchableOpacity>
    </View>
  );
}
