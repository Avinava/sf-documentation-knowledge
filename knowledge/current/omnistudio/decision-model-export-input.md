---
title: "Decision Model Export Input"
domain: omnistudio
topic: decision-model-export-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.254Z
estimatedTokens: 90
keywords: [Decision, Model, Export, Input, representation, request, export, decision, matrix, data.]
---

# Decision Model Export Input

> Input representation of the request to export decision matrix
      data.

# Decision Model Export Input

Input representation of the request to export decision matrix data.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| decision​Model​EntityIds | String[] | A list of decision matrix version IDs to export data from. | Required | 58.0 |

## Code Examples

```
{
   "decisionModelEntityIds":[
      “0lNRO00000004f72AA”,
      “0lNRO000000rfn27AA”
   ]
}
```
