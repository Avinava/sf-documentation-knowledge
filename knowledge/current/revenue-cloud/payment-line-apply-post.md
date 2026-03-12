---
title: "Payment Line Apply (POST)"
domain: revenue-cloud
topic: payment-line-apply-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.776Z
estimatedTokens: 509
keywords: [Payment, Line, Apply, POST, Allocate, balance, reduce, invoice, includes, allocated, against]
---

# Payment Line Apply (POST)

> Allocate the balance of a payment to reduce the balance of an invoice.
      The response includes an ID of the payment line invoice or payment line invoice line that
      represents the payment balance allocated against the invoice.

# Payment Line Apply (POST)

Allocate the balance of a payment to reduce the balance of an invoice. The response includes an ID of the payment line invoice or payment line invoice line that represents the payment balance allocated against the invoice.

Use the Commerce Payments APIs to send your payment and refund details to external payment gateways for processing against a customer's bank. See [Commerce Payments resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_payments.htm "HTML (New Window)") to check the APIs for payment gateways, payment captures, and payment authorizations.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| paymentId | String | ID of the payment record. | Required | 64.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount that's applied. The amount must be less than the invoice line and payment balance. | Required | 64.0 |
| applied​ToId | String | ID of the invoice line that this payment is applied to. Specify the IDs for these records.InvoiceInvoice Line | Required | 64.0 |
| associated​AccountId | String | ID of the associated account. | Optional | 64.0 |
| comments | String | Comments that you can add to the payment line application. | Optional | 64.0 |
| effective​Date | String | Date from which the payment line application takes effect. | Optional | 64.0 |

Response body for POST

[Payment Line Apply](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_payment_line_apply_output.htm "Output representation of the details of the applied payment line. The details include the ID of the payment record and date when the payment line was applied.")

## Code Examples

```
/commerce/billing/payments/paymentId/actions/apply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/billing/payments/1PLR000000000dDOAQ/actions/apply
```

```
{
  "appliedToId": "3ttR000000001IkIAI",
  "amount": 10,
  "effectiveDate": "2020-08-11T07:53:15.000Z",
  "comments": "Apply payment",
  "associatedAccountId": "001R00000060AyuIAE"
}
```

## Related Topics

- Payment Line Apply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_payment_line_apply_output.htm)
