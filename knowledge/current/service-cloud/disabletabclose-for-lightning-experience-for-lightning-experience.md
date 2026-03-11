---
title: "disableTabClose() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: disabletabclose-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.174Z
keywords: [disableTabClose, Lightning, Experience, Arguments, Note, LWC, Sample, Code, Aura, Components, Response]
---

# disableTabClose() for Lightning Experience for Lightning Experience

# disableTabClose() for Lightning Experience for Lightning Experience

Prevents a workspace tab or subtab from closing. This method removes the close button from a tab or subtab, and disables the keyboard shortcuts that close tabs and subtabs. This method works only in Lightning console apps.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC).

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | The ID of the workspace tab or subtab to disable tab close for. |
| disabled | boolean | Specifies whether to disable tab close. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

disableTabClose() doesn’t prevent the browser from refreshing or closing the browser tab.

## LWC Sample Code

This component has a function that opens a tab using [a page reference](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_open_pagereference.htm "You can navigate to different page types, including a URL addressable custom component. To make a custom component URL addressable using LWC, use the lightning__UrlAddressable target. To make an Aura component URL addressable, implement the lightning:isUrlAddressable interface on your custom component.") and then prevents it from being closed. When the [openTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_opentab.htm "Opens a new workspace tab. If the tab is already open, the tab is focused.") method resolves successfully, it returns the tabInfo object. The const { tabId } syntax destructures the tabInfo object and binds the tabInfo.tabId value on the tabId variable. disableTabClose() uses this tabId value to prevent the tab from closing.

```

```

For another example that uses disableTabClose(), see the [workspaceAPIDisableTabClose](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIDisableTabClose) component in the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, disables the ability to close the currently focused tab.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to a tabInfo object representing the focused tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```