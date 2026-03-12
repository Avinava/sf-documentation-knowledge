---
title: "getAvailableActions"
domain: case-feed-dev
topic: getavailableactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.400Z
estimatedTokens: 69
keywords: [getAvailableActions, custom, components, actions, record, Arguments, Sample, Code]
---

# getAvailableActions

> Allows custom components to get a list of the available actions on a record
  page.

# getAvailableActions

Allows custom components to get a list of the available actions on a record page.

## Arguments

None.

## Sample Code

```

```

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

```

```

## Code Examples

```
getAvailableActions : function( cmp, event, helper) {
        var actionAPI = cmp.find("quickActionAPI");
        actionAPI.getAvailableActions().then(function(result){
            //All available actions shown;
        }).catch(function(e){
            if(e.errors){
                //If the specified action isn't found on the page, show an error message in the my component 
            }
        });
    }
```

```
success: true,
actions:
    {actionName: "Case._LightningUpdateCase", recordId: "recordId", type: "QuickAction"}
    {actionName: "FeedItem.TextPost", recordId: "recordId", type: "QuickAction"}
    {actionName: "Case.LogACall", recordId: "recordId", type: "QuickAction"}
    {actionName: "Case.SendEmail", recordId: "recordId", type: "QuickAction"}
errors: []
```
