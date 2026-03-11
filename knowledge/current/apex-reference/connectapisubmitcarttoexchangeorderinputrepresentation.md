---
title: "ConnectApi.SubmitCartToExchangeOrderInputRepresentation"
domain: apex-reference
topic: connectapisubmitcarttoexchangeorderinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.600Z
keywords: [ConnectApi.SubmitCartToExchangeOrderInputRepresentation]
---

# ConnectApi.SubmitCartToExchangeOrderInputRepresentation

# ConnectApi.SubmitCartToExchangeOrderInputRepresentation

Information required for a submit cart to exchange order action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exchangeCartId | String | ID of the cart used for adding items to the exchange order. | Required | 60.0 |
| orderNumber | String | Order number. | Optional | 60.0 |
| orderSummaryId | String | Order summary ID. | Required | 60.0 |
| paymentInfoList | List<ConnectApi.PaymentInfoInputRepresentation> | List of payment information when additional funds are needed for the newly created exchange order. | Optional | 60.0 |
| referenceId | String | Return order ID. | Optional | 60.0 |
| reservationType | String | The reservation that's created by the submit API. The possible values are Full, which means there’s a reservation against the exchange cart, or None if there’s no reservation. | Optional | 61.0 |
| sequences | List<ConnectApi.sharedOrderPaymentSummarySequenceInputRepresentation> | Ordered list of order payment summaries and reserved balance amounts to apply them to. | Optional | 60.0 |