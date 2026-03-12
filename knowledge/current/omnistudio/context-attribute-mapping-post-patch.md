---
title: "Context Attribute Mapping (POST, PATCH)"
domain: omnistudio
topic: context-attribute-mapping-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.793Z
estimatedTokens: 515
keywords: [Context, Attribute, Mapping, POST, PATCH]
---

# Context Attribute Mapping (POST, PATCH)

> Create context attribute mapping. Update context attribute mapping.

# Context Attribute Mapping (POST, PATCH)

Create context attribute mapping. Update context attribute mapping.

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

Response body for POST

[Context Attribute Mapping List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_mapping_list.htm "Output representation of list of context attribute mappings.")

Request body for PATCH

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

Response body for PATCH

[Context Attribute Mapping List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_mapping_list.htm "Output representation of list of context attribute mappings.")

## Code Examples

```
/connect/context-node-mappings/${contextNodeMappingId}/context-attribute-mappings
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-node-mappings/${contextNodeMappingId}/context-attribute-mappings
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-node-mappings/${contextNodeMappingId}/context-attribute-mappings
```

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
- Context Attribute Mapping List Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_mapping_list.htm)
- Context Attribute Mapping List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_mapping_list.htm)
