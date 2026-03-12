---
title: "Context Tag Input"
domain: omnistudio
topic: context-tag-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.191Z
estimatedTokens: 133
keywords: [Context, Tag, Input, representation, context, tag.]
---

# Context Tag Input

> Input representation of the context tag.

# Context Tag Input

Input representation of the context tag.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the (parent) context attribute. | Required | 59.0 |
| contextNodeId | String | ID of the (parent) context node. | Required | 59.0 |
| contextTagId | String | ID of this Context tag. Required only for update. | Optional | 59.0 |
| name | String | Name of the context tag. | Required | 59.0 |

## Code Examples

```
{
    "contextTags": [
        {
            "name": "Attribute_Tag",
            "contextAttributeId": "11nxx000001hOozAAE"
        },
        {
            "name": "Node_Tag",
            "contextNodeId": "11oxx000001G9D2AAK"
        }
    ]
}
```
