---
title: "Context Node (POST, PATCH)"
domain: omnistudio
topic: context-node-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.672Z
keywords: [Context, Node, POST, PATCH]
---

# Context Node (POST, PATCH)

# Context Node (POST, PATCH)

Create and update context node.

Resource

```

```

Example for POST

```

```

Example for PATCH

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST, PATCH

Request body for POST

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

Response body for POST

[Context Node List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_list.htm "Output representation of the list of context nodes.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Node List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_list.htm "Output representation of the list of context nodes.")