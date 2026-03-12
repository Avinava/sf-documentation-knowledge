---
title: "Ensure Payment Credit Output"
domain: chatterapi
topic: ensure-payment-credit-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.451Z
estimatedTokens: 128
keywords: [Ensure, Payment, Credit, Output, credits, created, memo, success, status, error, successfully, issued, customer's, any, errors]
---

# Ensure Payment Credit Output

> A list of payment credits created from the credit memo with success status and error
    information. Shows all payment credits successfully issued to the customer's payment methods and
    any errors encountered during processing.

# Ensure Payment Credit Output

A list of payment credits created from the credit memo with success status and error information. Shows all payment credits successfully issued to the customer's payment methods and any errors encountered during processing.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| paymentCredits | ConnectApi.PaymentCreditOutputRepresentation[] | The list of payment credits that were created. | Big, 65.0 | 65.0 |
