---
title: "ConnectApi.DeliveryEstimateOutputRepresentation"
domain: apex-reference
topic: connectapideliveryestimateoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.574Z
keywords: [ConnectApi.DeliveryEstimateOutputRepresentation]
---

# ConnectApi.DeliveryEstimateOutputRepresentation

# ConnectApi.DeliveryEstimateOutputRepresentation

Delivery estimation information for products.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.DeliveryEstimationErrorOutputRepresentation | Any error that was returned, including the error code and error message. | 63.0 |
| location | String | Location external reference. | 63.0 |
| productDeliverEstimations | ListConnectApi.ProductDeliverEstimationOutputRepresentation | List of product delivery estimations. | 63.0 |
| shippingCarrierMethodExternalReference | String | Shipping carrier method external reference. | 63.0 |