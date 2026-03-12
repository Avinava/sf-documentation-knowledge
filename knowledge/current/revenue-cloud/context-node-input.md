---
title: "Context Node Input"
domain: revenue-cloud
topic: context-node-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.870Z
estimatedTokens: 118
keywords: [Context, Node, Input, representation, nodes, ramp, segments]
---

# Context Node Input

> Input representation of the details of the context nodes for ramp segments.

# Context Node Input

Input representation of the details of the context nodes for ramp segments.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​Node | Map<String, Object> | Details of the context node to be added, updated, or deleted. | Required | 62.0 |
| contextNode​Path | String[] | Path to the context node to be added, updated, or deleted. | Required | 62.0 |

## Code Examples

```
"updatedNodes": [
     {
      "contextNodePath": [
        "4f23961a5c98806f89305e064c67b397e93f1bb8a2a7a3a80db506f1d4110ee9", // ContextId
        "0Q0xx0000004CPACA2", //Quote or OrderId
        "0QLxx0000004CfIGAU" // Quote Line ID or Order Line ID to update
      ],
      "contextNode": {
          "Discount": 10,
          "Quantity": 5
      }
    }, 
    {
      "contextNodePath": [
        "4f23961a5c98806f89305e064c67b397e93f1bb8a2a7a3a80db506f1d4110ee9",
        "0Q0xx0000004CPACA2",
        "2b6401d144904e10aa"
      ],
      "contextNode": {
          "Discount": 20,
          "Quantity": 15
      }
    }
  ]
```
