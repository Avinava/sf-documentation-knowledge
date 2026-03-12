---
title: "invokeAction"
domain: case-feed-dev
topic: invokeaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.407Z
estimatedTokens: 118
keywords: [invokeAction, custom, components, save, submit, quick, action, record, Arguments]
---

# invokeAction

> Allows custom components to save or submit the quick action on a record
  page.

# invokeAction

Allows custom components to save or submit the quick action on a record page.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| actionName | string | The name of the quick action that you want to access. |

The actionName parameter starts with the Salesforce object, followed by the quick action name. For example:

```

```

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

## Code Examples

```
actionName: "Case.UpdateCase"
```
