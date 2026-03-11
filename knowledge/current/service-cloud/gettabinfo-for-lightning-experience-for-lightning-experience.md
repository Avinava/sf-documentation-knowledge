---
title: "getTabInfo() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: gettabinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.233Z
keywords: [getTabInfo, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Note, Response]
---

# getTabInfo() for Lightning Experience for Lightning Experience

# getTabInfo() for Lightning Experience for Lightning Experience

Returns information about the specified tab. This method works only in Lightning console apps.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC).

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the tab for which to retrieve the information. |

## LWC Sample Code

This component has a function that returns the tab information.

```

```

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, opens a tab and uses the getTabInfo() method to print the new tab’s tabInfo to the developer console.

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

This method returns a promise that, upon success, resolves to a tabInfo object representing the specified tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```