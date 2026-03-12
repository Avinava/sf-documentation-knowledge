---
title: "addToBrowserTitleQueue() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: addtobrowsertitlequeue-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.735Z
estimatedTokens: 272
keywords: [addToBrowserTitleQueue, Lightning, Experience, Adds, titles, rotate, browser, title, bar, every, three, seconds.This, works, console, apps]
---

# addToBrowserTitleQueue() for Lightning Experience for Lightning Experience

> Adds a string to a list of titles that rotate in the browser title bar every three
            seconds.This method works only in
   Lightning console apps.
        This method isn’t supported for Lightning Web Components
        (LWC).

# addToBrowserTitleQueue() for Lightning Experience for Lightning Experience

Adds a string to a list of titles that rotate in the browser title bar every three seconds.This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Accurate browser tab titles help improve accessibility. Screen readers announce page titles when a page is first loaded, and don’t announce dynamic updates to the title. Use the root node of the document, like document.title, to announce the updated browser tab title instead.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| title | string | The browser tab title to add. |

## Aura Components Sample Code

This component has a button that, when pressed, adds a string to a list of titles that rotate in the browser title bar every three seconds.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Add to Browser Title Queue" onclick="{! c.handleAddToBrowserTitleQueue }" />
</aura:component>
```

```
({
    handleAddToBrowserTitleQueue : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.addToBrowserTitleQueue({
            title: "New Browser Title"
        })
        .then(function(result){
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```
