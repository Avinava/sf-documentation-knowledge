---
title: "Context Node Mapping (POST, PATCH)"
domain: omnistudio
topic: context-node-mapping-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.924Z
keywords: [Context, Node, Mapping, POST, PATCH]
---

# Context Node Mapping (POST, PATCH)

# Context Node Mapping (POST, PATCH)

Create and update context node mappings.

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
| attributeMappings | Context Attribute Mappings Input[] | List of context attribute mappings. | Required | 59.0 |
| contextNodeId | String | Reference to context node. | Optional | 59.0 |
| contextNodeMappingId | String | ID of this context node mapping. Required for update. | Required | 59.0 |
| sObjectName | String | SObject name. | Optional | 59.0 |

Response body for POST

[Context Node Mapping List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_mapping_list.htm "Output representation of list of context node mappings.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Node Mapping List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_mapping_list.htm "Output representation of list of context node mappings.")