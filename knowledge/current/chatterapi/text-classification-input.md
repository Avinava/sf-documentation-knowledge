---
title: "Text Classification Input"
domain: chatterapi
topic: text-classification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.417Z
estimatedTokens: 106
keywords: [Text, Classification, classifications, submission]
---

> Input representation for text classifications request submission.

# Text Classification Input

Input representation for text classifications request submission.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| classifiers | String[] | List of classifiers according to which text has to be classified. | Required | 59.0 |
| textList | String[] | List of text to be classified. | Required | 59.0 |

## Code Examples

```
{
    "textList": [
        "description not matching one aaa",
        "Runs big",
        "color is different",
        "color is different",
        "Didn't fit",
        "bad quality",
        "Wrong color",
        "Didn't like",
        "Didn't like"
    ],
    "classifiers": [
       "Runs big",
       "Runs small",
       "Defective",
       "Inaccurate Description",
       "Color does",
       "Item arrived late",
       "Other"
    ]
}
```
