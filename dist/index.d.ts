export interface VscodeColor {
  cssName: string;
  themeName: string;
}

/**
 * Each key of this object maps to an object of type `VscodeColor` containing the CSS
 * variable name and VSCode Theme Color name.
 *
 * @example
 * VscodeCSSVariables.foreground = {
 *     cssName: "--vscode-foreground",
 *     themeName: "foreground"
 * }
 * VscodeCSSVariables["textLink-foreground"] = {
 *     cssName: "--vscode-textLink-foreground",
 *     themeName: "textLink.foreground"
 * }
 *
 * @see https://code.visualstudio.com/api/references/theme-color
 */
export declare const VscodeColors = {
  "actionBar-toggledBackground": {
    "cssName": "--vscode-actionBar-toggledBackground",
    "themeName": "actionBar.toggledBackground"
  },
  "activityBar-activeBorder": {
    "cssName": "--vscode-activityBar-activeBorder",
    "themeName": "activityBar.activeBorder"
  },
  "activityBar-background": {
    "cssName": "--vscode-activityBar-background",
    "themeName": "activityBar.background"
  },
  "activityBar-border": {
    "cssName": "--vscode-activityBar-border",
    "themeName": "activityBar.border"
  },
  "activityBar-dropBorder": {
    "cssName": "--vscode-activityBar-dropBorder",
    "themeName": "activityBar.dropBorder"
  },
  "activityBar-foreground": {
    "cssName": "--vscode-activityBar-foreground",
    "themeName": "activityBar.foreground"
  },
  "activityBar-inactiveForeground": {
    "cssName": "--vscode-activityBar-inactiveForeground",
    "themeName": "activityBar.inactiveForeground"
  },
  "activityBarBadge-background": {
    "cssName": "--vscode-activityBarBadge-background",
    "themeName": "activityBarBadge.background"
  },
  "activityBarBadge-foreground": {
    "cssName": "--vscode-activityBarBadge-foreground",
    "themeName": "activityBarBadge.foreground"
  },
  "activityBarTop-activeBorder": {
    "cssName": "--vscode-activityBarTop-activeBorder",
    "themeName": "activityBarTop.activeBorder"
  },
  "activityBarTop-dropBorder": {
    "cssName": "--vscode-activityBarTop-dropBorder",
    "themeName": "activityBarTop.dropBorder"
  },
  "activityBarTop-foreground": {
    "cssName": "--vscode-activityBarTop-foreground",
    "themeName": "activityBarTop.foreground"
  },
  "activityBarTop-inactiveForeground": {
    "cssName": "--vscode-activityBarTop-inactiveForeground",
    "themeName": "activityBarTop.inactiveForeground"
  },
  "badge-background": {
    "cssName": "--vscode-badge-background",
    "themeName": "badge.background"
  },
  "badge-foreground": {
    "cssName": "--vscode-badge-foreground",
    "themeName": "badge.foreground"
  },
  "banner-background": {
    "cssName": "--vscode-banner-background",
    "themeName": "banner.background"
  },
  "banner-foreground": {
    "cssName": "--vscode-banner-foreground",
    "themeName": "banner.foreground"
  },
  "banner-iconForeground": {
    "cssName": "--vscode-banner-iconForeground",
    "themeName": "banner.iconForeground"
  },
  "breadcrumb-activeSelectionForeground": {
    "cssName": "--vscode-breadcrumb-activeSelectionForeground",
    "themeName": "breadcrumb.activeSelectionForeground"
  },
  "breadcrumb-background": {
    "cssName": "--vscode-breadcrumb-background",
    "themeName": "breadcrumb.background"
  },
  "breadcrumb-focusForeground": {
    "cssName": "--vscode-breadcrumb-focusForeground",
    "themeName": "breadcrumb.focusForeground"
  },
  "breadcrumb-foreground": {
    "cssName": "--vscode-breadcrumb-foreground",
    "themeName": "breadcrumb.foreground"
  },
  "breadcrumbPicker-background": {
    "cssName": "--vscode-breadcrumbPicker-background",
    "themeName": "breadcrumbPicker.background"
  },
  "button-background": {
    "cssName": "--vscode-button-background",
    "themeName": "button.background"
  },
  "button-border": {
    "cssName": "--vscode-button-border",
    "themeName": "button.border"
  },
  "button-foreground": {
    "cssName": "--vscode-button-foreground",
    "themeName": "button.foreground"
  },
  "button-hoverBackground": {
    "cssName": "--vscode-button-hoverBackground",
    "themeName": "button.hoverBackground"
  },
  "button-secondaryBackground": {
    "cssName": "--vscode-button-secondaryBackground",
    "themeName": "button.secondaryBackground"
  },
  "button-secondaryForeground": {
    "cssName": "--vscode-button-secondaryForeground",
    "themeName": "button.secondaryForeground"
  },
  "button-secondaryHoverBackground": {
    "cssName": "--vscode-button-secondaryHoverBackground",
    "themeName": "button.secondaryHoverBackground"
  },
  "button-separator": {
    "cssName": "--vscode-button-separator",
    "themeName": "button.separator"
  },
  "charts-blue": {
    "cssName": "--vscode-charts-blue",
    "themeName": "charts.blue"
  },
  "charts-foreground": {
    "cssName": "--vscode-charts-foreground",
    "themeName": "charts.foreground"
  },
  "charts-green": {
    "cssName": "--vscode-charts-green",
    "themeName": "charts.green"
  },
  "charts-lines": {
    "cssName": "--vscode-charts-lines",
    "themeName": "charts.lines"
  },
  "charts-orange": {
    "cssName": "--vscode-charts-orange",
    "themeName": "charts.orange"
  },
  "charts-purple": {
    "cssName": "--vscode-charts-purple",
    "themeName": "charts.purple"
  },
  "charts-red": {
    "cssName": "--vscode-charts-red",
    "themeName": "charts.red"
  },
  "charts-yellow": {
    "cssName": "--vscode-charts-yellow",
    "themeName": "charts.yellow"
  },
  "chat-avatarBackground": {
    "cssName": "--vscode-chat-avatarBackground",
    "themeName": "chat.avatarBackground"
  },
  "chat-avatarForeground": {
    "cssName": "--vscode-chat-avatarForeground",
    "themeName": "chat.avatarForeground"
  },
  "chat-requestBackground": {
    "cssName": "--vscode-chat-requestBackground",
    "themeName": "chat.requestBackground"
  },
  "chat-requestBorder": {
    "cssName": "--vscode-chat-requestBorder",
    "themeName": "chat.requestBorder"
  },
  "chat-slashCommandBackground": {
    "cssName": "--vscode-chat-slashCommandBackground",
    "themeName": "chat.slashCommandBackground"
  },
  "chat-slashCommandForeground": {
    "cssName": "--vscode-chat-slashCommandForeground",
    "themeName": "chat.slashCommandForeground"
  },
  "checkbox-background": {
    "cssName": "--vscode-checkbox-background",
    "themeName": "checkbox.background"
  },
  "checkbox-border": {
    "cssName": "--vscode-checkbox-border",
    "themeName": "checkbox.border"
  },
  "checkbox-foreground": {
    "cssName": "--vscode-checkbox-foreground",
    "themeName": "checkbox.foreground"
  },
  "checkbox-selectBackground": {
    "cssName": "--vscode-checkbox-selectBackground",
    "themeName": "checkbox.selectBackground"
  },
  "checkbox-selectBorder": {
    "cssName": "--vscode-checkbox-selectBorder",
    "themeName": "checkbox.selectBorder"
  },
  "commandCenter-activeBackground": {
    "cssName": "--vscode-commandCenter-activeBackground",
    "themeName": "commandCenter.activeBackground"
  },
  "commandCenter-activeBorder": {
    "cssName": "--vscode-commandCenter-activeBorder",
    "themeName": "commandCenter.activeBorder"
  },
  "commandCenter-activeForeground": {
    "cssName": "--vscode-commandCenter-activeForeground",
    "themeName": "commandCenter.activeForeground"
  },
  "commandCenter-background": {
    "cssName": "--vscode-commandCenter-background",
    "themeName": "commandCenter.background"
  },
  "commandCenter-border": {
    "cssName": "--vscode-commandCenter-border",
    "themeName": "commandCenter.border"
  },
  "commandCenter-debuggingBackground": {
    "cssName": "--vscode-commandCenter-debuggingBackground",
    "themeName": "commandCenter.debuggingBackground"
  },
  "commandCenter-foreground": {
    "cssName": "--vscode-commandCenter-foreground",
    "themeName": "commandCenter.foreground"
  },
  "commandCenter-inactiveBorder": {
    "cssName": "--vscode-commandCenter-inactiveBorder",
    "themeName": "commandCenter.inactiveBorder"
  },
  "commandCenter-inactiveForeground": {
    "cssName": "--vscode-commandCenter-inactiveForeground",
    "themeName": "commandCenter.inactiveForeground"
  },
  "commentsView-resolvedIcon": {
    "cssName": "--vscode-commentsView-resolvedIcon",
    "themeName": "commentsView.resolvedIcon"
  },
  "commentsView-unresolvedIcon": {
    "cssName": "--vscode-commentsView-unresolvedIcon",
    "themeName": "commentsView.unresolvedIcon"
  },
  "debugConsole-errorForeground": {
    "cssName": "--vscode-debugConsole-errorForeground",
    "themeName": "debugConsole.errorForeground"
  },
  "debugConsole-infoForeground": {
    "cssName": "--vscode-debugConsole-infoForeground",
    "themeName": "debugConsole.infoForeground"
  },
  "debugConsole-sourceForeground": {
    "cssName": "--vscode-debugConsole-sourceForeground",
    "themeName": "debugConsole.sourceForeground"
  },
  "debugConsole-warningForeground": {
    "cssName": "--vscode-debugConsole-warningForeground",
    "themeName": "debugConsole.warningForeground"
  },
  "debugConsoleInputIcon-foreground": {
    "cssName": "--vscode-debugConsoleInputIcon-foreground",
    "themeName": "debugConsoleInputIcon.foreground"
  },
  "debugExceptionWidget-background": {
    "cssName": "--vscode-debugExceptionWidget-background",
    "themeName": "debugExceptionWidget.background"
  },
  "debugExceptionWidget-border": {
    "cssName": "--vscode-debugExceptionWidget-border",
    "themeName": "debugExceptionWidget.border"
  },
  "debugIcon-breakpointCurrentStackframeForeground": {
    "cssName": "--vscode-debugIcon-breakpointCurrentStackframeForeground",
    "themeName": "debugIcon.breakpointCurrentStackframeForeground"
  },
  "debugIcon-breakpointDisabledForeground": {
    "cssName": "--vscode-debugIcon-breakpointDisabledForeground",
    "themeName": "debugIcon.breakpointDisabledForeground"
  },
  "debugIcon-breakpointForeground": {
    "cssName": "--vscode-debugIcon-breakpointForeground",
    "themeName": "debugIcon.breakpointForeground"
  },
  "debugIcon-breakpointStackframeForeground": {
    "cssName": "--vscode-debugIcon-breakpointStackframeForeground",
    "themeName": "debugIcon.breakpointStackframeForeground"
  },
  "debugIcon-breakpointUnverifiedForeground": {
    "cssName": "--vscode-debugIcon-breakpointUnverifiedForeground",
    "themeName": "debugIcon.breakpointUnverifiedForeground"
  },
  "debugIcon-continueForeground": {
    "cssName": "--vscode-debugIcon-continueForeground",
    "themeName": "debugIcon.continueForeground"
  },
  "debugIcon-disconnectForeground": {
    "cssName": "--vscode-debugIcon-disconnectForeground",
    "themeName": "debugIcon.disconnectForeground"
  },
  "debugIcon-pauseForeground": {
    "cssName": "--vscode-debugIcon-pauseForeground",
    "themeName": "debugIcon.pauseForeground"
  },
  "debugIcon-restartForeground": {
    "cssName": "--vscode-debugIcon-restartForeground",
    "themeName": "debugIcon.restartForeground"
  },
  "debugIcon-startForeground": {
    "cssName": "--vscode-debugIcon-startForeground",
    "themeName": "debugIcon.startForeground"
  },
  "debugIcon-stepBackForeground": {
    "cssName": "--vscode-debugIcon-stepBackForeground",
    "themeName": "debugIcon.stepBackForeground"
  },
  "debugIcon-stepIntoForeground": {
    "cssName": "--vscode-debugIcon-stepIntoForeground",
    "themeName": "debugIcon.stepIntoForeground"
  },
  "debugIcon-stepOutForeground": {
    "cssName": "--vscode-debugIcon-stepOutForeground",
    "themeName": "debugIcon.stepOutForeground"
  },
  "debugIcon-stepOverForeground": {
    "cssName": "--vscode-debugIcon-stepOverForeground",
    "themeName": "debugIcon.stepOverForeground"
  },
  "debugIcon-stopForeground": {
    "cssName": "--vscode-debugIcon-stopForeground",
    "themeName": "debugIcon.stopForeground"
  },
  "debugTokenExpression-boolean": {
    "cssName": "--vscode-debugTokenExpression-boolean",
    "themeName": "debugTokenExpression.boolean"
  },
  "debugTokenExpression-error": {
    "cssName": "--vscode-debugTokenExpression-error",
    "themeName": "debugTokenExpression.error"
  },
  "debugTokenExpression-name": {
    "cssName": "--vscode-debugTokenExpression-name",
    "themeName": "debugTokenExpression.name"
  },
  "debugTokenExpression-number": {
    "cssName": "--vscode-debugTokenExpression-number",
    "themeName": "debugTokenExpression.number"
  },
  "debugTokenExpression-string": {
    "cssName": "--vscode-debugTokenExpression-string",
    "themeName": "debugTokenExpression.string"
  },
  "debugTokenExpression-value": {
    "cssName": "--vscode-debugTokenExpression-value",
    "themeName": "debugTokenExpression.value"
  },
  "debugToolBar-background": {
    "cssName": "--vscode-debugToolBar-background",
    "themeName": "debugToolBar.background"
  },
  "debugView-exceptionLabelBackground": {
    "cssName": "--vscode-debugView-exceptionLabelBackground",
    "themeName": "debugView.exceptionLabelBackground"
  },
  "debugView-exceptionLabelForeground": {
    "cssName": "--vscode-debugView-exceptionLabelForeground",
    "themeName": "debugView.exceptionLabelForeground"
  },
  "debugView-stateLabelBackground": {
    "cssName": "--vscode-debugView-stateLabelBackground",
    "themeName": "debugView.stateLabelBackground"
  },
  "debugView-stateLabelForeground": {
    "cssName": "--vscode-debugView-stateLabelForeground",
    "themeName": "debugView.stateLabelForeground"
  },
  "debugView-valueChangedHighlight": {
    "cssName": "--vscode-debugView-valueChangedHighlight",
    "themeName": "debugView.valueChangedHighlight"
  },
  "descriptionForeground": {
    "cssName": "--vscode-descriptionForeground",
    "themeName": "descriptionForeground"
  },
  "diffEditor-diagonalFill": {
    "cssName": "--vscode-diffEditor-diagonalFill",
    "themeName": "diffEditor.diagonalFill"
  },
  "diffEditor-insertedLineBackground": {
    "cssName": "--vscode-diffEditor-insertedLineBackground",
    "themeName": "diffEditor.insertedLineBackground"
  },
  "diffEditor-insertedTextBackground": {
    "cssName": "--vscode-diffEditor-insertedTextBackground",
    "themeName": "diffEditor.insertedTextBackground"
  },
  "diffEditor-move-border": {
    "cssName": "--vscode-diffEditor-move-border",
    "themeName": "diffEditor.move.border"
  },
  "diffEditor-moveActive-border": {
    "cssName": "--vscode-diffEditor-moveActive-border",
    "themeName": "diffEditor.moveActive.border"
  },
  "diffEditor-removedLineBackground": {
    "cssName": "--vscode-diffEditor-removedLineBackground",
    "themeName": "diffEditor.removedLineBackground"
  },
  "diffEditor-removedTextBackground": {
    "cssName": "--vscode-diffEditor-removedTextBackground",
    "themeName": "diffEditor.removedTextBackground"
  },
  "diffEditor-unchangedCodeBackground": {
    "cssName": "--vscode-diffEditor-unchangedCodeBackground",
    "themeName": "diffEditor.unchangedCodeBackground"
  },
  "diffEditor-unchangedRegionBackground": {
    "cssName": "--vscode-diffEditor-unchangedRegionBackground",
    "themeName": "diffEditor.unchangedRegionBackground"
  },
  "diffEditor-unchangedRegionForeground": {
    "cssName": "--vscode-diffEditor-unchangedRegionForeground",
    "themeName": "diffEditor.unchangedRegionForeground"
  },
  "diffEditor-unchangedRegionShadow": {
    "cssName": "--vscode-diffEditor-unchangedRegionShadow",
    "themeName": "diffEditor.unchangedRegionShadow"
  },
  "disabledForeground": {
    "cssName": "--vscode-disabledForeground",
    "themeName": "disabledForeground"
  },
  "dropdown-background": {
    "cssName": "--vscode-dropdown-background",
    "themeName": "dropdown.background"
  },
  "dropdown-border": {
    "cssName": "--vscode-dropdown-border",
    "themeName": "dropdown.border"
  },
  "dropdown-foreground": {
    "cssName": "--vscode-dropdown-foreground",
    "themeName": "dropdown.foreground"
  },
  "dropdown-listBackground": {
    "cssName": "--vscode-dropdown-listBackground",
    "themeName": "dropdown.listBackground"
  },
  "editor-background": {
    "cssName": "--vscode-editor-background",
    "themeName": "editor.background"
  },
  "editor-findMatchBackground": {
    "cssName": "--vscode-editor-findMatchBackground",
    "themeName": "editor.findMatchBackground"
  },
  "editor-findMatchHighlightBackground": {
    "cssName": "--vscode-editor-findMatchHighlightBackground",
    "themeName": "editor.findMatchHighlightBackground"
  },
  "editor-findRangeHighlightBackground": {
    "cssName": "--vscode-editor-findRangeHighlightBackground",
    "themeName": "editor.findRangeHighlightBackground"
  },
  "editor-focusedStackFrameHighlightBackground": {
    "cssName": "--vscode-editor-focusedStackFrameHighlightBackground",
    "themeName": "editor.focusedStackFrameHighlightBackground"
  },
  "editor-foldBackground": {
    "cssName": "--vscode-editor-foldBackground",
    "themeName": "editor.foldBackground"
  },
  "editor-foreground": {
    "cssName": "--vscode-editor-foreground",
    "themeName": "editor.foreground"
  },
  "editor-hoverHighlightBackground": {
    "cssName": "--vscode-editor-hoverHighlightBackground",
    "themeName": "editor.hoverHighlightBackground"
  },
  "editor-inactiveSelectionBackground": {
    "cssName": "--vscode-editor-inactiveSelectionBackground",
    "themeName": "editor.inactiveSelectionBackground"
  },
  "editor-inlineValuesBackground": {
    "cssName": "--vscode-editor-inlineValuesBackground",
    "themeName": "editor.inlineValuesBackground"
  },
  "editor-inlineValuesForeground": {
    "cssName": "--vscode-editor-inlineValuesForeground",
    "themeName": "editor.inlineValuesForeground"
  },
  "editor-lineHighlightBorder": {
    "cssName": "--vscode-editor-lineHighlightBorder",
    "themeName": "editor.lineHighlightBorder"
  },
  "editor-linkedEditingBackground": {
    "cssName": "--vscode-editor-linkedEditingBackground",
    "themeName": "editor.linkedEditingBackground"
  },
  "editor-rangeHighlightBackground": {
    "cssName": "--vscode-editor-rangeHighlightBackground",
    "themeName": "editor.rangeHighlightBackground"
  },
  "editor-selectionBackground": {
    "cssName": "--vscode-editor-selectionBackground",
    "themeName": "editor.selectionBackground"
  },
  "editor-selectionHighlightBackground": {
    "cssName": "--vscode-editor-selectionHighlightBackground",
    "themeName": "editor.selectionHighlightBackground"
  },
  "editor-snippetFinalTabstopHighlightBorder": {
    "cssName": "--vscode-editor-snippetFinalTabstopHighlightBorder",
    "themeName": "editor.snippetFinalTabstopHighlightBorder"
  },
  "editor-snippetTabstopHighlightBackground": {
    "cssName": "--vscode-editor-snippetTabstopHighlightBackground",
    "themeName": "editor.snippetTabstopHighlightBackground"
  },
  "editor-stackFrameHighlightBackground": {
    "cssName": "--vscode-editor-stackFrameHighlightBackground",
    "themeName": "editor.stackFrameHighlightBackground"
  },
  "editor-symbolHighlightBackground": {
    "cssName": "--vscode-editor-symbolHighlightBackground",
    "themeName": "editor.symbolHighlightBackground"
  },
  "editor-wordHighlightBackground": {
    "cssName": "--vscode-editor-wordHighlightBackground",
    "themeName": "editor.wordHighlightBackground"
  },
  "editor-wordHighlightStrongBackground": {
    "cssName": "--vscode-editor-wordHighlightStrongBackground",
    "themeName": "editor.wordHighlightStrongBackground"
  },
  "editor-wordHighlightTextBackground": {
    "cssName": "--vscode-editor-wordHighlightTextBackground",
    "themeName": "editor.wordHighlightTextBackground"
  },
  "editorActiveLineNumber-foreground": {
    "cssName": "--vscode-editorActiveLineNumber-foreground",
    "themeName": "editorActiveLineNumber.foreground"
  },
  "editorBracketHighlight-foreground1": {
    "cssName": "--vscode-editorBracketHighlight-foreground1",
    "themeName": "editorBracketHighlight.foreground1"
  },
  "editorBracketHighlight-foreground2": {
    "cssName": "--vscode-editorBracketHighlight-foreground2",
    "themeName": "editorBracketHighlight.foreground2"
  },
  "editorBracketHighlight-foreground3": {
    "cssName": "--vscode-editorBracketHighlight-foreground3",
    "themeName": "editorBracketHighlight.foreground3"
  },
  "editorBracketHighlight-foreground4": {
    "cssName": "--vscode-editorBracketHighlight-foreground4",
    "themeName": "editorBracketHighlight.foreground4"
  },
  "editorBracketHighlight-foreground5": {
    "cssName": "--vscode-editorBracketHighlight-foreground5",
    "themeName": "editorBracketHighlight.foreground5"
  },
  "editorBracketHighlight-foreground6": {
    "cssName": "--vscode-editorBracketHighlight-foreground6",
    "themeName": "editorBracketHighlight.foreground6"
  },
  "editorBracketHighlight-unexpectedBracket-foreground": {
    "cssName": "--vscode-editorBracketHighlight-unexpectedBracket-foreground",
    "themeName": "editorBracketHighlight.unexpectedBracket.foreground"
  },
  "editorBracketMatch-background": {
    "cssName": "--vscode-editorBracketMatch-background",
    "themeName": "editorBracketMatch.background"
  },
  "editorBracketMatch-border": {
    "cssName": "--vscode-editorBracketMatch-border",
    "themeName": "editorBracketMatch.border"
  },
  "editorBracketPairGuide-activeBackground1": {
    "cssName": "--vscode-editorBracketPairGuide-activeBackground1",
    "themeName": "editorBracketPairGuide.activeBackground1"
  },
  "editorBracketPairGuide-activeBackground2": {
    "cssName": "--vscode-editorBracketPairGuide-activeBackground2",
    "themeName": "editorBracketPairGuide.activeBackground2"
  },
  "editorBracketPairGuide-activeBackground3": {
    "cssName": "--vscode-editorBracketPairGuide-activeBackground3",
    "themeName": "editorBracketPairGuide.activeBackground3"
  },
  "editorBracketPairGuide-activeBackground4": {
    "cssName": "--vscode-editorBracketPairGuide-activeBackground4",
    "themeName": "editorBracketPairGuide.activeBackground4"
  },
  "editorBracketPairGuide-activeBackground5": {
    "cssName": "--vscode-editorBracketPairGuide-activeBackground5",
    "themeName": "editorBracketPairGuide.activeBackground5"
  },
  "editorBracketPairGuide-activeBackground6": {
    "cssName": "--vscode-editorBracketPairGuide-activeBackground6",
    "themeName": "editorBracketPairGuide.activeBackground6"
  },
  "editorBracketPairGuide-background1": {
    "cssName": "--vscode-editorBracketPairGuide-background1",
    "themeName": "editorBracketPairGuide.background1"
  },
  "editorBracketPairGuide-background2": {
    "cssName": "--vscode-editorBracketPairGuide-background2",
    "themeName": "editorBracketPairGuide.background2"
  },
  "editorBracketPairGuide-background3": {
    "cssName": "--vscode-editorBracketPairGuide-background3",
    "themeName": "editorBracketPairGuide.background3"
  },
  "editorBracketPairGuide-background4": {
    "cssName": "--vscode-editorBracketPairGuide-background4",
    "themeName": "editorBracketPairGuide.background4"
  },
  "editorBracketPairGuide-background5": {
    "cssName": "--vscode-editorBracketPairGuide-background5",
    "themeName": "editorBracketPairGuide.background5"
  },
  "editorBracketPairGuide-background6": {
    "cssName": "--vscode-editorBracketPairGuide-background6",
    "themeName": "editorBracketPairGuide.background6"
  },
  "editorCodeLens-foreground": {
    "cssName": "--vscode-editorCodeLens-foreground",
    "themeName": "editorCodeLens.foreground"
  },
  "editorCommentsWidget-rangeActiveBackground": {
    "cssName": "--vscode-editorCommentsWidget-rangeActiveBackground",
    "themeName": "editorCommentsWidget.rangeActiveBackground"
  },
  "editorCommentsWidget-rangeBackground": {
    "cssName": "--vscode-editorCommentsWidget-rangeBackground",
    "themeName": "editorCommentsWidget.rangeBackground"
  },
  "editorCommentsWidget-replyInputBackground": {
    "cssName": "--vscode-editorCommentsWidget-replyInputBackground",
    "themeName": "editorCommentsWidget.replyInputBackground"
  },
  "editorCommentsWidget-resolvedBorder": {
    "cssName": "--vscode-editorCommentsWidget-resolvedBorder",
    "themeName": "editorCommentsWidget.resolvedBorder"
  },
  "editorCommentsWidget-unresolvedBorder": {
    "cssName": "--vscode-editorCommentsWidget-unresolvedBorder",
    "themeName": "editorCommentsWidget.unresolvedBorder"
  },
  "editorCursor-foreground": {
    "cssName": "--vscode-editorCursor-foreground",
    "themeName": "editorCursor.foreground"
  },
  "editorError-foreground": {
    "cssName": "--vscode-editorError-foreground",
    "themeName": "editorError.foreground"
  },
  "editorGhostText-foreground": {
    "cssName": "--vscode-editorGhostText-foreground",
    "themeName": "editorGhostText.foreground"
  },
  "editorGroup-border": {
    "cssName": "--vscode-editorGroup-border",
    "themeName": "editorGroup.border"
  },
  "editorGroup-dropBackground": {
    "cssName": "--vscode-editorGroup-dropBackground",
    "themeName": "editorGroup.dropBackground"
  },
  "editorGroup-dropIntoPromptBackground": {
    "cssName": "--vscode-editorGroup-dropIntoPromptBackground",
    "themeName": "editorGroup.dropIntoPromptBackground"
  },
  "editorGroup-dropIntoPromptForeground": {
    "cssName": "--vscode-editorGroup-dropIntoPromptForeground",
    "themeName": "editorGroup.dropIntoPromptForeground"
  },
  "editorGroupHeader-noTabsBackground": {
    "cssName": "--vscode-editorGroupHeader-noTabsBackground",
    "themeName": "editorGroupHeader.noTabsBackground"
  },
  "editorGroupHeader-tabsBackground": {
    "cssName": "--vscode-editorGroupHeader-tabsBackground",
    "themeName": "editorGroupHeader.tabsBackground"
  },
  "editorGroupHeader-tabsBorder": {
    "cssName": "--vscode-editorGroupHeader-tabsBorder",
    "themeName": "editorGroupHeader.tabsBorder"
  },
  "editorGutter-addedBackground": {
    "cssName": "--vscode-editorGutter-addedBackground",
    "themeName": "editorGutter.addedBackground"
  },
  "editorGutter-background": {
    "cssName": "--vscode-editorGutter-background",
    "themeName": "editorGutter.background"
  },
  "editorGutter-commentGlyphForeground": {
    "cssName": "--vscode-editorGutter-commentGlyphForeground",
    "themeName": "editorGutter.commentGlyphForeground"
  },
  "editorGutter-commentRangeForeground": {
    "cssName": "--vscode-editorGutter-commentRangeForeground",
    "themeName": "editorGutter.commentRangeForeground"
  },
  "editorGutter-commentUnresolvedGlyphForeground": {
    "cssName": "--vscode-editorGutter-commentUnresolvedGlyphForeground",
    "themeName": "editorGutter.commentUnresolvedGlyphForeground"
  },
  "editorGutter-deletedBackground": {
    "cssName": "--vscode-editorGutter-deletedBackground",
    "themeName": "editorGutter.deletedBackground"
  },
  "editorGutter-foldingControlForeground": {
    "cssName": "--vscode-editorGutter-foldingControlForeground",
    "themeName": "editorGutter.foldingControlForeground"
  },
  "editorGutter-modifiedBackground": {
    "cssName": "--vscode-editorGutter-modifiedBackground",
    "themeName": "editorGutter.modifiedBackground"
  },
  "editorHint-foreground": {
    "cssName": "--vscode-editorHint-foreground",
    "themeName": "editorHint.foreground"
  },
  "editorHoverWidget-background": {
    "cssName": "--vscode-editorHoverWidget-background",
    "themeName": "editorHoverWidget.background"
  },
  "editorHoverWidget-border": {
    "cssName": "--vscode-editorHoverWidget-border",
    "themeName": "editorHoverWidget.border"
  },
  "editorHoverWidget-foreground": {
    "cssName": "--vscode-editorHoverWidget-foreground",
    "themeName": "editorHoverWidget.foreground"
  },
  "editorHoverWidget-highlightForeground": {
    "cssName": "--vscode-editorHoverWidget-highlightForeground",
    "themeName": "editorHoverWidget.highlightForeground"
  },
  "editorHoverWidget-statusBarBackground": {
    "cssName": "--vscode-editorHoverWidget-statusBarBackground",
    "themeName": "editorHoverWidget.statusBarBackground"
  },
  "editorIndentGuide-activeBackground": {
    "cssName": "--vscode-editorIndentGuide-activeBackground",
    "themeName": "editorIndentGuide.activeBackground"
  },
  "editorIndentGuide-activeBackground1": {
    "cssName": "--vscode-editorIndentGuide-activeBackground1",
    "themeName": "editorIndentGuide.activeBackground1"
  },
  "editorIndentGuide-activeBackground2": {
    "cssName": "--vscode-editorIndentGuide-activeBackground2",
    "themeName": "editorIndentGuide.activeBackground2"
  },
  "editorIndentGuide-activeBackground3": {
    "cssName": "--vscode-editorIndentGuide-activeBackground3",
    "themeName": "editorIndentGuide.activeBackground3"
  },
  "editorIndentGuide-activeBackground4": {
    "cssName": "--vscode-editorIndentGuide-activeBackground4",
    "themeName": "editorIndentGuide.activeBackground4"
  },
  "editorIndentGuide-activeBackground5": {
    "cssName": "--vscode-editorIndentGuide-activeBackground5",
    "themeName": "editorIndentGuide.activeBackground5"
  },
  "editorIndentGuide-activeBackground6": {
    "cssName": "--vscode-editorIndentGuide-activeBackground6",
    "themeName": "editorIndentGuide.activeBackground6"
  },
  "editorIndentGuide-background": {
    "cssName": "--vscode-editorIndentGuide-background",
    "themeName": "editorIndentGuide.background"
  },
  "editorIndentGuide-background1": {
    "cssName": "--vscode-editorIndentGuide-background1",
    "themeName": "editorIndentGuide.background1"
  },
  "editorIndentGuide-background2": {
    "cssName": "--vscode-editorIndentGuide-background2",
    "themeName": "editorIndentGuide.background2"
  },
  "editorIndentGuide-background3": {
    "cssName": "--vscode-editorIndentGuide-background3",
    "themeName": "editorIndentGuide.background3"
  },
  "editorIndentGuide-background4": {
    "cssName": "--vscode-editorIndentGuide-background4",
    "themeName": "editorIndentGuide.background4"
  },
  "editorIndentGuide-background5": {
    "cssName": "--vscode-editorIndentGuide-background5",
    "themeName": "editorIndentGuide.background5"
  },
  "editorIndentGuide-background6": {
    "cssName": "--vscode-editorIndentGuide-background6",
    "themeName": "editorIndentGuide.background6"
  },
  "editorInfo-foreground": {
    "cssName": "--vscode-editorInfo-foreground",
    "themeName": "editorInfo.foreground"
  },
  "editorInlayHint-background": {
    "cssName": "--vscode-editorInlayHint-background",
    "themeName": "editorInlayHint.background"
  },
  "editorInlayHint-foreground": {
    "cssName": "--vscode-editorInlayHint-foreground",
    "themeName": "editorInlayHint.foreground"
  },
  "editorInlayHint-parameterBackground": {
    "cssName": "--vscode-editorInlayHint-parameterBackground",
    "themeName": "editorInlayHint.parameterBackground"
  },
  "editorInlayHint-parameterForeground": {
    "cssName": "--vscode-editorInlayHint-parameterForeground",
    "themeName": "editorInlayHint.parameterForeground"
  },
  "editorInlayHint-typeBackground": {
    "cssName": "--vscode-editorInlayHint-typeBackground",
    "themeName": "editorInlayHint.typeBackground"
  },
  "editorInlayHint-typeForeground": {
    "cssName": "--vscode-editorInlayHint-typeForeground",
    "themeName": "editorInlayHint.typeForeground"
  },
  "editorLightBulb-foreground": {
    "cssName": "--vscode-editorLightBulb-foreground",
    "themeName": "editorLightBulb.foreground"
  },
  "editorLightBulbAi-foreground": {
    "cssName": "--vscode-editorLightBulbAi-foreground",
    "themeName": "editorLightBulbAi.foreground"
  },
  "editorLightBulbAutoFix-foreground": {
    "cssName": "--vscode-editorLightBulbAutoFix-foreground",
    "themeName": "editorLightBulbAutoFix.foreground"
  },
  "editorLineNumber-activeForeground": {
    "cssName": "--vscode-editorLineNumber-activeForeground",
    "themeName": "editorLineNumber.activeForeground"
  },
  "editorLineNumber-foreground": {
    "cssName": "--vscode-editorLineNumber-foreground",
    "themeName": "editorLineNumber.foreground"
  },
  "editorLink-activeForeground": {
    "cssName": "--vscode-editorLink-activeForeground",
    "themeName": "editorLink.activeForeground"
  },
  "editorMarkerNavigation-background": {
    "cssName": "--vscode-editorMarkerNavigation-background",
    "themeName": "editorMarkerNavigation.background"
  },
  "editorMarkerNavigationError-background": {
    "cssName": "--vscode-editorMarkerNavigationError-background",
    "themeName": "editorMarkerNavigationError.background"
  },
  "editorMarkerNavigationError-headerBackground": {
    "cssName": "--vscode-editorMarkerNavigationError-headerBackground",
    "themeName": "editorMarkerNavigationError.headerBackground"
  },
  "editorMarkerNavigationInfo-background": {
    "cssName": "--vscode-editorMarkerNavigationInfo-background",
    "themeName": "editorMarkerNavigationInfo.background"
  },
  "editorMarkerNavigationInfo-headerBackground": {
    "cssName": "--vscode-editorMarkerNavigationInfo-headerBackground",
    "themeName": "editorMarkerNavigationInfo.headerBackground"
  },
  "editorMarkerNavigationWarning-background": {
    "cssName": "--vscode-editorMarkerNavigationWarning-background",
    "themeName": "editorMarkerNavigationWarning.background"
  },
  "editorMarkerNavigationWarning-headerBackground": {
    "cssName": "--vscode-editorMarkerNavigationWarning-headerBackground",
    "themeName": "editorMarkerNavigationWarning.headerBackground"
  },
  "editorMultiCursor-primary-foreground": {
    "cssName": "--vscode-editorMultiCursor-primary-foreground",
    "themeName": "editorMultiCursor.primary.foreground"
  },
  "editorMultiCursor-secondary-foreground": {
    "cssName": "--vscode-editorMultiCursor-secondary-foreground",
    "themeName": "editorMultiCursor.secondary.foreground"
  },
  "editorOverviewRuler-addedForeground": {
    "cssName": "--vscode-editorOverviewRuler-addedForeground",
    "themeName": "editorOverviewRuler.addedForeground"
  },
  "editorOverviewRuler-border": {
    "cssName": "--vscode-editorOverviewRuler-border",
    "themeName": "editorOverviewRuler.border"
  },
  "editorOverviewRuler-bracketMatchForeground": {
    "cssName": "--vscode-editorOverviewRuler-bracketMatchForeground",
    "themeName": "editorOverviewRuler.bracketMatchForeground"
  },
  "editorOverviewRuler-commentForeground": {
    "cssName": "--vscode-editorOverviewRuler-commentForeground",
    "themeName": "editorOverviewRuler.commentForeground"
  },
  "editorOverviewRuler-commentUnresolvedForeground": {
    "cssName": "--vscode-editorOverviewRuler-commentUnresolvedForeground",
    "themeName": "editorOverviewRuler.commentUnresolvedForeground"
  },
  "editorOverviewRuler-commonContentForeground": {
    "cssName": "--vscode-editorOverviewRuler-commonContentForeground",
    "themeName": "editorOverviewRuler.commonContentForeground"
  },
  "editorOverviewRuler-currentContentForeground": {
    "cssName": "--vscode-editorOverviewRuler-currentContentForeground",
    "themeName": "editorOverviewRuler.currentContentForeground"
  },
  "editorOverviewRuler-deletedForeground": {
    "cssName": "--vscode-editorOverviewRuler-deletedForeground",
    "themeName": "editorOverviewRuler.deletedForeground"
  },
  "editorOverviewRuler-errorForeground": {
    "cssName": "--vscode-editorOverviewRuler-errorForeground",
    "themeName": "editorOverviewRuler.errorForeground"
  },
  "editorOverviewRuler-findMatchForeground": {
    "cssName": "--vscode-editorOverviewRuler-findMatchForeground",
    "themeName": "editorOverviewRuler.findMatchForeground"
  },
  "editorOverviewRuler-incomingContentForeground": {
    "cssName": "--vscode-editorOverviewRuler-incomingContentForeground",
    "themeName": "editorOverviewRuler.incomingContentForeground"
  },
  "editorOverviewRuler-infoForeground": {
    "cssName": "--vscode-editorOverviewRuler-infoForeground",
    "themeName": "editorOverviewRuler.infoForeground"
  },
  "editorOverviewRuler-inlineChatInserted": {
    "cssName": "--vscode-editorOverviewRuler-inlineChatInserted",
    "themeName": "editorOverviewRuler.inlineChatInserted"
  },
  "editorOverviewRuler-inlineChatRemoved": {
    "cssName": "--vscode-editorOverviewRuler-inlineChatRemoved",
    "themeName": "editorOverviewRuler.inlineChatRemoved"
  },
  "editorOverviewRuler-modifiedForeground": {
    "cssName": "--vscode-editorOverviewRuler-modifiedForeground",
    "themeName": "editorOverviewRuler.modifiedForeground"
  },
  "editorOverviewRuler-rangeHighlightForeground": {
    "cssName": "--vscode-editorOverviewRuler-rangeHighlightForeground",
    "themeName": "editorOverviewRuler.rangeHighlightForeground"
  },
  "editorOverviewRuler-selectionHighlightForeground": {
    "cssName": "--vscode-editorOverviewRuler-selectionHighlightForeground",
    "themeName": "editorOverviewRuler.selectionHighlightForeground"
  },
  "editorOverviewRuler-warningForeground": {
    "cssName": "--vscode-editorOverviewRuler-warningForeground",
    "themeName": "editorOverviewRuler.warningForeground"
  },
  "editorOverviewRuler-wordHighlightForeground": {
    "cssName": "--vscode-editorOverviewRuler-wordHighlightForeground",
    "themeName": "editorOverviewRuler.wordHighlightForeground"
  },
  "editorOverviewRuler-wordHighlightStrongForeground": {
    "cssName": "--vscode-editorOverviewRuler-wordHighlightStrongForeground",
    "themeName": "editorOverviewRuler.wordHighlightStrongForeground"
  },
  "editorOverviewRuler-wordHighlightTextForeground": {
    "cssName": "--vscode-editorOverviewRuler-wordHighlightTextForeground",
    "themeName": "editorOverviewRuler.wordHighlightTextForeground"
  },
  "editorPane-background": {
    "cssName": "--vscode-editorPane-background",
    "themeName": "editorPane.background"
  },
  "editorRuler-foreground": {
    "cssName": "--vscode-editorRuler-foreground",
    "themeName": "editorRuler.foreground"
  },
  "editorStickyScroll-background": {
    "cssName": "--vscode-editorStickyScroll-background",
    "themeName": "editorStickyScroll.background"
  },
  "editorStickyScroll-shadow": {
    "cssName": "--vscode-editorStickyScroll-shadow",
    "themeName": "editorStickyScroll.shadow"
  },
  "editorStickyScrollHover-background": {
    "cssName": "--vscode-editorStickyScrollHover-background",
    "themeName": "editorStickyScrollHover.background"
  },
  "editorSuggestWidget-background": {
    "cssName": "--vscode-editorSuggestWidget-background",
    "themeName": "editorSuggestWidget.background"
  },
  "editorSuggestWidget-border": {
    "cssName": "--vscode-editorSuggestWidget-border",
    "themeName": "editorSuggestWidget.border"
  },
  "editorSuggestWidget-focusHighlightForeground": {
    "cssName": "--vscode-editorSuggestWidget-focusHighlightForeground",
    "themeName": "editorSuggestWidget.focusHighlightForeground"
  },
  "editorSuggestWidget-foreground": {
    "cssName": "--vscode-editorSuggestWidget-foreground",
    "themeName": "editorSuggestWidget.foreground"
  },
  "editorSuggestWidget-highlightForeground": {
    "cssName": "--vscode-editorSuggestWidget-highlightForeground",
    "themeName": "editorSuggestWidget.highlightForeground"
  },
  "editorSuggestWidget-selectedBackground": {
    "cssName": "--vscode-editorSuggestWidget-selectedBackground",
    "themeName": "editorSuggestWidget.selectedBackground"
  },
  "editorSuggestWidget-selectedForeground": {
    "cssName": "--vscode-editorSuggestWidget-selectedForeground",
    "themeName": "editorSuggestWidget.selectedForeground"
  },
  "editorSuggestWidget-selectedIconForeground": {
    "cssName": "--vscode-editorSuggestWidget-selectedIconForeground",
    "themeName": "editorSuggestWidget.selectedIconForeground"
  },
  "editorSuggestWidgetStatus-foreground": {
    "cssName": "--vscode-editorSuggestWidgetStatus-foreground",
    "themeName": "editorSuggestWidgetStatus.foreground"
  },
  "editorUnicodeHighlight-border": {
    "cssName": "--vscode-editorUnicodeHighlight-border",
    "themeName": "editorUnicodeHighlight.border"
  },
  "editorUnnecessaryCode-opacity": {
    "cssName": "--vscode-editorUnnecessaryCode-opacity",
    "themeName": "editorUnnecessaryCode.opacity"
  },
  "editorWarning-foreground": {
    "cssName": "--vscode-editorWarning-foreground",
    "themeName": "editorWarning.foreground"
  },
  "editorWatermark-foreground": {
    "cssName": "--vscode-editorWatermark-foreground",
    "themeName": "editorWatermark.foreground"
  },
  "editorWhitespace-foreground": {
    "cssName": "--vscode-editorWhitespace-foreground",
    "themeName": "editorWhitespace.foreground"
  },
  "editorWidget-background": {
    "cssName": "--vscode-editorWidget-background",
    "themeName": "editorWidget.background"
  },
  "editorWidget-border": {
    "cssName": "--vscode-editorWidget-border",
    "themeName": "editorWidget.border"
  },
  "editorWidget-foreground": {
    "cssName": "--vscode-editorWidget-foreground",
    "themeName": "editorWidget.foreground"
  },
  "errorForeground": {
    "cssName": "--vscode-errorForeground",
    "themeName": "errorForeground"
  },
  "extensionBadge-remoteBackground": {
    "cssName": "--vscode-extensionBadge-remoteBackground",
    "themeName": "extensionBadge.remoteBackground"
  },
  "extensionBadge-remoteForeground": {
    "cssName": "--vscode-extensionBadge-remoteForeground",
    "themeName": "extensionBadge.remoteForeground"
  },
  "extensionButton-background": {
    "cssName": "--vscode-extensionButton-background",
    "themeName": "extensionButton.background"
  },
  "extensionButton-foreground": {
    "cssName": "--vscode-extensionButton-foreground",
    "themeName": "extensionButton.foreground"
  },
  "extensionButton-hoverBackground": {
    "cssName": "--vscode-extensionButton-hoverBackground",
    "themeName": "extensionButton.hoverBackground"
  },
  "extensionButton-prominentBackground": {
    "cssName": "--vscode-extensionButton-prominentBackground",
    "themeName": "extensionButton.prominentBackground"
  },
  "extensionButton-prominentForeground": {
    "cssName": "--vscode-extensionButton-prominentForeground",
    "themeName": "extensionButton.prominentForeground"
  },
  "extensionButton-prominentHoverBackground": {
    "cssName": "--vscode-extensionButton-prominentHoverBackground",
    "themeName": "extensionButton.prominentHoverBackground"
  },
  "extensionButton-separator": {
    "cssName": "--vscode-extensionButton-separator",
    "themeName": "extensionButton.separator"
  },
  "extensionIcon-preReleaseForeground": {
    "cssName": "--vscode-extensionIcon-preReleaseForeground",
    "themeName": "extensionIcon.preReleaseForeground"
  },
  "extensionIcon-sponsorForeground": {
    "cssName": "--vscode-extensionIcon-sponsorForeground",
    "themeName": "extensionIcon.sponsorForeground"
  },
  "extensionIcon-starForeground": {
    "cssName": "--vscode-extensionIcon-starForeground",
    "themeName": "extensionIcon.starForeground"
  },
  "extensionIcon-verifiedForeground": {
    "cssName": "--vscode-extensionIcon-verifiedForeground",
    "themeName": "extensionIcon.verifiedForeground"
  },
  "focusBorder": {
    "cssName": "--vscode-focusBorder",
    "themeName": "focusBorder"
  },
  "foreground": {
    "cssName": "--vscode-foreground",
    "themeName": "foreground"
  },
  "gitDecoration-addedResourceForeground": {
    "cssName": "--vscode-gitDecoration-addedResourceForeground",
    "themeName": "gitDecoration.addedResourceForeground"
  },
  "gitDecoration-conflictingResourceForeground": {
    "cssName": "--vscode-gitDecoration-conflictingResourceForeground",
    "themeName": "gitDecoration.conflictingResourceForeground"
  },
  "gitDecoration-deletedResourceForeground": {
    "cssName": "--vscode-gitDecoration-deletedResourceForeground",
    "themeName": "gitDecoration.deletedResourceForeground"
  },
  "gitDecoration-ignoredResourceForeground": {
    "cssName": "--vscode-gitDecoration-ignoredResourceForeground",
    "themeName": "gitDecoration.ignoredResourceForeground"
  },
  "gitDecoration-modifiedResourceForeground": {
    "cssName": "--vscode-gitDecoration-modifiedResourceForeground",
    "themeName": "gitDecoration.modifiedResourceForeground"
  },
  "gitDecoration-renamedResourceForeground": {
    "cssName": "--vscode-gitDecoration-renamedResourceForeground",
    "themeName": "gitDecoration.renamedResourceForeground"
  },
  "gitDecoration-stageDeletedResourceForeground": {
    "cssName": "--vscode-gitDecoration-stageDeletedResourceForeground",
    "themeName": "gitDecoration.stageDeletedResourceForeground"
  },
  "gitDecoration-stageModifiedResourceForeground": {
    "cssName": "--vscode-gitDecoration-stageModifiedResourceForeground",
    "themeName": "gitDecoration.stageModifiedResourceForeground"
  },
  "gitDecoration-submoduleResourceForeground": {
    "cssName": "--vscode-gitDecoration-submoduleResourceForeground",
    "themeName": "gitDecoration.submoduleResourceForeground"
  },
  "gitDecoration-untrackedResourceForeground": {
    "cssName": "--vscode-gitDecoration-untrackedResourceForeground",
    "themeName": "gitDecoration.untrackedResourceForeground"
  },
  "icon-foreground": {
    "cssName": "--vscode-icon-foreground",
    "themeName": "icon.foreground"
  },
  "inlineChat-background": {
    "cssName": "--vscode-inlineChat-background",
    "themeName": "inlineChat.background"
  },
  "inlineChat-border": {
    "cssName": "--vscode-inlineChat-border",
    "themeName": "inlineChat.border"
  },
  "inlineChat-regionHighlight": {
    "cssName": "--vscode-inlineChat-regionHighlight",
    "themeName": "inlineChat.regionHighlight"
  },
  "inlineChat-shadow": {
    "cssName": "--vscode-inlineChat-shadow",
    "themeName": "inlineChat.shadow"
  },
  "inlineChatDiff-inserted": {
    "cssName": "--vscode-inlineChatDiff-inserted",
    "themeName": "inlineChatDiff.inserted"
  },
  "inlineChatDiff-removed": {
    "cssName": "--vscode-inlineChatDiff-removed",
    "themeName": "inlineChatDiff.removed"
  },
  "inlineChatInput-background": {
    "cssName": "--vscode-inlineChatInput-background",
    "themeName": "inlineChatInput.background"
  },
  "inlineChatInput-border": {
    "cssName": "--vscode-inlineChatInput-border",
    "themeName": "inlineChatInput.border"
  },
  "inlineChatInput-focusBorder": {
    "cssName": "--vscode-inlineChatInput-focusBorder",
    "themeName": "inlineChatInput.focusBorder"
  },
  "inlineChatInput-placeholderForeground": {
    "cssName": "--vscode-inlineChatInput-placeholderForeground",
    "themeName": "inlineChatInput.placeholderForeground"
  },
  "input-background": {
    "cssName": "--vscode-input-background",
    "themeName": "input.background"
  },
  "input-border": {
    "cssName": "--vscode-input-border",
    "themeName": "input.border"
  },
  "input-foreground": {
    "cssName": "--vscode-input-foreground",
    "themeName": "input.foreground"
  },
  "input-placeholderForeground": {
    "cssName": "--vscode-input-placeholderForeground",
    "themeName": "input.placeholderForeground"
  },
  "inputOption-activeBackground": {
    "cssName": "--vscode-inputOption-activeBackground",
    "themeName": "inputOption.activeBackground"
  },
  "inputOption-activeBorder": {
    "cssName": "--vscode-inputOption-activeBorder",
    "themeName": "inputOption.activeBorder"
  },
  "inputOption-activeForeground": {
    "cssName": "--vscode-inputOption-activeForeground",
    "themeName": "inputOption.activeForeground"
  },
  "inputOption-hoverBackground": {
    "cssName": "--vscode-inputOption-hoverBackground",
    "themeName": "inputOption.hoverBackground"
  },
  "inputValidation-errorBackground": {
    "cssName": "--vscode-inputValidation-errorBackground",
    "themeName": "inputValidation.errorBackground"
  },
  "inputValidation-errorBorder": {
    "cssName": "--vscode-inputValidation-errorBorder",
    "themeName": "inputValidation.errorBorder"
  },
  "inputValidation-infoBackground": {
    "cssName": "--vscode-inputValidation-infoBackground",
    "themeName": "inputValidation.infoBackground"
  },
  "inputValidation-infoBorder": {
    "cssName": "--vscode-inputValidation-infoBorder",
    "themeName": "inputValidation.infoBorder"
  },
  "inputValidation-warningBackground": {
    "cssName": "--vscode-inputValidation-warningBackground",
    "themeName": "inputValidation.warningBackground"
  },
  "inputValidation-warningBorder": {
    "cssName": "--vscode-inputValidation-warningBorder",
    "themeName": "inputValidation.warningBorder"
  },
  "interactive-activeCodeBorder": {
    "cssName": "--vscode-interactive-activeCodeBorder",
    "themeName": "interactive.activeCodeBorder"
  },
  "interactive-inactiveCodeBorder": {
    "cssName": "--vscode-interactive-inactiveCodeBorder",
    "themeName": "interactive.inactiveCodeBorder"
  },
  "keybindingLabel-background": {
    "cssName": "--vscode-keybindingLabel-background",
    "themeName": "keybindingLabel.background"
  },
  "keybindingLabel-border": {
    "cssName": "--vscode-keybindingLabel-border",
    "themeName": "keybindingLabel.border"
  },
  "keybindingLabel-bottomBorder": {
    "cssName": "--vscode-keybindingLabel-bottomBorder",
    "themeName": "keybindingLabel.bottomBorder"
  },
  "keybindingLabel-foreground": {
    "cssName": "--vscode-keybindingLabel-foreground",
    "themeName": "keybindingLabel.foreground"
  },
  "keybindingTable-headerBackground": {
    "cssName": "--vscode-keybindingTable-headerBackground",
    "themeName": "keybindingTable.headerBackground"
  },
  "keybindingTable-rowsBackground": {
    "cssName": "--vscode-keybindingTable-rowsBackground",
    "themeName": "keybindingTable.rowsBackground"
  },
  "list-activeSelectionBackground": {
    "cssName": "--vscode-list-activeSelectionBackground",
    "themeName": "list.activeSelectionBackground"
  },
  "list-activeSelectionForeground": {
    "cssName": "--vscode-list-activeSelectionForeground",
    "themeName": "list.activeSelectionForeground"
  },
  "list-activeSelectionIconForeground": {
    "cssName": "--vscode-list-activeSelectionIconForeground",
    "themeName": "list.activeSelectionIconForeground"
  },
  "list-deemphasizedForeground": {
    "cssName": "--vscode-list-deemphasizedForeground",
    "themeName": "list.deemphasizedForeground"
  },
  "list-dropBackground": {
    "cssName": "--vscode-list-dropBackground",
    "themeName": "list.dropBackground"
  },
  "list-dropBetweenBackground": {
    "cssName": "--vscode-list-dropBetweenBackground",
    "themeName": "list.dropBetweenBackground"
  },
  "list-errorForeground": {
    "cssName": "--vscode-list-errorForeground",
    "themeName": "list.errorForeground"
  },
  "list-filterMatchBackground": {
    "cssName": "--vscode-list-filterMatchBackground",
    "themeName": "list.filterMatchBackground"
  },
  "list-focusHighlightForeground": {
    "cssName": "--vscode-list-focusHighlightForeground",
    "themeName": "list.focusHighlightForeground"
  },
  "list-focusOutline": {
    "cssName": "--vscode-list-focusOutline",
    "themeName": "list.focusOutline"
  },
  "list-highlightForeground": {
    "cssName": "--vscode-list-highlightForeground",
    "themeName": "list.highlightForeground"
  },
  "list-hoverBackground": {
    "cssName": "--vscode-list-hoverBackground",
    "themeName": "list.hoverBackground"
  },
  "list-inactiveSelectionBackground": {
    "cssName": "--vscode-list-inactiveSelectionBackground",
    "themeName": "list.inactiveSelectionBackground"
  },
  "list-invalidItemForeground": {
    "cssName": "--vscode-list-invalidItemForeground",
    "themeName": "list.invalidItemForeground"
  },
  "list-warningForeground": {
    "cssName": "--vscode-list-warningForeground",
    "themeName": "list.warningForeground"
  },
  "listFilterWidget-background": {
    "cssName": "--vscode-listFilterWidget-background",
    "themeName": "listFilterWidget.background"
  },
  "listFilterWidget-noMatchesOutline": {
    "cssName": "--vscode-listFilterWidget-noMatchesOutline",
    "themeName": "listFilterWidget.noMatchesOutline"
  },
  "listFilterWidget-outline": {
    "cssName": "--vscode-listFilterWidget-outline",
    "themeName": "listFilterWidget.outline"
  },
  "listFilterWidget-shadow": {
    "cssName": "--vscode-listFilterWidget-shadow",
    "themeName": "listFilterWidget.shadow"
  },
  "menu-background": {
    "cssName": "--vscode-menu-background",
    "themeName": "menu.background"
  },
  "menu-border": {
    "cssName": "--vscode-menu-border",
    "themeName": "menu.border"
  },
  "menu-foreground": {
    "cssName": "--vscode-menu-foreground",
    "themeName": "menu.foreground"
  },
  "menu-selectionBackground": {
    "cssName": "--vscode-menu-selectionBackground",
    "themeName": "menu.selectionBackground"
  },
  "menu-selectionForeground": {
    "cssName": "--vscode-menu-selectionForeground",
    "themeName": "menu.selectionForeground"
  },
  "menu-separatorBackground": {
    "cssName": "--vscode-menu-separatorBackground",
    "themeName": "menu.separatorBackground"
  },
  "menubar-selectionBackground": {
    "cssName": "--vscode-menubar-selectionBackground",
    "themeName": "menubar.selectionBackground"
  },
  "menubar-selectionForeground": {
    "cssName": "--vscode-menubar-selectionForeground",
    "themeName": "menubar.selectionForeground"
  },
  "merge-commonContentBackground": {
    "cssName": "--vscode-merge-commonContentBackground",
    "themeName": "merge.commonContentBackground"
  },
  "merge-commonHeaderBackground": {
    "cssName": "--vscode-merge-commonHeaderBackground",
    "themeName": "merge.commonHeaderBackground"
  },
  "merge-currentContentBackground": {
    "cssName": "--vscode-merge-currentContentBackground",
    "themeName": "merge.currentContentBackground"
  },
  "merge-currentHeaderBackground": {
    "cssName": "--vscode-merge-currentHeaderBackground",
    "themeName": "merge.currentHeaderBackground"
  },
  "merge-incomingContentBackground": {
    "cssName": "--vscode-merge-incomingContentBackground",
    "themeName": "merge.incomingContentBackground"
  },
  "merge-incomingHeaderBackground": {
    "cssName": "--vscode-merge-incomingHeaderBackground",
    "themeName": "merge.incomingHeaderBackground"
  },
  "mergeEditor-change-background": {
    "cssName": "--vscode-mergeEditor-change-background",
    "themeName": "mergeEditor.change.background"
  },
  "mergeEditor-change-word-background": {
    "cssName": "--vscode-mergeEditor-change-word-background",
    "themeName": "mergeEditor.change.word.background"
  },
  "mergeEditor-changeBase-background": {
    "cssName": "--vscode-mergeEditor-changeBase-background",
    "themeName": "mergeEditor.changeBase.background"
  },
  "mergeEditor-changeBase-word-background": {
    "cssName": "--vscode-mergeEditor-changeBase-word-background",
    "themeName": "mergeEditor.changeBase.word.background"
  },
  "mergeEditor-conflict-handled-minimapOverViewRuler": {
    "cssName": "--vscode-mergeEditor-conflict-handled-minimapOverViewRuler",
    "themeName": "mergeEditor.conflict.handled.minimapOverViewRuler"
  },
  "mergeEditor-conflict-handledFocused-border": {
    "cssName": "--vscode-mergeEditor-conflict-handledFocused-border",
    "themeName": "mergeEditor.conflict.handledFocused.border"
  },
  "mergeEditor-conflict-handledUnfocused-border": {
    "cssName": "--vscode-mergeEditor-conflict-handledUnfocused-border",
    "themeName": "mergeEditor.conflict.handledUnfocused.border"
  },
  "mergeEditor-conflict-input1-background": {
    "cssName": "--vscode-mergeEditor-conflict-input1-background",
    "themeName": "mergeEditor.conflict.input1.background"
  },
  "mergeEditor-conflict-input2-background": {
    "cssName": "--vscode-mergeEditor-conflict-input2-background",
    "themeName": "mergeEditor.conflict.input2.background"
  },
  "mergeEditor-conflict-unhandled-minimapOverViewRuler": {
    "cssName": "--vscode-mergeEditor-conflict-unhandled-minimapOverViewRuler",
    "themeName": "mergeEditor.conflict.unhandled.minimapOverViewRuler"
  },
  "mergeEditor-conflict-unhandledFocused-border": {
    "cssName": "--vscode-mergeEditor-conflict-unhandledFocused-border",
    "themeName": "mergeEditor.conflict.unhandledFocused.border"
  },
  "mergeEditor-conflict-unhandledUnfocused-border": {
    "cssName": "--vscode-mergeEditor-conflict-unhandledUnfocused-border",
    "themeName": "mergeEditor.conflict.unhandledUnfocused.border"
  },
  "mergeEditor-conflictingLines-background": {
    "cssName": "--vscode-mergeEditor-conflictingLines-background",
    "themeName": "mergeEditor.conflictingLines.background"
  },
  "minimap-errorHighlight": {
    "cssName": "--vscode-minimap-errorHighlight",
    "themeName": "minimap.errorHighlight"
  },
  "minimap-findMatchHighlight": {
    "cssName": "--vscode-minimap-findMatchHighlight",
    "themeName": "minimap.findMatchHighlight"
  },
  "minimap-foregroundOpacity": {
    "cssName": "--vscode-minimap-foregroundOpacity",
    "themeName": "minimap.foregroundOpacity"
  },
  "minimap-infoHighlight": {
    "cssName": "--vscode-minimap-infoHighlight",
    "themeName": "minimap.infoHighlight"
  },
  "minimap-selectionHighlight": {
    "cssName": "--vscode-minimap-selectionHighlight",
    "themeName": "minimap.selectionHighlight"
  },
  "minimap-selectionOccurrenceHighlight": {
    "cssName": "--vscode-minimap-selectionOccurrenceHighlight",
    "themeName": "minimap.selectionOccurrenceHighlight"
  },
  "minimap-warningHighlight": {
    "cssName": "--vscode-minimap-warningHighlight",
    "themeName": "minimap.warningHighlight"
  },
  "minimapGutter-addedBackground": {
    "cssName": "--vscode-minimapGutter-addedBackground",
    "themeName": "minimapGutter.addedBackground"
  },
  "minimapGutter-deletedBackground": {
    "cssName": "--vscode-minimapGutter-deletedBackground",
    "themeName": "minimapGutter.deletedBackground"
  },
  "minimapGutter-modifiedBackground": {
    "cssName": "--vscode-minimapGutter-modifiedBackground",
    "themeName": "minimapGutter.modifiedBackground"
  },
  "minimapSlider-activeBackground": {
    "cssName": "--vscode-minimapSlider-activeBackground",
    "themeName": "minimapSlider.activeBackground"
  },
  "minimapSlider-background": {
    "cssName": "--vscode-minimapSlider-background",
    "themeName": "minimapSlider.background"
  },
  "minimapSlider-hoverBackground": {
    "cssName": "--vscode-minimapSlider-hoverBackground",
    "themeName": "minimapSlider.hoverBackground"
  },
  "multiDiffEditor-border": {
    "cssName": "--vscode-multiDiffEditor-border",
    "themeName": "multiDiffEditor.border"
  },
  "multiDiffEditor-headerBackground": {
    "cssName": "--vscode-multiDiffEditor-headerBackground",
    "themeName": "multiDiffEditor.headerBackground"
  },
  "notebook-cellBorderColor": {
    "cssName": "--vscode-notebook-cellBorderColor",
    "themeName": "notebook.cellBorderColor"
  },
  "notebook-cellEditorBackground": {
    "cssName": "--vscode-notebook-cellEditorBackground",
    "themeName": "notebook.cellEditorBackground"
  },
  "notebook-cellInsertionIndicator": {
    "cssName": "--vscode-notebook-cellInsertionIndicator",
    "themeName": "notebook.cellInsertionIndicator"
  },
  "notebook-cellStatusBarItemHoverBackground": {
    "cssName": "--vscode-notebook-cellStatusBarItemHoverBackground",
    "themeName": "notebook.cellStatusBarItemHoverBackground"
  },
  "notebook-cellToolbarSeparator": {
    "cssName": "--vscode-notebook-cellToolbarSeparator",
    "themeName": "notebook.cellToolbarSeparator"
  },
  "notebook-editorBackground": {
    "cssName": "--vscode-notebook-editorBackground",
    "themeName": "notebook.editorBackground"
  },
  "notebook-focusedCellBorder": {
    "cssName": "--vscode-notebook-focusedCellBorder",
    "themeName": "notebook.focusedCellBorder"
  },
  "notebook-focusedEditorBorder": {
    "cssName": "--vscode-notebook-focusedEditorBorder",
    "themeName": "notebook.focusedEditorBorder"
  },
  "notebook-inactiveFocusedCellBorder": {
    "cssName": "--vscode-notebook-inactiveFocusedCellBorder",
    "themeName": "notebook.inactiveFocusedCellBorder"
  },
  "notebook-selectedCellBackground": {
    "cssName": "--vscode-notebook-selectedCellBackground",
    "themeName": "notebook.selectedCellBackground"
  },
  "notebook-selectedCellBorder": {
    "cssName": "--vscode-notebook-selectedCellBorder",
    "themeName": "notebook.selectedCellBorder"
  },
  "notebook-symbolHighlightBackground": {
    "cssName": "--vscode-notebook-symbolHighlightBackground",
    "themeName": "notebook.symbolHighlightBackground"
  },
  "notebookEditorOverviewRuler-runningCellForeground": {
    "cssName": "--vscode-notebookEditorOverviewRuler-runningCellForeground",
    "themeName": "notebookEditorOverviewRuler.runningCellForeground"
  },
  "notebookScrollbarSlider-activeBackground": {
    "cssName": "--vscode-notebookScrollbarSlider-activeBackground",
    "themeName": "notebookScrollbarSlider.activeBackground"
  },
  "notebookScrollbarSlider-background": {
    "cssName": "--vscode-notebookScrollbarSlider-background",
    "themeName": "notebookScrollbarSlider.background"
  },
  "notebookScrollbarSlider-hoverBackground": {
    "cssName": "--vscode-notebookScrollbarSlider-hoverBackground",
    "themeName": "notebookScrollbarSlider.hoverBackground"
  },
  "notebookStatusErrorIcon-foreground": {
    "cssName": "--vscode-notebookStatusErrorIcon-foreground",
    "themeName": "notebookStatusErrorIcon.foreground"
  },
  "notebookStatusRunningIcon-foreground": {
    "cssName": "--vscode-notebookStatusRunningIcon-foreground",
    "themeName": "notebookStatusRunningIcon.foreground"
  },
  "notebookStatusSuccessIcon-foreground": {
    "cssName": "--vscode-notebookStatusSuccessIcon-foreground",
    "themeName": "notebookStatusSuccessIcon.foreground"
  },
  "notificationCenter-border": {
    "cssName": "--vscode-notificationCenter-border",
    "themeName": "notificationCenter.border"
  },
  "notificationCenterHeader-background": {
    "cssName": "--vscode-notificationCenterHeader-background",
    "themeName": "notificationCenterHeader.background"
  },
  "notificationCenterHeader-foreground": {
    "cssName": "--vscode-notificationCenterHeader-foreground",
    "themeName": "notificationCenterHeader.foreground"
  },
  "notificationLink-foreground": {
    "cssName": "--vscode-notificationLink-foreground",
    "themeName": "notificationLink.foreground"
  },
  "notificationToast-border": {
    "cssName": "--vscode-notificationToast-border",
    "themeName": "notificationToast.border"
  },
  "notifications-background": {
    "cssName": "--vscode-notifications-background",
    "themeName": "notifications.background"
  },
  "notifications-border": {
    "cssName": "--vscode-notifications-border",
    "themeName": "notifications.border"
  },
  "notifications-foreground": {
    "cssName": "--vscode-notifications-foreground",
    "themeName": "notifications.foreground"
  },
  "notificationsErrorIcon-foreground": {
    "cssName": "--vscode-notificationsErrorIcon-foreground",
    "themeName": "notificationsErrorIcon.foreground"
  },
  "notificationsInfoIcon-foreground": {
    "cssName": "--vscode-notificationsInfoIcon-foreground",
    "themeName": "notificationsInfoIcon.foreground"
  },
  "notificationsWarningIcon-foreground": {
    "cssName": "--vscode-notificationsWarningIcon-foreground",
    "themeName": "notificationsWarningIcon.foreground"
  },
  "panel-background": {
    "cssName": "--vscode-panel-background",
    "themeName": "panel.background"
  },
  "panel-border": {
    "cssName": "--vscode-panel-border",
    "themeName": "panel.border"
  },
  "panel-dropBorder": {
    "cssName": "--vscode-panel-dropBorder",
    "themeName": "panel.dropBorder"
  },
  "panelInput-border": {
    "cssName": "--vscode-panelInput-border",
    "themeName": "panelInput.border"
  },
  "panelSection-border": {
    "cssName": "--vscode-panelSection-border",
    "themeName": "panelSection.border"
  },
  "panelSection-dropBackground": {
    "cssName": "--vscode-panelSection-dropBackground",
    "themeName": "panelSection.dropBackground"
  },
  "panelSectionHeader-background": {
    "cssName": "--vscode-panelSectionHeader-background",
    "themeName": "panelSectionHeader.background"
  },
  "panelStickyScroll-background": {
    "cssName": "--vscode-panelStickyScroll-background",
    "themeName": "panelStickyScroll.background"
  },
  "panelStickyScroll-shadow": {
    "cssName": "--vscode-panelStickyScroll-shadow",
    "themeName": "panelStickyScroll.shadow"
  },
  "panelTitle-activeBorder": {
    "cssName": "--vscode-panelTitle-activeBorder",
    "themeName": "panelTitle.activeBorder"
  },
  "panelTitle-activeForeground": {
    "cssName": "--vscode-panelTitle-activeForeground",
    "themeName": "panelTitle.activeForeground"
  },
  "panelTitle-inactiveForeground": {
    "cssName": "--vscode-panelTitle-inactiveForeground",
    "themeName": "panelTitle.inactiveForeground"
  },
  "peekView-border": {
    "cssName": "--vscode-peekView-border",
    "themeName": "peekView.border"
  },
  "peekViewEditor-background": {
    "cssName": "--vscode-peekViewEditor-background",
    "themeName": "peekViewEditor.background"
  },
  "peekViewEditor-matchHighlightBackground": {
    "cssName": "--vscode-peekViewEditor-matchHighlightBackground",
    "themeName": "peekViewEditor.matchHighlightBackground"
  },
  "peekViewEditorGutter-background": {
    "cssName": "--vscode-peekViewEditorGutter-background",
    "themeName": "peekViewEditorGutter.background"
  },
  "peekViewEditorStickyScroll-background": {
    "cssName": "--vscode-peekViewEditorStickyScroll-background",
    "themeName": "peekViewEditorStickyScroll.background"
  },
  "peekViewResult-background": {
    "cssName": "--vscode-peekViewResult-background",
    "themeName": "peekViewResult.background"
  },
  "peekViewResult-fileForeground": {
    "cssName": "--vscode-peekViewResult-fileForeground",
    "themeName": "peekViewResult.fileForeground"
  },
  "peekViewResult-lineForeground": {
    "cssName": "--vscode-peekViewResult-lineForeground",
    "themeName": "peekViewResult.lineForeground"
  },
  "peekViewResult-matchHighlightBackground": {
    "cssName": "--vscode-peekViewResult-matchHighlightBackground",
    "themeName": "peekViewResult.matchHighlightBackground"
  },
  "peekViewResult-selectionBackground": {
    "cssName": "--vscode-peekViewResult-selectionBackground",
    "themeName": "peekViewResult.selectionBackground"
  },
  "peekViewResult-selectionForeground": {
    "cssName": "--vscode-peekViewResult-selectionForeground",
    "themeName": "peekViewResult.selectionForeground"
  },
  "peekViewTitle-background": {
    "cssName": "--vscode-peekViewTitle-background",
    "themeName": "peekViewTitle.background"
  },
  "peekViewTitleDescription-foreground": {
    "cssName": "--vscode-peekViewTitleDescription-foreground",
    "themeName": "peekViewTitleDescription.foreground"
  },
  "peekViewTitleLabel-foreground": {
    "cssName": "--vscode-peekViewTitleLabel-foreground",
    "themeName": "peekViewTitleLabel.foreground"
  },
  "pickerGroup-border": {
    "cssName": "--vscode-pickerGroup-border",
    "themeName": "pickerGroup.border"
  },
  "pickerGroup-foreground": {
    "cssName": "--vscode-pickerGroup-foreground",
    "themeName": "pickerGroup.foreground"
  },
  "ports-iconRunningProcessForeground": {
    "cssName": "--vscode-ports-iconRunningProcessForeground",
    "themeName": "ports.iconRunningProcessForeground"
  },
  "problemsErrorIcon-foreground": {
    "cssName": "--vscode-problemsErrorIcon-foreground",
    "themeName": "problemsErrorIcon.foreground"
  },
  "problemsInfoIcon-foreground": {
    "cssName": "--vscode-problemsInfoIcon-foreground",
    "themeName": "problemsInfoIcon.foreground"
  },
  "problemsWarningIcon-foreground": {
    "cssName": "--vscode-problemsWarningIcon-foreground",
    "themeName": "problemsWarningIcon.foreground"
  },
  "profileBadge-background": {
    "cssName": "--vscode-profileBadge-background",
    "themeName": "profileBadge.background"
  },
  "profileBadge-foreground": {
    "cssName": "--vscode-profileBadge-foreground",
    "themeName": "profileBadge.foreground"
  },
  "profiles-sashBorder": {
    "cssName": "--vscode-profiles-sashBorder",
    "themeName": "profiles.sashBorder"
  },
  "progressBar-background": {
    "cssName": "--vscode-progressBar-background",
    "themeName": "progressBar.background"
  },
  "quickInput-background": {
    "cssName": "--vscode-quickInput-background",
    "themeName": "quickInput.background"
  },
  "quickInput-foreground": {
    "cssName": "--vscode-quickInput-foreground",
    "themeName": "quickInput.foreground"
  },
  "quickInputList-focusBackground": {
    "cssName": "--vscode-quickInputList-focusBackground",
    "themeName": "quickInputList.focusBackground"
  },
  "quickInputList-focusForeground": {
    "cssName": "--vscode-quickInputList-focusForeground",
    "themeName": "quickInputList.focusForeground"
  },
  "quickInputList-focusIconForeground": {
    "cssName": "--vscode-quickInputList-focusIconForeground",
    "themeName": "quickInputList.focusIconForeground"
  },
  "quickInputTitle-background": {
    "cssName": "--vscode-quickInputTitle-background",
    "themeName": "quickInputTitle.background"
  },
  "sash-hoverBorder": {
    "cssName": "--vscode-sash-hoverBorder",
    "themeName": "sash.hoverBorder"
  },
  "scm-historyItemAdditionsForeground": {
    "cssName": "--vscode-scm-historyItemAdditionsForeground",
    "themeName": "scm.historyItemAdditionsForeground"
  },
  "scm-historyItemDeletionsForeground": {
    "cssName": "--vscode-scm-historyItemDeletionsForeground",
    "themeName": "scm.historyItemDeletionsForeground"
  },
  "scm-historyItemSelectedStatisticsBorder": {
    "cssName": "--vscode-scm-historyItemSelectedStatisticsBorder",
    "themeName": "scm.historyItemSelectedStatisticsBorder"
  },
  "scm-historyItemStatisticsBorder": {
    "cssName": "--vscode-scm-historyItemStatisticsBorder",
    "themeName": "scm.historyItemStatisticsBorder"
  },
  "scrollbar-shadow": {
    "cssName": "--vscode-scrollbar-shadow",
    "themeName": "scrollbar.shadow"
  },
  "scrollbarSlider-activeBackground": {
    "cssName": "--vscode-scrollbarSlider-activeBackground",
    "themeName": "scrollbarSlider.activeBackground"
  },
  "scrollbarSlider-background": {
    "cssName": "--vscode-scrollbarSlider-background",
    "themeName": "scrollbarSlider.background"
  },
  "scrollbarSlider-hoverBackground": {
    "cssName": "--vscode-scrollbarSlider-hoverBackground",
    "themeName": "scrollbarSlider.hoverBackground"
  },
  "search-resultsInfoForeground": {
    "cssName": "--vscode-search-resultsInfoForeground",
    "themeName": "search.resultsInfoForeground"
  },
  "searchEditor-findMatchBackground": {
    "cssName": "--vscode-searchEditor-findMatchBackground",
    "themeName": "searchEditor.findMatchBackground"
  },
  "searchEditor-textInputBorder": {
    "cssName": "--vscode-searchEditor-textInputBorder",
    "themeName": "searchEditor.textInputBorder"
  },
  "settings-checkboxBackground": {
    "cssName": "--vscode-settings-checkboxBackground",
    "themeName": "settings.checkboxBackground"
  },
  "settings-checkboxBorder": {
    "cssName": "--vscode-settings-checkboxBorder",
    "themeName": "settings.checkboxBorder"
  },
  "settings-checkboxForeground": {
    "cssName": "--vscode-settings-checkboxForeground",
    "themeName": "settings.checkboxForeground"
  },
  "settings-dropdownBackground": {
    "cssName": "--vscode-settings-dropdownBackground",
    "themeName": "settings.dropdownBackground"
  },
  "settings-dropdownBorder": {
    "cssName": "--vscode-settings-dropdownBorder",
    "themeName": "settings.dropdownBorder"
  },
  "settings-dropdownForeground": {
    "cssName": "--vscode-settings-dropdownForeground",
    "themeName": "settings.dropdownForeground"
  },
  "settings-dropdownListBorder": {
    "cssName": "--vscode-settings-dropdownListBorder",
    "themeName": "settings.dropdownListBorder"
  },
  "settings-focusedRowBackground": {
    "cssName": "--vscode-settings-focusedRowBackground",
    "themeName": "settings.focusedRowBackground"
  },
  "settings-focusedRowBorder": {
    "cssName": "--vscode-settings-focusedRowBorder",
    "themeName": "settings.focusedRowBorder"
  },
  "settings-headerBorder": {
    "cssName": "--vscode-settings-headerBorder",
    "themeName": "settings.headerBorder"
  },
  "settings-headerForeground": {
    "cssName": "--vscode-settings-headerForeground",
    "themeName": "settings.headerForeground"
  },
  "settings-modifiedItemIndicator": {
    "cssName": "--vscode-settings-modifiedItemIndicator",
    "themeName": "settings.modifiedItemIndicator"
  },
  "settings-numberInputBackground": {
    "cssName": "--vscode-settings-numberInputBackground",
    "themeName": "settings.numberInputBackground"
  },
  "settings-numberInputBorder": {
    "cssName": "--vscode-settings-numberInputBorder",
    "themeName": "settings.numberInputBorder"
  },
  "settings-numberInputForeground": {
    "cssName": "--vscode-settings-numberInputForeground",
    "themeName": "settings.numberInputForeground"
  },
  "settings-rowHoverBackground": {
    "cssName": "--vscode-settings-rowHoverBackground",
    "themeName": "settings.rowHoverBackground"
  },
  "settings-sashBorder": {
    "cssName": "--vscode-settings-sashBorder",
    "themeName": "settings.sashBorder"
  },
  "settings-settingsHeaderHoverForeground": {
    "cssName": "--vscode-settings-settingsHeaderHoverForeground",
    "themeName": "settings.settingsHeaderHoverForeground"
  },
  "settings-textInputBackground": {
    "cssName": "--vscode-settings-textInputBackground",
    "themeName": "settings.textInputBackground"
  },
  "settings-textInputBorder": {
    "cssName": "--vscode-settings-textInputBorder",
    "themeName": "settings.textInputBorder"
  },
  "settings-textInputForeground": {
    "cssName": "--vscode-settings-textInputForeground",
    "themeName": "settings.textInputForeground"
  },
  "sideBar-background": {
    "cssName": "--vscode-sideBar-background",
    "themeName": "sideBar.background"
  },
  "sideBar-border": {
    "cssName": "--vscode-sideBar-border",
    "themeName": "sideBar.border"
  },
  "sideBar-dropBackground": {
    "cssName": "--vscode-sideBar-dropBackground",
    "themeName": "sideBar.dropBackground"
  },
  "sideBar-foreground": {
    "cssName": "--vscode-sideBar-foreground",
    "themeName": "sideBar.foreground"
  },
  "sideBarActivityBarTop-border": {
    "cssName": "--vscode-sideBarActivityBarTop-border",
    "themeName": "sideBarActivityBarTop.border"
  },
  "sideBarSectionHeader-background": {
    "cssName": "--vscode-sideBarSectionHeader-background",
    "themeName": "sideBarSectionHeader.background"
  },
  "sideBarSectionHeader-border": {
    "cssName": "--vscode-sideBarSectionHeader-border",
    "themeName": "sideBarSectionHeader.border"
  },
  "sideBarSectionHeader-foreground": {
    "cssName": "--vscode-sideBarSectionHeader-foreground",
    "themeName": "sideBarSectionHeader.foreground"
  },
  "sideBarStickyScroll-background": {
    "cssName": "--vscode-sideBarStickyScroll-background",
    "themeName": "sideBarStickyScroll.background"
  },
  "sideBarStickyScroll-shadow": {
    "cssName": "--vscode-sideBarStickyScroll-shadow",
    "themeName": "sideBarStickyScroll.shadow"
  },
  "sideBarTitle-background": {
    "cssName": "--vscode-sideBarTitle-background",
    "themeName": "sideBarTitle.background"
  },
  "sideBarTitle-foreground": {
    "cssName": "--vscode-sideBarTitle-foreground",
    "themeName": "sideBarTitle.foreground"
  },
  "sideBySideEditor-horizontalBorder": {
    "cssName": "--vscode-sideBySideEditor-horizontalBorder",
    "themeName": "sideBySideEditor.horizontalBorder"
  },
  "sideBySideEditor-verticalBorder": {
    "cssName": "--vscode-sideBySideEditor-verticalBorder",
    "themeName": "sideBySideEditor.verticalBorder"
  },
  "simpleFindWidget-sashBorder": {
    "cssName": "--vscode-simpleFindWidget-sashBorder",
    "themeName": "simpleFindWidget.sashBorder"
  },
  "statusBar-background": {
    "cssName": "--vscode-statusBar-background",
    "themeName": "statusBar.background"
  },
  "statusBar-border": {
    "cssName": "--vscode-statusBar-border",
    "themeName": "statusBar.border"
  },
  "statusBar-debuggingBackground": {
    "cssName": "--vscode-statusBar-debuggingBackground",
    "themeName": "statusBar.debuggingBackground"
  },
  "statusBar-debuggingBorder": {
    "cssName": "--vscode-statusBar-debuggingBorder",
    "themeName": "statusBar.debuggingBorder"
  },
  "statusBar-debuggingForeground": {
    "cssName": "--vscode-statusBar-debuggingForeground",
    "themeName": "statusBar.debuggingForeground"
  },
  "statusBar-focusBorder": {
    "cssName": "--vscode-statusBar-focusBorder",
    "themeName": "statusBar.focusBorder"
  },
  "statusBar-foreground": {
    "cssName": "--vscode-statusBar-foreground",
    "themeName": "statusBar.foreground"
  },
  "statusBar-noFolderBackground": {
    "cssName": "--vscode-statusBar-noFolderBackground",
    "themeName": "statusBar.noFolderBackground"
  },
  "statusBar-noFolderBorder": {
    "cssName": "--vscode-statusBar-noFolderBorder",
    "themeName": "statusBar.noFolderBorder"
  },
  "statusBar-noFolderForeground": {
    "cssName": "--vscode-statusBar-noFolderForeground",
    "themeName": "statusBar.noFolderForeground"
  },
  "statusBarItem-activeBackground": {
    "cssName": "--vscode-statusBarItem-activeBackground",
    "themeName": "statusBarItem.activeBackground"
  },
  "statusBarItem-compactHoverBackground": {
    "cssName": "--vscode-statusBarItem-compactHoverBackground",
    "themeName": "statusBarItem.compactHoverBackground"
  },
  "statusBarItem-errorBackground": {
    "cssName": "--vscode-statusBarItem-errorBackground",
    "themeName": "statusBarItem.errorBackground"
  },
  "statusBarItem-errorForeground": {
    "cssName": "--vscode-statusBarItem-errorForeground",
    "themeName": "statusBarItem.errorForeground"
  },
  "statusBarItem-errorHoverBackground": {
    "cssName": "--vscode-statusBarItem-errorHoverBackground",
    "themeName": "statusBarItem.errorHoverBackground"
  },
  "statusBarItem-errorHoverForeground": {
    "cssName": "--vscode-statusBarItem-errorHoverForeground",
    "themeName": "statusBarItem.errorHoverForeground"
  },
  "statusBarItem-focusBorder": {
    "cssName": "--vscode-statusBarItem-focusBorder",
    "themeName": "statusBarItem.focusBorder"
  },
  "statusBarItem-hoverBackground": {
    "cssName": "--vscode-statusBarItem-hoverBackground",
    "themeName": "statusBarItem.hoverBackground"
  },
  "statusBarItem-hoverForeground": {
    "cssName": "--vscode-statusBarItem-hoverForeground",
    "themeName": "statusBarItem.hoverForeground"
  },
  "statusBarItem-offlineBackground": {
    "cssName": "--vscode-statusBarItem-offlineBackground",
    "themeName": "statusBarItem.offlineBackground"
  },
  "statusBarItem-offlineForeground": {
    "cssName": "--vscode-statusBarItem-offlineForeground",
    "themeName": "statusBarItem.offlineForeground"
  },
  "statusBarItem-offlineHoverBackground": {
    "cssName": "--vscode-statusBarItem-offlineHoverBackground",
    "themeName": "statusBarItem.offlineHoverBackground"
  },
  "statusBarItem-offlineHoverForeground": {
    "cssName": "--vscode-statusBarItem-offlineHoverForeground",
    "themeName": "statusBarItem.offlineHoverForeground"
  },
  "statusBarItem-prominentBackground": {
    "cssName": "--vscode-statusBarItem-prominentBackground",
    "themeName": "statusBarItem.prominentBackground"
  },
  "statusBarItem-prominentForeground": {
    "cssName": "--vscode-statusBarItem-prominentForeground",
    "themeName": "statusBarItem.prominentForeground"
  },
  "statusBarItem-prominentHoverBackground": {
    "cssName": "--vscode-statusBarItem-prominentHoverBackground",
    "themeName": "statusBarItem.prominentHoverBackground"
  },
  "statusBarItem-prominentHoverForeground": {
    "cssName": "--vscode-statusBarItem-prominentHoverForeground",
    "themeName": "statusBarItem.prominentHoverForeground"
  },
  "statusBarItem-remoteBackground": {
    "cssName": "--vscode-statusBarItem-remoteBackground",
    "themeName": "statusBarItem.remoteBackground"
  },
  "statusBarItem-remoteForeground": {
    "cssName": "--vscode-statusBarItem-remoteForeground",
    "themeName": "statusBarItem.remoteForeground"
  },
  "statusBarItem-remoteHoverBackground": {
    "cssName": "--vscode-statusBarItem-remoteHoverBackground",
    "themeName": "statusBarItem.remoteHoverBackground"
  },
  "statusBarItem-remoteHoverForeground": {
    "cssName": "--vscode-statusBarItem-remoteHoverForeground",
    "themeName": "statusBarItem.remoteHoverForeground"
  },
  "statusBarItem-warningBackground": {
    "cssName": "--vscode-statusBarItem-warningBackground",
    "themeName": "statusBarItem.warningBackground"
  },
  "statusBarItem-warningForeground": {
    "cssName": "--vscode-statusBarItem-warningForeground",
    "themeName": "statusBarItem.warningForeground"
  },
  "statusBarItem-warningHoverBackground": {
    "cssName": "--vscode-statusBarItem-warningHoverBackground",
    "themeName": "statusBarItem.warningHoverBackground"
  },
  "statusBarItem-warningHoverForeground": {
    "cssName": "--vscode-statusBarItem-warningHoverForeground",
    "themeName": "statusBarItem.warningHoverForeground"
  },
  "symbolIcon-arrayForeground": {
    "cssName": "--vscode-symbolIcon-arrayForeground",
    "themeName": "symbolIcon.arrayForeground"
  },
  "symbolIcon-booleanForeground": {
    "cssName": "--vscode-symbolIcon-booleanForeground",
    "themeName": "symbolIcon.booleanForeground"
  },
  "symbolIcon-classForeground": {
    "cssName": "--vscode-symbolIcon-classForeground",
    "themeName": "symbolIcon.classForeground"
  },
  "symbolIcon-colorForeground": {
    "cssName": "--vscode-symbolIcon-colorForeground",
    "themeName": "symbolIcon.colorForeground"
  },
  "symbolIcon-constantForeground": {
    "cssName": "--vscode-symbolIcon-constantForeground",
    "themeName": "symbolIcon.constantForeground"
  },
  "symbolIcon-constructorForeground": {
    "cssName": "--vscode-symbolIcon-constructorForeground",
    "themeName": "symbolIcon.constructorForeground"
  },
  "symbolIcon-enumeratorForeground": {
    "cssName": "--vscode-symbolIcon-enumeratorForeground",
    "themeName": "symbolIcon.enumeratorForeground"
  },
  "symbolIcon-enumeratorMemberForeground": {
    "cssName": "--vscode-symbolIcon-enumeratorMemberForeground",
    "themeName": "symbolIcon.enumeratorMemberForeground"
  },
  "symbolIcon-eventForeground": {
    "cssName": "--vscode-symbolIcon-eventForeground",
    "themeName": "symbolIcon.eventForeground"
  },
  "symbolIcon-fieldForeground": {
    "cssName": "--vscode-symbolIcon-fieldForeground",
    "themeName": "symbolIcon.fieldForeground"
  },
  "symbolIcon-fileForeground": {
    "cssName": "--vscode-symbolIcon-fileForeground",
    "themeName": "symbolIcon.fileForeground"
  },
  "symbolIcon-folderForeground": {
    "cssName": "--vscode-symbolIcon-folderForeground",
    "themeName": "symbolIcon.folderForeground"
  },
  "symbolIcon-functionForeground": {
    "cssName": "--vscode-symbolIcon-functionForeground",
    "themeName": "symbolIcon.functionForeground"
  },
  "symbolIcon-interfaceForeground": {
    "cssName": "--vscode-symbolIcon-interfaceForeground",
    "themeName": "symbolIcon.interfaceForeground"
  },
  "symbolIcon-keyForeground": {
    "cssName": "--vscode-symbolIcon-keyForeground",
    "themeName": "symbolIcon.keyForeground"
  },
  "symbolIcon-keywordForeground": {
    "cssName": "--vscode-symbolIcon-keywordForeground",
    "themeName": "symbolIcon.keywordForeground"
  },
  "symbolIcon-methodForeground": {
    "cssName": "--vscode-symbolIcon-methodForeground",
    "themeName": "symbolIcon.methodForeground"
  },
  "symbolIcon-moduleForeground": {
    "cssName": "--vscode-symbolIcon-moduleForeground",
    "themeName": "symbolIcon.moduleForeground"
  },
  "symbolIcon-namespaceForeground": {
    "cssName": "--vscode-symbolIcon-namespaceForeground",
    "themeName": "symbolIcon.namespaceForeground"
  },
  "symbolIcon-nullForeground": {
    "cssName": "--vscode-symbolIcon-nullForeground",
    "themeName": "symbolIcon.nullForeground"
  },
  "symbolIcon-numberForeground": {
    "cssName": "--vscode-symbolIcon-numberForeground",
    "themeName": "symbolIcon.numberForeground"
  },
  "symbolIcon-objectForeground": {
    "cssName": "--vscode-symbolIcon-objectForeground",
    "themeName": "symbolIcon.objectForeground"
  },
  "symbolIcon-operatorForeground": {
    "cssName": "--vscode-symbolIcon-operatorForeground",
    "themeName": "symbolIcon.operatorForeground"
  },
  "symbolIcon-packageForeground": {
    "cssName": "--vscode-symbolIcon-packageForeground",
    "themeName": "symbolIcon.packageForeground"
  },
  "symbolIcon-propertyForeground": {
    "cssName": "--vscode-symbolIcon-propertyForeground",
    "themeName": "symbolIcon.propertyForeground"
  },
  "symbolIcon-referenceForeground": {
    "cssName": "--vscode-symbolIcon-referenceForeground",
    "themeName": "symbolIcon.referenceForeground"
  },
  "symbolIcon-snippetForeground": {
    "cssName": "--vscode-symbolIcon-snippetForeground",
    "themeName": "symbolIcon.snippetForeground"
  },
  "symbolIcon-stringForeground": {
    "cssName": "--vscode-symbolIcon-stringForeground",
    "themeName": "symbolIcon.stringForeground"
  },
  "symbolIcon-structForeground": {
    "cssName": "--vscode-symbolIcon-structForeground",
    "themeName": "symbolIcon.structForeground"
  },
  "symbolIcon-textForeground": {
    "cssName": "--vscode-symbolIcon-textForeground",
    "themeName": "symbolIcon.textForeground"
  },
  "symbolIcon-typeParameterForeground": {
    "cssName": "--vscode-symbolIcon-typeParameterForeground",
    "themeName": "symbolIcon.typeParameterForeground"
  },
  "symbolIcon-unitForeground": {
    "cssName": "--vscode-symbolIcon-unitForeground",
    "themeName": "symbolIcon.unitForeground"
  },
  "symbolIcon-variableForeground": {
    "cssName": "--vscode-symbolIcon-variableForeground",
    "themeName": "symbolIcon.variableForeground"
  },
  "tab-activeBackground": {
    "cssName": "--vscode-tab-activeBackground",
    "themeName": "tab.activeBackground"
  },
  "tab-activeBorder": {
    "cssName": "--vscode-tab-activeBorder",
    "themeName": "tab.activeBorder"
  },
  "tab-activeBorderTop": {
    "cssName": "--vscode-tab-activeBorderTop",
    "themeName": "tab.activeBorderTop"
  },
  "tab-activeForeground": {
    "cssName": "--vscode-tab-activeForeground",
    "themeName": "tab.activeForeground"
  },
  "tab-activeModifiedBorder": {
    "cssName": "--vscode-tab-activeModifiedBorder",
    "themeName": "tab.activeModifiedBorder"
  },
  "tab-border": {
    "cssName": "--vscode-tab-border",
    "themeName": "tab.border"
  },
  "tab-dragAndDropBorder": {
    "cssName": "--vscode-tab-dragAndDropBorder",
    "themeName": "tab.dragAndDropBorder"
  },
  "tab-hoverBackground": {
    "cssName": "--vscode-tab-hoverBackground",
    "themeName": "tab.hoverBackground"
  },
  "tab-inactiveBackground": {
    "cssName": "--vscode-tab-inactiveBackground",
    "themeName": "tab.inactiveBackground"
  },
  "tab-inactiveForeground": {
    "cssName": "--vscode-tab-inactiveForeground",
    "themeName": "tab.inactiveForeground"
  },
  "tab-inactiveModifiedBorder": {
    "cssName": "--vscode-tab-inactiveModifiedBorder",
    "themeName": "tab.inactiveModifiedBorder"
  },
  "tab-lastPinnedBorder": {
    "cssName": "--vscode-tab-lastPinnedBorder",
    "themeName": "tab.lastPinnedBorder"
  },
  "tab-selectedBackground": {
    "cssName": "--vscode-tab-selectedBackground",
    "themeName": "tab.selectedBackground"
  },
  "tab-selectedBorderTop": {
    "cssName": "--vscode-tab-selectedBorderTop",
    "themeName": "tab.selectedBorderTop"
  },
  "tab-selectedForeground": {
    "cssName": "--vscode-tab-selectedForeground",
    "themeName": "tab.selectedForeground"
  },
  "tab-unfocusedActiveBackground": {
    "cssName": "--vscode-tab-unfocusedActiveBackground",
    "themeName": "tab.unfocusedActiveBackground"
  },
  "tab-unfocusedActiveBorder": {
    "cssName": "--vscode-tab-unfocusedActiveBorder",
    "themeName": "tab.unfocusedActiveBorder"
  },
  "tab-unfocusedActiveBorderTop": {
    "cssName": "--vscode-tab-unfocusedActiveBorderTop",
    "themeName": "tab.unfocusedActiveBorderTop"
  },
  "tab-unfocusedActiveForeground": {
    "cssName": "--vscode-tab-unfocusedActiveForeground",
    "themeName": "tab.unfocusedActiveForeground"
  },
  "tab-unfocusedActiveModifiedBorder": {
    "cssName": "--vscode-tab-unfocusedActiveModifiedBorder",
    "themeName": "tab.unfocusedActiveModifiedBorder"
  },
  "tab-unfocusedHoverBackground": {
    "cssName": "--vscode-tab-unfocusedHoverBackground",
    "themeName": "tab.unfocusedHoverBackground"
  },
  "tab-unfocusedInactiveBackground": {
    "cssName": "--vscode-tab-unfocusedInactiveBackground",
    "themeName": "tab.unfocusedInactiveBackground"
  },
  "tab-unfocusedInactiveForeground": {
    "cssName": "--vscode-tab-unfocusedInactiveForeground",
    "themeName": "tab.unfocusedInactiveForeground"
  },
  "tab-unfocusedInactiveModifiedBorder": {
    "cssName": "--vscode-tab-unfocusedInactiveModifiedBorder",
    "themeName": "tab.unfocusedInactiveModifiedBorder"
  },
  "terminal-ansiBlack": {
    "cssName": "--vscode-terminal-ansiBlack",
    "themeName": "terminal.ansiBlack"
  },
  "terminal-ansiBlue": {
    "cssName": "--vscode-terminal-ansiBlue",
    "themeName": "terminal.ansiBlue"
  },
  "terminal-ansiBrightBlack": {
    "cssName": "--vscode-terminal-ansiBrightBlack",
    "themeName": "terminal.ansiBrightBlack"
  },
  "terminal-ansiBrightBlue": {
    "cssName": "--vscode-terminal-ansiBrightBlue",
    "themeName": "terminal.ansiBrightBlue"
  },
  "terminal-ansiBrightCyan": {
    "cssName": "--vscode-terminal-ansiBrightCyan",
    "themeName": "terminal.ansiBrightCyan"
  },
  "terminal-ansiBrightGreen": {
    "cssName": "--vscode-terminal-ansiBrightGreen",
    "themeName": "terminal.ansiBrightGreen"
  },
  "terminal-ansiBrightMagenta": {
    "cssName": "--vscode-terminal-ansiBrightMagenta",
    "themeName": "terminal.ansiBrightMagenta"
  },
  "terminal-ansiBrightRed": {
    "cssName": "--vscode-terminal-ansiBrightRed",
    "themeName": "terminal.ansiBrightRed"
  },
  "terminal-ansiBrightWhite": {
    "cssName": "--vscode-terminal-ansiBrightWhite",
    "themeName": "terminal.ansiBrightWhite"
  },
  "terminal-ansiBrightYellow": {
    "cssName": "--vscode-terminal-ansiBrightYellow",
    "themeName": "terminal.ansiBrightYellow"
  },
  "terminal-ansiCyan": {
    "cssName": "--vscode-terminal-ansiCyan",
    "themeName": "terminal.ansiCyan"
  },
  "terminal-ansiGreen": {
    "cssName": "--vscode-terminal-ansiGreen",
    "themeName": "terminal.ansiGreen"
  },
  "terminal-ansiMagenta": {
    "cssName": "--vscode-terminal-ansiMagenta",
    "themeName": "terminal.ansiMagenta"
  },
  "terminal-ansiRed": {
    "cssName": "--vscode-terminal-ansiRed",
    "themeName": "terminal.ansiRed"
  },
  "terminal-ansiWhite": {
    "cssName": "--vscode-terminal-ansiWhite",
    "themeName": "terminal.ansiWhite"
  },
  "terminal-ansiYellow": {
    "cssName": "--vscode-terminal-ansiYellow",
    "themeName": "terminal.ansiYellow"
  },
  "terminal-border": {
    "cssName": "--vscode-terminal-border",
    "themeName": "terminal.border"
  },
  "terminal-dropBackground": {
    "cssName": "--vscode-terminal-dropBackground",
    "themeName": "terminal.dropBackground"
  },
  "terminal-findMatchBackground": {
    "cssName": "--vscode-terminal-findMatchBackground",
    "themeName": "terminal.findMatchBackground"
  },
  "terminal-findMatchHighlightBackground": {
    "cssName": "--vscode-terminal-findMatchHighlightBackground",
    "themeName": "terminal.findMatchHighlightBackground"
  },
  "terminal-foreground": {
    "cssName": "--vscode-terminal-foreground",
    "themeName": "terminal.foreground"
  },
  "terminal-hoverHighlightBackground": {
    "cssName": "--vscode-terminal-hoverHighlightBackground",
    "themeName": "terminal.hoverHighlightBackground"
  },
  "terminal-inactiveSelectionBackground": {
    "cssName": "--vscode-terminal-inactiveSelectionBackground",
    "themeName": "terminal.inactiveSelectionBackground"
  },
  "terminal-selectionBackground": {
    "cssName": "--vscode-terminal-selectionBackground",
    "themeName": "terminal.selectionBackground"
  },
  "terminal-tab-activeBorder": {
    "cssName": "--vscode-terminal-tab-activeBorder",
    "themeName": "terminal.tab.activeBorder"
  },
  "terminalCommandDecoration-defaultBackground": {
    "cssName": "--vscode-terminalCommandDecoration-defaultBackground",
    "themeName": "terminalCommandDecoration.defaultBackground"
  },
  "terminalCommandDecoration-errorBackground": {
    "cssName": "--vscode-terminalCommandDecoration-errorBackground",
    "themeName": "terminalCommandDecoration.errorBackground"
  },
  "terminalCommandDecoration-successBackground": {
    "cssName": "--vscode-terminalCommandDecoration-successBackground",
    "themeName": "terminalCommandDecoration.successBackground"
  },
  "terminalOverviewRuler-cursorForeground": {
    "cssName": "--vscode-terminalOverviewRuler-cursorForeground",
    "themeName": "terminalOverviewRuler.cursorForeground"
  },
  "terminalOverviewRuler-findMatchForeground": {
    "cssName": "--vscode-terminalOverviewRuler-findMatchForeground",
    "themeName": "terminalOverviewRuler.findMatchForeground"
  },
  "terminalStickyScrollHover-background": {
    "cssName": "--vscode-terminalStickyScrollHover-background",
    "themeName": "terminalStickyScrollHover.background"
  },
  "testing-coverCountBadgeBackground": {
    "cssName": "--vscode-testing-coverCountBadgeBackground",
    "themeName": "testing.coverCountBadgeBackground"
  },
  "testing-coverCountBadgeForeground": {
    "cssName": "--vscode-testing-coverCountBadgeForeground",
    "themeName": "testing.coverCountBadgeForeground"
  },
  "testing-coveredBackground": {
    "cssName": "--vscode-testing-coveredBackground",
    "themeName": "testing.coveredBackground"
  },
  "testing-coveredBorder": {
    "cssName": "--vscode-testing-coveredBorder",
    "themeName": "testing.coveredBorder"
  },
  "testing-coveredGutterBackground": {
    "cssName": "--vscode-testing-coveredGutterBackground",
    "themeName": "testing.coveredGutterBackground"
  },
  "testing-iconErrored": {
    "cssName": "--vscode-testing-iconErrored",
    "themeName": "testing.iconErrored"
  },
  "testing-iconErrored-retired": {
    "cssName": "--vscode-testing-iconErrored-retired",
    "themeName": "testing.iconErrored.retired"
  },
  "testing-iconFailed": {
    "cssName": "--vscode-testing-iconFailed",
    "themeName": "testing.iconFailed"
  },
  "testing-iconFailed-retired": {
    "cssName": "--vscode-testing-iconFailed-retired",
    "themeName": "testing.iconFailed.retired"
  },
  "testing-iconPassed": {
    "cssName": "--vscode-testing-iconPassed",
    "themeName": "testing.iconPassed"
  },
  "testing-iconPassed-retired": {
    "cssName": "--vscode-testing-iconPassed-retired",
    "themeName": "testing.iconPassed.retired"
  },
  "testing-iconQueued": {
    "cssName": "--vscode-testing-iconQueued",
    "themeName": "testing.iconQueued"
  },
  "testing-iconQueued-retired": {
    "cssName": "--vscode-testing-iconQueued-retired",
    "themeName": "testing.iconQueued.retired"
  },
  "testing-iconSkipped": {
    "cssName": "--vscode-testing-iconSkipped",
    "themeName": "testing.iconSkipped"
  },
  "testing-iconSkipped-retired": {
    "cssName": "--vscode-testing-iconSkipped-retired",
    "themeName": "testing.iconSkipped.retired"
  },
  "testing-iconUnset": {
    "cssName": "--vscode-testing-iconUnset",
    "themeName": "testing.iconUnset"
  },
  "testing-iconUnset-retired": {
    "cssName": "--vscode-testing-iconUnset-retired",
    "themeName": "testing.iconUnset.retired"
  },
  "testing-message-error-decorationForeground": {
    "cssName": "--vscode-testing-message-error-decorationForeground",
    "themeName": "testing.message.error.decorationForeground"
  },
  "testing-message-error-lineBackground": {
    "cssName": "--vscode-testing-message-error-lineBackground",
    "themeName": "testing.message.error.lineBackground"
  },
  "testing-message-info-decorationForeground": {
    "cssName": "--vscode-testing-message-info-decorationForeground",
    "themeName": "testing.message.info.decorationForeground"
  },
  "testing-messagePeekBorder": {
    "cssName": "--vscode-testing-messagePeekBorder",
    "themeName": "testing.messagePeekBorder"
  },
  "testing-messagePeekHeaderBackground": {
    "cssName": "--vscode-testing-messagePeekHeaderBackground",
    "themeName": "testing.messagePeekHeaderBackground"
  },
  "testing-peekBorder": {
    "cssName": "--vscode-testing-peekBorder",
    "themeName": "testing.peekBorder"
  },
  "testing-peekHeaderBackground": {
    "cssName": "--vscode-testing-peekHeaderBackground",
    "themeName": "testing.peekHeaderBackground"
  },
  "testing-runAction": {
    "cssName": "--vscode-testing-runAction",
    "themeName": "testing.runAction"
  },
  "testing-uncoveredBackground": {
    "cssName": "--vscode-testing-uncoveredBackground",
    "themeName": "testing.uncoveredBackground"
  },
  "testing-uncoveredBorder": {
    "cssName": "--vscode-testing-uncoveredBorder",
    "themeName": "testing.uncoveredBorder"
  },
  "testing-uncoveredBranchBackground": {
    "cssName": "--vscode-testing-uncoveredBranchBackground",
    "themeName": "testing.uncoveredBranchBackground"
  },
  "testing-uncoveredGutterBackground": {
    "cssName": "--vscode-testing-uncoveredGutterBackground",
    "themeName": "testing.uncoveredGutterBackground"
  },
  "textBlockQuote-background": {
    "cssName": "--vscode-textBlockQuote-background",
    "themeName": "textBlockQuote.background"
  },
  "textBlockQuote-border": {
    "cssName": "--vscode-textBlockQuote-border",
    "themeName": "textBlockQuote.border"
  },
  "textCodeBlock-background": {
    "cssName": "--vscode-textCodeBlock-background",
    "themeName": "textCodeBlock.background"
  },
  "textLink-activeForeground": {
    "cssName": "--vscode-textLink-activeForeground",
    "themeName": "textLink.activeForeground"
  },
  "textLink-foreground": {
    "cssName": "--vscode-textLink-foreground",
    "themeName": "textLink.foreground"
  },
  "textPreformat-background": {
    "cssName": "--vscode-textPreformat-background",
    "themeName": "textPreformat.background"
  },
  "textPreformat-foreground": {
    "cssName": "--vscode-textPreformat-foreground",
    "themeName": "textPreformat.foreground"
  },
  "textSeparator-foreground": {
    "cssName": "--vscode-textSeparator-foreground",
    "themeName": "textSeparator.foreground"
  },
  "titleBar-activeBackground": {
    "cssName": "--vscode-titleBar-activeBackground",
    "themeName": "titleBar.activeBackground"
  },
  "titleBar-activeForeground": {
    "cssName": "--vscode-titleBar-activeForeground",
    "themeName": "titleBar.activeForeground"
  },
  "titleBar-border": {
    "cssName": "--vscode-titleBar-border",
    "themeName": "titleBar.border"
  },
  "titleBar-inactiveBackground": {
    "cssName": "--vscode-titleBar-inactiveBackground",
    "themeName": "titleBar.inactiveBackground"
  },
  "titleBar-inactiveForeground": {
    "cssName": "--vscode-titleBar-inactiveForeground",
    "themeName": "titleBar.inactiveForeground"
  },
  "toolbar-activeBackground": {
    "cssName": "--vscode-toolbar-activeBackground",
    "themeName": "toolbar.activeBackground"
  },
  "toolbar-hoverBackground": {
    "cssName": "--vscode-toolbar-hoverBackground",
    "themeName": "toolbar.hoverBackground"
  },
  "tree-inactiveIndentGuidesStroke": {
    "cssName": "--vscode-tree-inactiveIndentGuidesStroke",
    "themeName": "tree.inactiveIndentGuidesStroke"
  },
  "tree-indentGuidesStroke": {
    "cssName": "--vscode-tree-indentGuidesStroke",
    "themeName": "tree.indentGuidesStroke"
  },
  "tree-tableColumnsBorder": {
    "cssName": "--vscode-tree-tableColumnsBorder",
    "themeName": "tree.tableColumnsBorder"
  },
  "tree-tableOddRowsBackground": {
    "cssName": "--vscode-tree-tableOddRowsBackground",
    "themeName": "tree.tableOddRowsBackground"
  },
  "walkThrough-embeddedEditorBackground": {
    "cssName": "--vscode-walkThrough-embeddedEditorBackground",
    "themeName": "walkThrough.embeddedEditorBackground"
  },
  "walkthrough-stepTitle-foreground": {
    "cssName": "--vscode-walkthrough-stepTitle-foreground",
    "themeName": "walkthrough.stepTitle.foreground"
  },
  "welcomePage-progress-background": {
    "cssName": "--vscode-welcomePage-progress-background",
    "themeName": "welcomePage.progress.background"
  },
  "welcomePage-progress-foreground": {
    "cssName": "--vscode-welcomePage-progress-foreground",
    "themeName": "welcomePage.progress.foreground"
  },
  "welcomePage-tileBackground": {
    "cssName": "--vscode-welcomePage-tileBackground",
    "themeName": "welcomePage.tileBackground"
  },
  "welcomePage-tileBorder": {
    "cssName": "--vscode-welcomePage-tileBorder",
    "themeName": "welcomePage.tileBorder"
  },
  "welcomePage-tileHoverBackground": {
    "cssName": "--vscode-welcomePage-tileHoverBackground",
    "themeName": "welcomePage.tileHoverBackground"
  },
  "widget-border": {
    "cssName": "--vscode-widget-border",
    "themeName": "widget.border"
  },
  "widget-shadow": {
    "cssName": "--vscode-widget-shadow",
    "themeName": "widget.shadow"
  }
};

/**
 * Check if a given string satisfies the criteria to be a CSS variable name.
 *
 * This is NOT compliant with the CSS specifications for custom properties,
 * so DO NOT use this in uncontrolled environments.
 */
export declare function isCSSVariable(str: string): boolean;

/**
 * Get the CSS expression using the given variableName with optional fallback variables or constants.
 * 
 * Internally uses `isCSSVariable` to check if a given value is a CSS variable or not.
 *
 * @example
 * // returns "red"
 * createCSSVariable("red")
 * // returns "var(--custom-var)"
 * createCSSVariable("--custom-var")
 * // returns "var(--custom-var, red)"
 * createCSSVariable("--custom-var", "red")
 * // returns "var(--custom-var, var(--another-var, red))"
 * createCSSVariable("--custom-var", "--another-var", "red")
 *
 * @param variableName Any syntactically valid CSS variable name
 * @param fallbacks An array of CSS variable names or constants
 */
export declare function createCSSVariable(variableName: string, ...fallbacks: string[]): string;
