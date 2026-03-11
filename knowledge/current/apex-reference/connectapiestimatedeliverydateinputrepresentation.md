---
title: "ConnectApi.EstimateDeliveryDateInputRepresentation"
domain: apex-reference
topic: connectapiestimatedeliverydateinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.124Z
keywords: [ConnectApi.EstimateDeliveryDateInputRepresentation]
---

# ConnectApi.EstimateDeliveryDateInputRepresentation

# ConnectApi.EstimateDeliveryDateInputRepresentation

Delivery date estimation information.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryAddress | ConnectApi.DeliveryAddressInputRepresentation | Delivery address. | Optional | 63.0 |
| locations | String | List of location external references. | Optional | 63.0 |
| products | ConnectApi.DeliveryEstimationProductInputRepresentation | List of products included in delivery estimation. | Required | 63.0 |
| shippingCarrier | ConnectApi.ShippingCarrierInputRepresentation | Shipping carrier used to deliver the order. | Required | 63.0 |