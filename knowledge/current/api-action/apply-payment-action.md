---
title: "Apply Payment Action"
domain: api-action
topic: apply-payment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.161Z
estimatedTokens: 430
keywords: [Apply, Payment, Action, record, invoice, creating, PaymentLineInvoice, Applied, REST, HTTP, Inputs, Outputs]
---

# Apply Payment Action

> Applies a payment record to an invoice header by creating a PaymentLineInvoice record
  with a type of Applied.

# Apply Payment Action

Applies a payment record to an invoice header by creating a PaymentLineInvoice record with a type of Applied.

To access Commerce Payments resources, you need the following permissions.

-   Salesforce Order Management License or Salesforce B2B Commerce License
-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management or B2B Commerce License. Your Salesforce admin assigns it to your user profile.

This object is available in API version 54.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v54.0/actions/standard/applyPayment

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| amount | TypenumberDescriptionRequired. The amount to be applied to the invoice header. |
| appliedToId | TypeIDDescriptionRequired. The ID of the invoice that receives the payment. |
| associatedAccountId | TypeIDDescriptionOptional. The ID of the account that contains the invoice. |
| comments | TypeStringDescriptionOptional comments for more information about the payment application. |
| effectiveDate | TypedatetimeDescriptionOptional. The date that the payment takes effect on the invoice. |
| paymentId | TypestringDescriptionRequired. The payment that's applied to the invoice. The application is represented by the PaymentLineInvoice created for a successful action. |

## Outputs

| Output | Details |
| --- | --- |
| appliedDate | TypedatetimeDescriptionThe date that the payment was applied to the invoice header. |
| paymentLineInvoiceId | TypeIDDescriptionRepresents the application of the payment's amount to the invoice. Created after a successful action. |
