---
title: "ConnectApi.EstimateDeliveryDateInputRepresentation"
domain: apex-reference
topic: connectapiestimatedeliverydateinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.094Z
estimatedTokens: 166
keywords: [Delivery, date, estimation]
---

# ConnectApi.EstimateDeliveryDateInputRepresentation

> Delivery date estimation information.

# ConnectApi.EstimateDeliveryDateInputRepresentation

Delivery date estimation information.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryAddress | ConnectApi.DeliveryAddressInputRepresentation | Delivery address. | Optional | 63.0 |
| locations | String | List of location external references. | Optional | 63.0 |
| products | ConnectApi.DeliveryEstimationProductInputRepresentation | List of products included in delivery estimation. | Required | 63.0 |
| shippingCarrier | ConnectApi.ShippingCarrierInputRepresentation | Shipping carrier used to deliver the order. | Required | 63.0 |

## Related Topics

- ConnectApi.DeliveryAddressInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_delivery_address.htm)
- ConnectApi.DeliveryEstimationProductInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_delivery_estimation_product.htm)
- ConnectApi.ShippingCarrierInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_shipping_carrier.htm)
