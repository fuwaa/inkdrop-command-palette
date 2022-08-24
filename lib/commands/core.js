"use babel";

export default [
  {
    name: "!Copy",
    category: "Core",
    command: "core:copy",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Copy Image",
    category: "Core",
    command: "core:copy-image",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Copy Note Link",
    category: "Core",
    command: "core:copy-note-link",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Cut",
    category: "Core",
    command: "core:cut",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Delete Note",
    category: "Core",
    command: "core:delete-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Delete Notebook",
    category: "Core",
    command: "core:delete-notebook",
    state: "disabled",
    shortcut: [""],
  },
  {
    name: "!Delete Tag",
    category: "Core",
    command: "core:delete-tag",
    state: "disabled",
    shortcut: [""],
  },
  {
    name: "!Duplicate Note",
    category: "Core",
    command: "core:duplicate-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Empty Trash",
    category: "Core",
    command: "core:empty-trash",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Filter notes",
    category: "Core",
    command: "core:filter-notes",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Filter by tag",
    category: "Core",
    command: "core:filter-by-tag",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Find",
    category: "Core",
    command: "core:find",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Clear search bar",
    category: "Core",
    command: "core:find-clear",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Find (Global)",
    category: "Core",
    command: "core:find-global",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Focus next",
    category: "Core",
    command: "core:focus-next",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Focus note list bar",
    category: "Core",
    command: "core:focus-note-list-bar",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Focus previous",
    category: "Core",
    command: "core:focus-previous",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Move notebook",
    category: "Core",
    command: "core:move-notebook",
    state: "disabled",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Move to notebook",
    category: "Core",
    command: "core:move-to-notebook",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Navigate back",
    category: "Core",
    command: "core:navigate-back",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Navigate forward",
    category: "Core",
    command: "core:navigate-forward",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!New Note",
    category: "Core",
    command: "core:new-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!New Notebook",
    category: "Core",
    command: "core:new-notebook",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Show all notes",
    category: "Core",
    command: "core:note-list-show-all-notes",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Show all notes in specified notebook",
    category: "Core",
    command: "core:note-list-show-notes-in-book",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Show all notes by tag",
    category: "Core",
    command: "core:notes-list-show-notes-with-tag",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Show all notes with status",
    category: "Core",
    command: "core:note-list-show-notes-with-status",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Show notes in book of editing note",
    category: "Core",
    command: "core:note-list-show-notes-in-book-of-editing-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Open first note",
    category: "Core",
    command: "core:open-first-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Open next note",
    category: "Core",
    command: "core:open-next-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Close note",
    category: "Core",
    command: "core:close-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Open note",
    category: "Core",
    command: "core:open-note",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Open note in separate window",
    category: "Core",
    command: "core:open-note-in-separate-window",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Open previous note",
    category: "Core",
    command: "core:open-prev-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Open tag settings",
    category: "Core",
    command: "core:open-tag-settings",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Paste",
    category: "Core",
    command: "core:paste",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Redo",
    category: "Core",
    command: "core:redo",
    selector: ".mde-cm-wrapper",
    shortcut: [""],
  },
  {
    name: "!Rename Notebook",
    category: "Core",
    command: "core:rename-notebook",
    selector: "body",
    state: "disabled",
    shortcut: [""],
  },
  {
    name: "!Save Image",
    category: "Core",
    command: "core:save-image",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Save Note",
    category: "Core",
    command: "core:save-note",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Select all",
    category: "Core",
    command: "core:select-all",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Search notes",
    category: "Core",
    command: "core:search-notes",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Share note",
    category: "Core",
    command: "core:share-note",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Show note revisions",
    category: "Core",
    command: "core:show-note-revisions",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: "!Focus sidebar",
    category: "Core",
    command: "core:sidebar-focus",
    selector: "body",
    state: "error",
    shortcut: [""],
  },
  {
    name: "!Select next item on sidebar",
    category: "Core",
    command: "core:sidebar-select-next-item",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Select previous item on sidebar",
    category: "Core",
    command: "core:sidebar-select-prev-item",
    selector: "body",
    shortcut: [""],
  },
  {
    name: "!Undo",
    category: "Core",
    command: "core:undo",
    selector: ".mde-cm-wrapper",
    shortcut: [""],
  },
  {
    name: ">Toggle editor drawer",
    category: "Core",
    command: "core:toggle-editor-drawer",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: ">Show editor drawer",
    category: "Core",
    command: "core:show-editor-drawer",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
  {
    name: ">Close editor drawer",
    category: "Core",
    command: "core:close-editor-drawer",
    selector: "body",
    state: "inprogress",
    shortcut: [""],
  },
];