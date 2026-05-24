import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { loadNotesFromStorage } from '../utils/storage';

export default function useVault({ setVaultNotes, setActiveTab }) {
  const [vaultPassword, setVaultPassword] = useState('');
  const [isVaultLocked, setIsVaultLocked] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const initializeVaultState = useCallback((needsPassword) => {
    setIsVaultLocked(needsPassword);
  }, []);

  const openPasswordModal = useCallback(() => {
    setIsPasswordModalVisible(true);
  }, []);

  const closePasswordModal = useCallback(() => {
    setIsPasswordModalVisible(false);
  }, []);

  const clearPasswordError = useCallback(() => {
    setPasswordError('');
  }, []);

  const handleUnlock = async (password) => {
    if (!password) {
      setPasswordError('Password required');
      return false;
    }

    if (isVaultLocked) {
      const result = await loadNotesFromStorage(password);
      if (result.error) {
        setPasswordError('Incorrect password');
        return false;
      }

      setVaultNotes(result.vault);
      setVaultPassword(password);
      setIsVaultLocked(false);
      setIsPasswordModalVisible(false);
      setPasswordError('');
      return true;
    }

    setVaultPassword(password);
    setIsPasswordModalVisible(false);
    setPasswordError('');
    return true;
  };

  const handleResetVault = () => {
    Alert.alert(
      'Reset Vault?',
      'This will delete all notes inside your private vault. Regular notes will remain safe.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset Vault',
          style: 'destructive',
          onPress: () => {
            setVaultNotes([]);
            setVaultPassword('');
            setIsVaultLocked(false);
            setIsPasswordModalVisible(false);
            setPasswordError('');
            setActiveTab('regular');
          },
        },
      ]
    );
  };

  return {
    vaultPassword,
    isVaultLocked,
    isPasswordModalVisible,
    passwordError,
    initializeVaultState,
    openPasswordModal,
    closePasswordModal,
    clearPasswordError,
    handleUnlock,
    handleResetVault,
  };
}
