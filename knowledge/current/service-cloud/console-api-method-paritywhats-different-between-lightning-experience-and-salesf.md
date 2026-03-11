---
title: "Console API Method Parity—What’s Different Between Lightning
            Experience and Salesforce Classic?"
domain: service-cloud
topic: console-api-method-paritywhats-different-between-lightning-experience-and-salesf
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.109Z
keywords: [Console, API, Method, Parity—What’s, Different, Between, Lightning, Experience, Salesforce, Classic?, Important, Methods, Primary, Tabs, Subtabs, Navigation, Note, Application-Level, Custom, Components]
---

# Console API Method Parity—What’s Different Between Lightning
            Experience and Salesforce Classic?

# Console API Method Parity—What’s Different Between Lightning Experience and Salesforce Classic?

The Lightning Console JavaScript API provides methods similar to those methods in the Salesforce Console Integration Toolkit.

This table shows which Salesforce Console Integration Toolkit (Salesforce Classic) methods map to Lightning Console JavaScript API (Lightning Experience) methods and events. Not every Salesforce Console Integration Toolkit has a Lightning analog. You can replicate some Classic methods using Lightning events, combining Lightning Experience methods, or using iterative and conditional logic with methods and events.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

Only Salesforce Console Integration Toolkit methods with a Lightning Console JavaScript API or workaround appear in this table. Methods without alternatives or workarounds are not listed.

For Lightning Experience, you can build your apps using Lightning Web Components (LWC) and Aura components. Both can interoperate on the same page.

## Methods for Primary Tabs and Subtabs

| Salesforce Console Integration Toolkit (Salesforce Classic) | Lightning Console JavaScript API Method (Aura Components for Lightning Experience) | LWC Support |
| --- | --- | --- |
| closeTab() | closeTab() | Same as Aura Components. |
| focusPrimaryTabById() | focusTab() | Same as Aura Components. |
| focusSubtabById() | focusTab() | Same as Aura Components. |
| getEnclosingPrimaryTabId() | Use the Lightning method getEnclosingTabId(). If the calling component is within a subtab, then the subtab ID is returned. If the calling component is within a workspace tab, then the workspace ID is returned. | Use the EnclosingTabId wire adapter. |
| getEnclosingPrimaryTabObjectId() | Use getEnclosingTabId() to get the tab ID. Then, use the tab ID to call getTabInfo(tabId), which includes the object ID in the response payload (if applicable). | Use the EnclosingTabId wire adapter. |
| getEnclosingTabId() | Use the Lightning method getEnclosingTabId(). If the calling component is within a subtab, then the subtab ID is returned. If the calling component is within a workspace tab, then the workspace ID is returned. | Use the EnclosingTabId wire adapter. |
| getFocusedPrimaryTabId() | getFocusedTabInfo() | Same as Aura Components. |
| getFocusedPrimaryTabObjectId() | getFocusedTabInfo() | Same as Aura Components. |
| getFocusedSubtabId() | getFocusedTabInfo() | Same as Aura Components. |
| getPageInfo() | getTabInfo() | Same as Aura Components. |
| getPrimaryTabIds() | Not supported.Workaround: Call getAllTabInfo(). | Same as Aura Components. |
| getSubtabIds() | Not supported.Workaround: Call getAllTabInfo() to get a list of all workspace tab objects. Iterate through each workspace tab object, collecting subtab IDs where applicable | Same as Aura Components. |
| getTabLink() | getTabURL() | Use getTabInfo(). |
| onEnclosingTabRefresh() | Use lightning:tabRefreshed with getEnclosingTabId(). | Use the lightning__tabRefreshed Lightning message channel. |
| onFocusedPrimaryTab() | lightning:tabFocused | Use the lightning__tabFocused Lightning message channel. |
| onFocusedSubtab() | lightning:tabFocused | Use the lightning__tabFocused Lightning message channel. |
| onTabSave() | Not supported. | Not supported. |
| openConsoleUrl() | openConsoleUrl() | Not supported. |
| openPrimaryTab() | openTab() | Same as Aura Components. |
| openSubtab() | openSubtab() | Same as Aura Components. |
| refreshPrimaryTabById() | Use refreshTab() and specify a workspace tab ID.The activate argument isn’t supported in the Lightning API. Use refreshTab() with focusTab(). instead. | Same as Aura Components. |
| refreshSubtabById() | Use refreshTab() and specify a subtab ID.The activate argument isn’t supported in the Lightning API. Use refreshTab() with focusTab(). instead. | Same as Aura Components. |
| setTabIcon() | setTabIcon() | Same as Aura Components. |
| setTabTitle() | setTabLabel() | Same as Aura Components. |
| setTabUnsavedChanges() | Use the lightning:unsavedChanges component. | Not supported. |

