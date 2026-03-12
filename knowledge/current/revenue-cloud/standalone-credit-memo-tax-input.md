---
title: "Standalone Credit Memo Tax Input"
domain: revenue-cloud
topic: standalone-credit-memo-tax-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.530Z
estimatedTokens: 136
keywords: [Standalone, Credit, Memo, Tax, Input, representation, details, tax, request.]
---

# Standalone Credit Memo Tax Input

> Input representation of the details of the tax request.

# Standalone Credit Memo Tax Input

Input representation of the details of the tax request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| taxAmount | Double | Amount of tax to be applied. | Required | 62.0 |
| taxCode | String | Tax code to be used to create the tax line. | Optional | 62.0 |
| taxName | String | Name of tax to be applied. | Optional | 62.0 |
| taxRate | Double | Tax rate to be used to create the tax line. | Optional | 62.0 |

## Code Examples

```
[
  {
    "taxAmount": 200,
    "taxName": "Federal Tax",
    "taxRate": 1
  },
  {
    "taxAmount": 500,
    "taxName": "State Tax",
    "taxRate": 1
  }
]
```
