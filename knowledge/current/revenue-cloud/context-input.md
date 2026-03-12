---
title: "Context Input"
domain: revenue-cloud
topic: context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.959Z
estimatedTokens: 142
keywords: [Context, Input, representation, context, that's, associated, sales, transaction, quote, order.]
---

# Context Input

> Input representation of the context that's associated with a sales transaction for a
    quote or an order.

# Context Input

Input representation of the context that's associated with a sales transaction for a quote or an order.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context that represents the created session for the sales transaction. This property is supported only for a PATCH request.If the contextId property isn’t specified, the Place Sales Transaction API generates the context ID for the sales transaction. | Optional | 63.0 |

## Code Examples

```
{
  "contextDetails": {
    "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708"
  }
}
```
