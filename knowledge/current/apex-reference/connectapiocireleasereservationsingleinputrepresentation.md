---
title: "ConnectApi.OCIReleaseReservationSingleInputRepresentation"
domain: apex-reference
topic: connectapiocireleasereservationsingleinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.467Z
estimatedTokens: 286
keywords: [inventory, reservation, release]
---

# ConnectApi.OCIReleaseReservationSingleInputRepresentation

> A single inventory reservation to release.

# ConnectApi.OCIReleaseReservationSingleInputRepresentation

A single inventory reservation to release.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| externalRefId | String | The external reference ID of the location or location group that has the reservation. | Optional | 51.0 |
| locationGroupIdentifier | String | The identifier of the location group that has the reservation. | The identifier for a location or location group, but not both, is required. | 51.0 |
| locationIdentifier | String | The identifier of the location that has the reservation. | The identifier for a location or location group, but not both, is required. | 51.0 |
| quantity | Double | The quantity of reserved inventory to release. | Required | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| stockKeepingUnit | String | The SKU of the product to release. | Required | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
