---
title: "Context Node Relationship (POST)"
domain: omnistudio
topic: context-node-relationship-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.862Z
estimatedTokens: 227
keywords: [Context, Node, Relationship, POST, Configure, adding, child, nodes, specific]
---

# Context Node Relationship (POST)

> Configure a relationship node by adding child context nodes to a specific context
    node.

# Context Node Relationship (POST)

Configure a relationship node by adding child context nodes to a specific context node.

Resource

```

```

The contextNodeId specifies the ID of the context node to which you want to add the context nodes from the request body as child nodes.

Resource example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextNodeIds | String | List of context node IDs to create the relationship nodes by adding them as child nodes to the context node that’s specified in the endpoint. | Required | 61.0 |

Response body for POST

[Context Node List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_list.htm "Output representation of the list of context nodes.")

## Code Examples

```
/connect/context-nodes/contextNodeId/configurerelationship
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/context-nodes/11oxx000001G3dtAAC/configurerelationship
```

```
{
  "contextNodeIds": [
    "11oxx000001G3dtAAC",
    "11oxx000001G3duAAC"
  ]
}
```

## Related Topics

- Context Node
              List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_list.htm)
