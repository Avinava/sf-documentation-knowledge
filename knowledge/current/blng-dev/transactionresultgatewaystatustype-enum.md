---
title: "TransactionResult.GatewayStatusType Enum"
domain: blng-dev
topic: transactionresultgatewaystatustype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.178Z
estimatedTokens: 658
keywords: [TransactionResult.GatewayStatusType, defining, appropriate, gateway, status, payment]
---

# TransactionResult.GatewayStatusType Enum

> An enum defining the appropriate gateway status values returned by the
      payment gateway.

# TransactionResult.GatewayStatusType Enum

An enum defining the appropriate gateway status values returned by the payment gateway.

## Enum Values

The following are the values of the blng.TransactionResult.GatewayStatusType enum.

| Value | Description |
| --- | --- |
| Success | The gateway has processed the transaction succesfully. |
| Decline | Declined responses occur when the gateway's call to the customer bank fails. This usually happens for customer issues such as insufficient funds, a frozen credit card, or a brief disconnection during the call. |
| ValidationError | Gateways respond with validation errors when Salesforce Billing sends incorrect customer payment information, such as misspelled credit card data or a CVV with missing numbers. Payment runs won't create payments from transactions with a gateway status of Validation Error. Users should change the incorrect payment information on their payment method so that future payment runs can use it for payments. |
| PermanentFail | Gateways respond with a permanent failure code when the customer's bank recognizes their payment account as closed, terminated, or fraudulent. In this case, the gateway won't accept any further calls from the payment method associated with this transaction. Following a permanent fail response, a transaction changes its gateway status to Permanent Fail. |
| RequiresReview | Gateways respond with a review code when the gateway call initially fails, but the payment method may still work following extra processing. For example, some banks send out this type of response when they have further questions about the payment request, and will provide an authorization code manually when the payment manager calls the processor. |
| Indeterminate | Gateways send indeterminate responses when they require the user to check the status of the transaction request. This often occurs following server timeouts, system failure, or any action that unexpectedly interrupts the gateway's ability to process the payment. |
| SystemError | Salesforce Billing provides a system fail response when it has to end its gateway payment request before receiving a response. This can happen due to gateway server errors, invalid customer credentials, or anytime Salesforce Billing's request times out before it receives a gateway response. System failures occur before Salesforce Billing’s request reaches the gateway, so there’s no risk of an unaccounted payment remaining in the gateway. If your transaction has a System Fail gateway status, you can either manually create the payment or wait for another payment run to pick up your invoice. |
