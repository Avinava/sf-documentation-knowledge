---
title: "SalesforceResultCode Enum"
domain: apex-reference
topic: salesforceresultcode-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.477Z
keywords: [SalesforceResultCode, Enum, Usage, Values]
---

# SalesforceResultCode Enum

# SalesforceResultCode Enum

Defines the gateway call status values in Salesforce based on the call status values that the payment gateway returned.

## Usage

Payment gateways can return many different responses. Salesforce maps these responses into one of seven possible Salesforce response values.

## Enum Values

The following are the values of the commercepayments.SalesforceResultCode enum.

| Value | Description |
| --- | --- |
| Decline | The gateway call failed, but it may still work if you try again. For example, the customer had insufficient funds or briefly lost their connection to the internet. This is also known as a “soft decline.” |
| Indeterminate | The gateway didn't respond to the call and the user has to check the transaction request’s status. Indeterminate responses often occur following server timeouts, system failure, or any action that interrupts the gateway’s ability to process the payment. |
| PermanentFail | The customer’s bank recognized the payment account as closed, terminated, or fraudulent. The gateway won’t further calls from the payment method associate with the transaction. After a permanent fail response, the transaction changes its gateway status to Permanent Fail. |
| RequiresReview | The gateway call initially failed, but the payment method may still work after further evaluation. This response often happens when the customer bank requires more information about the payment request. In this case, the bank provides an authorization code manually when the payment manager calls the processor. |
| Success | The gateway processed the transaction successfully. |
| SystemError | Salesforce ended the payment request call before receiving a gateway response. System error responses often occur due to gateway server errors, invalid customer credentials, or anytime the request times out before receiving a gateway response. The failure occurs before the request reaches the gateway, so there’s no risk of an unaccounted payment remaining in the gateway. You can continue with the transaction by manually creating a payment. |
| ValidationError | The gateway received incorrect customer payment information, such as misspelled credit card names or a CVV with missing numbers. |