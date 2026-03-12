---
title: "generateConsoleUrl() for Lightning Experience for
                Lightning Experience"
domain: service-cloud
topic: generateconsoleurl-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.716Z
estimatedTokens: 239
keywords: [generateConsoleUrl, Lightning, Experience, Generates, URL, workspace, tab, its, subtabs., works, only, console, apps., isn’t, supported, Web, Components, LWC, Arguments, Sample]
---

# generateConsoleUrl() for Lightning Experience for
                Lightning Experience

> Generates a URL for a workspace tab and its subtabs. This method works only in
   Lightning console apps.
        This method isn’t supported for Lightning Web Components
        (LWC).

# generateConsoleUrl() for Lightning Experience for Lightning Experience

Generates a URL for a workspace tab and its subtabs. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| pageReferences | pageReference[] | An array of page references. The first page reference is the workspace tab. Any following page references are subtabs. The last page reference is the focused subtab. |

## Sample Code

This component has a button that, when pressed, uses the generateConsoleUrl() method to create a URL for the provided page references.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves with the generated URL.

| Name | Type | Description |
| --- | --- | --- |
| url | string | A console URL that represents the array of URLs passed into Salesforce. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspaceAPI" />
    <lightning:button label="Get Console URL" onclick="{! c.handleGenerateConsoleUrl }" />
</aura:component>
```

```
({
    handleGenerateConsoleUrl : function(component, event, helper) {
        var workspaceAPI = cmp.find("workspaceAPI");
        workspaceAPI.generateConsoleURL({
            "pageReferences": [
                {
                    "type": "standard__recordPage",
                    "attributes": {
                        "objectApiName": "Account",
                        "actionName": "view",
                        "recordId": "001xx000003DGQXAA4"
                    },
                    "state": {}
                },
                {
                    "type": "standard__recordPage",
                    "attributes": {
                        "objectApiName": "Account",
                        "actionName": "view",
                        "recordId": "001xx000003DGQWAA4"
                    },
                    "state": {}
                },
                {
                    "type": "standard__recordPage",
                    "attributes": {
                        "objectApiName": "Account",
                        "actionName": "view",
                        "recordId": "001xx000003DGQYAA4"
                    },
                    "state": {}
                }
            ]
        }).then(function(url) {
            console.log(url);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```
