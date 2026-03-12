---
title: "Node Path and Tag Values Input"
domain: omnistudio
topic: node-path-and-tag-values-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.522Z
estimatedTokens: 113
keywords: [Node, Path, Tag, Input, representation, needs]
---

# Node Path and Tag Values Input

> Input representation of the node path which needs to update with tag
        details.

# Node Path and Tag Values Input

Input representation of the node path which needs to update with tag details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nodePath | String | Path of Context Data Record. | Required | 63.0 |
| tagValues | List<Context​TagValueInput​Representation | List of Tag Names to be updated and their values. | Required | 63.0 |

## Code Examples

```
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
```

## Related Topics

- List<Context​TagValueInput​Representation (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_tag_values_input.htm)
