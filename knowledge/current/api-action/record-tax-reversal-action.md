---
title: "Record Tax Reversal Action"
domain: api-action
topic: record-tax-reversal-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.263Z
estimatedTokens: 295
keywords: [Record, Tax, Reversal, Action, Reverses, recorded, transactions, external, system, Stripe, order, canceled, REST, HTTP, Inputs]
---

# Record Tax Reversal Action

> Reverses the recorded tax transactions in an external system, such as
      Stripe, after an order is returned or canceled.

# Record Tax Reversal Action

Reverses the recorded tax transactions in an external system, such as Stripe, after an order is returned or canceled.

This action is available in API version 62.0 and later for users with these licenses:

-   B2B Commerce, or D2C Commerce
-   Salesforce Order Management

Only store administrators can access this action.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/recordTaxReversal

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| taxReversalInfos | TypeApex-definedDescriptionRequired.A list of Apex commercestoretax__TaxReversalInfo records containing details about the tax transactions for the order that was returned or canceled. |

## Outputs

| Output | Details |
| --- | --- |
| taxReversalResult | TypeApex-definedDescriptionAn Apex commercestoretax__TaxReversalResult record containing details about each tax transaction in the reversal request. The details include whether each reversal was successful and, if not, any error messages returned. |

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
         "taxReversalInfos": {
            "taxReversalInfoList": [
               {
                  "orderItemSummaryId": "10uxx0000004EdmAAE",
                  "quantity": 1,
                  "amount": -10,
                  "taxAmount": 1.0
               }
            ]
         }
      }
   ]
}
```

```
[
   {
      "actionName": "RECORD_TAX_REVERSAL",
      "errors": null,
      "invocationId": null,
      "isSuccess": true,
      "outputValues": {
         "taxReversalResult": {
            "success": true,
            "resultItems": [
               {
                  "transactionReferenceNumber": "tax_1PcknrITDqIkouLURfR4pNAM",
                  "success": true,
                  "orderItemSummaryId": "10uxx0000004EicAAE",
                  "lineItemReference": tax_li_QZM99en1lXKf9s,
                  "errorMessage": null
               }
            ],
            "errorMessage": null
         }
      },
      "sortOrder": -1,
      "version": 1
   }
]
```
