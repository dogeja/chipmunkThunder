import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  getClipboardText: () => ipcRenderer.invoke("getClipboardText"),
  storeText: (text: string) => ipcRenderer.invoke("storeText", text),
});
