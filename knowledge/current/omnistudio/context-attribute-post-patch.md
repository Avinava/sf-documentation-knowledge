---
title: "Context Attribute (POST, PATCH)"
domain: omnistudio
topic: context-attribute-post-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.952Z
estimatedTokens: 384
keywords: [Context, Attribute, POST, PATCH, Create, list, context, attributes.]
---

# Context Attribute (POST, PATCH)

> Create a list of context attributes.

# Context Attribute (POST, PATCH)

Create a list of context attributes.

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
| contextAttributeId | String | ID of the attribute. | Required | 59.0 |
| dataType | String | Data type of the attribute. | Required | 59.0 |
| domainSet | String | Comma separated node names referenced by this attribute. | Optional | 59.0 |
| fieldType | String | Field type of the attribute. | Required | 59.0 |
| isKey | Boolean | Specifies if it used for transposable feature (true) or not (false). | Optional | 59.0 |
| isValue | Boolean | Specifies if it used for transposable feature (true) or not (false). | Optional | 59.0 |
| name | String | Name of the attribute. | Required | 59.0 |
| tags | Context Tag Input[] | List of tags for the attribute. | Optional | 59.0 |

Response body for POST

[Context Attribute List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_list.htm "Output representation of list of context attributes.")

Request body for PATCH

JSON example

```

```

Response body for PATCH

[Context Attribute List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_list.htm "Output representation of list of context attributes.")

## Code Examples

```
/connect/context-nodes/${contextNodeId}/context-attributes
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-nodes/${contextNodeId}/context-attributes
```

```
https://yourInstance.salesforce.com/services/data/v59.0/connect/context-nodes/${contextNodeId}/context-attributes
```

```
{
    "contextAttributes": [
        {
            "dataType": "STRING",
            "fieldType": "INPUT",
            "name": "Attribute_5",
            "tags": {
                "contextTags": [
                    {
                        "name": "Attribute_5_Tag"
                    }
                ]
            }
        },
        {
            "dataType": "NUMBER",
            "fieldType": "OUTPUT",
            "name": "Attribute_6"
        }
    ]
}
```

```
{
    "contextAttributes": [
        {
            "name": "Attribute_5_Updated",
            "contextAttributeId": "11nxx000001hOvRAAU"
        },
        {
            "name": "Attribute_6_Updated",
            "contextAttributeId": "11nxx000001hOvSAAU"
        }
    ]
}
```

## Related Topics

- Context Tag
                                                Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_tag_input.htm)
- Context Attribute List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_attribute_list.htm)
