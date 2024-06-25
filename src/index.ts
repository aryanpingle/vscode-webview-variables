/**
 * An object with a 1:1 mapping of a short name to an in-built VSCode CSS variable name.
 *
 * Each key of the object is simply the name of the CSS variable without the "--vscode-" prefix.
 *
 * @example
 * // returns "--vscode-foreground"
 * VscodeCSSVariables.foreground
 * // returns "--vscode-textLink-foreground"
 * VscodeCSSVariables["textLink-foreground"]
 */
export const VscodeCSSVariables = {
  foreground: "--vscode-foreground",
  disabledForeground: "--vscode-disabledForeground",
  errorForeground: "--vscode-errorForeground",
  descriptionForeground: "--vscode-descriptionForeground",
  "icon-foreground": "--vscode-icon-foreground",
  focusBorder: "--vscode-focusBorder",
  "textLink-foreground": "--vscode-textLink-foreground",
  "textLink-activeForeground": "--vscode-textLink-activeForeground",
  "textSeparator-foreground": "--vscode-textSeparator-foreground",
  "textPreformat-foreground": "--vscode-textPreformat-foreground",
  "textPreformat-background": "--vscode-textPreformat-background",
  "textBlockQuote-background": "--vscode-textBlockQuote-background",
  "textBlockQuote-border": "--vscode-textBlockQuote-border",
  "textCodeBlock-background": "--vscode-textCodeBlock-background",
  "sash-hoverBorder": "--vscode-sash-hoverBorder",
  "badge-background": "--vscode-badge-background",
  "badge-foreground": "--vscode-badge-foreground",
  "scrollbar-shadow": "--vscode-scrollbar-shadow",
  "scrollbarSlider-background": "--vscode-scrollbarSlider-background",
  "scrollbarSlider-hoverBackground": "--vscode-scrollbarSlider-hoverBackground",
  "scrollbarSlider-activeBackground":
    "--vscode-scrollbarSlider-activeBackground",
  "progressBar-background": "--vscode-progressBar-background",
  "editor-background": "--vscode-editor-background",
  "editor-foreground": "--vscode-editor-foreground",
  "editorStickyScroll-background": "--vscode-editorStickyScroll-background",
  "editorStickyScrollHover-background":
    "--vscode-editorStickyScrollHover-background",
  "editorStickyScroll-shadow": "--vscode-editorStickyScroll-shadow",
  "editorWidget-background": "--vscode-editorWidget-background",
  "editorWidget-foreground": "--vscode-editorWidget-foreground",
  "editorWidget-border": "--vscode-editorWidget-border",
  "editorError-foreground": "--vscode-editorError-foreground",
  "editorWarning-foreground": "--vscode-editorWarning-foreground",
  "editorInfo-foreground": "--vscode-editorInfo-foreground",
  "editorHint-foreground": "--vscode-editorHint-foreground",
  "editorLink-activeForeground": "--vscode-editorLink-activeForeground",
  "editor-selectionBackground": "--vscode-editor-selectionBackground",
  "editor-inactiveSelectionBackground":
    "--vscode-editor-inactiveSelectionBackground",
  "editor-selectionHighlightBackground":
    "--vscode-editor-selectionHighlightBackground",
  "editor-findMatchBackground": "--vscode-editor-findMatchBackground",
  "editor-findMatchHighlightBackground":
    "--vscode-editor-findMatchHighlightBackground",
  "editor-findRangeHighlightBackground":
    "--vscode-editor-findRangeHighlightBackground",
  "editor-hoverHighlightBackground": "--vscode-editor-hoverHighlightBackground",
  "editorHoverWidget-background": "--vscode-editorHoverWidget-background",
  "editorHoverWidget-foreground": "--vscode-editorHoverWidget-foreground",
  "editorHoverWidget-border": "--vscode-editorHoverWidget-border",
  "editorHoverWidget-statusBarBackground":
    "--vscode-editorHoverWidget-statusBarBackground",
  "editorInlayHint-foreground": "--vscode-editorInlayHint-foreground",
  "editorInlayHint-background": "--vscode-editorInlayHint-background",
  "editorInlayHint-typeForeground": "--vscode-editorInlayHint-typeForeground",
  "editorInlayHint-typeBackground": "--vscode-editorInlayHint-typeBackground",
  "editorInlayHint-parameterForeground":
    "--vscode-editorInlayHint-parameterForeground",
  "editorInlayHint-parameterBackground":
    "--vscode-editorInlayHint-parameterBackground",
  "editorLightBulb-foreground": "--vscode-editorLightBulb-foreground",
  "editorLightBulbAutoFix-foreground":
    "--vscode-editorLightBulbAutoFix-foreground",
  "editorLightBulbAi-foreground": "--vscode-editorLightBulbAi-foreground",
  "editor-snippetTabstopHighlightBackground":
    "--vscode-editor-snippetTabstopHighlightBackground",
  "editor-snippetFinalTabstopHighlightBorder":
    "--vscode-editor-snippetFinalTabstopHighlightBorder",
  "diffEditor-insertedTextBackground":
    "--vscode-diffEditor-insertedTextBackground",
  "diffEditor-removedTextBackground":
    "--vscode-diffEditor-removedTextBackground",
  "diffEditor-insertedLineBackground":
    "--vscode-diffEditor-insertedLineBackground",
  "diffEditor-removedLineBackground":
    "--vscode-diffEditor-removedLineBackground",
  "diffEditor-diagonalFill": "--vscode-diffEditor-diagonalFill",
  "diffEditor-unchangedRegionBackground":
    "--vscode-diffEditor-unchangedRegionBackground",
  "diffEditor-unchangedRegionForeground":
    "--vscode-diffEditor-unchangedRegionForeground",
  "diffEditor-unchangedCodeBackground":
    "--vscode-diffEditor-unchangedCodeBackground",
  "widget-shadow": "--vscode-widget-shadow",
  "widget-border": "--vscode-widget-border",
  "toolbar-hoverBackground": "--vscode-toolbar-hoverBackground",
  "toolbar-activeBackground": "--vscode-toolbar-activeBackground",
  "breadcrumb-foreground": "--vscode-breadcrumb-foreground",
  "breadcrumb-background": "--vscode-breadcrumb-background",
  "breadcrumb-focusForeground": "--vscode-breadcrumb-focusForeground",
  "breadcrumb-activeSelectionForeground":
    "--vscode-breadcrumb-activeSelectionForeground",
  "breadcrumbPicker-background": "--vscode-breadcrumbPicker-background",
  "merge-currentHeaderBackground": "--vscode-merge-currentHeaderBackground",
  "merge-currentContentBackground": "--vscode-merge-currentContentBackground",
  "merge-incomingHeaderBackground": "--vscode-merge-incomingHeaderBackground",
  "merge-incomingContentBackground": "--vscode-merge-incomingContentBackground",
  "merge-commonHeaderBackground": "--vscode-merge-commonHeaderBackground",
  "merge-commonContentBackground": "--vscode-merge-commonContentBackground",
  "editorOverviewRuler-currentContentForeground":
    "--vscode-editorOverviewRuler-currentContentForeground",
  "editorOverviewRuler-incomingContentForeground":
    "--vscode-editorOverviewRuler-incomingContentForeground",
  "editorOverviewRuler-commonContentForeground":
    "--vscode-editorOverviewRuler-commonContentForeground",
  "editorOverviewRuler-findMatchForeground":
    "--vscode-editorOverviewRuler-findMatchForeground",
  "editorOverviewRuler-selectionHighlightForeground":
    "--vscode-editorOverviewRuler-selectionHighlightForeground",
  "problemsErrorIcon-foreground": "--vscode-problemsErrorIcon-foreground",
  "problemsWarningIcon-foreground": "--vscode-problemsWarningIcon-foreground",
  "problemsInfoIcon-foreground": "--vscode-problemsInfoIcon-foreground",
  "input-background": "--vscode-input-background",
  "input-foreground": "--vscode-input-foreground",
  "input-border": "--vscode-input-border",
  "inputOption-activeBorder": "--vscode-inputOption-activeBorder",
  "inputOption-hoverBackground": "--vscode-inputOption-hoverBackground",
  "inputOption-activeBackground": "--vscode-inputOption-activeBackground",
  "inputOption-activeForeground": "--vscode-inputOption-activeForeground",
  "input-placeholderForeground": "--vscode-input-placeholderForeground",
  "inputValidation-infoBackground": "--vscode-inputValidation-infoBackground",
  "inputValidation-infoBorder": "--vscode-inputValidation-infoBorder",
  "inputValidation-warningBackground":
    "--vscode-inputValidation-warningBackground",
  "inputValidation-warningBorder": "--vscode-inputValidation-warningBorder",
  "inputValidation-errorBackground": "--vscode-inputValidation-errorBackground",
  "inputValidation-errorBorder": "--vscode-inputValidation-errorBorder",
  "dropdown-background": "--vscode-dropdown-background",
  "dropdown-listBackground": "--vscode-dropdown-listBackground",
  "dropdown-foreground": "--vscode-dropdown-foreground",
  "dropdown-border": "--vscode-dropdown-border",
  "button-foreground": "--vscode-button-foreground",
  "button-separator": "--vscode-button-separator",
  "button-background": "--vscode-button-background",
  "button-hoverBackground": "--vscode-button-hoverBackground",
  "button-border": "--vscode-button-border",
  "button-secondaryForeground": "--vscode-button-secondaryForeground",
  "button-secondaryBackground": "--vscode-button-secondaryBackground",
  "button-secondaryHoverBackground": "--vscode-button-secondaryHoverBackground",
  "checkbox-background": "--vscode-checkbox-background",
  "checkbox-selectBackground": "--vscode-checkbox-selectBackground",
  "checkbox-foreground": "--vscode-checkbox-foreground",
  "checkbox-border": "--vscode-checkbox-border",
  "checkbox-selectBorder": "--vscode-checkbox-selectBorder",
  "keybindingLabel-background": "--vscode-keybindingLabel-background",
  "keybindingLabel-foreground": "--vscode-keybindingLabel-foreground",
  "keybindingLabel-border": "--vscode-keybindingLabel-border",
  "keybindingLabel-bottomBorder": "--vscode-keybindingLabel-bottomBorder",
  "list-focusOutline": "--vscode-list-focusOutline",
  "list-activeSelectionBackground": "--vscode-list-activeSelectionBackground",
  "list-activeSelectionForeground": "--vscode-list-activeSelectionForeground",
  "list-activeSelectionIconForeground":
    "--vscode-list-activeSelectionIconForeground",
  "list-inactiveSelectionBackground":
    "--vscode-list-inactiveSelectionBackground",
  "list-hoverBackground": "--vscode-list-hoverBackground",
  "list-dropBackground": "--vscode-list-dropBackground",
  "list-dropBetweenBackground": "--vscode-list-dropBetweenBackground",
  "list-highlightForeground": "--vscode-list-highlightForeground",
  "list-focusHighlightForeground": "--vscode-list-focusHighlightForeground",
  "list-invalidItemForeground": "--vscode-list-invalidItemForeground",
  "list-errorForeground": "--vscode-list-errorForeground",
  "list-warningForeground": "--vscode-list-warningForeground",
  "listFilterWidget-background": "--vscode-listFilterWidget-background",
  "listFilterWidget-outline": "--vscode-listFilterWidget-outline",
  "listFilterWidget-noMatchesOutline":
    "--vscode-listFilterWidget-noMatchesOutline",
  "listFilterWidget-shadow": "--vscode-listFilterWidget-shadow",
  "list-filterMatchBackground": "--vscode-list-filterMatchBackground",
  "list-deemphasizedForeground": "--vscode-list-deemphasizedForeground",
  "tree-indentGuidesStroke": "--vscode-tree-indentGuidesStroke",
  "tree-inactiveIndentGuidesStroke": "--vscode-tree-inactiveIndentGuidesStroke",
  "tree-tableColumnsBorder": "--vscode-tree-tableColumnsBorder",
  "tree-tableOddRowsBackground": "--vscode-tree-tableOddRowsBackground",
  "menu-border": "--vscode-menu-border",
  "menu-foreground": "--vscode-menu-foreground",
  "menu-background": "--vscode-menu-background",
  "menu-selectionForeground": "--vscode-menu-selectionForeground",
  "menu-selectionBackground": "--vscode-menu-selectionBackground",
  "menu-separatorBackground": "--vscode-menu-separatorBackground",
  "minimap-findMatchHighlight": "--vscode-minimap-findMatchHighlight",
  "minimap-selectionOccurrenceHighlight":
    "--vscode-minimap-selectionOccurrenceHighlight",
  "minimap-selectionHighlight": "--vscode-minimap-selectionHighlight",
  "minimap-infoHighlight": "--vscode-minimap-infoHighlight",
  "minimap-warningHighlight": "--vscode-minimap-warningHighlight",
  "minimap-errorHighlight": "--vscode-minimap-errorHighlight",
  "minimap-foregroundOpacity": "--vscode-minimap-foregroundOpacity",
  "minimapSlider-background": "--vscode-minimapSlider-background",
  "minimapSlider-hoverBackground": "--vscode-minimapSlider-hoverBackground",
  "minimapSlider-activeBackground": "--vscode-minimapSlider-activeBackground",
  "charts-foreground": "--vscode-charts-foreground",
  "charts-lines": "--vscode-charts-lines",
  "charts-red": "--vscode-charts-red",
  "charts-blue": "--vscode-charts-blue",
  "charts-yellow": "--vscode-charts-yellow",
  "charts-orange": "--vscode-charts-orange",
  "charts-green": "--vscode-charts-green",
  "charts-purple": "--vscode-charts-purple",
  "quickInput-background": "--vscode-quickInput-background",
  "quickInput-foreground": "--vscode-quickInput-foreground",
  "quickInputTitle-background": "--vscode-quickInputTitle-background",
  "pickerGroup-foreground": "--vscode-pickerGroup-foreground",
  "pickerGroup-border": "--vscode-pickerGroup-border",
  "quickInputList-focusForeground": "--vscode-quickInputList-focusForeground",
  "quickInputList-focusIconForeground":
    "--vscode-quickInputList-focusIconForeground",
  "quickInputList-focusBackground": "--vscode-quickInputList-focusBackground",
  "search-resultsInfoForeground": "--vscode-search-resultsInfoForeground",
  "searchEditor-findMatchBackground":
    "--vscode-searchEditor-findMatchBackground",
  "multiDiffEditor-headerBackground":
    "--vscode-multiDiffEditor-headerBackground",
  "multiDiffEditor-border": "--vscode-multiDiffEditor-border",
  "symbolIcon-arrayForeground": "--vscode-symbolIcon-arrayForeground",
  "symbolIcon-booleanForeground": "--vscode-symbolIcon-booleanForeground",
  "symbolIcon-classForeground": "--vscode-symbolIcon-classForeground",
  "symbolIcon-colorForeground": "--vscode-symbolIcon-colorForeground",
  "symbolIcon-constantForeground": "--vscode-symbolIcon-constantForeground",
  "symbolIcon-constructorForeground":
    "--vscode-symbolIcon-constructorForeground",
  "symbolIcon-enumeratorForeground": "--vscode-symbolIcon-enumeratorForeground",
  "symbolIcon-enumeratorMemberForeground":
    "--vscode-symbolIcon-enumeratorMemberForeground",
  "symbolIcon-eventForeground": "--vscode-symbolIcon-eventForeground",
  "symbolIcon-fieldForeground": "--vscode-symbolIcon-fieldForeground",
  "symbolIcon-fileForeground": "--vscode-symbolIcon-fileForeground",
  "symbolIcon-folderForeground": "--vscode-symbolIcon-folderForeground",
  "symbolIcon-functionForeground": "--vscode-symbolIcon-functionForeground",
  "symbolIcon-interfaceForeground": "--vscode-symbolIcon-interfaceForeground",
  "symbolIcon-keyForeground": "--vscode-symbolIcon-keyForeground",
  "symbolIcon-keywordForeground": "--vscode-symbolIcon-keywordForeground",
  "symbolIcon-methodForeground": "--vscode-symbolIcon-methodForeground",
  "symbolIcon-moduleForeground": "--vscode-symbolIcon-moduleForeground",
  "symbolIcon-namespaceForeground": "--vscode-symbolIcon-namespaceForeground",
  "symbolIcon-nullForeground": "--vscode-symbolIcon-nullForeground",
  "symbolIcon-numberForeground": "--vscode-symbolIcon-numberForeground",
  "symbolIcon-objectForeground": "--vscode-symbolIcon-objectForeground",
  "symbolIcon-operatorForeground": "--vscode-symbolIcon-operatorForeground",
  "symbolIcon-packageForeground": "--vscode-symbolIcon-packageForeground",
  "symbolIcon-propertyForeground": "--vscode-symbolIcon-propertyForeground",
  "symbolIcon-referenceForeground": "--vscode-symbolIcon-referenceForeground",
  "symbolIcon-snippetForeground": "--vscode-symbolIcon-snippetForeground",
  "symbolIcon-stringForeground": "--vscode-symbolIcon-stringForeground",
  "symbolIcon-structForeground": "--vscode-symbolIcon-structForeground",
  "symbolIcon-textForeground": "--vscode-symbolIcon-textForeground",
  "symbolIcon-typeParameterForeground":
    "--vscode-symbolIcon-typeParameterForeground",
  "symbolIcon-unitForeground": "--vscode-symbolIcon-unitForeground",
  "symbolIcon-variableForeground": "--vscode-symbolIcon-variableForeground",
  "actionBar-toggledBackground": "--vscode-actionBar-toggledBackground",
  "editorHoverWidget-highlightForeground":
    "--vscode-editorHoverWidget-highlightForeground",
  "editor-lineHighlightBorder": "--vscode-editor-lineHighlightBorder",
  "editor-rangeHighlightBackground": "--vscode-editor-rangeHighlightBackground",
  "editor-symbolHighlightBackground":
    "--vscode-editor-symbolHighlightBackground",
  "editorCursor-foreground": "--vscode-editorCursor-foreground",
  "editorMultiCursor-primary-foreground":
    "--vscode-editorMultiCursor-primary-foreground",
  "editorMultiCursor-secondary-foreground":
    "--vscode-editorMultiCursor-secondary-foreground",
  "editorWhitespace-foreground": "--vscode-editorWhitespace-foreground",
  "editorLineNumber-foreground": "--vscode-editorLineNumber-foreground",
  "editorIndentGuide-background": "--vscode-editorIndentGuide-background",
  "editorIndentGuide-activeBackground":
    "--vscode-editorIndentGuide-activeBackground",
  "editorIndentGuide-background1": "--vscode-editorIndentGuide-background1",
  "editorIndentGuide-background2": "--vscode-editorIndentGuide-background2",
  "editorIndentGuide-background3": "--vscode-editorIndentGuide-background3",
  "editorIndentGuide-background4": "--vscode-editorIndentGuide-background4",
  "editorIndentGuide-background5": "--vscode-editorIndentGuide-background5",
  "editorIndentGuide-background6": "--vscode-editorIndentGuide-background6",
  "editorIndentGuide-activeBackground1":
    "--vscode-editorIndentGuide-activeBackground1",
  "editorIndentGuide-activeBackground2":
    "--vscode-editorIndentGuide-activeBackground2",
  "editorIndentGuide-activeBackground3":
    "--vscode-editorIndentGuide-activeBackground3",
  "editorIndentGuide-activeBackground4":
    "--vscode-editorIndentGuide-activeBackground4",
  "editorIndentGuide-activeBackground5":
    "--vscode-editorIndentGuide-activeBackground5",
  "editorIndentGuide-activeBackground6":
    "--vscode-editorIndentGuide-activeBackground6",
  "editorActiveLineNumber-foreground":
    "--vscode-editorActiveLineNumber-foreground",
  "editorLineNumber-activeForeground":
    "--vscode-editorLineNumber-activeForeground",
  "editorRuler-foreground": "--vscode-editorRuler-foreground",
  "editorCodeLens-foreground": "--vscode-editorCodeLens-foreground",
  "editorBracketMatch-background": "--vscode-editorBracketMatch-background",
  "editorBracketMatch-border": "--vscode-editorBracketMatch-border",
  "editorOverviewRuler-border": "--vscode-editorOverviewRuler-border",
  "editorGutter-background": "--vscode-editorGutter-background",
  "editorUnnecessaryCode-opacity": "--vscode-editorUnnecessaryCode-opacity",
  "editorGhostText-foreground": "--vscode-editorGhostText-foreground",
  "editorOverviewRuler-rangeHighlightForeground":
    "--vscode-editorOverviewRuler-rangeHighlightForeground",
  "editorOverviewRuler-errorForeground":
    "--vscode-editorOverviewRuler-errorForeground",
  "editorOverviewRuler-warningForeground":
    "--vscode-editorOverviewRuler-warningForeground",
  "editorOverviewRuler-infoForeground":
    "--vscode-editorOverviewRuler-infoForeground",
  "editorBracketHighlight-foreground1":
    "--vscode-editorBracketHighlight-foreground1",
  "editorBracketHighlight-foreground2":
    "--vscode-editorBracketHighlight-foreground2",
  "editorBracketHighlight-foreground3":
    "--vscode-editorBracketHighlight-foreground3",
  "editorBracketHighlight-foreground4":
    "--vscode-editorBracketHighlight-foreground4",
  "editorBracketHighlight-foreground5":
    "--vscode-editorBracketHighlight-foreground5",
  "editorBracketHighlight-foreground6":
    "--vscode-editorBracketHighlight-foreground6",
  "editorBracketHighlight-unexpectedBracket-foreground":
    "--vscode-editorBracketHighlight-unexpectedBracket-foreground",
  "editorBracketPairGuide-background1":
    "--vscode-editorBracketPairGuide-background1",
  "editorBracketPairGuide-background2":
    "--vscode-editorBracketPairGuide-background2",
  "editorBracketPairGuide-background3":
    "--vscode-editorBracketPairGuide-background3",
  "editorBracketPairGuide-background4":
    "--vscode-editorBracketPairGuide-background4",
  "editorBracketPairGuide-background5":
    "--vscode-editorBracketPairGuide-background5",
  "editorBracketPairGuide-background6":
    "--vscode-editorBracketPairGuide-background6",
  "editorBracketPairGuide-activeBackground1":
    "--vscode-editorBracketPairGuide-activeBackground1",
  "editorBracketPairGuide-activeBackground2":
    "--vscode-editorBracketPairGuide-activeBackground2",
  "editorBracketPairGuide-activeBackground3":
    "--vscode-editorBracketPairGuide-activeBackground3",
  "editorBracketPairGuide-activeBackground4":
    "--vscode-editorBracketPairGuide-activeBackground4",
  "editorBracketPairGuide-activeBackground5":
    "--vscode-editorBracketPairGuide-activeBackground5",
  "editorBracketPairGuide-activeBackground6":
    "--vscode-editorBracketPairGuide-activeBackground6",
  "editorUnicodeHighlight-border": "--vscode-editorUnicodeHighlight-border",
  "diffEditor-move-border": "--vscode-diffEditor-move-border",
  "diffEditor-moveActive-border": "--vscode-diffEditor-moveActive-border",
  "diffEditor-unchangedRegionShadow":
    "--vscode-diffEditor-unchangedRegionShadow",
  "editorOverviewRuler-bracketMatchForeground":
    "--vscode-editorOverviewRuler-bracketMatchForeground",
  "editor-foldBackground": "--vscode-editor-foldBackground",
  "editorGutter-foldingControlForeground":
    "--vscode-editorGutter-foldingControlForeground",
  "editor-linkedEditingBackground": "--vscode-editor-linkedEditingBackground",
  "editor-wordHighlightBackground": "--vscode-editor-wordHighlightBackground",
  "editor-wordHighlightStrongBackground":
    "--vscode-editor-wordHighlightStrongBackground",
  "editor-wordHighlightTextBackground":
    "--vscode-editor-wordHighlightTextBackground",
  "editorOverviewRuler-wordHighlightForeground":
    "--vscode-editorOverviewRuler-wordHighlightForeground",
  "editorOverviewRuler-wordHighlightStrongForeground":
    "--vscode-editorOverviewRuler-wordHighlightStrongForeground",
  "editorOverviewRuler-wordHighlightTextForeground":
    "--vscode-editorOverviewRuler-wordHighlightTextForeground",
  "peekViewTitle-background": "--vscode-peekViewTitle-background",
  "peekViewTitleLabel-foreground": "--vscode-peekViewTitleLabel-foreground",
  "peekViewTitleDescription-foreground":
    "--vscode-peekViewTitleDescription-foreground",
  "peekView-border": "--vscode-peekView-border",
  "peekViewResult-background": "--vscode-peekViewResult-background",
  "peekViewResult-lineForeground": "--vscode-peekViewResult-lineForeground",
  "peekViewResult-fileForeground": "--vscode-peekViewResult-fileForeground",
  "peekViewResult-selectionBackground":
    "--vscode-peekViewResult-selectionBackground",
  "peekViewResult-selectionForeground":
    "--vscode-peekViewResult-selectionForeground",
  "peekViewEditor-background": "--vscode-peekViewEditor-background",
  "peekViewEditorGutter-background": "--vscode-peekViewEditorGutter-background",
  "peekViewEditorStickyScroll-background":
    "--vscode-peekViewEditorStickyScroll-background",
  "peekViewResult-matchHighlightBackground":
    "--vscode-peekViewResult-matchHighlightBackground",
  "peekViewEditor-matchHighlightBackground":
    "--vscode-peekViewEditor-matchHighlightBackground",
  "editorMarkerNavigationError-background":
    "--vscode-editorMarkerNavigationError-background",
  "editorMarkerNavigationError-headerBackground":
    "--vscode-editorMarkerNavigationError-headerBackground",
  "editorMarkerNavigationWarning-background":
    "--vscode-editorMarkerNavigationWarning-background",
  "editorMarkerNavigationWarning-headerBackground":
    "--vscode-editorMarkerNavigationWarning-headerBackground",
  "editorMarkerNavigationInfo-background":
    "--vscode-editorMarkerNavigationInfo-background",
  "editorMarkerNavigationInfo-headerBackground":
    "--vscode-editorMarkerNavigationInfo-headerBackground",
  "editorMarkerNavigation-background":
    "--vscode-editorMarkerNavigation-background",
  "editorSuggestWidget-background": "--vscode-editorSuggestWidget-background",
  "editorSuggestWidget-border": "--vscode-editorSuggestWidget-border",
  "editorSuggestWidget-foreground": "--vscode-editorSuggestWidget-foreground",
  "editorSuggestWidget-selectedForeground":
    "--vscode-editorSuggestWidget-selectedForeground",
  "editorSuggestWidget-selectedIconForeground":
    "--vscode-editorSuggestWidget-selectedIconForeground",
  "editorSuggestWidget-selectedBackground":
    "--vscode-editorSuggestWidget-selectedBackground",
  "editorSuggestWidget-highlightForeground":
    "--vscode-editorSuggestWidget-highlightForeground",
  "editorSuggestWidget-focusHighlightForeground":
    "--vscode-editorSuggestWidget-focusHighlightForeground",
  "editorSuggestWidgetStatus-foreground":
    "--vscode-editorSuggestWidgetStatus-foreground",
  "editorWatermark-foreground": "--vscode-editorWatermark-foreground",
  "tab-activeBackground": "--vscode-tab-activeBackground",
  "tab-unfocusedActiveBackground": "--vscode-tab-unfocusedActiveBackground",
  "tab-inactiveBackground": "--vscode-tab-inactiveBackground",
  "tab-unfocusedInactiveBackground": "--vscode-tab-unfocusedInactiveBackground",
  "tab-activeForeground": "--vscode-tab-activeForeground",
  "tab-inactiveForeground": "--vscode-tab-inactiveForeground",
  "tab-unfocusedActiveForeground": "--vscode-tab-unfocusedActiveForeground",
  "tab-unfocusedInactiveForeground": "--vscode-tab-unfocusedInactiveForeground",
  "tab-hoverBackground": "--vscode-tab-hoverBackground",
  "tab-unfocusedHoverBackground": "--vscode-tab-unfocusedHoverBackground",
  "tab-border": "--vscode-tab-border",
  "tab-lastPinnedBorder": "--vscode-tab-lastPinnedBorder",
  "tab-activeBorder": "--vscode-tab-activeBorder",
  "tab-unfocusedActiveBorder": "--vscode-tab-unfocusedActiveBorder",
  "tab-activeBorderTop": "--vscode-tab-activeBorderTop",
  "tab-unfocusedActiveBorderTop": "--vscode-tab-unfocusedActiveBorderTop",
  "tab-selectedBorderTop": "--vscode-tab-selectedBorderTop",
  "tab-selectedBackground": "--vscode-tab-selectedBackground",
  "tab-selectedForeground": "--vscode-tab-selectedForeground",
  "tab-dragAndDropBorder": "--vscode-tab-dragAndDropBorder",
  "tab-activeModifiedBorder": "--vscode-tab-activeModifiedBorder",
  "tab-inactiveModifiedBorder": "--vscode-tab-inactiveModifiedBorder",
  "tab-unfocusedActiveModifiedBorder":
    "--vscode-tab-unfocusedActiveModifiedBorder",
  "tab-unfocusedInactiveModifiedBorder":
    "--vscode-tab-unfocusedInactiveModifiedBorder",
  "editorPane-background": "--vscode-editorPane-background",
  "editorGroupHeader-tabsBackground":
    "--vscode-editorGroupHeader-tabsBackground",
  "editorGroupHeader-tabsBorder": "--vscode-editorGroupHeader-tabsBorder",
  "editorGroupHeader-noTabsBackground":
    "--vscode-editorGroupHeader-noTabsBackground",
  "editorGroup-border": "--vscode-editorGroup-border",
  "editorGroup-dropBackground": "--vscode-editorGroup-dropBackground",
  "editorGroup-dropIntoPromptForeground":
    "--vscode-editorGroup-dropIntoPromptForeground",
  "editorGroup-dropIntoPromptBackground":
    "--vscode-editorGroup-dropIntoPromptBackground",
  "sideBySideEditor-horizontalBorder":
    "--vscode-sideBySideEditor-horizontalBorder",
  "sideBySideEditor-verticalBorder": "--vscode-sideBySideEditor-verticalBorder",
  "panel-background": "--vscode-panel-background",
  "panel-border": "--vscode-panel-border",
  "panelTitle-activeForeground": "--vscode-panelTitle-activeForeground",
  "panelTitle-inactiveForeground": "--vscode-panelTitle-inactiveForeground",
  "panelTitle-activeBorder": "--vscode-panelTitle-activeBorder",
  "panelInput-border": "--vscode-panelInput-border",
  "panel-dropBorder": "--vscode-panel-dropBorder",
  "panelSection-dropBackground": "--vscode-panelSection-dropBackground",
  "panelSectionHeader-background": "--vscode-panelSectionHeader-background",
  "panelSection-border": "--vscode-panelSection-border",
  "panelStickyScroll-background": "--vscode-panelStickyScroll-background",
  "panelStickyScroll-shadow": "--vscode-panelStickyScroll-shadow",
  "banner-background": "--vscode-banner-background",
  "banner-foreground": "--vscode-banner-foreground",
  "banner-iconForeground": "--vscode-banner-iconForeground",
  "statusBar-foreground": "--vscode-statusBar-foreground",
  "statusBar-noFolderForeground": "--vscode-statusBar-noFolderForeground",
  "statusBar-background": "--vscode-statusBar-background",
  "statusBar-noFolderBackground": "--vscode-statusBar-noFolderBackground",
  "statusBar-border": "--vscode-statusBar-border",
  "statusBar-focusBorder": "--vscode-statusBar-focusBorder",
  "statusBar-noFolderBorder": "--vscode-statusBar-noFolderBorder",
  "statusBarItem-activeBackground": "--vscode-statusBarItem-activeBackground",
  "statusBarItem-focusBorder": "--vscode-statusBarItem-focusBorder",
  "statusBarItem-hoverBackground": "--vscode-statusBarItem-hoverBackground",
  "statusBarItem-hoverForeground": "--vscode-statusBarItem-hoverForeground",
  "statusBarItem-compactHoverBackground":
    "--vscode-statusBarItem-compactHoverBackground",
  "statusBarItem-prominentForeground":
    "--vscode-statusBarItem-prominentForeground",
  "statusBarItem-prominentBackground":
    "--vscode-statusBarItem-prominentBackground",
  "statusBarItem-prominentHoverForeground":
    "--vscode-statusBarItem-prominentHoverForeground",
  "statusBarItem-prominentHoverBackground":
    "--vscode-statusBarItem-prominentHoverBackground",
  "statusBarItem-errorBackground": "--vscode-statusBarItem-errorBackground",
  "statusBarItem-errorForeground": "--vscode-statusBarItem-errorForeground",
  "statusBarItem-errorHoverForeground":
    "--vscode-statusBarItem-errorHoverForeground",
  "statusBarItem-errorHoverBackground":
    "--vscode-statusBarItem-errorHoverBackground",
  "statusBarItem-warningBackground": "--vscode-statusBarItem-warningBackground",
  "statusBarItem-warningForeground": "--vscode-statusBarItem-warningForeground",
  "statusBarItem-warningHoverForeground":
    "--vscode-statusBarItem-warningHoverForeground",
  "statusBarItem-warningHoverBackground":
    "--vscode-statusBarItem-warningHoverBackground",
  "activityBar-background": "--vscode-activityBar-background",
  "activityBar-foreground": "--vscode-activityBar-foreground",
  "activityBar-inactiveForeground": "--vscode-activityBar-inactiveForeground",
  "activityBar-border": "--vscode-activityBar-border",
  "activityBar-activeBorder": "--vscode-activityBar-activeBorder",
  "activityBar-dropBorder": "--vscode-activityBar-dropBorder",
  "activityBarBadge-background": "--vscode-activityBarBadge-background",
  "activityBarBadge-foreground": "--vscode-activityBarBadge-foreground",
  "activityBarTop-foreground": "--vscode-activityBarTop-foreground",
  "activityBarTop-activeBorder": "--vscode-activityBarTop-activeBorder",
  "activityBarTop-inactiveForeground":
    "--vscode-activityBarTop-inactiveForeground",
  "activityBarTop-dropBorder": "--vscode-activityBarTop-dropBorder",
  "profileBadge-background": "--vscode-profileBadge-background",
  "profileBadge-foreground": "--vscode-profileBadge-foreground",
  "statusBarItem-remoteBackground": "--vscode-statusBarItem-remoteBackground",
  "statusBarItem-remoteForeground": "--vscode-statusBarItem-remoteForeground",
  "statusBarItem-remoteHoverForeground":
    "--vscode-statusBarItem-remoteHoverForeground",
  "statusBarItem-remoteHoverBackground":
    "--vscode-statusBarItem-remoteHoverBackground",
  "statusBarItem-offlineBackground": "--vscode-statusBarItem-offlineBackground",
  "statusBarItem-offlineForeground": "--vscode-statusBarItem-offlineForeground",
  "statusBarItem-offlineHoverForeground":
    "--vscode-statusBarItem-offlineHoverForeground",
  "statusBarItem-offlineHoverBackground":
    "--vscode-statusBarItem-offlineHoverBackground",
  "extensionBadge-remoteBackground": "--vscode-extensionBadge-remoteBackground",
  "extensionBadge-remoteForeground": "--vscode-extensionBadge-remoteForeground",
  "sideBar-background": "--vscode-sideBar-background",
  "sideBar-foreground": "--vscode-sideBar-foreground",
  "sideBar-border": "--vscode-sideBar-border",
  "sideBarTitle-background": "--vscode-sideBarTitle-background",
  "sideBarTitle-foreground": "--vscode-sideBarTitle-foreground",
  "sideBar-dropBackground": "--vscode-sideBar-dropBackground",
  "sideBarSectionHeader-background": "--vscode-sideBarSectionHeader-background",
  "sideBarSectionHeader-foreground": "--vscode-sideBarSectionHeader-foreground",
  "sideBarSectionHeader-border": "--vscode-sideBarSectionHeader-border",
  "sideBarActivityBarTop-border": "--vscode-sideBarActivityBarTop-border",
  "sideBarStickyScroll-background": "--vscode-sideBarStickyScroll-background",
  "sideBarStickyScroll-shadow": "--vscode-sideBarStickyScroll-shadow",
  "titleBar-activeForeground": "--vscode-titleBar-activeForeground",
  "titleBar-inactiveForeground": "--vscode-titleBar-inactiveForeground",
  "titleBar-activeBackground": "--vscode-titleBar-activeBackground",
  "titleBar-inactiveBackground": "--vscode-titleBar-inactiveBackground",
  "titleBar-border": "--vscode-titleBar-border",
  "menubar-selectionForeground": "--vscode-menubar-selectionForeground",
  "menubar-selectionBackground": "--vscode-menubar-selectionBackground",
  "commandCenter-foreground": "--vscode-commandCenter-foreground",
  "commandCenter-activeForeground": "--vscode-commandCenter-activeForeground",
  "commandCenter-inactiveForeground":
    "--vscode-commandCenter-inactiveForeground",
  "commandCenter-background": "--vscode-commandCenter-background",
  "commandCenter-activeBackground": "--vscode-commandCenter-activeBackground",
  "commandCenter-border": "--vscode-commandCenter-border",
  "commandCenter-activeBorder": "--vscode-commandCenter-activeBorder",
  "commandCenter-inactiveBorder": "--vscode-commandCenter-inactiveBorder",
  "notificationCenter-border": "--vscode-notificationCenter-border",
  "notificationToast-border": "--vscode-notificationToast-border",
  "notifications-foreground": "--vscode-notifications-foreground",
  "notifications-background": "--vscode-notifications-background",
  "notificationLink-foreground": "--vscode-notificationLink-foreground",
  "notificationCenterHeader-foreground":
    "--vscode-notificationCenterHeader-foreground",
  "notificationCenterHeader-background":
    "--vscode-notificationCenterHeader-background",
  "notifications-border": "--vscode-notifications-border",
  "notificationsErrorIcon-foreground":
    "--vscode-notificationsErrorIcon-foreground",
  "notificationsWarningIcon-foreground":
    "--vscode-notificationsWarningIcon-foreground",
  "notificationsInfoIcon-foreground":
    "--vscode-notificationsInfoIcon-foreground",
  "chat-requestBorder": "--vscode-chat-requestBorder",
  "chat-requestBackground": "--vscode-chat-requestBackground",
  "chat-slashCommandBackground": "--vscode-chat-slashCommandBackground",
  "chat-slashCommandForeground": "--vscode-chat-slashCommandForeground",
  "chat-avatarBackground": "--vscode-chat-avatarBackground",
  "chat-avatarForeground": "--vscode-chat-avatarForeground",
  "simpleFindWidget-sashBorder": "--vscode-simpleFindWidget-sashBorder",
  "commentsView-resolvedIcon": "--vscode-commentsView-resolvedIcon",
  "commentsView-unresolvedIcon": "--vscode-commentsView-unresolvedIcon",
  "editorCommentsWidget-replyInputBackground":
    "--vscode-editorCommentsWidget-replyInputBackground",
  "editorCommentsWidget-resolvedBorder":
    "--vscode-editorCommentsWidget-resolvedBorder",
  "editorCommentsWidget-unresolvedBorder":
    "--vscode-editorCommentsWidget-unresolvedBorder",
  "editorCommentsWidget-rangeBackground":
    "--vscode-editorCommentsWidget-rangeBackground",
  "editorCommentsWidget-rangeActiveBackground":
    "--vscode-editorCommentsWidget-rangeActiveBackground",
  "editorGutter-commentRangeForeground":
    "--vscode-editorGutter-commentRangeForeground",
  "editorOverviewRuler-commentForeground":
    "--vscode-editorOverviewRuler-commentForeground",
  "editorOverviewRuler-commentUnresolvedForeground":
    "--vscode-editorOverviewRuler-commentUnresolvedForeground",
  "editorGutter-commentGlyphForeground":
    "--vscode-editorGutter-commentGlyphForeground",
  "editorGutter-commentUnresolvedGlyphForeground":
    "--vscode-editorGutter-commentUnresolvedGlyphForeground",
  "debugToolBar-background": "--vscode-debugToolBar-background",
  "debugIcon-startForeground": "--vscode-debugIcon-startForeground",
  "editor-stackFrameHighlightBackground":
    "--vscode-editor-stackFrameHighlightBackground",
  "editor-focusedStackFrameHighlightBackground":
    "--vscode-editor-focusedStackFrameHighlightBackground",
  "mergeEditor-change-background": "--vscode-mergeEditor-change-background",
  "mergeEditor-change-word-background":
    "--vscode-mergeEditor-change-word-background",
  "mergeEditor-changeBase-background":
    "--vscode-mergeEditor-changeBase-background",
  "mergeEditor-changeBase-word-background":
    "--vscode-mergeEditor-changeBase-word-background",
  "mergeEditor-conflict-unhandledUnfocused-border":
    "--vscode-mergeEditor-conflict-unhandledUnfocused-border",
  "mergeEditor-conflict-unhandledFocused-border":
    "--vscode-mergeEditor-conflict-unhandledFocused-border",
  "mergeEditor-conflict-handledUnfocused-border":
    "--vscode-mergeEditor-conflict-handledUnfocused-border",
  "mergeEditor-conflict-handledFocused-border":
    "--vscode-mergeEditor-conflict-handledFocused-border",
  "mergeEditor-conflict-handled-minimapOverViewRuler":
    "--vscode-mergeEditor-conflict-handled-minimapOverViewRuler",
  "mergeEditor-conflict-unhandled-minimapOverViewRuler":
    "--vscode-mergeEditor-conflict-unhandled-minimapOverViewRuler",
  "mergeEditor-conflictingLines-background":
    "--vscode-mergeEditor-conflictingLines-background",
  "mergeEditor-conflict-input1-background":
    "--vscode-mergeEditor-conflict-input1-background",
  "mergeEditor-conflict-input2-background":
    "--vscode-mergeEditor-conflict-input2-background",
  "settings-headerForeground": "--vscode-settings-headerForeground",
  "settings-settingsHeaderHoverForeground":
    "--vscode-settings-settingsHeaderHoverForeground",
  "settings-modifiedItemIndicator": "--vscode-settings-modifiedItemIndicator",
  "settings-headerBorder": "--vscode-settings-headerBorder",
  "settings-sashBorder": "--vscode-settings-sashBorder",
  "settings-dropdownBackground": "--vscode-settings-dropdownBackground",
  "settings-dropdownForeground": "--vscode-settings-dropdownForeground",
  "settings-dropdownBorder": "--vscode-settings-dropdownBorder",
  "settings-dropdownListBorder": "--vscode-settings-dropdownListBorder",
  "settings-checkboxBackground": "--vscode-settings-checkboxBackground",
  "settings-checkboxForeground": "--vscode-settings-checkboxForeground",
  "settings-checkboxBorder": "--vscode-settings-checkboxBorder",
  "settings-textInputBackground": "--vscode-settings-textInputBackground",
  "settings-textInputForeground": "--vscode-settings-textInputForeground",
  "settings-textInputBorder": "--vscode-settings-textInputBorder",
  "settings-numberInputBackground": "--vscode-settings-numberInputBackground",
  "settings-numberInputForeground": "--vscode-settings-numberInputForeground",
  "settings-numberInputBorder": "--vscode-settings-numberInputBorder",
  "settings-focusedRowBackground": "--vscode-settings-focusedRowBackground",
  "settings-rowHoverBackground": "--vscode-settings-rowHoverBackground",
  "settings-focusedRowBorder": "--vscode-settings-focusedRowBorder",
  "terminal-foreground": "--vscode-terminal-foreground",
  "terminal-selectionBackground": "--vscode-terminal-selectionBackground",
  "terminal-inactiveSelectionBackground":
    "--vscode-terminal-inactiveSelectionBackground",
  "terminalCommandDecoration-defaultBackground":
    "--vscode-terminalCommandDecoration-defaultBackground",
  "terminalCommandDecoration-successBackground":
    "--vscode-terminalCommandDecoration-successBackground",
  "terminalCommandDecoration-errorBackground":
    "--vscode-terminalCommandDecoration-errorBackground",
  "terminalOverviewRuler-cursorForeground":
    "--vscode-terminalOverviewRuler-cursorForeground",
  "terminal-border": "--vscode-terminal-border",
  "terminal-findMatchBackground": "--vscode-terminal-findMatchBackground",
  "terminal-hoverHighlightBackground":
    "--vscode-terminal-hoverHighlightBackground",
  "terminal-findMatchHighlightBackground":
    "--vscode-terminal-findMatchHighlightBackground",
  "terminalOverviewRuler-findMatchForeground":
    "--vscode-terminalOverviewRuler-findMatchForeground",
  "terminal-dropBackground": "--vscode-terminal-dropBackground",
  "terminal-tab-activeBorder": "--vscode-terminal-tab-activeBorder",
  "terminalStickyScrollHover-background":
    "--vscode-terminalStickyScrollHover-background",
  "testing-iconFailed": "--vscode-testing-iconFailed",
  "testing-iconErrored": "--vscode-testing-iconErrored",
  "testing-iconPassed": "--vscode-testing-iconPassed",
  "testing-runAction": "--vscode-testing-runAction",
  "testing-iconQueued": "--vscode-testing-iconQueued",
  "testing-iconUnset": "--vscode-testing-iconUnset",
  "testing-iconSkipped": "--vscode-testing-iconSkipped",
  "testing-peekBorder": "--vscode-testing-peekBorder",
  "testing-messagePeekBorder": "--vscode-testing-messagePeekBorder",
  "testing-peekHeaderBackground": "--vscode-testing-peekHeaderBackground",
  "testing-messagePeekHeaderBackground":
    "--vscode-testing-messagePeekHeaderBackground",
  "testing-coveredBackground": "--vscode-testing-coveredBackground",
  "testing-coveredBorder": "--vscode-testing-coveredBorder",
  "testing-coveredGutterBackground": "--vscode-testing-coveredGutterBackground",
  "testing-uncoveredBranchBackground":
    "--vscode-testing-uncoveredBranchBackground",
  "testing-uncoveredBackground": "--vscode-testing-uncoveredBackground",
  "testing-uncoveredBorder": "--vscode-testing-uncoveredBorder",
  "testing-uncoveredGutterBackground":
    "--vscode-testing-uncoveredGutterBackground",
  "testing-coverCountBadgeBackground":
    "--vscode-testing-coverCountBadgeBackground",
  "testing-coverCountBadgeForeground":
    "--vscode-testing-coverCountBadgeForeground",
  "testing-message-error-decorationForeground":
    "--vscode-testing-message-error-decorationForeground",
  "testing-message-error-lineBackground":
    "--vscode-testing-message-error-lineBackground",
  "testing-message-info-decorationForeground":
    "--vscode-testing-message-info-decorationForeground",
  "testing-iconErrored-retired": "--vscode-testing-iconErrored-retired",
  "testing-iconFailed-retired": "--vscode-testing-iconFailed-retired",
  "testing-iconPassed-retired": "--vscode-testing-iconPassed-retired",
  "testing-iconQueued-retired": "--vscode-testing-iconQueued-retired",
  "testing-iconUnset-retired": "--vscode-testing-iconUnset-retired",
  "testing-iconSkipped-retired": "--vscode-testing-iconSkipped-retired",
  "welcomePage-tileBackground": "--vscode-welcomePage-tileBackground",
  "welcomePage-tileHoverBackground": "--vscode-welcomePage-tileHoverBackground",
  "welcomePage-tileBorder": "--vscode-welcomePage-tileBorder",
  "welcomePage-progress-background": "--vscode-welcomePage-progress-background",
  "welcomePage-progress-foreground": "--vscode-welcomePage-progress-foreground",
  "walkthrough-stepTitle-foreground":
    "--vscode-walkthrough-stepTitle-foreground",
  "walkThrough-embeddedEditorBackground":
    "--vscode-walkThrough-embeddedEditorBackground",
  "inlineChat-background": "--vscode-inlineChat-background",
  "inlineChat-border": "--vscode-inlineChat-border",
  "inlineChat-shadow": "--vscode-inlineChat-shadow",
  "inlineChat-regionHighlight": "--vscode-inlineChat-regionHighlight",
  "inlineChatInput-border": "--vscode-inlineChatInput-border",
  "inlineChatInput-focusBorder": "--vscode-inlineChatInput-focusBorder",
  "inlineChatInput-placeholderForeground":
    "--vscode-inlineChatInput-placeholderForeground",
  "inlineChatInput-background": "--vscode-inlineChatInput-background",
  "inlineChatDiff-inserted": "--vscode-inlineChatDiff-inserted",
  "editorOverviewRuler-inlineChatInserted":
    "--vscode-editorOverviewRuler-inlineChatInserted",
  "inlineChatDiff-removed": "--vscode-inlineChatDiff-removed",
  "editorOverviewRuler-inlineChatRemoved":
    "--vscode-editorOverviewRuler-inlineChatRemoved",
  "debugExceptionWidget-border": "--vscode-debugExceptionWidget-border",
  "debugExceptionWidget-background": "--vscode-debugExceptionWidget-background",
  "statusBar-debuggingBackground": "--vscode-statusBar-debuggingBackground",
  "statusBar-debuggingForeground": "--vscode-statusBar-debuggingForeground",
  "statusBar-debuggingBorder": "--vscode-statusBar-debuggingBorder",
  "commandCenter-debuggingBackground":
    "--vscode-commandCenter-debuggingBackground",
  "editorGutter-modifiedBackground": "--vscode-editorGutter-modifiedBackground",
  "editorGutter-addedBackground": "--vscode-editorGutter-addedBackground",
  "editorGutter-deletedBackground": "--vscode-editorGutter-deletedBackground",
  "minimapGutter-modifiedBackground":
    "--vscode-minimapGutter-modifiedBackground",
  "minimapGutter-addedBackground": "--vscode-minimapGutter-addedBackground",
  "minimapGutter-deletedBackground": "--vscode-minimapGutter-deletedBackground",
  "editorOverviewRuler-modifiedForeground":
    "--vscode-editorOverviewRuler-modifiedForeground",
  "editorOverviewRuler-addedForeground":
    "--vscode-editorOverviewRuler-addedForeground",
  "editorOverviewRuler-deletedForeground":
    "--vscode-editorOverviewRuler-deletedForeground",
  "keybindingTable-headerBackground":
    "--vscode-keybindingTable-headerBackground",
  "keybindingTable-rowsBackground": "--vscode-keybindingTable-rowsBackground",
  "debugIcon-breakpointForeground": "--vscode-debugIcon-breakpointForeground",
  "debugIcon-breakpointDisabledForeground":
    "--vscode-debugIcon-breakpointDisabledForeground",
  "debugIcon-breakpointUnverifiedForeground":
    "--vscode-debugIcon-breakpointUnverifiedForeground",
  "debugIcon-breakpointCurrentStackframeForeground":
    "--vscode-debugIcon-breakpointCurrentStackframeForeground",
  "debugIcon-breakpointStackframeForeground":
    "--vscode-debugIcon-breakpointStackframeForeground",
  "editor-inlineValuesForeground": "--vscode-editor-inlineValuesForeground",
  "editor-inlineValuesBackground": "--vscode-editor-inlineValuesBackground",
  "ports-iconRunningProcessForeground":
    "--vscode-ports-iconRunningProcessForeground",
  "profiles-sashBorder": "--vscode-profiles-sashBorder",
  "debugTokenExpression-name": "--vscode-debugTokenExpression-name",
  "debugTokenExpression-value": "--vscode-debugTokenExpression-value",
  "debugTokenExpression-string": "--vscode-debugTokenExpression-string",
  "debugTokenExpression-boolean": "--vscode-debugTokenExpression-boolean",
  "debugTokenExpression-number": "--vscode-debugTokenExpression-number",
  "debugTokenExpression-error": "--vscode-debugTokenExpression-error",
  "debugView-exceptionLabelForeground":
    "--vscode-debugView-exceptionLabelForeground",
  "debugView-exceptionLabelBackground":
    "--vscode-debugView-exceptionLabelBackground",
  "debugView-stateLabelForeground": "--vscode-debugView-stateLabelForeground",
  "debugView-stateLabelBackground": "--vscode-debugView-stateLabelBackground",
  "debugView-valueChangedHighlight": "--vscode-debugView-valueChangedHighlight",
  "debugConsole-infoForeground": "--vscode-debugConsole-infoForeground",
  "debugConsole-warningForeground": "--vscode-debugConsole-warningForeground",
  "debugConsole-errorForeground": "--vscode-debugConsole-errorForeground",
  "debugConsole-sourceForeground": "--vscode-debugConsole-sourceForeground",
  "debugConsoleInputIcon-foreground":
    "--vscode-debugConsoleInputIcon-foreground",
  "debugIcon-pauseForeground": "--vscode-debugIcon-pauseForeground",
  "debugIcon-stopForeground": "--vscode-debugIcon-stopForeground",
  "debugIcon-disconnectForeground": "--vscode-debugIcon-disconnectForeground",
  "debugIcon-restartForeground": "--vscode-debugIcon-restartForeground",
  "debugIcon-stepOverForeground": "--vscode-debugIcon-stepOverForeground",
  "debugIcon-stepIntoForeground": "--vscode-debugIcon-stepIntoForeground",
  "debugIcon-stepOutForeground": "--vscode-debugIcon-stepOutForeground",
  "debugIcon-continueForeground": "--vscode-debugIcon-continueForeground",
  "debugIcon-stepBackForeground": "--vscode-debugIcon-stepBackForeground",
  "scm-historyItemAdditionsForeground":
    "--vscode-scm-historyItemAdditionsForeground",
  "scm-historyItemDeletionsForeground":
    "--vscode-scm-historyItemDeletionsForeground",
  "scm-historyItemStatisticsBorder": "--vscode-scm-historyItemStatisticsBorder",
  "scm-historyItemSelectedStatisticsBorder":
    "--vscode-scm-historyItemSelectedStatisticsBorder",
  "extensionButton-background": "--vscode-extensionButton-background",
  "extensionButton-foreground": "--vscode-extensionButton-foreground",
  "extensionButton-hoverBackground": "--vscode-extensionButton-hoverBackground",
  "extensionButton-separator": "--vscode-extensionButton-separator",
  "extensionButton-prominentBackground":
    "--vscode-extensionButton-prominentBackground",
  "extensionButton-prominentForeground":
    "--vscode-extensionButton-prominentForeground",
  "extensionButton-prominentHoverBackground":
    "--vscode-extensionButton-prominentHoverBackground",
  "extensionIcon-starForeground": "--vscode-extensionIcon-starForeground",
  "extensionIcon-verifiedForeground":
    "--vscode-extensionIcon-verifiedForeground",
  "extensionIcon-preReleaseForeground":
    "--vscode-extensionIcon-preReleaseForeground",
  "extensionIcon-sponsorForeground": "--vscode-extensionIcon-sponsorForeground",
  "notebook-cellBorderColor": "--vscode-notebook-cellBorderColor",
  "notebook-focusedEditorBorder": "--vscode-notebook-focusedEditorBorder",
  "notebookStatusSuccessIcon-foreground":
    "--vscode-notebookStatusSuccessIcon-foreground",
  "notebookEditorOverviewRuler-runningCellForeground":
    "--vscode-notebookEditorOverviewRuler-runningCellForeground",
  "notebookStatusErrorIcon-foreground":
    "--vscode-notebookStatusErrorIcon-foreground",
  "notebookStatusRunningIcon-foreground":
    "--vscode-notebookStatusRunningIcon-foreground",
  "notebook-cellToolbarSeparator": "--vscode-notebook-cellToolbarSeparator",
  "notebook-selectedCellBackground": "--vscode-notebook-selectedCellBackground",
  "notebook-selectedCellBorder": "--vscode-notebook-selectedCellBorder",
  "notebook-focusedCellBorder": "--vscode-notebook-focusedCellBorder",
  "notebook-inactiveFocusedCellBorder":
    "--vscode-notebook-inactiveFocusedCellBorder",
  "notebook-cellStatusBarItemHoverBackground":
    "--vscode-notebook-cellStatusBarItemHoverBackground",
  "notebook-cellInsertionIndicator": "--vscode-notebook-cellInsertionIndicator",
  "notebookScrollbarSlider-background":
    "--vscode-notebookScrollbarSlider-background",
  "notebookScrollbarSlider-hoverBackground":
    "--vscode-notebookScrollbarSlider-hoverBackground",
  "notebookScrollbarSlider-activeBackground":
    "--vscode-notebookScrollbarSlider-activeBackground",
  "notebook-symbolHighlightBackground":
    "--vscode-notebook-symbolHighlightBackground",
  "notebook-cellEditorBackground": "--vscode-notebook-cellEditorBackground",
  "notebook-editorBackground": "--vscode-notebook-editorBackground",
  "interactive-activeCodeBorder": "--vscode-interactive-activeCodeBorder",
  "interactive-inactiveCodeBorder": "--vscode-interactive-inactiveCodeBorder",
  "searchEditor-textInputBorder": "--vscode-searchEditor-textInputBorder",
  "terminal-ansiBlack": "--vscode-terminal-ansiBlack",
  "terminal-ansiRed": "--vscode-terminal-ansiRed",
  "terminal-ansiGreen": "--vscode-terminal-ansiGreen",
  "terminal-ansiYellow": "--vscode-terminal-ansiYellow",
  "terminal-ansiBlue": "--vscode-terminal-ansiBlue",
  "terminal-ansiMagenta": "--vscode-terminal-ansiMagenta",
  "terminal-ansiCyan": "--vscode-terminal-ansiCyan",
  "terminal-ansiWhite": "--vscode-terminal-ansiWhite",
  "terminal-ansiBrightBlack": "--vscode-terminal-ansiBrightBlack",
  "terminal-ansiBrightRed": "--vscode-terminal-ansiBrightRed",
  "terminal-ansiBrightGreen": "--vscode-terminal-ansiBrightGreen",
  "terminal-ansiBrightYellow": "--vscode-terminal-ansiBrightYellow",
  "terminal-ansiBrightBlue": "--vscode-terminal-ansiBrightBlue",
  "terminal-ansiBrightMagenta": "--vscode-terminal-ansiBrightMagenta",
  "terminal-ansiBrightCyan": "--vscode-terminal-ansiBrightCyan",
  "terminal-ansiBrightWhite": "--vscode-terminal-ansiBrightWhite",
  "gitDecoration-addedResourceForeground":
    "--vscode-gitDecoration-addedResourceForeground",
  "gitDecoration-modifiedResourceForeground":
    "--vscode-gitDecoration-modifiedResourceForeground",
  "gitDecoration-deletedResourceForeground":
    "--vscode-gitDecoration-deletedResourceForeground",
  "gitDecoration-renamedResourceForeground":
    "--vscode-gitDecoration-renamedResourceForeground",
  "gitDecoration-untrackedResourceForeground":
    "--vscode-gitDecoration-untrackedResourceForeground",
  "gitDecoration-ignoredResourceForeground":
    "--vscode-gitDecoration-ignoredResourceForeground",
  "gitDecoration-stageModifiedResourceForeground":
    "--vscode-gitDecoration-stageModifiedResourceForeground",
  "gitDecoration-stageDeletedResourceForeground":
    "--vscode-gitDecoration-stageDeletedResourceForeground",
  "gitDecoration-conflictingResourceForeground":
    "--vscode-gitDecoration-conflictingResourceForeground",
  "gitDecoration-submoduleResourceForeground":
    "--vscode-gitDecoration-submoduleResourceForeground",
};

