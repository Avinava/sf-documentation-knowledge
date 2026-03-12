---
title: "selectAction"
domain: case-feed-dev
topic: selectaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.413Z
estimatedTokens: 122
keywords: [selectAction, custom, components, select, focus, quick, action, record, Arguments]
---

# selectAction

> Allows custom components to select and focus on a quick action on a record
  page.

# selectAction

Allows custom components to select and focus on a quick action on a record page.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| actionName | string | The name of the quick action that you want to access. |

The actionName parameter starts with the Salesforce object, followed by the quick action name. For example:

```

```

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

```

```

## Code Examples

```
actionName: "Case.UpdateCase"
```

```
success: boolean,
unavailableAction: boolean,
targetableFields: [{
    fieldName: "Status",
    type: "PickList"
}],
actionName: string,
errors: []
```
