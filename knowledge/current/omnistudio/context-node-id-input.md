---
title: "Context Node ID Input"
domain: omnistudio
topic: context-node-id-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:22.752Z
estimatedTokens: 112
keywords: [Context, Node, IDs, relationship, nodes]
---

> Input representation of the list of context node IDs to create the relationship nodes
    for.

# Context Node ID Input

Input representation of the list of context node IDs to create the relationship nodes for.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextNodeIds | String | List of context node IDs to create the relationship nodes by adding them as child nodes to the context node that’s specified in the endpoint. | Required | 61.0 |

## Code Examples

```
{
  "contextNodeIds": [
    "11oxx000001G3dtAAC",
    "11oxx000001G3duAAC"
  ]
}
```
