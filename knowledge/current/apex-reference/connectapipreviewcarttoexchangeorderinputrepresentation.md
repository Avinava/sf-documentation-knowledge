---
title: "ConnectApi.PreviewCartToExchangeOrderInputRepresentation"
domain: apex-reference
topic: connectapipreviewcarttoexchangeorderinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.440Z
keywords: [ConnectApi.PreviewCartToExchangeOrderInputRepresentation]
---

# ConnectApi.PreviewCartToExchangeOrderInputRepresentation

# ConnectApi.PreviewCartToExchangeOrderInputRepresentation

Information required to preview a cart to exchange order.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exchangeCartId | String | ID of the cart used for adding items to the exchange order. | Required | 60.0 |
| orderSummaryId | String | Order summary ID. | Required | 60.0 |
| referenceId | String | Return order ID. | Required | 60.0 |
| reservationType | String | The type of the reservation. | Optional | 61.0 |