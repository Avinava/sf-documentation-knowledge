---
title: "focusTab() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: focustab-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.191Z
keywords: [focusTab, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Note, Response]
---

# focusTab() for Lightning Experience for Lightning Experience

# focusTab() for Lightning Experience for Lightning Experience

Focuses a workspace tab or subtab. This method works only in Lightning console apps.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC).

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the workspace tab or subtab on which to focus. |

## LWC Sample Code

This component has a function that retrieves information of all tabs using [getAllTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getAllTabInfo.htm "Returns information about all open tabs. This method works only in Lightning console apps."), which returns an array of tabInfo objects. Then, it uses focusTab(allTabs\[0\].tabId) to focus on the first tab in the array.

```

```

For another example that uses focusTab(), see the [workspaceAPIFocusTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIFocusTab) component in the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, opens a new tab and focuses it.

Component code:

```

```

Controller code:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

The relative URL used in this example is a placeholder. To try this example yourself, use a relative URL with a record ID from your org.

## Response

This method returns a promise that, upon success, resolves to true.