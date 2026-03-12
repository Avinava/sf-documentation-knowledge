---
title: "setActionFieldValues"
domain: case-feed-dev
topic: setactionfieldvalues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.417Z
estimatedTokens: 390
keywords: [setActionFieldValues, custom, components, select, quick, action, record, specify, Arguments]
---

# setActionFieldValues

> Allows custom components to select a quick action on a record page and then specify
  field values for that action.

# setActionFieldValues

Allows custom components to select a quick action on a record page and then specify field values for that action.

Because this method also selects the quick action, you don't need to use the selectAction method. To submit the quick action updates, pass submitOnSuccess as true.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| actionName | string | The name of the quick action that you want to access. |
| parentFields | Object | Optional. The fields that you want to update on the current record. For example, if you want to set field values on the Email quick action on the case record page, the case object is the parent record. |
| targetFields | Object | The fields that you want to update on the quick action. |
| submitOnSuccess | boolean | Optional. Set to true if you want to save and submit the quick action after setting the field values. Default is false. |

The actionName parameter starts with the Salesforce object, followed by the quick action name. For example:

```

```

The parentFields and targetFields objects contain a list of field names with values for each field. Each field can optionally specify the insertion behavior using the insertType key, which can be replace (default), cursor, or begin. For example:

```

```

We recommend that you don’t use this API with the following items:

-   Read-only fields
-   Encrypted fields
-   Fields within social actions

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

```

```

## Code Examples

```
actionName: "Case.UpdateCase"
```

```
var parentFields = { Status: {value: "Closed"}, 
                     Subject: {value: "Case subject", insertType: "cursor"} }
var targetFields = { ToAddress: {value: "to@to.com"}, 
                     TextBody: {value: "the text body", insertType: "cursor"} }
```

```
success: boolean,
actionName: "LogACall",
unavailableAction: boolean,
targetFieldErrors: [{
  Status: {message: "error"},
  Subject: {message: "error",
}],
errors: []
```
