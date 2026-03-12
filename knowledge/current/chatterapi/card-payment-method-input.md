---
title: "Card Payment Method Input"
domain: chatterapi
topic: card-payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.175Z
estimatedTokens: 437
keywords: [Card, Payment, Input, consumed, gateway]
---

# Card Payment Method Input

> Card payment method input consumed by the payment
    gateway.

# Card Payment Method Input

Card payment method input consumed by the payment gateway.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Required | 49.0 |
| autoPay | Boolean | Indicates whether a token for recurring payments is being requested (true) or not (false). The token lets the payment method be used for recurring payments. | Optional | 55.0 |
| cardCategory | String | Card processing type. Valid values are:CreditCardDebitCard | Required | 49.0 |
| cardHolder​FirstName | String | First name of the card holder. | Required | 49.0 |
| cardHolder​LastName | String | Last name of the card holder. | Required | 49.0 |
| cardHolderName | String | Full name of the card holder. | Required | 49.0 |
| cardNumber | String | Card number. | Required | 49.0 |
| cardType | String | Card network type. Valid values are:AmericanExpressDinersClubJcbMasterCardMaestroVisa | Required | 49.0 |
| comments | String | Optional comments for providing more information about the card. | Optional | 49.0 |
| cvv | String | Card verification value. A unique number on the back of a credit card to authenticate the card. | Optional | 49.0 |
| email | String | Email address of the card holder. | Optional | 49.0 |
| expiryMonth | Integer | Card expiration month. | Required | 49.0 |
| expiryYear | Integer | Card expiration year. | Required | 49.0 |
| nickName | String | Optional nickname for the card. | Optional | 49.0 |
| startMonth | Integer | Month the card becomes active. | Optional | 49.0 |
| startYear | Integer | Year the card becomes active. | Optional | 49.0 |

## Code Examples

```
{
"accountId":"00000",
"autoPay":"true",
"cardCategory":"CreditCard",
"cardHolderFirstName":"Mary",
"cardHolderLastName":"Smith",
"cardHolderName":"Mary Smith",
"cardNumber":"0000 0000 0000 0000",
"cardType":"AmericanExpress",
"cvv":"111",
"expiryMonth":"04",
"expiryYear":"25",
"nickName":"Primary American Express Credit Card"}
```
