---
title: "Context Node Mappings Input"
domain: omnistudio
topic: context-node-mappings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.184Z
estimatedTokens: 144
keywords: [Context, Node, Mappings, Input, representation, context, node, mapping.]
---

# Context Node Mappings Input

> Input representation of context node mapping.

# Context Node Mappings Input

Input representation of context node mapping.

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

## Code Examples

```
{
    "contextNodeMappings": [
        {
            "contextNodeId": "11oxx000001G31BAAS",
            "sObjectName": "Order"
        },
        {
            "contextNodeId": "11oxx000001G31CAAS",
            "sObjectName": "OrderItem"
        }
    ]
}
```

## Related Topics

- Context Attribute Mappings
                                                Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_attribute_mappings_input.htm)
