---
title: "Context Nodes Input"
domain: omnistudio
topic: context-nodes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.188Z
estimatedTokens: 202
keywords: [Context, Nodes, Input, representation, context, node.]
---

# Context Nodes Input

> Input representation of context node.

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

## Code Examples

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

## Related Topics

- Context
                                                Attributes Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_attributes_input.htm)
- Context Tag Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_tag_input.htm)
