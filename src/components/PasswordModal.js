import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import { styles } from '../screens/home-screen.styles';

export default function PasswordModal({
  visible,
  onUnlock,
  onReset,
  error,
  isSetup = false,
}) {
  const [input, setInput] = useState('');

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.lockIconCircle}>
            <Ionicons
              name={isSetup ? 'shield-checkmark' : 'lock-closed'}
              size={40}
              color={COLORS.primary}
            />
          </View>
          <Text style={styles.modalTitle}>
            {isSetup ? 'Secure Your Vault' : 'Vault Locked'}
          </Text>
          <Text style={styles.modalSubtitle}>
            {isSetup
              ? 'Set a password for your private vault.'
              : 'Enter password to unlock vault.'}
          </Text>
          <TextInput
            style={[styles.passwordInput, error && styles.inputError]}
            placeholder="Enter Password"
            secureTextEntry
            value={input}
            onChangeText={setInput}
            autoFocus
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity
            style={styles.unlockButton}
            onPress={async () => {
              const didUnlock = await onUnlock(input);
              if (didUnlock) {
                setInput('');
              }
            }}>
            <Text style={styles.unlockButtonText}>
              {isSetup ? 'Enable Vault' : 'Unlock Vault'}
            </Text>
          </TouchableOpacity>
          {!isSetup && (
            <TouchableOpacity style={styles.resetButton} onPress={onReset}>
              <Text style={styles.resetButtonText}>Forgot Password? Reset Vault</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}
