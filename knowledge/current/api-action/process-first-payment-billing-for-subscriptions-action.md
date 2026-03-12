---
title: "Process First Payment Billing for Subscriptions Action"
domain: api-action
topic: process-first-payment-billing-for-subscriptions-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.963Z
estimatedTokens: 407
keywords: [Process, Payment, Billing, Subscriptions, Action, Creates, invoices, orders, containing, subscription, products, order, placed, B2B, D2C]
---

# Process First Payment Billing for Subscriptions Action

> Creates invoices for orders containing subscription products. When an order containing
    subscription products is placed in a B2B or D2C store, the first term payment for subscription
    products is captured, but an invoice isn’t generated. This action uses Revenue Cloud’s billing
    system to generate and settle a subscripition order’s first-term invoice and create a billing
    schedule for the subscription order.

# Process First Payment Billing for Subscriptions Action

Creates invoices for orders containing subscription products. When an order containing subscription products is placed in a B2B or D2C store, the first term payment for subscription products is captured, but an invoice isn’t generated. This action uses Revenue Cloud’s billing system to generate and settle a subscripition order’s first-term invoice and create a billing schedule for the subscription order.

## Special Access Rules

This action is available in API version 63.0 and later for users with system administrator access or the BillingTransactionToBSApiUser, InvoiceOrErrorRecoveryAPI, and RLMBilliingAccess users permissions assigned, along with any of these licenses enabled:

-   B2B Commerce or D2C Commerce and Salesforce Payments
-   Revenue Lifecycle Management and Salesforce Pricing

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processFirstPaymentBilling

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| correlationId | TypeStringDescriptionThe request correlation ID used for tracking the request. |
| orderSummaryId | TypeStringDescriptionThe ID of the order summary record. |

## Outputs

| Output | Details |
| --- | --- |
| correlationId | TypeSTRINGDescriptionThe request correlationID used for tracking the request. |
| requestId | TypeSTRINGDescriptionThe ID of the request. |

## Example

**Sample Request**

Here’s a sample request with correlationId and orderSummaryId:

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
      "orderSummaryId": "1OsLT0000098gcu0AA",
      "correlationId": "4869bd78-3af4-40ff-8475-899d711b5db4"
    }
  ]
}
```

```
[
  {
    "actionName": "processFirstPaymentBilling",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "requestId": "fcec4cff-3f26-45fd-8193-0a599dbb7d03",
      "correlationId": "4869bd78-3af4-40ff-8475-899d711b5db4"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
