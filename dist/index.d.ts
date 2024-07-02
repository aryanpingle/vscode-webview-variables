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
export declare const VscodeColors: {
    "actionBar-toggledBackground": {
        cssName: string;
        themeName: string;
    };
    "activityBar-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "activityBar-background": {
        cssName: string;
        themeName: string;
    };
    "activityBar-border": {
        cssName: string;
        themeName: string;
    };
    "activityBar-dropBorder": {
        cssName: string;
        themeName: string;
    };
    "activityBar-foreground": {
        cssName: string;
        themeName: string;
    };
    "activityBar-inactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "activityBarBadge-background": {
        cssName: string;
        themeName: string;
    };
    "activityBarBadge-foreground": {
        cssName: string;
        themeName: string;
    };
    "activityBarTop-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "activityBarTop-dropBorder": {
        cssName: string;
        themeName: string;
    };
    "activityBarTop-foreground": {
        cssName: string;
        themeName: string;
    };
    "activityBarTop-inactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "badge-background": {
        cssName: string;
        themeName: string;
    };
    "badge-foreground": {
        cssName: string;
        themeName: string;
    };
    "banner-background": {
        cssName: string;
        themeName: string;
    };
    "banner-foreground": {
        cssName: string;
        themeName: string;
    };
    "banner-iconForeground": {
        cssName: string;
        themeName: string;
    };
    "breadcrumb-activeSelectionForeground": {
        cssName: string;
        themeName: string;
    };
    "breadcrumb-background": {
        cssName: string;
        themeName: string;
    };
    "breadcrumb-focusForeground": {
        cssName: string;
        themeName: string;
    };
    "breadcrumb-foreground": {
        cssName: string;
        themeName: string;
    };
    "breadcrumbPicker-background": {
        cssName: string;
        themeName: string;
    };
    "button-background": {
        cssName: string;
        themeName: string;
    };
    "button-border": {
        cssName: string;
        themeName: string;
    };
    "button-foreground": {
        cssName: string;
        themeName: string;
    };
    "button-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "button-secondaryBackground": {
        cssName: string;
        themeName: string;
    };
    "button-secondaryForeground": {
        cssName: string;
        themeName: string;
    };
    "button-secondaryHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "button-separator": {
        cssName: string;
        themeName: string;
    };
    "charts-blue": {
        cssName: string;
        themeName: string;
    };
    "charts-foreground": {
        cssName: string;
        themeName: string;
    };
    "charts-green": {
        cssName: string;
        themeName: string;
    };
    "charts-lines": {
        cssName: string;
        themeName: string;
    };
    "charts-orange": {
        cssName: string;
        themeName: string;
    };
    "charts-purple": {
        cssName: string;
        themeName: string;
    };
    "charts-red": {
        cssName: string;
        themeName: string;
    };
    "charts-yellow": {
        cssName: string;
        themeName: string;
    };
    "chat-avatarBackground": {
        cssName: string;
        themeName: string;
    };
    "chat-avatarForeground": {
        cssName: string;
        themeName: string;
    };
    "chat-requestBackground": {
        cssName: string;
        themeName: string;
    };
    "chat-requestBorder": {
        cssName: string;
        themeName: string;
    };
    "chat-slashCommandBackground": {
        cssName: string;
        themeName: string;
    };
    "chat-slashCommandForeground": {
        cssName: string;
        themeName: string;
    };
    "checkbox-background": {
        cssName: string;
        themeName: string;
    };
    "checkbox-border": {
        cssName: string;
        themeName: string;
    };
    "checkbox-foreground": {
        cssName: string;
        themeName: string;
    };
    "checkbox-selectBackground": {
        cssName: string;
        themeName: string;
    };
    "checkbox-selectBorder": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-background": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-border": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-debuggingBackground": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-foreground": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-inactiveBorder": {
        cssName: string;
        themeName: string;
    };
    "commandCenter-inactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "commentsView-resolvedIcon": {
        cssName: string;
        themeName: string;
    };
    "commentsView-unresolvedIcon": {
        cssName: string;
        themeName: string;
    };
    "debugConsole-errorForeground": {
        cssName: string;
        themeName: string;
    };
    "debugConsole-infoForeground": {
        cssName: string;
        themeName: string;
    };
    "debugConsole-sourceForeground": {
        cssName: string;
        themeName: string;
    };
    "debugConsole-warningForeground": {
        cssName: string;
        themeName: string;
    };
    "debugConsoleInputIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "debugExceptionWidget-background": {
        cssName: string;
        themeName: string;
    };
    "debugExceptionWidget-border": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-breakpointCurrentStackframeForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-breakpointDisabledForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-breakpointForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-breakpointStackframeForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-breakpointUnverifiedForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-continueForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-disconnectForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-pauseForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-restartForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-startForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-stepBackForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-stepIntoForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-stepOutForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-stepOverForeground": {
        cssName: string;
        themeName: string;
    };
    "debugIcon-stopForeground": {
        cssName: string;
        themeName: string;
    };
    "debugTokenExpression-boolean": {
        cssName: string;
        themeName: string;
    };
    "debugTokenExpression-error": {
        cssName: string;
        themeName: string;
    };
    "debugTokenExpression-name": {
        cssName: string;
        themeName: string;
    };
    "debugTokenExpression-number": {
        cssName: string;
        themeName: string;
    };
    "debugTokenExpression-string": {
        cssName: string;
        themeName: string;
    };
    "debugTokenExpression-value": {
        cssName: string;
        themeName: string;
    };
    "debugToolBar-background": {
        cssName: string;
        themeName: string;
    };
    "debugView-exceptionLabelBackground": {
        cssName: string;
        themeName: string;
    };
    "debugView-exceptionLabelForeground": {
        cssName: string;
        themeName: string;
    };
    "debugView-stateLabelBackground": {
        cssName: string;
        themeName: string;
    };
    "debugView-stateLabelForeground": {
        cssName: string;
        themeName: string;
    };
    "debugView-valueChangedHighlight": {
        cssName: string;
        themeName: string;
    };
    descriptionForeground: {
        cssName: string;
        themeName: string;
    };
    "diffEditor-diagonalFill": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-insertedLineBackground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-insertedTextBackground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-move-border": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-moveActive-border": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-removedLineBackground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-removedTextBackground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-unchangedCodeBackground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-unchangedRegionBackground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-unchangedRegionForeground": {
        cssName: string;
        themeName: string;
    };
    "diffEditor-unchangedRegionShadow": {
        cssName: string;
        themeName: string;
    };
    disabledForeground: {
        cssName: string;
        themeName: string;
    };
    "dropdown-background": {
        cssName: string;
        themeName: string;
    };
    "dropdown-border": {
        cssName: string;
        themeName: string;
    };
    "dropdown-foreground": {
        cssName: string;
        themeName: string;
    };
    "dropdown-listBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-background": {
        cssName: string;
        themeName: string;
    };
    "editor-findMatchBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-findMatchHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-findRangeHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-focusedStackFrameHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-foldBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-foreground": {
        cssName: string;
        themeName: string;
    };
    "editor-hoverHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-inactiveSelectionBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-inlineValuesBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-inlineValuesForeground": {
        cssName: string;
        themeName: string;
    };
    "editor-lineHighlightBorder": {
        cssName: string;
        themeName: string;
    };
    "editor-linkedEditingBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-rangeHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-selectionBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-selectionHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-snippetFinalTabstopHighlightBorder": {
        cssName: string;
        themeName: string;
    };
    "editor-snippetTabstopHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-stackFrameHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-symbolHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-wordHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-wordHighlightStrongBackground": {
        cssName: string;
        themeName: string;
    };
    "editor-wordHighlightTextBackground": {
        cssName: string;
        themeName: string;
    };
    "editorActiveLineNumber-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-foreground1": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-foreground2": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-foreground3": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-foreground4": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-foreground5": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-foreground6": {
        cssName: string;
        themeName: string;
    };
    "editorBracketHighlight-unexpectedBracket-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorBracketMatch-background": {
        cssName: string;
        themeName: string;
    };
    "editorBracketMatch-border": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-activeBackground1": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-activeBackground2": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-activeBackground3": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-activeBackground4": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-activeBackground5": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-activeBackground6": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-background1": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-background2": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-background3": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-background4": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-background5": {
        cssName: string;
        themeName: string;
    };
    "editorBracketPairGuide-background6": {
        cssName: string;
        themeName: string;
    };
    "editorCodeLens-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorCommentsWidget-rangeActiveBackground": {
        cssName: string;
        themeName: string;
    };
    "editorCommentsWidget-rangeBackground": {
        cssName: string;
        themeName: string;
    };
    "editorCommentsWidget-replyInputBackground": {
        cssName: string;
        themeName: string;
    };
    "editorCommentsWidget-resolvedBorder": {
        cssName: string;
        themeName: string;
    };
    "editorCommentsWidget-unresolvedBorder": {
        cssName: string;
        themeName: string;
    };
    "editorCursor-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorError-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorGhostText-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorGroup-border": {
        cssName: string;
        themeName: string;
    };
    "editorGroup-dropBackground": {
        cssName: string;
        themeName: string;
    };
    "editorGroup-dropIntoPromptBackground": {
        cssName: string;
        themeName: string;
    };
    "editorGroup-dropIntoPromptForeground": {
        cssName: string;
        themeName: string;
    };
    "editorGroupHeader-noTabsBackground": {
        cssName: string;
        themeName: string;
    };
    "editorGroupHeader-tabsBackground": {
        cssName: string;
        themeName: string;
    };
    "editorGroupHeader-tabsBorder": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-addedBackground": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-background": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-commentGlyphForeground": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-commentRangeForeground": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-commentUnresolvedGlyphForeground": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-deletedBackground": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-foldingControlForeground": {
        cssName: string;
        themeName: string;
    };
    "editorGutter-modifiedBackground": {
        cssName: string;
        themeName: string;
    };
    "editorHint-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorHoverWidget-background": {
        cssName: string;
        themeName: string;
    };
    "editorHoverWidget-border": {
        cssName: string;
        themeName: string;
    };
    "editorHoverWidget-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorHoverWidget-highlightForeground": {
        cssName: string;
        themeName: string;
    };
    "editorHoverWidget-statusBarBackground": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground1": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground2": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground3": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground4": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground5": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-activeBackground6": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background1": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background2": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background3": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background4": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background5": {
        cssName: string;
        themeName: string;
    };
    "editorIndentGuide-background6": {
        cssName: string;
        themeName: string;
    };
    "editorInfo-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorInlayHint-background": {
        cssName: string;
        themeName: string;
    };
    "editorInlayHint-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorInlayHint-parameterBackground": {
        cssName: string;
        themeName: string;
    };
    "editorInlayHint-parameterForeground": {
        cssName: string;
        themeName: string;
    };
    "editorInlayHint-typeBackground": {
        cssName: string;
        themeName: string;
    };
    "editorInlayHint-typeForeground": {
        cssName: string;
        themeName: string;
    };
    "editorLightBulb-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorLightBulbAi-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorLightBulbAutoFix-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorLineNumber-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "editorLineNumber-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorLink-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigation-background": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigationError-background": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigationError-headerBackground": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigationInfo-background": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigationInfo-headerBackground": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigationWarning-background": {
        cssName: string;
        themeName: string;
    };
    "editorMarkerNavigationWarning-headerBackground": {
        cssName: string;
        themeName: string;
    };
    "editorMultiCursor-primary-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorMultiCursor-secondary-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-addedForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-border": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-bracketMatchForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-commentForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-commentUnresolvedForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-commonContentForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-currentContentForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-deletedForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-errorForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-findMatchForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-incomingContentForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-infoForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-inlineChatInserted": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-inlineChatRemoved": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-modifiedForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-rangeHighlightForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-selectionHighlightForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-warningForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-wordHighlightForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-wordHighlightStrongForeground": {
        cssName: string;
        themeName: string;
    };
    "editorOverviewRuler-wordHighlightTextForeground": {
        cssName: string;
        themeName: string;
    };
    "editorPane-background": {
        cssName: string;
        themeName: string;
    };
    "editorRuler-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorStickyScroll-background": {
        cssName: string;
        themeName: string;
    };
    "editorStickyScroll-shadow": {
        cssName: string;
        themeName: string;
    };
    "editorStickyScrollHover-background": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-background": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-border": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-focusHighlightForeground": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-highlightForeground": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-selectedBackground": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-selectedForeground": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidget-selectedIconForeground": {
        cssName: string;
        themeName: string;
    };
    "editorSuggestWidgetStatus-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorUnicodeHighlight-border": {
        cssName: string;
        themeName: string;
    };
    "editorUnnecessaryCode-opacity": {
        cssName: string;
        themeName: string;
    };
    "editorWarning-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorWatermark-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorWhitespace-foreground": {
        cssName: string;
        themeName: string;
    };
    "editorWidget-background": {
        cssName: string;
        themeName: string;
    };
    "editorWidget-border": {
        cssName: string;
        themeName: string;
    };
    "editorWidget-foreground": {
        cssName: string;
        themeName: string;
    };
    errorForeground: {
        cssName: string;
        themeName: string;
    };
    "extensionBadge-remoteBackground": {
        cssName: string;
        themeName: string;
    };
    "extensionBadge-remoteForeground": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-background": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-foreground": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-prominentBackground": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-prominentForeground": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-prominentHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "extensionButton-separator": {
        cssName: string;
        themeName: string;
    };
    "extensionIcon-preReleaseForeground": {
        cssName: string;
        themeName: string;
    };
    "extensionIcon-sponsorForeground": {
        cssName: string;
        themeName: string;
    };
    "extensionIcon-starForeground": {
        cssName: string;
        themeName: string;
    };
    "extensionIcon-verifiedForeground": {
        cssName: string;
        themeName: string;
    };
    focusBorder: {
        cssName: string;
        themeName: string;
    };
    foreground: {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-addedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-conflictingResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-deletedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-ignoredResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-modifiedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-renamedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-stageDeletedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-stageModifiedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-submoduleResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "gitDecoration-untrackedResourceForeground": {
        cssName: string;
        themeName: string;
    };
    "icon-foreground": {
        cssName: string;
        themeName: string;
    };
    "inlineChat-background": {
        cssName: string;
        themeName: string;
    };
    "inlineChat-border": {
        cssName: string;
        themeName: string;
    };
    "inlineChat-regionHighlight": {
        cssName: string;
        themeName: string;
    };
    "inlineChat-shadow": {
        cssName: string;
        themeName: string;
    };
    "inlineChatDiff-inserted": {
        cssName: string;
        themeName: string;
    };
    "inlineChatDiff-removed": {
        cssName: string;
        themeName: string;
    };
    "inlineChatInput-background": {
        cssName: string;
        themeName: string;
    };
    "inlineChatInput-border": {
        cssName: string;
        themeName: string;
    };
    "inlineChatInput-focusBorder": {
        cssName: string;
        themeName: string;
    };
    "inlineChatInput-placeholderForeground": {
        cssName: string;
        themeName: string;
    };
    "input-background": {
        cssName: string;
        themeName: string;
    };
    "input-border": {
        cssName: string;
        themeName: string;
    };
    "input-foreground": {
        cssName: string;
        themeName: string;
    };
    "input-placeholderForeground": {
        cssName: string;
        themeName: string;
    };
    "inputOption-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "inputOption-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "inputOption-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "inputOption-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "inputValidation-errorBackground": {
        cssName: string;
        themeName: string;
    };
    "inputValidation-errorBorder": {
        cssName: string;
        themeName: string;
    };
    "inputValidation-infoBackground": {
        cssName: string;
        themeName: string;
    };
    "inputValidation-infoBorder": {
        cssName: string;
        themeName: string;
    };
    "inputValidation-warningBackground": {
        cssName: string;
        themeName: string;
    };
    "inputValidation-warningBorder": {
        cssName: string;
        themeName: string;
    };
    "interactive-activeCodeBorder": {
        cssName: string;
        themeName: string;
    };
    "interactive-inactiveCodeBorder": {
        cssName: string;
        themeName: string;
    };
    "keybindingLabel-background": {
        cssName: string;
        themeName: string;
    };
    "keybindingLabel-border": {
        cssName: string;
        themeName: string;
    };
    "keybindingLabel-bottomBorder": {
        cssName: string;
        themeName: string;
    };
    "keybindingLabel-foreground": {
        cssName: string;
        themeName: string;
    };
    "keybindingTable-headerBackground": {
        cssName: string;
        themeName: string;
    };
    "keybindingTable-rowsBackground": {
        cssName: string;
        themeName: string;
    };
    "list-activeSelectionBackground": {
        cssName: string;
        themeName: string;
    };
    "list-activeSelectionForeground": {
        cssName: string;
        themeName: string;
    };
    "list-activeSelectionIconForeground": {
        cssName: string;
        themeName: string;
    };
    "list-deemphasizedForeground": {
        cssName: string;
        themeName: string;
    };
    "list-dropBackground": {
        cssName: string;
        themeName: string;
    };
    "list-dropBetweenBackground": {
        cssName: string;
        themeName: string;
    };
    "list-errorForeground": {
        cssName: string;
        themeName: string;
    };
    "list-filterMatchBackground": {
        cssName: string;
        themeName: string;
    };
    "list-focusHighlightForeground": {
        cssName: string;
        themeName: string;
    };
    "list-focusOutline": {
        cssName: string;
        themeName: string;
    };
    "list-highlightForeground": {
        cssName: string;
        themeName: string;
    };
    "list-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "list-inactiveSelectionBackground": {
        cssName: string;
        themeName: string;
    };
    "list-invalidItemForeground": {
        cssName: string;
        themeName: string;
    };
    "list-warningForeground": {
        cssName: string;
        themeName: string;
    };
    "listFilterWidget-background": {
        cssName: string;
        themeName: string;
    };
    "listFilterWidget-noMatchesOutline": {
        cssName: string;
        themeName: string;
    };
    "listFilterWidget-outline": {
        cssName: string;
        themeName: string;
    };
    "listFilterWidget-shadow": {
        cssName: string;
        themeName: string;
    };
    "menu-background": {
        cssName: string;
        themeName: string;
    };
    "menu-border": {
        cssName: string;
        themeName: string;
    };
    "menu-foreground": {
        cssName: string;
        themeName: string;
    };
    "menu-selectionBackground": {
        cssName: string;
        themeName: string;
    };
    "menu-selectionForeground": {
        cssName: string;
        themeName: string;
    };
    "menu-separatorBackground": {
        cssName: string;
        themeName: string;
    };
    "menubar-selectionBackground": {
        cssName: string;
        themeName: string;
    };
    "menubar-selectionForeground": {
        cssName: string;
        themeName: string;
    };
    "merge-commonContentBackground": {
        cssName: string;
        themeName: string;
    };
    "merge-commonHeaderBackground": {
        cssName: string;
        themeName: string;
    };
    "merge-currentContentBackground": {
        cssName: string;
        themeName: string;
    };
    "merge-currentHeaderBackground": {
        cssName: string;
        themeName: string;
    };
    "merge-incomingContentBackground": {
        cssName: string;
        themeName: string;
    };
    "merge-incomingHeaderBackground": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-change-background": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-change-word-background": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-changeBase-background": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-changeBase-word-background": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-handled-minimapOverViewRuler": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-handledFocused-border": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-handledUnfocused-border": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-input1-background": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-input2-background": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-unhandled-minimapOverViewRuler": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-unhandledFocused-border": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflict-unhandledUnfocused-border": {
        cssName: string;
        themeName: string;
    };
    "mergeEditor-conflictingLines-background": {
        cssName: string;
        themeName: string;
    };
    "minimap-errorHighlight": {
        cssName: string;
        themeName: string;
    };
    "minimap-findMatchHighlight": {
        cssName: string;
        themeName: string;
    };
    "minimap-foregroundOpacity": {
        cssName: string;
        themeName: string;
    };
    "minimap-infoHighlight": {
        cssName: string;
        themeName: string;
    };
    "minimap-selectionHighlight": {
        cssName: string;
        themeName: string;
    };
    "minimap-selectionOccurrenceHighlight": {
        cssName: string;
        themeName: string;
    };
    "minimap-warningHighlight": {
        cssName: string;
        themeName: string;
    };
    "minimapGutter-addedBackground": {
        cssName: string;
        themeName: string;
    };
    "minimapGutter-deletedBackground": {
        cssName: string;
        themeName: string;
    };
    "minimapGutter-modifiedBackground": {
        cssName: string;
        themeName: string;
    };
    "minimapSlider-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "minimapSlider-background": {
        cssName: string;
        themeName: string;
    };
    "minimapSlider-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "multiDiffEditor-border": {
        cssName: string;
        themeName: string;
    };
    "multiDiffEditor-headerBackground": {
        cssName: string;
        themeName: string;
    };
    "notebook-cellBorderColor": {
        cssName: string;
        themeName: string;
    };
    "notebook-cellEditorBackground": {
        cssName: string;
        themeName: string;
    };
    "notebook-cellInsertionIndicator": {
        cssName: string;
        themeName: string;
    };
    "notebook-cellStatusBarItemHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "notebook-cellToolbarSeparator": {
        cssName: string;
        themeName: string;
    };
    "notebook-editorBackground": {
        cssName: string;
        themeName: string;
    };
    "notebook-focusedCellBorder": {
        cssName: string;
        themeName: string;
    };
    "notebook-focusedEditorBorder": {
        cssName: string;
        themeName: string;
    };
    "notebook-inactiveFocusedCellBorder": {
        cssName: string;
        themeName: string;
    };
    "notebook-selectedCellBackground": {
        cssName: string;
        themeName: string;
    };
    "notebook-selectedCellBorder": {
        cssName: string;
        themeName: string;
    };
    "notebook-symbolHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "notebookEditorOverviewRuler-runningCellForeground": {
        cssName: string;
        themeName: string;
    };
    "notebookScrollbarSlider-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "notebookScrollbarSlider-background": {
        cssName: string;
        themeName: string;
    };
    "notebookScrollbarSlider-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "notebookStatusErrorIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "notebookStatusRunningIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "notebookStatusSuccessIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "notificationCenter-border": {
        cssName: string;
        themeName: string;
    };
    "notificationCenterHeader-background": {
        cssName: string;
        themeName: string;
    };
    "notificationCenterHeader-foreground": {
        cssName: string;
        themeName: string;
    };
    "notificationLink-foreground": {
        cssName: string;
        themeName: string;
    };
    "notificationToast-border": {
        cssName: string;
        themeName: string;
    };
    "notifications-background": {
        cssName: string;
        themeName: string;
    };
    "notifications-border": {
        cssName: string;
        themeName: string;
    };
    "notifications-foreground": {
        cssName: string;
        themeName: string;
    };
    "notificationsErrorIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "notificationsInfoIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "notificationsWarningIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "panel-background": {
        cssName: string;
        themeName: string;
    };
    "panel-border": {
        cssName: string;
        themeName: string;
    };
    "panel-dropBorder": {
        cssName: string;
        themeName: string;
    };
    "panelInput-border": {
        cssName: string;
        themeName: string;
    };
    "panelSection-border": {
        cssName: string;
        themeName: string;
    };
    "panelSection-dropBackground": {
        cssName: string;
        themeName: string;
    };
    "panelSectionHeader-background": {
        cssName: string;
        themeName: string;
    };
    "panelStickyScroll-background": {
        cssName: string;
        themeName: string;
    };
    "panelStickyScroll-shadow": {
        cssName: string;
        themeName: string;
    };
    "panelTitle-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "panelTitle-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "panelTitle-inactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "peekView-border": {
        cssName: string;
        themeName: string;
    };
    "peekViewEditor-background": {
        cssName: string;
        themeName: string;
    };
    "peekViewEditor-matchHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "peekViewEditorGutter-background": {
        cssName: string;
        themeName: string;
    };
    "peekViewEditorStickyScroll-background": {
        cssName: string;
        themeName: string;
    };
    "peekViewResult-background": {
        cssName: string;
        themeName: string;
    };
    "peekViewResult-fileForeground": {
        cssName: string;
        themeName: string;
    };
    "peekViewResult-lineForeground": {
        cssName: string;
        themeName: string;
    };
    "peekViewResult-matchHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "peekViewResult-selectionBackground": {
        cssName: string;
        themeName: string;
    };
    "peekViewResult-selectionForeground": {
        cssName: string;
        themeName: string;
    };
    "peekViewTitle-background": {
        cssName: string;
        themeName: string;
    };
    "peekViewTitleDescription-foreground": {
        cssName: string;
        themeName: string;
    };
    "peekViewTitleLabel-foreground": {
        cssName: string;
        themeName: string;
    };
    "pickerGroup-border": {
        cssName: string;
        themeName: string;
    };
    "pickerGroup-foreground": {
        cssName: string;
        themeName: string;
    };
    "ports-iconRunningProcessForeground": {
        cssName: string;
        themeName: string;
    };
    "problemsErrorIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "problemsInfoIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "problemsWarningIcon-foreground": {
        cssName: string;
        themeName: string;
    };
    "profileBadge-background": {
        cssName: string;
        themeName: string;
    };
    "profileBadge-foreground": {
        cssName: string;
        themeName: string;
    };
    "profiles-sashBorder": {
        cssName: string;
        themeName: string;
    };
    "progressBar-background": {
        cssName: string;
        themeName: string;
    };
    "quickInput-background": {
        cssName: string;
        themeName: string;
    };
    "quickInput-foreground": {
        cssName: string;
        themeName: string;
    };
    "quickInputList-focusBackground": {
        cssName: string;
        themeName: string;
    };
    "quickInputList-focusForeground": {
        cssName: string;
        themeName: string;
    };
    "quickInputList-focusIconForeground": {
        cssName: string;
        themeName: string;
    };
    "quickInputTitle-background": {
        cssName: string;
        themeName: string;
    };
    "sash-hoverBorder": {
        cssName: string;
        themeName: string;
    };
    "scm-historyItemAdditionsForeground": {
        cssName: string;
        themeName: string;
    };
    "scm-historyItemDeletionsForeground": {
        cssName: string;
        themeName: string;
    };
    "scm-historyItemSelectedStatisticsBorder": {
        cssName: string;
        themeName: string;
    };
    "scm-historyItemStatisticsBorder": {
        cssName: string;
        themeName: string;
    };
    "scrollbar-shadow": {
        cssName: string;
        themeName: string;
    };
    "scrollbarSlider-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "scrollbarSlider-background": {
        cssName: string;
        themeName: string;
    };
    "scrollbarSlider-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "search-resultsInfoForeground": {
        cssName: string;
        themeName: string;
    };
    "searchEditor-findMatchBackground": {
        cssName: string;
        themeName: string;
    };
    "searchEditor-textInputBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-checkboxBackground": {
        cssName: string;
        themeName: string;
    };
    "settings-checkboxBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-checkboxForeground": {
        cssName: string;
        themeName: string;
    };
    "settings-dropdownBackground": {
        cssName: string;
        themeName: string;
    };
    "settings-dropdownBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-dropdownForeground": {
        cssName: string;
        themeName: string;
    };
    "settings-dropdownListBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-focusedRowBackground": {
        cssName: string;
        themeName: string;
    };
    "settings-focusedRowBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-headerBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-headerForeground": {
        cssName: string;
        themeName: string;
    };
    "settings-modifiedItemIndicator": {
        cssName: string;
        themeName: string;
    };
    "settings-numberInputBackground": {
        cssName: string;
        themeName: string;
    };
    "settings-numberInputBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-numberInputForeground": {
        cssName: string;
        themeName: string;
    };
    "settings-rowHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "settings-sashBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-settingsHeaderHoverForeground": {
        cssName: string;
        themeName: string;
    };
    "settings-textInputBackground": {
        cssName: string;
        themeName: string;
    };
    "settings-textInputBorder": {
        cssName: string;
        themeName: string;
    };
    "settings-textInputForeground": {
        cssName: string;
        themeName: string;
    };
    "sideBar-background": {
        cssName: string;
        themeName: string;
    };
    "sideBar-border": {
        cssName: string;
        themeName: string;
    };
    "sideBar-dropBackground": {
        cssName: string;
        themeName: string;
    };
    "sideBar-foreground": {
        cssName: string;
        themeName: string;
    };
    "sideBarActivityBarTop-border": {
        cssName: string;
        themeName: string;
    };
    "sideBarSectionHeader-background": {
        cssName: string;
        themeName: string;
    };
    "sideBarSectionHeader-border": {
        cssName: string;
        themeName: string;
    };
    "sideBarSectionHeader-foreground": {
        cssName: string;
        themeName: string;
    };
    "sideBarStickyScroll-background": {
        cssName: string;
        themeName: string;
    };
    "sideBarStickyScroll-shadow": {
        cssName: string;
        themeName: string;
    };
    "sideBarTitle-background": {
        cssName: string;
        themeName: string;
    };
    "sideBarTitle-foreground": {
        cssName: string;
        themeName: string;
    };
    "sideBySideEditor-horizontalBorder": {
        cssName: string;
        themeName: string;
    };
    "sideBySideEditor-verticalBorder": {
        cssName: string;
        themeName: string;
    };
    "simpleFindWidget-sashBorder": {
        cssName: string;
        themeName: string;
    };
    "statusBar-background": {
        cssName: string;
        themeName: string;
    };
    "statusBar-border": {
        cssName: string;
        themeName: string;
    };
    "statusBar-debuggingBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBar-debuggingBorder": {
        cssName: string;
        themeName: string;
    };
    "statusBar-debuggingForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBar-focusBorder": {
        cssName: string;
        themeName: string;
    };
    "statusBar-foreground": {
        cssName: string;
        themeName: string;
    };
    "statusBar-noFolderBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBar-noFolderBorder": {
        cssName: string;
        themeName: string;
    };
    "statusBar-noFolderForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-compactHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-errorBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-errorForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-errorHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-errorHoverForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-focusBorder": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-hoverForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-offlineBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-offlineForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-offlineHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-offlineHoverForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-prominentBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-prominentForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-prominentHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-prominentHoverForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-remoteBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-remoteForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-remoteHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-remoteHoverForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-warningBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-warningForeground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-warningHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "statusBarItem-warningHoverForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-arrayForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-booleanForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-classForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-colorForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-constantForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-constructorForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-enumeratorForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-enumeratorMemberForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-eventForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-fieldForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-fileForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-folderForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-functionForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-interfaceForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-keyForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-keywordForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-methodForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-moduleForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-namespaceForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-nullForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-numberForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-objectForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-operatorForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-packageForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-propertyForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-referenceForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-snippetForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-stringForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-structForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-textForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-typeParameterForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-unitForeground": {
        cssName: string;
        themeName: string;
    };
    "symbolIcon-variableForeground": {
        cssName: string;
        themeName: string;
    };
    "tab-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-activeBorderTop": {
        cssName: string;
        themeName: string;
    };
    "tab-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "tab-activeModifiedBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-border": {
        cssName: string;
        themeName: string;
    };
    "tab-dragAndDropBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-inactiveBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-inactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "tab-inactiveModifiedBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-lastPinnedBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-selectedBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-selectedBorderTop": {
        cssName: string;
        themeName: string;
    };
    "tab-selectedForeground": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedActiveBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedActiveBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedActiveBorderTop": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedActiveForeground": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedActiveModifiedBorder": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedInactiveBackground": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedInactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "tab-unfocusedInactiveModifiedBorder": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBlack": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBlue": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightBlack": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightBlue": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightCyan": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightGreen": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightMagenta": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightRed": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightWhite": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiBrightYellow": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiCyan": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiGreen": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiMagenta": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiRed": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiWhite": {
        cssName: string;
        themeName: string;
    };
    "terminal-ansiYellow": {
        cssName: string;
        themeName: string;
    };
    "terminal-border": {
        cssName: string;
        themeName: string;
    };
    "terminal-dropBackground": {
        cssName: string;
        themeName: string;
    };
    "terminal-findMatchBackground": {
        cssName: string;
        themeName: string;
    };
    "terminal-findMatchHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "terminal-foreground": {
        cssName: string;
        themeName: string;
    };
    "terminal-hoverHighlightBackground": {
        cssName: string;
        themeName: string;
    };
    "terminal-inactiveSelectionBackground": {
        cssName: string;
        themeName: string;
    };
    "terminal-selectionBackground": {
        cssName: string;
        themeName: string;
    };
    "terminal-tab-activeBorder": {
        cssName: string;
        themeName: string;
    };
    "terminalCommandDecoration-defaultBackground": {
        cssName: string;
        themeName: string;
    };
    "terminalCommandDecoration-errorBackground": {
        cssName: string;
        themeName: string;
    };
    "terminalCommandDecoration-successBackground": {
        cssName: string;
        themeName: string;
    };
    "terminalOverviewRuler-cursorForeground": {
        cssName: string;
        themeName: string;
    };
    "terminalOverviewRuler-findMatchForeground": {
        cssName: string;
        themeName: string;
    };
    "terminalStickyScrollHover-background": {
        cssName: string;
        themeName: string;
    };
    "testing-coverCountBadgeBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-coverCountBadgeForeground": {
        cssName: string;
        themeName: string;
    };
    "testing-coveredBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-coveredBorder": {
        cssName: string;
        themeName: string;
    };
    "testing-coveredGutterBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-iconErrored": {
        cssName: string;
        themeName: string;
    };
    "testing-iconErrored-retired": {
        cssName: string;
        themeName: string;
    };
    "testing-iconFailed": {
        cssName: string;
        themeName: string;
    };
    "testing-iconFailed-retired": {
        cssName: string;
        themeName: string;
    };
    "testing-iconPassed": {
        cssName: string;
        themeName: string;
    };
    "testing-iconPassed-retired": {
        cssName: string;
        themeName: string;
    };
    "testing-iconQueued": {
        cssName: string;
        themeName: string;
    };
    "testing-iconQueued-retired": {
        cssName: string;
        themeName: string;
    };
    "testing-iconSkipped": {
        cssName: string;
        themeName: string;
    };
    "testing-iconSkipped-retired": {
        cssName: string;
        themeName: string;
    };
    "testing-iconUnset": {
        cssName: string;
        themeName: string;
    };
    "testing-iconUnset-retired": {
        cssName: string;
        themeName: string;
    };
    "testing-message-error-decorationForeground": {
        cssName: string;
        themeName: string;
    };
    "testing-message-error-lineBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-message-info-decorationForeground": {
        cssName: string;
        themeName: string;
    };
    "testing-messagePeekBorder": {
        cssName: string;
        themeName: string;
    };
    "testing-messagePeekHeaderBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-peekBorder": {
        cssName: string;
        themeName: string;
    };
    "testing-peekHeaderBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-runAction": {
        cssName: string;
        themeName: string;
    };
    "testing-uncoveredBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-uncoveredBorder": {
        cssName: string;
        themeName: string;
    };
    "testing-uncoveredBranchBackground": {
        cssName: string;
        themeName: string;
    };
    "testing-uncoveredGutterBackground": {
        cssName: string;
        themeName: string;
    };
    "textBlockQuote-background": {
        cssName: string;
        themeName: string;
    };
    "textBlockQuote-border": {
        cssName: string;
        themeName: string;
    };
    "textCodeBlock-background": {
        cssName: string;
        themeName: string;
    };
    "textLink-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "textLink-foreground": {
        cssName: string;
        themeName: string;
    };
    "textPreformat-background": {
        cssName: string;
        themeName: string;
    };
    "textPreformat-foreground": {
        cssName: string;
        themeName: string;
    };
    "textSeparator-foreground": {
        cssName: string;
        themeName: string;
    };
    "titleBar-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "titleBar-activeForeground": {
        cssName: string;
        themeName: string;
    };
    "titleBar-border": {
        cssName: string;
        themeName: string;
    };
    "titleBar-inactiveBackground": {
        cssName: string;
        themeName: string;
    };
    "titleBar-inactiveForeground": {
        cssName: string;
        themeName: string;
    };
    "toolbar-activeBackground": {
        cssName: string;
        themeName: string;
    };
    "toolbar-hoverBackground": {
        cssName: string;
        themeName: string;
    };
    "tree-inactiveIndentGuidesStroke": {
        cssName: string;
        themeName: string;
    };
    "tree-indentGuidesStroke": {
        cssName: string;
        themeName: string;
    };
    "tree-tableColumnsBorder": {
        cssName: string;
        themeName: string;
    };
    "tree-tableOddRowsBackground": {
        cssName: string;
        themeName: string;
    };
    "walkThrough-embeddedEditorBackground": {
        cssName: string;
        themeName: string;
    };
    "walkthrough-stepTitle-foreground": {
        cssName: string;
        themeName: string;
    };
    "welcomePage-progress-background": {
        cssName: string;
        themeName: string;
    };
    "welcomePage-progress-foreground": {
        cssName: string;
        themeName: string;
    };
    "welcomePage-tileBackground": {
        cssName: string;
        themeName: string;
    };
    "welcomePage-tileBorder": {
        cssName: string;
        themeName: string;
    };
    "welcomePage-tileHoverBackground": {
        cssName: string;
        themeName: string;
    };
    "widget-border": {
        cssName: string;
        themeName: string;
    };
    "widget-shadow": {
        cssName: string;
        themeName: string;
    };
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
 * @example
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
