---
title: "Context Attribute Input"
domain: omnistudio
topic: context-attribute-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T07:38:48.452Z
estimatedTokens: 83
keywords: [Context, Attribute, Input, representation, updating]
---

# Context Attribute Input

> Input representation for updating context attribute.

# Context Attribute Input

Input representation for updating context attribute.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updateContextAttributesInput | Object | Input object for updating context attributes. | Required | 59.0 |

## Code Examples

```
{
    "contextId": "3729ed60-d16d-41b8-8951-9ad4f6407ad2",
    "nodePathAndAttributes": [
        {
            "nodePath": {
                "dataPath": [
                    "TestOrder123"
                ]
            },
            "attributes": [
                {
                    "attributeName": "Status",
                    "attributeValue": "DISPATCHED"
                }
            ]
        }
    ]
}
```
