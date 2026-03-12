---
title: "OCI Transfer Reservation Single Output"
domain: chatterapi
topic: oci-transfer-reservation-single-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.014Z
estimatedTokens: 317
keywords: [OCI, Transfer, Reservation, Output, transferred]
---

# OCI Transfer Reservation Single Output

> Details of a single transferred reservation.

# OCI Transfer Reservation Single Output

Details of a single transferred reservation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | The UUID that identifies the original transfer reservation request. | Small, 51.0 | 51.0 |
| externalRefId | String | The external reference ID of the location that received the reservation. | Small, 51.0 | 51.0 |
| fromLocationGroupIdentifier | String | The identifier of the location group that sent the reservation. | Small, 51.0 | 51.0 |
| fromLocationIdentifier | String | The identifier of the location that sent the reservation. | Small, 51.0 | 51.0 |
| ignoreAvailabilityCheck | Boolean | Whether this call ignored availability data at the location that received the reservation. | Small, 52.0 | 52.0 |
| quantity | Double | The quantity of transferred inventory. | Small, 51.0 | 51.0 |
| stockKeepingUnit | String | The SKU of the transferred product. | Small, 51.0 | 51.0 |
| toLocationGroupIdentifier | String | The identifier of the location group that received the reservation. | Small, 51.0 | 51.0 |
| toLocationIdentifier | String | The identifier of the location that received the reservation. | Small, 51.0 | 51.0 |
