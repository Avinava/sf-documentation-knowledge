---
title: "Card Payment Method Output"
domain: chatterapi
topic: card-payment-method-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.489Z
estimatedTokens: 446
keywords: [Card, Payment, Output]
---

# Card Payment Method Output

> Details about the card payment method.

# Card Payment Method Output

Details about the card payment method.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Big, 48.0 | 56.0 |
| autoPay | Boolean | Indicates whether a token for recurring payments is being requested (true) or not (false). The token lets the payment method be used for recurring payments. | Big, 48.0 | 56.0 |
| cardBin | String | Bank Identification Number (BIN). The BIN is the first 4-6 numbers on a payment card that identifies the card issuer. | Big, 48.0 | 56.0 |
| cardCategory | Enum | Indicates a credit card or debit card.CreditCardDebitCard | Big, 48.0 | 56.0 |
| cardHolder​FirstName | String | Card holder first name | Big, 48.0 | 56.0 |
| cardHolder​LastName | String | Card holder last name | Big, 48.0 | 56.0 |
| cardHolderName | String | Card holder name | Big, 48.0 | 56.0 |
| cardLastFour | String | Last four digits of the card | Big, 48.0 | 56.0 |
| cardType | Enum | Credit card issuer.AmericanExpressDinersClubJCBMaestroMasterCardVisa | Big, 48.0 | 56.0 |
| comments | String | Details about a record added by a user. Maximum of 1,000 characters. | Big, 48.0 | 56.0 |
| display​CardNumber | String | Displayed card number | Big, 48.0 | 56.0 |
| email | String | Email address of the card holder. | Big, 48.0 | 56.0 |
| expiryMonth | Integer | Card expiration month | Big, 48.0 | 56.0 |
| expiryYear | Integer | Card expiration year | Big, 48.0 | 56.0 |
| nickName | String | Optional card nickname | Big, 48.0 | 56.0 |
| startMonth | Integer | Month the card becomes active | Big, 48.0 | 56.0 |
| startYear | Integer | Year the card becomes active | Big, 48.0 | 56.0 |
