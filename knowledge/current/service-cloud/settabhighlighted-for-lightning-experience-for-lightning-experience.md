---
title: "setTabHighlighted() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: settabhighlighted-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.375Z
keywords: [setTabHighlighted, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Response]
---

# setTabHighlighted() for Lightning Experience for Lightning Experience

# setTabHighlighted() for Lightning Experience for Lightning Experience

Highlights the specified tab with a different background color and a badge. Tab highlights don’t persist after reloading a Lightning console app. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | The ID of the tab to be highlighted. |
| highlighted | boolean | Whether the tab is highlighted. Makes a utility more prominent by giving it a different background color. |
| options | object | Optional. Additional options that modify the appearance of the highlighted tab. Available options are:pulse: If true, causes two colors to alternate in a smooth animation.state: Changes the tab color. Available types are success (), warning (), and error (). |

## LWC Sample Code

This component checks if it’s in a Lightning console app, returns information about the focused tab and highlights it in green.

```

```

This example is the [workspaceAPIHighlightTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIHighlightTab) component from the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, sets the focused tab as highlighted.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, returns a tabInfo object representing the modified tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```