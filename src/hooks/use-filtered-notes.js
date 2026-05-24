import { useMemo } from 'react';

export default function useFilteredNotes({ activeTab, regularNotes, vaultNotes, searchQuery }) {
  const currentNotes = activeTab === 'regular' ? regularNotes : vaultNotes;

  const filteredNotes = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase();
    const filtered = currentNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(normalizedQuery) ||
        note.content.toLowerCase().includes(normalizedQuery)
    );

    return filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [currentNotes, searchQuery]);

  return { currentNotes, filteredNotes };
}
