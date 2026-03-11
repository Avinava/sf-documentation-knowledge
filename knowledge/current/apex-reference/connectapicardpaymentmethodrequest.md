---
title: "ConnectApi.CardPaymentMethodRequest"
domain: apex-reference
topic: connectapicardpaymentmethodrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.870Z
keywords: [ConnectApi.CardPaymentMethodRequest]
---

# ConnectApi.CardPaymentMethodRequest

# ConnectApi.CardPaymentMethodRequest

Card payment method input representation.

Subclass of [ConnectApi.BasePaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_base_payment_method.htm "Base payment method input representation.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Salesforce Payments account to which this payment method is linked. | Required | 51.0 |
| autoPay | Boolean | Indicates whether a token for recurring payments is being requested (true) or not (false). The token lets the payment method be used for recurring payments. | Optional | 55.0 |
| cardCategory | ConnectApi.​CardCategory | Card processing type. Valid values are:CreditCardDebitCard | Required | 51.0 |
| cardHolder​FirstName | String | First name of the card holder. | Required | 51.0 |
| cardHolder​LastName | String | Last name of the card holder. | Required | 51.0 |
| cardHolderName | String | Full name of the card holder. | Required | 51.0 |
| cardNumber | String | Card number. | Required | 51.0 |
| cardType | String | Card network type. Valid values are:AmericanExpressDinersClubJCBMasterCardMaestroVisa | Required | 51.0 |
| comments | String | Optional comments for the card payment method. | Optional | 51.0 |
| cvv | String | Card Verification Value. | Optional | 51.0 |
| email | String | Email address of the card holder. | Required | 51.0 |
| expiryMonth | Integer | Card expiration month. | Required | 51.0 |
| expiryYear | Integer | Card expiration year. | Required | 51.0 |
| nickName | String | Optional nickname for the card. | Optional | 51.0 |
| startMonth | Integer | Month the card becomes active. | Optional | 51.0 |
| startYear | Integer | Year the card becomes active. | Optional | 51.0 |