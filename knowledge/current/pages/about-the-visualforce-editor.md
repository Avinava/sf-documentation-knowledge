---
title: "About the Visualforce Editor"
domain: pages
topic: about-the-visualforce-editor
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.258Z
estimatedTokens: 798
keywords: [Visualforce, Editor, editing, pages, development, mode, footer, Setup, functionality]
---

# About the Visualforce Editor

> When editing Visualforce pages through the development mode footer or from Setup, an editor is
   available with the following functionality:

# About the Visualforce Editor

When editing Visualforce pages through the development mode footer or from Setup, an editor is available with the following functionality:

Syntax highlighting

The editor automatically applies syntax highlighting for keywords and all functions and operators.

Search (![Search icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fsearch_apex.gif&folder=pages))

Search enables you to search for text within the current page, class, or trigger. To use search, enter a string in the Search textbox and click **Find Next**.

-   To replace a found search string with another string, enter the new string in the Replace textbox and click **replace** to replace just that instance, or **Replace All** to replace that instance and all other instances of the search string that occur in the page, class, or trigger.
-   To make the search operation case sensitive, select the **Match Case** option.
-   To use a regular expression as your search string, select the **Regular Expressions** option. The regular expressions follow JavaScript's regular expression rules. A search using regular expressions can find strings that wrap over more than one line.

    If you use the replace operation with a string found by a regular expression, the replace operation can also bind regular expression group variables ($1, $2, and so on) from the found search string. For example, to replace an <h1\> tag with an <h2\> tag and keep all the attributes on the original <h1\> intact, search for <h1(\\s+)(.\*)\> and replace it with <h2$1$2\>.


Go to line (![Go To Line icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fgo_to_line.gif&folder=pages))

This button allows you to highlight a specified line number. If the line is not currently visible, the editor scrolls to that line.

Undo (![Undo icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fundo.gif&folder=pages)) and Redo (![Redo icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fredo.gif&folder=pages))

Use undo to reverse an editing action and redo to recreate an editing action that was undone.

Font size

Select a font size from the drop-down list to control the size of the characters displayed in the editor.

Line and column position

The line and column position of the cursor is displayed in the status bar at the bottom of the editor. This can be used with go to line (![Go To Line icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fimages%2Fgo_to_line.gif&folder=pages)) to quickly navigate through the editor.

Line and character count

The total number of lines and characters is displayed in the status bar at the bottom of the editor.

The editor supports the following keyboard shortcuts:

Tab

Adds a tab at the cursor

SHIFT+Tab

Removes a tab

CTRL+f

Opens the search dialog or searches for the next occurrence of the current search

CTRL+r

Opens the search dialog or replaces the next occurrence of the current search with the specified replacement string

CTRL+g

Opens the go to line dialog

CTRL+s

Performs a quick save.

CTRL+z

Reverses the last editing action

CTRL+y

Recreates the last editing action that was undone
