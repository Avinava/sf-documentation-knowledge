---
title: "refreshTab() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: refreshtab-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.334Z
keywords: [refreshTab, Lightning, Experience, Arguments, LWC, Sample, Code, Aura, Components, Response, Note]
---

# refreshTab() for Lightning Experience for Lightning Experience

# refreshTab() for Lightning Experience for Lightning Experience

Refreshes a workspace tab or a subtab specified by tabId. Keep in mind that the first subtab has the same tabId as the workspace tab. This method works only in Lightning console apps.

If this method is invoked for a workspace tab with unsaved changes, a confirmation window opens for the user.

-   Continue editing: Changes are preserved and the tab or workspace isn’t refreshed.
-   Discard changes: Changes are discarded and the tab or workspace is refreshed.
-   Save: Changes are saved and then the tab or workspace is refreshed.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC).

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the workspace tab or subtab to refresh. |
| includeAllSubtabs | boolean | Optional. If the tabId corresponds to a workspace tab, all subtabs within that workspace are refreshed. The default is true. Keep in mind that the first subtab has the same tabId as the workspace tab. |

## LWC Sample Code

This component checks if it’s in a Lightning console app, returns information about the focused tab and refreshes it. When the [getFocusedTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm "Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps.") method resolves successfully, it returns the tabInfo object. The const { tabId } syntax destructures the tabInfo object and binds the tabInfo.tabId value on the tabId variable. refreshTab() uses this tabId value to refresh the tab and its subtabs.

```

```

This example is the [workspaceAPIRefreshTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIRefreshTab) component from the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, refreshes the focused workspace tab and all its open subtabs.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true. If there was an error, the promise is rejected.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

true doesn’t necessarily mean that the refresh was successful. For example, if the tab has unsaved changes when this method was called, the user has a choice to save or discard their changes. The refresh is canceled depending on user’s choice.