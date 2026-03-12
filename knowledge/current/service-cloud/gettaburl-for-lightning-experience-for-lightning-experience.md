---
title: "getTabURL() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: gettaburl-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.874Z
estimatedTokens: 295
keywords: [getTabURL, Lightning, Experience, URL, tab, works, console, apps, isn’t, Web, Components, LWC, Arguments, Aura, Sample]
---

# getTabURL() for Lightning Experience for Lightning Experience

> Returns the URL of the specified tab. This method works only in
   Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

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

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Get Opened Tab URL" onclick="{! c.getOpenedTabURL }" />
 </aura:component>
```

```
({
    getOpenedTabURL : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            url: '/lightning/r/Account/001xx000003DI05AAG/view',
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabURL({
                tabId: response
            }).then(function(response) {
                console.log(response);
            });
       })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

## Related Topics

- getTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm)
