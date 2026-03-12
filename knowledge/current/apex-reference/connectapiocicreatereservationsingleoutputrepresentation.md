---
title: "ConnectApi.OCICreateReservationSingleOutputRepresentation"
domain: apex-reference
topic: connectapiocicreatereservationsingleoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.139Z
estimatedTokens: 153
keywords: [inventory, reservation, product]
---

# ConnectApi.OCICreateReservationSingleOutputRepresentation

> Details of an inventory reservation for one
    product.

# ConnectApi.OCICreateReservationSingleOutputRepresentation

Details of an inventory reservation for one product.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCode | String | The error code, if any. | 51.0 |
| locationGroupIdentifier | String | Identifier of the location group where the inventory is reserved. | 51.0 |
| locationIdentifier | String | Identifier of the location where the inventory is reserved. | 51.0 |
| quantity | Double | The reserved quantity of the product. | 51.0 |
| stockKeepingUnit | String | The SKU of the reserved product. | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
