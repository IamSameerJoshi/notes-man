import { useCallback, useState } from 'react';

const EMPTY_SELECTION = {
  regular: [],
  vault: [],
};

export default function useNoteSelection(activeTab) {
  const [selectedByTab, setSelectedByTab] = useState(EMPTY_SELECTION);
  const selectedIds = selectedByTab[activeTab] || [];

  const toggleSelection = useCallback((id) => {
    setSelectedByTab((current) => {
      const activeSelection = current[activeTab] || [];
      const nextSelection = activeSelection.includes(id)
        ? activeSelection.filter((itemId) => itemId !== id)
        : [...activeSelection, id];

      return {
        ...current,
        [activeTab]: nextSelection,
      };
    });
  }, [activeTab]);

  const selectOne = useCallback((id) => {
    setSelectedByTab((current) => {
      const activeSelection = current[activeTab] || [];
      if (activeSelection.includes(id)) {
        return current;
      }

      return {
        ...current,
        [activeTab]: [...activeSelection, id],
      };
    });
  }, [activeTab]);

  const removeSelection = useCallback((id) => {
    setSelectedByTab((current) => ({
      ...current,
      [activeTab]: (current[activeTab] || []).filter((itemId) => itemId !== id),
    }));
  }, [activeTab]);

  const pruneSelection = useCallback((validIds) => {
    setSelectedByTab((current) => ({
      ...current,
      [activeTab]: (current[activeTab] || []).filter((itemId) => validIds.includes(itemId)),
    }));
  }, [activeTab]);

  const clearSelection = useCallback(() => {
    setSelectedByTab((current) => ({
      ...current,
      [activeTab]: [],
    }));
  }, [activeTab]);

  return {
    selectedIds,
    isSelectionMode: selectedIds.length > 0,
    clearSelection,
    toggleSelection,
    selectOne,
    removeSelection,
    pruneSelection,
  };
}
