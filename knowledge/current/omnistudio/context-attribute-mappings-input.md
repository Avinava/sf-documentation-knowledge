---
title: "Context Attribute Mappings Input"
domain: omnistudio
topic: context-attribute-mappings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.141Z
estimatedTokens: 181
keywords: [Context, Attribute, Mappings, Input, representation, context, attribute, mapping.]
---

# Context Attribute Mappings Input

> Input representation of context attribute mapping.

# Context Attribute Mappings Input

Input representation of context attribute mapping.

JSON example

```

```

This example shows a JSON sample when context-to-context mappings exist.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the context attribute record. | Required | 59.0 |
| contextAttributeMappingId | String | ID of the context attribute mapping record. | Required | 59.0 |
| contextInputAttributeName | String | Context input attribute name. | Optional | 59.0 |
| hydrationDetails | Context Attribute Hydration Details Input[] | List of context attribute hydration detail. | Optional | 59.0 |

## Code Examples

```
{
    "contextAttributeMappings": [
        {
            "contextAttributeId": "11nxx000001hIgLAAU",
            "hydrationDetails": {
                "contextAttrHydrationDetails": [
                    {
                        "sObjectDomain": "Order",
                        "queryAttribute": "Status"
                    }
                ]
            }
        },
        {
            "contextAttributeId": "11nxx000001hKiFAAU",
            "hydrationDetails": {
                "contextAttrHydrationDetails": [
                    {
                        "sObjectDomain": "Order",
                        "queryAttribute": "Name"
                    }
                ]
            }
        }
    ]
}
```

```
{
  "contextMappings": [
    {
      "contextMappingId": "11jxx0000005UXnAAM",
      "contextNodeMappings": {
        "contextNodeMappings": [
          {
            "attributeMappings": {
              "contextAttributeMappings": [
                {
                  "hydrationDetails": {
                    "contextAttrContextHydrationDetails": [
                      {
                        "queryAttribute": "11nxx000001hGTFAA2",
                        "parentAttributeMappingId": "11Rxx00000058LcEAI"
                      }
                    ]
                  },
                  "contextAttributeId": "11nxx000001ihzFAAQ",
                  "contextInputAttributeName": "Node1A1"
                }
              ]
            },
            "contextNodeId": "11oxx000001HS0iAAG",
            "mappedContextNodeId": "11oxx000001G0mSAAS",
            "sObjectName": "Node1"
          }
        ]
      },
      "intents": [
        "ASSOCIATION",
        "HYDRATION",
        "PERSISTENCE",
        "TRANSLATION"
      ],
      "mappedContextDefinitionName": "11Oxx0000006PZ8EAM",
      "isDefault": false
    }
  ]
}
```

## Related Topics

- Context Attribute Hydration
                                                Details Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_attr_hydration_details_input.htm)
