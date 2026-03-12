---
title: "ConnectApi.DeliveryEstimateOutputRepresentation"
domain: apex-reference
topic: connectapideliveryestimateoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.112Z
estimatedTokens: 159
keywords: [Delivery, estimation, products]
---

# ConnectApi.DeliveryEstimateOutputRepresentation

> Delivery estimation information for products.

# ConnectApi.DeliveryEstimateOutputRepresentation

Delivery estimation information for products.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.DeliveryEstimationErrorOutputRepresentation | Any error that was returned, including the error code and error message. | 63.0 |
| location | String | Location external reference. | 63.0 |
| productDeliverEstimations | ListConnectApi.ProductDeliverEstimationOutputRepresentation | List of product delivery estimations. | 63.0 |
| shippingCarrierMethodExternalReference | String | Shipping carrier method external reference. | 63.0 |

## Related Topics

- ConnectApi.DeliveryEstimationErrorOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_delivery_estimation_error_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ProductDeliverEstimationOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_deliver_estimation_output.htm)
