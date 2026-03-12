---
title: "Context Node"
domain: omnistudio
topic: context-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.618Z
estimatedTokens: 357
keywords: [Context, Node, Output, representation, nodes, new, retrieve, query]
---

# Context Node

> Output representation of the details of context nodes.

# Context Node

Output representation of the details of context nodes.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Context Attribute List[] | List of attributes. | Small, 59.0 | 59.0 |
| baseReference | String | Identifies the context node ID of the parent context definition that this context node is inherited from. | Small, 60.0 | 60.0 |
| canonicalNodeId | String | ID of the canonical node that’s used as a reference to create this context node. | Small, 61.0 | 61.0 |
| childNodes | Context Node Output[] | List of child context nodes. | Small, 59.0 | 59.0 |
| contextDefinition​VersionID | String | ID of context definition version. | Small, 59.0 | 59.0 |
| contextNodeID | String | ID of this context node. | Small, 59.0 | 59.0 |
| displayName | String | Name of the context node that appears on the UI. | Small, 61.0 | 61.0 |
| isSuccess | Boolean | Specifies if the operation is successful (true) or not (false). | Small, 59.0 | 59.0 |
| isTransposable | Boolean | Specifies if the context node is used for the transposable feature (true) or not (false). | Small, 59.0 | 59.0 |
| name | String | Name of the context node. | Small, 59.0 | 59.0 |
| parentNodeId | String | ID of (parent) context node. | Small, 59.0 | 59.0 |
| tags | Context Attribute Tag Output[] | List of tags. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "contextNodes": [
    {
      "attributes": [],
      "baseReference": "11oxx000001G1DTPP88",
      "canonicalNodeId": "11oxx000001G1CGAA0",
      "childNodes": [],
      "contextDefinitionVersionId": "11pxx0000004UvYAAU",
      "contextNodeId": "11oxx000001G3xEAAS",
      "displayName": "Mobile_Contact_AccountSibRef",
      "isSuccess": true,
      "isTransposable": false,
      "name": "Mobile_Contact_AccountSibRef",
      "parentNodeId": "11oxx000001G1AeAAK",
      "tags": []
    }
  ]
}
```

## Related Topics

- Context Attribute List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_list.htm)
- Context Attribute Tag Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_tag.htm)
- Context Node (POST, PATCH) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_context_node.htm)
- Context Node Id (GET, DELETE) (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_context_node_id.htm)
