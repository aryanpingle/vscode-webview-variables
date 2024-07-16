# VSCode Webview Variables

A collection of all Theme Colors provided by Visual Studio Code's Extension API (and their corresponding CSS names).

The primary purpose of this package is to ensure that silly typos in variable names don't cause your code to break. Instead, you can rely on the autocomplete to correctly use (and find!) VSCode's in-built colors. 

## Usage

```typescript
import { VscodeColors, createCSSVariable } from "vscode-webview-variables";

// "--vscode-diffEditor-removedLineBackground"
const vscodeRed = VscodeColors["diffEditor-removedLineBackground"].cssName;
// "var(--vscode-diffEditor-removedLineBackground, red)"
const cssColor = createCSSVariable(vscodeRed, "red");

// "diffEditor.removedLineBackground"
const themeName = VscodeColors["diffEditor-removedLineBackground"].themeName;
const themeColor = new vscode.ThemeColor(themeName);
```

## Installation

```bash
$ npm install vscode-webview-variables
```
