---
title: "Credit Invoice Line Tax Input"
domain: revenue-cloud
topic: credit-invoice-line-tax-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.900Z
estimatedTokens: 167
keywords: [Credit, Invoice, Line, Tax, Input, representation, lines, created, manually]
---

# Credit Invoice Line Tax Input

> Input representation of the details of the tax lines to be created manually for the
    invoice line.

# Credit Invoice Line Tax Input

Input representation of the details of the tax lines to be created manually for the invoice line.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| taxAmount | Double | Amount of tax to be applied related to this invoice line. | Required | 62.0 |
| taxCode | String | Tax code to be applied related to this invoice line to create the tax line. | Optional | 62.0 |
| taxName | String | Name of tax to be applied related to this invoice line. | Optional | 62.0 |
| taxRate | Double | Tax rate used to create the tax line. | Optional | 62.0 |

## Code Examples

```
"taxes": [
        {
          "taxAmount": 15,
          "taxName": "abc",
          "taxCode": "taxCode",
          "taxRate": 7
        }
      ]
```
