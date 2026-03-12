---
title: "ConnectApi.OCICreateReservationSingleInputRepresentation"
domain: apex-reference
topic: connectapiocicreatereservationsingleinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.220Z
estimatedTokens: 203
keywords: [ConnectApi.OCICreateReservationSingleInputRepresentation, quantity, product, Omnichannel, Inventory, location, group, which, reserve, it.]
---

# ConnectApi.OCICreateReservationSingleInputRepresentation

> A quantity of a product and an Omnichannel Inventory location or
      location group at which to reserve it.

# ConnectApi.OCICreateReservationSingleInputRepresentation

A quantity of a product and an Omnichannel Inventory location or location group at which to reserve it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroupIdentifier | String | Identifier of the location group at which to reserve inventory. | Either locationGroupIdentifier or locationIdentifier is required, but not both | 51.0 |
| locationIdentifier | String | Identifier of the location at which to reserve inventory. | Either locationGroupIdentifier or locationIdentifier is required, but not both | 51.0 |
| quantity | Double | The quantity of the product to reserve. | Required | 51.0 |
| stockKeepingUnit | String | The SKU of the product to reserve. | Required | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