## Methods for Navigation Tabs

The force:navigateToObjectHome Lightning event allows you to complete actions for many navigation tab methods in Salesforce Classic.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with navigation tabs.

| Salesforce Console Integration Toolkit (Salesforce Classic) | Lightning Console JavaScript API Method (Lightning Experience) |
| --- | --- |
| focusNavigationTab() | focusNavigationItem() |
| getNavigationTabs() | getNavigationItems() |
| getSelectedNavigationTab() | getSelectedNavigationItem() |
| refreshNavigationTab() | refreshNavigationItem() |
| setSelectedNavigationTab() | force:navigateToObjectHome |

## Methods for Application-Level Custom Console Components

| Salesforce Console Integration Toolkit (Salesforce Classic) | Lightning Console JavaScript API Method (Aura Components for Lightning Experience) | LWC Support |
| --- | --- | --- |
| blinkCustomConsoleComponentButtonText() | Not supported.Workaround: Use setUtilityLabel. | updateUtility() |
| isCustomConsoleComponentWindowHidden() | getUtilityInfo() | getInfo() |
| onCustomConsoleComponentButtonClicked() | onUtilityClick() | Same as Aura Components. |
| setCustomConsoleComponentButtonIconUrl() | setUtilityIcon()setPanelHeaderIcon() | updateUtility() |
| setCustomConsoleComponentButtonStyle() | setUtilityHighlighted | updateUtility() |
| setCustomConsoleComponentButtonText() | setUtilityLabel | updateUtility() |
| setCustomConsoleComponentHeight() | setPanelHeight() | updatePanel() |
| setCustomConsoleComponentVisible() | openUtility()minimizeUtility() | minimize() |
| setCustomConsoleComponentWidth() | setPanelWidth() | updatePanel() |

## Methods for Live Agent

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with Live Agent.

| Salesforce Console Integration Toolkit (Salesforce Classic) | Lightning Console JavaScript API Method (Lightning Experience) |
| --- | --- |
| endChat() | endChat() |
| getChatLog() | getChatLog() |
| sendCustomEvent() | sendCustomEvent() |
| sendMessage() | sendMessage() |

## Methods for Omni-Channel

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with Omni-Channel.

| Salesforce Console Integration Toolkit (Salesforce Classic) | Lightning Console JavaScript API Method (Lightning Experience) |
| --- | --- |
| acceptAgentWork() | acceptAgentWork() |
| closeAgentWork() | closeAgentWork() |
| declineAgentWork() | declineAgentWork() |
| getAgentWorkload() | getAgentWorkload() |
| getAgentWorks() | getAgentWorks() |
| getServicePresenceStatusChannels() | getServicePresenceStatusChannels() |
| getServicePresenceStatusId() | getServicePresenceStatusId |
| login() | login() |
| logout() | logout() |
| sertServicePresenceStatus() | setServicePresenceStatus() |

## Methods for Computer-Telephony Integration (CTI)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with CTI.

| Salesforce Console Integration Toolkit (Salesforce Classic) | Lightning Console JavaScript API Method (Lightning Experience) |
| --- | --- |
| onCallBegin() | Not supported for both Aura and LWC. |
| onCallEnd() | Not supported for both Aura and LWC. |
| onCallLogSaved() | Not supported for both Aura and LWC.. |