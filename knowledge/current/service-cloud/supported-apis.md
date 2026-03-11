---
title: "Supported
        APIs"
domain: service-cloud
topic: supported-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.412Z
keywords: [Supported, APIs, Note]
---

# Supported
        APIs

# Supported APIs

A list of methods and events that support utility pop-out.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Custom events aren’t supported while a utility is popped out. If custom events are critical to your utility’s functionality, we recommend disabling pop-out for your utility.

Lightning Web Components (LWC) doesn’t currently support working with background utility items.

**Lightning Console JavaScript API Methods for Navigation Items**

| Methods | Supports Pop-Out | Notes |
| --- | --- | --- |
| focusNavigationItem() for Lightning Experience for Lightning Experience |  |  |
| getNavigationItems() for Lightning Experience for Lightning Experience |  |  |
| getSelectedNavigationItem() for Lightning Experience for Lightning Experience |  |  |
| refreshNavigationItem() for Lightning Experience for Lightning Experience |  |  |
| setSelectedNavigationItem() for Lightning Experience for Lightning Experience |  |  |

**Lightning Console JavaScript API Methods for Workspace Tabs and Subtabs**

| Methods | Supports Pop-Out | Notes |
| --- | --- | --- |
| closeTab() for Lightning Experience for Lightning Experience |  |  |
| disableTabClose() for Lightning Experience for Lightning Experience |  |  |
| focusTab() for Lightning Experience for Lightning Experience |  |  |
| generateConsoleUrl() for Lightning Experience for Lightning Experience |  |  |
| getAllTabInfo() for Lightning Experience for Lightning Experience |  |  |
| getEnclosingTabId() for Lightning Experience |  |  |
| getFocusedTabInfo() for Lightning Experience |  |  |
| getTabInfo() for Lightning Experience for Lightning Experience |  |  |
| getTabURL() for Lightning Experience for Lightning Experience |  |  |
| isConsoleNavigation() for Lightning Experience for Lightning Experience |  |  |
| isSubtab() for Lightning Experience for Lightning Experience |  |  |
| openConsoleUrl() for Lightning Experience for Lightning Experience |  |  |
| openSubtab() for Lightning Experience for Lightning Experience |  |  |
| openTab() for Lightning Experience for Lightning Experience |  |  |
| refreshTab() for Lightning Experience for Lightning Experience |  |  |
| setTabHighlighted() for Lightning Experience for Lightning Experience |  |  |
| setTabIcon() for Lightning Experience for Lightning Experience |  |  |
| setTabLabel() for Lightning Experience for Lightning Experience |  |  |

**Lightning Console JavaScript API Methods for the Utility Bar**

| Methods | Supports Pop-Out | Notes |
| --- | --- | --- |
| getAllUtilityInfo() for Lightning Experience for Lightning Experience |  |  |
| getEnclosingUtilityId() for Lightning Experience for Lightning Experience |  |  |
| getUtilityInfo() for Lightning Experience for Lightning Experience |  |  |
| minimizeUtility() for Lightning Experience for Lightning Experience |  | Returns false when popped out |
| onUtilityClick() for Lightning Experience for Lightning Experience |  |  |
| openUtility() for Lightning Experience for Lightning Experience |  |  |
| setPanelHeaderIcon() for Lightning Experience for Lightning Experience |  |  |
| setPanelHeaderLabel() for Lightning Experience for Lightning Experience |  |  |
| setPanelHeight() for Lightning Experience for Lightning Experience |  |  |
| setPanelWidth() for Lightning Experience for Lightning Experience |  |  |
| setUtilityHighlighted() for Lightning Experience for Lightning Experience |  |  |
| setUtilityIcon() for Lightning Experience for Lightning Experience |  |  |
| setUtilityLabel() for Lightning Experience for Lightning Experience |  |  |
| toggleModalMode() for Lightning Experience for Lightning Experience |  |  |

**Lightning Console JavaScript API Events**

| Events | Supports Pop-Out | Notes |
| --- | --- | --- |
| lightning:tabClosed |  |  |
| lightning:tabCreated |  |  |
| lightning:tabFocused |  |  |
| lightning:tabRefreshed |  |  |
| lightning:tabReplaced |  |  |
| lightning:tabUpdated |  |  |

**Salesforce Classic Console API Methods for Primary Tabs and Subtabs**

| Methods | Supports Pop-Out | Notes |
| --- | --- | --- |
| isInConsole() |  |  |

**Salesforce Classic Console API Events**

| Events | Supports Pop-Out | Notes |
| --- | --- | --- |
| removeEventListener() |  |  |
| fireEvent() |  | fireEvent() returns success true even when eventListeners for the given eventType are removed. |
| addEventListener() |  |  |