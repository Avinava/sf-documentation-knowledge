---
title: "ConnectApi.ProductDeliverEstimationOutputRepresentation"
domain: apex-reference
topic: connectapiproductdeliverestimationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.533Z
estimatedTokens: 144
keywords: [ConnectApi.ProductDeliverEstimationOutputRepresentation, Delivery, estimation, information, product.]
---

# ConnectApi.ProductDeliverEstimationOutputRepresentation

> Delivery estimation information for each product.

# ConnectApi.ProductDeliverEstimationOutputRepresentation

Delivery estimation information for each product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| estimatedDeliveryDate | DatetimeConnectApi.EstimateDeliveryDateOutputRepresentation | Estimated delivery date. | 63.0 |
| estimatedShipDate | Datetime | Estimated shipping date. | 63.0 |
| quantity | Double | Product quantity. | 63.0 |
| routingCalculationType | String | Routing calculation type. | 63.0 |
| stockKeepingUnit | String | Product stock keeping unit (SKU). | 63.0 |

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.EstimateDeliveryDateOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_estimate_delivery_date_output.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
