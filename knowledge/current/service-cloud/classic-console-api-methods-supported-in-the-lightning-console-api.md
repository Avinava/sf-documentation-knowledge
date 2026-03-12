---
title: "Classic Console API Methods Supported in the Lightning Console API"
domain: service-cloud
topic: classic-console-api-methods-supported-in-the-lightning-console-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.667Z
estimatedTokens: 2289
keywords: [Classic, Console, API, Supported, Lightning, Visualforce, pages, third-party, web, tabs, Salesforce, Integration, Toolkit, work, Experience, as-is., Just, point, latest, version]
---

# Classic Console API Methods Supported in the Lightning Console API

> Visualforce pages and third-party web tabs that use some Salesforce Console Integration
    Toolkit methods work in Lightning Experience as-is. Just point to the latest version of the
    toolkit script in your Visualforce pages or third-party web tabs. Third-party content must be
    allowlisted with CSP directives via Trusted URLs. This table lists the Salesforce Console Integration
    Toolkit methods that you can use in Lightning Console JavaScript API starting with API version
    42.0.

# Classic Console API Methods Supported in the Lightning Console API

Visualforce pages and third-party web tabs that use some Salesforce Console Integration Toolkit methods work in Lightning Experience as-is. Just point to the latest version of the toolkit script in your Visualforce pages or third-party web tabs. Third-party content must be allowlisted with CSP directives via Trusted URLs. This table lists the Salesforce Console Integration Toolkit methods that you can use in Lightning Console JavaScript API starting with API version 42.0.

Salesforce Console Integration Toolkit methods that aren’t supported in Lightning Experience result in a failure error message.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

Only API versions 42.0 and above of the Salesforce Console Integration Toolkit are supported in the Lightning Console JavaScript API. Only API versions 43.0 and above are supported in Open CTI.

## Methods for Primary Tabs and Subtabs

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Methods using objectId return 18-character, case-insensitive record IDs when invoked from within a Lightning console. When invoked from within a Salesforce Classic console, they return 15-character, case-sensitive record IDs.

Workspace tab and subtab IDs in a Lightning console use a different format from Salesforce Classic console primary tab and subtab IDs. Any code that validates the format of tab IDs must be updated or removed to account for the change. A Salesforce Classic console tab ID can look like scc-pt-1 or scc-st-1. A Lightning console tab ID looks like ctab1 or ctab1\_3.

| Salesforce Classic Method | Supported in Lightning Console (Aura) | Supported in Lightning Console (LWC) | Notes About Use in Lightning Console |
| --- | --- | --- | --- |
| closeTab() |  |  |  |
| disableTabClose() |  |  |  |
| focusPrimaryTabById() |  |  |  |
| focusPrimaryTabByName() |  |  |  |
| focusSidebarComponent() |  |  |  |
| focusSubtabById() |  |  |  |
| focusSubtabByNameAndPrimaryTabId() |  |  |  |
| focusSubtabByNameAndPrimaryTabName() |  |  |  |
| generateConsoleUrl() |  |  |  |
| getEnclosingPrimaryTabId() |  |  |  |
| getEnclosingTabId() |  |  |  |
| getFocusedPrimaryTabId() |  |  |  |
| getFocusedPrimaryTabObjectId() |  |  |  |
| getFocusedSubtabId() |  |  |  |
| getFocusedSubtabObjectId() |  |  |  |
| getPageInfo() | See notes |  | These fields aren’t supported and aren’t returned in the response:objectdisplayNameaccountIdcontactIdpersonAccount |
| getPrimaryTabIds() |  |  |  |
| getSubtabIds() |  |  |  |
| getTabLink() | See notes |  | The level argument sforce.console.TabLink.PARENT_AND_CHILDREN isn’t supported. |
| isInConsole() |  |  |  |
| onEnclosingTabRefresh() |  |  |  |
| onFocusedPrimaryTab() |  |  |  |
| onFocusedSubtab() |  |  | Utility items aren’t supported in the Lightning API. |
| onTabSave() |  |  |  |
| openConsoleUrl() |  |  |  |
| openPrimaryTab() | See notes | Make sure to add third-party domains to the Trusted URLs list.The following aren’t supported in the Lightning API:id argumentname argument. As an alternative, save the tabId that’s returned and use it in your API calls. |
| openSubtab() | See notes | Make sure to add third-party domains to the Trusted URLs list.The following aren’t supported in the Lightning API:id argumentname argument. As an alternative, save the tabId that’s returned and use it in your API calls. |
| openSubtabByPrimaryTabName() |  |  |  |
| refreshPrimaryTabById() | See notes | See notes | The fullRefresh argument isn’t supported in the Lightning API. |
| refreshPrimaryTabByName() |  |  |  |
| refreshSubtabById() | See notes | See notes | The fullRefresh argument isn’t supported in the Lightning API. |
| refreshSubtabByNameAndPrimaryTabId() |  |  |  |
| refreshSubtabByNameAndPrimaryTabName() |  |  |  |
| reopenLastClosedTab() |  |  |  |
| resetSessionTimeOut() |  |  |  |
| setTabUnsavedChanges() |  |  |  |
| setTabIcon() | See notes | See notes | Only Salesforce Lightning Design System icons are supported for iconUrl. URLs and custom icons aren’t supported.Sample supported values:sforce.console.setTabIcon(“standard:email”)sforce.console.setTabIcon(“action:new”)sforce.console.setTabIcon(“custom:custom1”) |
| setTabLink() |  |  |  |
| setTabStyle() |  |  |  |
| setTabTextStyle() |  |  |  |
| setTabTitle() |  |  |  |

