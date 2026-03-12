---
title: "Insurance Invoke Underwriting Rule Input"
domain: insurance-developer-guide
topic: insurance-invoke-underwriting-rule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.840Z
estimatedTokens: 108
keywords: [Insurance, Invoke, Underwriting, Rule, Input, representation, operation]
---

# Insurance Invoke Underwriting Rule Input

> Input representation for invoke underwriting rule operation.

# Insurance Invoke Underwriting Rule Input

Input representation for invoke underwriting rule operation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectId | String | ID of the insurance object(Quote or Insurance Policy ID). | Required | 63.0 |
| toStage | String | Name of the stage the record is moving to. | Required | 63.0 |

## Code Examples

```
{
	"objectId": "11Oxx0000007MnhEAE",
	"toStage": "Approved"
}
```
