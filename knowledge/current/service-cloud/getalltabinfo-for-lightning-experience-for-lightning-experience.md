---
title: "getAllTabInfo() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: getalltabinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.201Z
keywords: [getAllTabInfo, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Response]
---

# getAllTabInfo() for Lightning Experience for Lightning Experience

# getAllTabInfo() for Lightning Experience for Lightning Experience

Returns information about all open tabs. This method works only in Lightning console apps.

## Arguments

None.

## LWC Sample Code

This component has a function that returns the information on all tabs.

```

```

For another example that uses getAllTabInfo(), see [focusTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_focusTab.htm "Focuses a workspace tab or subtab. This method works only in Lightning console apps.").

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, gets the info of all open tabs and prints the resulting tabInfo object.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an array of tabInfo objects. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```