import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';
import { styles } from '../screens/home-screen.styles';
import NoteItem from './NoteItem';

export default function NotesList({
  activeTab,
  notes,
  selectedIds,
  isSelectionMode,
  isAnyDragging,
  onDelete,
  onTogglePin,
  onEdit,
  onToggleSelection,
  onLongPress,
  onDragStart,
  onDragEnd,
}) {
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onDelete={() => onDelete(item.id)}
            onTogglePin={() => onTogglePin(item.id)}
            onEdit={() => onEdit(item)}
            isSelected={selectedIds.includes(item.id)}
            onSelect={onToggleSelection}
            onLongPress={onLongPress}
            isSelectionMode={isSelectionMode}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Ionicons
              name={activeTab === 'vault' ? 'lock-closed-outline' : 'document-text-outline'}
              size={60}
              color={COLORS.primary}
            />
            <Text style={styles.emptyTitle}>
              {activeTab === 'vault' ? 'Vault is Empty' : 'No regular notes'}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
        scrollEnabled={!isAnyDragging}
      />
    </View>
  );
}
