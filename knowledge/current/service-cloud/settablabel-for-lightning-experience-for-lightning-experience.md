---
title: "setTabLabel() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: settablabel-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.382Z
keywords: [setTabLabel, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Response]
---

# setTabLabel() for Lightning Experience for Lightning Experience

# setTabLabel() for Lightning Experience for Lightning Experience

Sets the label of the specified tab. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | The ID of the tab for which to set the label. |
| label | string | The label of the workspace tab or subtab. |

## LWC Sample Code

This component has a function that sets a label on a specified tab. It uses the tabId property from [getFocusedTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm "Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps.").

```

```

This example is the [workspaceAPISetTabLabel](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPISetTabLabel) component from the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, sets the label of the focused tab to “Focused Tab”.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to a tabInfo object representing the modified tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```