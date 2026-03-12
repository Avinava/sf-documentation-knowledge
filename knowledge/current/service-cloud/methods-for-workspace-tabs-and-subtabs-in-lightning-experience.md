---
title: "Methods for Workspace Tabs and Subtabs in Lightning Experience"
domain: service-cloud
topic: methods-for-workspace-tabs-and-subtabs-in-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.145Z
estimatedTokens: 1844
keywords: [Workspace, Tabs, Subtabs, Lightning, Experience, console, app, displays, Salesforce, pages, workspace, tabs, subtabs., tab, main, work, item, record, such, account.]
---

# Methods for Workspace Tabs and Subtabs in Lightning Experience

> A Lightning console app
        displays Salesforce pages as workspace
        tabs or subtabs. A workspace tab displays the main work item or record, such as an account.
        A subtab displays related records, such as an account’s contacts or
        opportunities.

# Methods for Workspace Tabs and Subtabs in Lightning Experience

A Lightning console app displays Salesforce pages as workspace tabs or subtabs. A workspace tab displays the main work item or record, such as an account. A subtab displays related records, such as an account’s contacts or opportunities.

These methods work with workspace tabs and subtabs in Lightning console apps. Both Lightning Web Components (LWC) and Aura Components are supported unless otherwise specified.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Keep in mind that tabIds are case sensitive.

-   **[addToBrowserTitleQueue() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_addToBrowserTitleQueue.htm)**
    Adds a string to a list of titles that rotate in the browser title bar every three seconds.This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).
-   **[closeTab() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_closeTab.htm)**
    Closes a workspace tab or subtab. This method works only in Lightning console apps.
-   **[disableTabClose() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableTabClose.htm)**
    Prevents a workspace tab or subtab from closing. This method removes the close button from a tab or subtab, and disables the keyboard shortcuts that close tabs and subtabs. This method works only in Lightning console apps.
-   **[focusTab() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_focusTab.htm)**
    Focuses a workspace tab or subtab. This method works only in Lightning console apps.
-   **[generateConsoleUrl() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_generateConsoleURL.htm)**
    Generates a URL for a workspace tab and its subtabs. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).
-   **[getAllTabInfo() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllTabInfo.htm)**
    Returns information about all open tabs. This method works only in Lightning console apps.
-   **[getEnclosingTabId() for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingTabId.htm)**
    Returns the ID of the enclosing tab. This method isn’t supported for Lightning Web Components (LWC).
-   **[getFocusedTabInfo() for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm)**
    Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps.
-   **[getTabInfo() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm)**
    Returns information about the specified tab. This method works only in Lightning console apps.
-   **[getTabURL() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabURL.htm)**
    Returns the URL of the specified tab. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).
-   **[isConsoleNavigation() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_isConsoleNavigation.htm)**
    Determines whether the app it’s used within uses console navigation. This method isn’t supported for Lightning Web Components (LWC).
-   **[isSubtab() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_isSubtab.htm)**
    Checks whether a tab is a subtab. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).
-   **[openConsoleUrl() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openConsoleURL.htm)**
    Opens a URL generated by generateConsoleUrl(). This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).
-   **[openSubtab() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openSubtab.htm)**
    Opens a subtab within a workspace tab. If the subtab is already open, the subtab is focused. This method works only in Lightning console apps.
-   **[openTab() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_opentab.htm)**
    Opens a new workspace tab. If the tab is already open, the tab is focused.
-   **[refreshTab() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_refreshTab.htm)**
    Refreshes a workspace tab or a subtab specified by tabId. Keep in mind that the first subtab has the same tabId as the workspace tab. This method works only in Lightning console apps.
-   **[removeFromBrowserTitleQueue() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_removeFromBrowserTitleQueue.htm)**
    Removes a string from a list of titles that rotate in the browser title bar every three seconds. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).
-   **[setTabHighlighted() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setTabHighlighted.htm)**
    Highlights the specified tab with a different background color and a badge. Tab highlights don’t persist after reloading a Lightning console app. This method works only in Lightning console apps.
-   **[setTabIcon() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setTabIcon.htm)**
    Sets the icon and alternative text of the specified tab. This method works only in Lightning console apps.
-   **[setTabLabel() for Lightning Experience for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setTabLabel.htm)**
    Sets the label of the specified tab. This method works only in Lightning console apps.
-   **[EnclosingTabId Context Wire Adapter for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingTabId.htm)**
    Returns the ID of the enclosing tab or subtab. This wire adapter is available for Lightning Web Components (LWC) only.
-   **[IsConsoleNavigation Context Wire Adapter for Lightning Experience Context Wire Adapter for Lightning Experience](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_isConsoleNavigation.htm)**
    Determines whether the app it’s used within uses console navigation. This wire adapter is available for Lightning Web Components (LWC) only.

## Related Topics

- addToBrowserTitleQueue() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_addToBrowserTitleQueue.htm)
- closeTab() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_closeTab.htm)
- disableTabClose() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_disableTabClose.htm)
- focusTab() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_focusTab.htm)
- generateConsoleUrl() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_generateConsoleURL.htm)
- getAllTabInfo() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllTabInfo.htm)
- getEnclosingTabId() for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingTabId.htm)
- getFocusedTabInfo() for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm)
- getTabInfo() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm)
- getTabURL() for Lightning Experience for Lightning Experience (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabURL.htm)
