---
title: "ConnectApi.EnsurePaymentCreditOutputRepresentation"
domain: apex-reference
topic: connectapiensurepaymentcreditoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.194Z
estimatedTokens: 123
keywords: [ConnectApi.EnsurePaymentCreditOutputRepresentation, list, payment, credits, created, credit, memo, success, status, error, information., Shows, successfully, issued, customer's, any, errors, encountered, during, processing.]
---

# ConnectApi.EnsurePaymentCreditOutputRepresentation

> A list of payment credits created from the credit memo with success status and error
    information. Shows all payment credits successfully issued to the customer's payment methods and
    any errors encountered during processing.

# ConnectApi.EnsurePaymentCreditOutputRepresentation

A list of payment credits created from the credit memo with success status and error information. Shows all payment credits successfully issued to the customer's payment methods and any errors encountered during processing.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| paymentCredits | List<ConnectApi.PaymentCreditOutputRepresentation> | The list of payment credits that were created. | 65.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.PaymentCreditOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_credit_output.htm)
