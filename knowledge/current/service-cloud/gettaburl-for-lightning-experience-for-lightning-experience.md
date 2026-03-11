---
title: "getTabURL() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: gettaburl-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.237Z
keywords: [getTabURL, Lightning, Experience, Arguments, Aura, Components, Sample, Code, Note, Response]
---

# getTabURL() for Lightning Experience for Lightning Experience

# getTabURL() for Lightning Experience for Lightning Experience

Returns the URL of the specified tab. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

To retrieve the URL of a specified tab in LWC, use [getTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm "Returns information about the specified tab. This method works only in Lightning console apps.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the tab for which to retrieve the URL. |

## Aura Components Sample Code

This component has a button that, when pressed, opens a tab and uses the getTabURL() method to print the new tab’s URL to the developer console.

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

This method returns a promise that, upon success, resolves to the URL of the specified tab.