---
title: "Write Through Tags (PATCH)"
domain: omnistudio
topic: write-through-tags-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.526Z
estimatedTokens: 192
keywords: [Write, Through, Tags, PATCH, Update, Context, Attributes, through, tags.]
---

# Write Through Tags (PATCH)

> Update Context Attributes through tags.

# Write Through Tags (PATCH)

Update Context Attributes through tags.

Resource

```

```

Available version

63.0

HTTP methods

PATCH

Request body for PATCH

```

```

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of context which will get updated. | Required | 63.0 |
| nodePath​And​TagValues | List<Node​PathAndTag​ValuesInput​Representation> | Node path which needs to update with tag details. | Required | 63.0 |

Response body for PATCH

[ContextOutputRepresentation](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm "Output Representation of attributes associated with defined context.")

## Code Examples

```
/connect/contexts/write-through-tags
```

```
{
    "contextId": "3ec8da809ebd6cef79f685239fb005e8c7cffa075a0d3d7b1d8d17ec22bxxxxd",
    "nodePathAndTagValues": [
        {
            "nodePath": {
                "dataPath": [
                    "001xx000003GbQSAA0"
                ]
            },
            "tagValues": [
                {
                    "tagName": "Name",
                    "tagValue": "updatedAccount"
                },
                {
                    "tagName": "City",
                    "tagValue": "Bangalore"
                }
            ]
        }
    ]
}
```

## Related Topics

- List<Node​PathAndTag​ValuesInput​Representation> (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_node_path_and_tag_values.htm)
- ContextOutputRepresentation (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_output.htm)