## Methods for Application-Level Custom Console Components

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with these methods.

The following methods must be called from within a Lightning utility.

| Salesforce Classic Method | Supported in Lightning Console | Notes About Use in Lightning Console |
| --- | --- | --- |
| addToBrowserTitleQueue() |  |  |
| blinkCustomConsoleComponentButtonText() |  |  |
| isCustomConsoleComponentPoppedOut() |  |  |
| isCustomConsoleComponentHidden() |  |  |
| isInCustomConsoleComponent() |  |  |
| onCustomConsoleComponentButtonClicked() |  |  |
| removeFromBrowserTitleQueue() |  |  |
| runSelectedMacro() |  |  |
| scrollCustomConsoleComponentButtonText() |  |  |
| selectMacro() |  |  |
| setCustomConsoleComponentButtonIconUrl() | See notes | In Lightning Console, URL values for icons aren’t supported in utility bar utilities. Only Salesforce Lightning Design System are supported.Sample supported iconUrl values:setCustomConsoleComponentButtonIconUrl("clock");setCustomConsoleComponentButtonIconUrl("utility:clock"); |
| setCustomConsoleComponentButtonStyle() |  |  |
| setCustomConsoleComponentButtonText() |  |  |
| setCustomConsoleComponentHeight() |  |  |
| setCustomConsoleComponentVisible() |  |  |
| setCustomConsoleComponentWidth() |  |  |
| setCustomConsoleComponentPopoutable() |  |  |
| setCustomConsoleComponentWindowVisible() |  |  |
| setSidebarVisible() |  |  |

## Methods for Navigation Tabs

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with these methods.

| Salesforce Classic Method | Supported in Lightning Console | Notes About Use in Lightning Console |
| --- | --- | --- |
| focusNavigationTab() |  |  |
| getNavigationTabs() |  |  |
| getSelectedNavigationTab() |  |  |
| refreshNavigationTab() |  |  |
| setSelectedNavigationTab() |  |  |

## Methods for Live Agent

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with these methods.

| Salesforce Classic Method | Supported in Lightning Console | Notes About Use in Lightning Console |
| --- | --- | --- |
| acceptChat() |  |  |
| cancelFileTransferByAgent() |  |  |
| declineChat() |  |  |
| endChat() |  |  |
| getAgentInput() |  |  |
| getAgentState() |  |  |
| getChatLog() |  |  |
| getChatRequests() |  |  |
| getDetailsByChatKey() |  |  |
| getDetailsByPrimaryTabId() |  |  |
| getEngagedChats() |  |  |
| getMaxCapacity() |  |  |
| initFileTransfer() |  |  |
| onAgentSend() |  |  |
| onAgentStateChanged() |  |  |
| onChatCanceled() |  |  |
| onChatCriticalWaitState() |  |  |
| onChatDeclined() |  |  |
| onChatEnded() |  |  |
| onChatRequested() |  |  |
| onChatStarted() |  |  |
| onChatTransferredOut() |  |  |
| onCurrentCapacityChanged() |  |  |
| onCustomEvent() |  |  |
| onFileTransferCompleted() |  |  |
| onNewMessage() |  |  |
| onTypingUpdate() |  |  |
| sendCustomEvent() |  |  |
| sendMessage() |  |  |
| setAgentInput() |  |  |
| setAgentState() |  |  |

## Methods for Omni-Channel

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with these methods.

| Salesforce Classic Method | Supported in Lightning Console | Notes About Use in Lightning Console |
| --- | --- | --- |
| acceptAgentWork() |  |  |
| closeAgentWork() |  |  |
| declineAgentWork() |  |  |
| getAgentWorkload() |  |  |
| getAgentWorks() |  |  |
| getServicePresenceStatusChannels() |  |  |
| getServicePresenceStatusId() |  |  |
| login() |  |  |
| logout() |  |  |
| setServicePresenceStatus() |  |  |

## Methods for Console Events

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

LWC doesn’t currently support working with these methods.

| Salesforce Classic Method | Supported in Lightning Console | Notes About Use in Lightning Console |
| --- | --- | --- |
| addEventListener() |  | sforce.console.ConsoleEvent.CONSOLE_LOGOUT isn’t supported in the Lightning API.sforce.console.ConsoleEvent.CLOSE_TAB returns the ID of the closed tab only. The Lightning API doesn’t return the objectId or the tabObjectId.The Lightning API doesn’t return special message responses from custom keyboard shortcuts. However, if the response is from a console event, the message includes payload details. |
| fireEvent() | See notes | fireEvent() returns success true even when eventListeners for the given eventType are removed. |
| removeEventListener() |  |  |

## Related Topics

- closeTab() (atlas.en-us.api_console.meta/api_console/sforce_api_console_closetab.htm)
- disableTabClose() (atlas.en-us.api_console.meta/api_console/sforce_api_console_disabletabclose.htm)
- focusPrimaryTabById() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focusprimarytabbyid.htm)
- focusPrimaryTabByName() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focusprimarytabbyname.htm)
- focusSidebarComponent() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussidebarcomponent.htm)
- focusSubtabById() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbyid.htm)
- focusSubtabByNameAndPrimaryTabId() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbynameandprimarytabid.htm)
- focusSubtabByNameAndPrimaryTabName() (atlas.en-us.api_console.meta/api_console/sforce_api_console_focussubtabbynameandprimarytabname.htm)
- generateConsoleUrl() (atlas.en-us.api_console.meta/api_console/sforce_api_console_generateconsoleurl.htm)
- getEnclosingPrimaryTabId() (atlas.en-us.api_console.meta/api_console/sforce_api_console_getenclosingprimarytabid.htm)
