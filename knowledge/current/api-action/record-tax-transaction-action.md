---
title: "Record Tax Transaction Action"
domain: api-action
topic: record-tax-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.267Z
estimatedTokens: 235
keywords: [Record, Tax, Transaction, Action, Records, transactions, order, summary, external, system, Stripe, REST, HTTP, Inputs, Outputs]
---

# Record Tax Transaction Action

> Records tax transactions from an order summary to an external system
      such as Stripe.

# Record Tax Transaction Action

Records tax transactions from an order summary to an external system such as Stripe.

This action is available in API version 62.0 and later with these licenses:

-   B2B Commerce, or D2C Commerce
-   Salesforce Order Management

Only store administrators can access this action.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/recordTaxTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| orderSummaryId | TypestringDescriptionRequired.The ID of the order summary to record tax transaction for. |

## Outputs

| Output | Details |
| --- | --- |
| taxTransactionResult | TypeApex-definedDescriptionAn Apex commercestoretax__TaxTransactionResult record that contains details about the tax transactions recorded. |

## Example

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs": [
      {
         "orderSummaryId": "1Osxx0000004CVcCAM"
      }
   ]
}
```

```
[
  {
    "actionName": "RECORD_TAX_TRANSACTION",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outputValues": {
      "taxTransactionResult": {
        "success": true,
        "resultItems": [
          {
            "transactionReferenceNumber": "tax_1PcknrITDqIkouLURfR4pNAM",
            "success": true,
            "orderItemSummaryId": "10uxx0000004EicAAE",
            "errorMessage": null,
            "calculationReferenceNumber": null
          },
          {
            "transactionReferenceNumber": "tax_1PcknrITDqIkouLURfR4pNAM",
            "success": true,
            "oderItemSummaryId": "10uxx0000004EibAAE",
            "errorMessage": null,
            "calculationReferenceNumber": null
          }
        ],
        "orderSummaryId": "1Osxx0000004CVc",
        "errorMessage": null
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
