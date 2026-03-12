---
title: "getSelectedActions"
domain: case-feed-dev
topic: getselectedactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.405Z
estimatedTokens: 61
keywords: [getSelectedActions, custom, components, access, selected, quick, actions, record, Arguments]
---

# getSelectedActions

> Allows custom components to access selected quick actions on a record page.

# getSelectedActions

Allows custom components to access selected quick actions on a record page.

## Arguments

None.

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

```

```

## Code Examples

```
success: boolean,
actions: [ { 
    actionName: "UpdateCase",
    recordId: "recordId",
    type: "QuickAction"
} ],
errors: []
```
