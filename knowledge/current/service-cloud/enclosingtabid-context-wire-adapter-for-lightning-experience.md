---
title: "EnclosingTabId Context Wire
            Adapter for Lightning Experience"
domain: service-cloud
topic: enclosingtabid-context-wire-adapter-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.434Z
keywords: [EnclosingTabId, Context, Wire, Adapter, Lightning, Experience, Tip, LWC, Sample, Code, Response, See]
---

# EnclosingTabId Context Wire
            Adapter for Lightning Experience

# EnclosingTabId Context Wire Adapter for Lightning Experience

Returns the ID of the enclosing tab or subtab. This wire adapter is available for Lightning Web Components (LWC) only.

To determine if the component is within a tab or subtab, use this context wire adapter. If a caller component isn’t using the wire adapter inside a tab or subtab, the enclosing utility tab ID is null.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_console)

#### Tip

To retrieve information about the tab or the subtab that a component is rendered in, first use EnclosingTabId instead of [getFocusedTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm "Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps."). Then call [getTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm "Returns information about the specified tab. This method works only in Lightning console apps.") and use the enclosing tab’s ID as the argument. By using EnclosingTabId, you make sure that the correct tab ID is returned when you work with lifecycle hooks such as renderedCallback() or connectedCallback().

## LWC Sample Code

To get the ID of the enclosing tab in LWC, use the EnclosingTabId wire adapter.

This component retrieves the enclosing tab ID and closes the tab.

```

```

For another example that uses the EnclosingTabId wire adapter, see [openSubtab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openSubtab.htm "Opens a subtab within a workspace tab. If the subtab is already open, the subtab is focused. This method works only in Lightning console apps.").

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Response

This method returns a promise that, upon success, resolves to the tabId of the enclosing tab, if within a tab. If not within a tab, this method resolves to false upon success.

#### See Also

-   [*LWC Dev Guide*: Understand the Wire Service](https://developer.salesforce.com/docs/platform/lwc/guide/data-wire-service-about.html "LWC Dev Guide: Understand the Wire Service - HTML (New Window)")