---
title: "getAvailableActionFields"
domain: case-feed-dev
topic: getavailableactionfields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.398Z
estimatedTokens: 137
keywords: [getAvailableActionFields, custom, components, specific, action, record, Arguments, Sample, Code]
---

# getAvailableActionFields

> Allows custom components to get a list of the available fields for a specific action on
  a record page.

# getAvailableActionFields

Allows custom components to get a list of the available fields for a specific action on a record page.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| actionName | string | The name of the quick action that you want to access. |

The actionName parameter starts with the Salesforce object, followed by the quick action name. For example:

```

```

## Sample Code

```

```

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

```

```

## Code Examples

```
actionName: "Case.LogACall"
```

```
getAvailableActionFields : function( cmp, event, helper) {
        var actionAPI = cmp.find("quickActionAPI");
        var args = {actionName :"Case.LogACall", entityName:"Case" };
        actionAPI.getAvailableActionFields(args).then(function(result){
            //All available action fields shown for Log a Call
        }).catch(function(e){
            if(e.errors){
                //If the specified action isn't found on the page, show an error message in the my component 
            }
        });
    }
```

```
success: true,
fields:
    {fieldName: "Subject", type: "textEnumLookup"}
    {fieldName: "Description", type: "TextArea"}
    {fieldName: "WhoId", type: "Lookup"},
errors: []
```