/**
 * Check if a given string satisfies the criteria to be a CSS variable name.
 *
 * This is NOT compliant with the CSS specifications for custom properties,
 * so DO NOT use this in uncontrolled environments.
 */
export function isCSSVariable(str: string): boolean {
  if (typeof str !== "string") return false;
  if (str.includes(" ")) return false;
  return str.startsWith("--");
}

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
export function createCSSVariable(
  variableName: string,
  ...fallbacks: string[]
): string {
  if (fallbacks === undefined || fallbacks.length === 0)
    return `var(${variableName})`;

  let firstConstantIdx = -1;
  for (let i = 0; i < fallbacks.length; ++i) {
    if (!isCSSVariable(fallbacks[i])) {
      firstConstantIdx = i;
      break;
    }
  }

  let endOfValidFallbacks: number;
  let fallbackString: string;
  if (firstConstantIdx === -1) {
    // Use the last element (a CSS variable)
    endOfValidFallbacks = fallbacks.length - 1;
    fallbackString = `var(${fallbacks[endOfValidFallbacks]})`;
  } else {
    // Use the first constant
    endOfValidFallbacks = firstConstantIdx;
    fallbackString = "" + fallbacks[endOfValidFallbacks];
  }

  for (let i = endOfValidFallbacks - 1; i >= 0; --i) {
    // Every element we encounter will be a valid CSS variable name
    const name = fallbacks[i];
    fallbackString = `var(${name}, ${fallbackString})`;
  }

  return `var(${variableName}, ${fallbackString})`;
}
