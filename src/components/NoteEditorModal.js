import React from 'react';
import { Modal, View } from 'react-native';

import { styles } from '../screens/home-screen.styles';
import NoteInput from './NoteInput';

export default function NoteEditorModal({
  visible,
  editingNote,
  onCancel,
  onSave,
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <NoteInput
          isVisible={visible}
          onCancel={onCancel}
          onSave={onSave}
          initialTitle={editingNote?.title || ''}
          initialContent={editingNote?.content || ''}
          isEditing={!!editingNote}
        />
      </View>
    </Modal>
  );
}
