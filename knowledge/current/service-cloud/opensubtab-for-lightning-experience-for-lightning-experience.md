---
title: "openSubtab() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: opensubtab-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.299Z
keywords: [openSubtab, Lightning, Experience, Arguments, Note, LWC, Sample, Code, Aura, Components, Response]
---

# openSubtab() for Lightning Experience for Lightning Experience

# openSubtab() for Lightning Experience for Lightning Experience

Opens a subtab within a workspace tab. If the subtab is already open, the subtab is focused. This method works only in Lightning console apps.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC). However, icon, iconAlt, and label are supported only for LWC.

| Name | Type | Description |
| --- | --- | --- |
| parentTabId | string | The ID of the workspace tab within which the new subtab opens. You must pass the parent tab ID into the openSubtab() method. |
| pageReference | object | Optional. Specifies the pageReference to open. |
| recordId | ID | Optional. Specifies the record to open. |
| url | string | Optional. The URL representing the content of the new workspace tab.The URL can be either relative or absolute. To use a third-party domain, add the site as a CSP Trusted Site. |
| focus | boolean | Optional. Specifies whether the new subtab has focus. To display the subtab immediately, set focus to true. To open the subtab in the background, set focus to false. |
| icon | string | Optional. An SLDS icon key. See a full list of icon keys on the SLDS reference site. Available for LWC only. |
| iconAlt | string | Optional. Alternative text for the icon. Available for LWC only. |
| label | string | Optional. The text label for the icon. Available for LWC only. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

pageReference, recordId, and url are prioritized in that order. Providing arguments with a higher priority means the others get ignored.

## LWC Sample Code

This component retrieves the enclosing tab ID using the EnclosingTabId wire adapter. It opens a subtab on the current tab when the handleClick() function is called. If the component doesn’t reside inside a tab or subtab, tabId is null.

To check if the current tab is a subtab, use getTabInfo(). If the current tab is a subtab, pass in the parent tab ID to the openSubtab() function.

```

```

For another example that uses openSubtab(), see the [workspaceAPIOpenSubtab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIOpenSubtab) component in the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, opens a subtab within a workspace tab.

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

This method returns a promise that, upon success, resolves to the ID of the new subtab.