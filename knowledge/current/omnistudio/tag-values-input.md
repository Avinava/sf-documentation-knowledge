---
title: "Tag Values Input"
domain: omnistudio
topic: tag-values-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.827Z
estimatedTokens: 96
keywords: [Tag, Values, Input, representation, list, Names, updated, their, values.]
---

# Tag Values Input

> Input representation of the list of Tag Names to be updated and their
        values.

# Tag Values Input

Input representation of the list of Tag Names to be updated and their values.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| tagName | String | Name of tag thats need to be updated. | Required | 63.0 |
| tagValue | String | Updated value of tags. | Required | 63.0 |

## Code Examples

```
{
                    "tagName": "Name",
                    "tagValue": "updatedAccount"
                },
                {
                    "tagName": "City",
                    "tagValue": "Bangalore"
                }
```
