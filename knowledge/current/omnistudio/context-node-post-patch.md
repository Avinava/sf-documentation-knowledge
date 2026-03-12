---
title: "Context Node (POST, PATCH)"
domain: omnistudio
topic: context-node-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.001Z
estimatedTokens: 361
keywords: [Context, Node, POST, PATCH, Create, update, context, node.]
---

# Context Node (POST, PATCH)

> Create and update context node.

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

## Code Examples

```
/connect/context-definitions/${contextDefinitionId}/context-nodes
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-definitions/${contextDefinitionId}/context-nodes
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-definitions/${contextDefinitionId}/context-nodes
```

```
{
    "contextNodes": [
        {
            "name": "Node_0",
            "attributes": {
                "contextAttributes": [
                    {
                        "dataType": "STRING",
                        "fieldType": "INPUT",
                        "name": "Attribute_1"
                    }
                ]
            },
            "childNodes": {
                "contextNodes": [
                    {
                        "name": "Node_1",
                        "attributes": {
                            "contextAttributes": [
                                {
                                    "dataType": "NUMBER",
                                    "fieldType": "INPUT",
                                    "name": "Attribute_2"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}
```

```
{
    "contextNodes": [
        {
            "name": "Node_0_patch",
            "contextNodeId": "11oxx000001G9D2AAK"
        }
    ]
}
```

## Related Topics

- Context
                                                Attributes Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_attributes_input.htm)
- Context Nodes Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_nodes_input.htm)
- Context Tag Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_tag_input.htm)
- Context Node List Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_node_list.htm)
