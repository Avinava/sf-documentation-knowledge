---
title: "ConnectApi.CardPaymentMethodOutput"
domain: apex-reference
topic: connectapicardpaymentmethodoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.286Z
estimatedTokens: 392
keywords: [ConnectApi.CardPaymentMethodOutput, Card, payment, details, output.]
---

# ConnectApi.CardPaymentMethodOutput

> Card payment method details output.

# ConnectApi.CardPaymentMethodOutput

Card payment method details output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | 56.0 |
| autoPay | Boolean | Indicates whether a token for recurring payments is being requested (true) or not (false). The token lets the payment method be used for recurring payments. | 56.0 |
| cardBin | String | Bank Identification Number (BIN). The BIN is the first 4-6 numbers on a payment card that identifies the card issuer. | 56.0 |
| cardCategory | ConnectApi.​CardCategory | CreditCardDebitCard | 56.0 |
| cardHolderFirstName | String | First name of the card holder | 56.0 |
| cardHolderLastName | String | Last name of the card holder | 56.0 |
| cardHolderName | String | Full name of card holder | 56.0 |
| cardLastFour | String | Last four digits on a card. | 56.0 |
| cardType | ConnectApi.​CardType | Credit card issuer.AmericanExpressDinersClubJCBMaestroMasterCardVisa | 56.0 |
| comments | String | Details about a record added by a user. Maximum of 1,000 characters. | 56.0 |
| displayCardNumber | String | Card displayed number | 56.0 |
| email | String | Email address of the card holder. | 56.0 |
| expiryMonth | Integer | Card expiration month | 56.0 |
| expiryYear | Integer | Card expiration year | 56.0 |
| nickName | String | Optional card nickname | 56.0 |
| startMonth | Integer | Month when card becomes active | 56.0 |
| startYear | Integer | Year when card becomes active | 56.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​CardCategory (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CardType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
