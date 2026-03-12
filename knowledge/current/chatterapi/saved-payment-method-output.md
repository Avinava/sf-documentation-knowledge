---
title: "Saved Payment Method Output"
domain: chatterapi
topic: saved-payment-method-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.276Z
estimatedTokens: 854
keywords: [Saved, Payment, Output, individual, account, contact]
---

# Saved Payment Method Output

> An individual  saved payment method for an account or
    contact.

# Saved Payment Method Output

An individual saved payment method for an account or contact.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountHolderEmail | String | Email of the customer that holds the saved payment method. | Small, 58.0 | 58.0 |
| accountHolderName | String | Name of customer that holds the saved payment method. | Small, 58.0 | 58.0 |
| bankAccountType | String | Type of bank account, such as checking or savings. | Small, 59.0 | 59.0 |
| bankCode | String | Code of the banking institution that issued the saved payment method. | Small, 58.0 | 58.0 |
| bankName | String | Name of the bank that issued the payment method. | Small, 58.0 | 58.0 |
| error | Error Response Output | Error response if the saved payment method information couldn’t be retrieved. | Small, 58.0 | 58.0 |
| expiryMonth | String | Month the saved card expires. | Small, 58.0 | 58.0 |
| expiryYear | String | Year the saved card expires. | Small, 58.0 | 58.0 |
| gatewayCustomerReference | String | Owner associated with the payment method to the payment gateway. | Small, 60.0 | 60.0 |
| gatewayRefId | String | ID returned by a payment gateway in a transaction response, indicating that the transaction has happened. | Big, 59.0 | 59.0 |
| gatewayReference | String | Identifies the customer associated with the payment method to the payment gateway. We must pass this information in payment request whenever a transaction with a saved payment method is made so the gateway can validate the request. | Small, 58.0 | 58.0 |
| gatewayToken | String | Token representing the saved payment method that is used for future transactions. | Small, 58.0 | 58.0 |
| id | String | Salesforce ID of the saved payment method record. | Small, 58.0 | 58.0 |
| isDefault | Boolean | Indicates whether the saved payment method is the default payment method to use for transactions (true) or not (false). | Small, 58.0 | 58.0 |
| issuer | String | Issuer of the saved payment method. | Small, 58.0 | 58.0 |
| last4 | String | Last 4 Digits of the saved card payment method. | Small, 58.0 | 58.0 |
| merchantAccountId | String | Salesforce Payments merchant account ID associated with the saved payment method. | Small, 58.0 | 58.0 |
| name | String | Name of the saved payment record. | Small, 58.0 | 58.0 |
| network | String | Saved payment method card network, for example Visa or Union Pay. | Small, 58.0 | 58.0 |
| paymentGatewayId | String | Salesforce ID of the Payment Gateway object record. | Small, 58.0 | 58.0 |
| referenceOwnerId | String | Account or Contact record that owns the payment method. | Small, 58.0 | 58.0 |
| status | String | Status of the saved payment method. Possible values are:ActiveAwaitingPaymentErroredExpired | Big, 58.0 | 58.0 |
| type | String | Type of saved payment method. Possible values are:Au_becs_debit—BECSBacs_debit—BACSBancontact—BancontactCard—CardIdeal—IdealSepa_debit—SEPA Direct DebitUs_bank_account—ACH Direct Debit | Big, 58.0 | 58.0 |
| usageType | String | Specifies the usage type of the payment method. Possible values are:OffSessionOnSession | Big, 58.0 | 58.0 |

#### See Also

-   [Saved Payment Method](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_payments_saved_payment_method.htm "Deletes or updates (patches) a single saved payment method associated with a given merchant account.")

## Related Topics

- Saved Payment Method (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_payments_saved_payment_method.htm)
