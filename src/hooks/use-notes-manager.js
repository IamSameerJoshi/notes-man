import { useState } from 'react';

export default function useNotesManager() {
  const [regularNotes, setRegularNotes] = useState([]);
  const [vaultNotes, setVaultNotes] = useState([]);

  const updateNotesForTab = (tab, updater) => {
    if (tab === 'vault') {
      setVaultNotes((current) => updater(current));
      return;
    }

    setRegularNotes((current) => updater(current));
  };

  const addNote = (tab, title, content) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    updateNotesForTab(tab, (current) => [newNote, ...current]);
  };

  const updateNote = (tab, id, title, content) => {
    updateNotesForTab(tab, (current) =>
      current.map((note) => (note.id === id ? { ...note, title, content } : note))
    );
  };

  const deleteNote = (tab, id) => {
    updateNotesForTab(tab, (current) => current.filter((note) => note.id !== id));
  };

  const togglePin = (tab, id) => {
    updateNotesForTab(tab, (current) =>
      current.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  const deleteNotes = (tab, ids) => {
    updateNotesForTab(tab, (current) =>
      current.filter((note) => !ids.includes(note.id))
    );
  };

  return {
    regularNotes,
    setRegularNotes,
    vaultNotes,
    setVaultNotes,
    addNote,
    updateNote,
    deleteNote,
    togglePin,
    deleteNotes,
  };
}
