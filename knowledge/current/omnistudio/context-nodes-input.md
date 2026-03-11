---
title: "Context Nodes Input"
domain: omnistudio
topic: context-nodes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.133Z
keywords: [Context, Nodes, Input]
---

# Context Nodes Input

# Context Nodes Input

Input representation of context node.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Context Attributes Input [] | List of context attributes. | Optional | 59.0 |
| childNodes | Context Nodes Input [] | List of child context nodes. | Optional | 59.0 |
| contextNodeId | String | ID of the context node. | Required | 59.0 |
| isTransposable | Boolean | Specifies if the context node is used for the transposable feature (true) or not (false). | Optional | 59.0 |
| name | String | Name of the context node. | Required | 59.0 |
| parentNodeId | String | ID of (parent) context node. | Optional | 59.0 |
| tags | Context Tag Input [] | List of context tags. | Optional | 59.0 |