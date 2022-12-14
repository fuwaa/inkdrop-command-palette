"use babel";
export default [
  {
    name: ">Close",
    category: "Window",
    command: "window:close",
    selector: "body",
    shortcut: ["ctrl", "w"],
  },
  {
    name: ">Decrease font size",
    category: "Window",
    command: "window:decrease-font-size",
    selector: "body",
    shortcut: ["ctrl", "-"],
  },
  {
    name: ">Increase font size",
    category: "Window",
    command: "window:increase-font-size",
    selector: "body",
    shortcut: ["ctrl", "+"],
  },
  {
    name: ">Install shell commands (seriously, don't try running this)",
    category: "Window",
    command: "window:install-shell-commands",
    selector: "body",
    state: "notworking",
    shortcut: [""],
  },
  {
    name: ">New inkdrop window",
    category: "Window",
    command: "window:new-inkdrop-window",
    selector: "body",
    shortcut: ["ctrl", "alt", "n"],
  },
  {
    name: ">Reload",
    category: "Window",
    command: "window:reload",
    selector: "body",
    shortcut: ["ctrl", "alt", "r"],
  },
  {
    name: ">Toggle dev tools",
    category: "Window",
    command: "window:toggle-dev-tools",
    selector: "body",
    shortcut: ["ctrl", "alt", "i"],
  },
  {
    name: ">Toggle full screen",
    category: "Window",
    command: "window:toggle-full-screen",
    selector: "body",
    shortcut: ["F11"],
  },
];
