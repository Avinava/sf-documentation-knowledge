---
title: "ConnectApi.OCITransferReservationSingleOutputRepresentation"
domain: apex-reference
topic: connectapiocitransferreservationsingleoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.419Z
keywords: [ConnectApi.OCITransferReservationSingleOutputRepresentation]
---

# ConnectApi.OCITransferReservationSingleOutputRepresentation

# ConnectApi.OCITransferReservationSingleOutputRepresentation

Details of a single transferred reservation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionRequestId | String | The UUID that identifies the original transfer reservation request. | 51.0 |
| externalRefId | String | The external reference ID of the location that received the reservation. | 51.0 |
| fromLocationGroupIdentifier | String | The identifier of the location group that sent the reservation. | 51.0 |
| fromLocationIdentifier | String | The identifier of the location that sent the reservation. | 51.0 |
| ignoreAvailabilityCheck | Boolean | Whether this call ignored availability data at the location that received the reservation. | 52.0 |
| quantity | Double | The quantity of transferred inventory. | 51.0 |
| stockKeepingUnit | String | The SKU of the transferred product. | 51.0 |
| toLocationGroupIdentifier | String | The identifier of the location group that received the reservation. | 51.0 |
| toLocationIdentifier | String | The identifier of the location that received the reservation. | 51.0 |