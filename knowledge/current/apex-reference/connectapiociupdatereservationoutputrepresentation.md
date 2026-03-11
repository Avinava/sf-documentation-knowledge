---
title: "ConnectApi.OCIUpdateReservationOutputRepresentation"
domain: apex-reference
topic: connectapiociupdatereservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.423Z
keywords: [ConnectApi.OCIUpdateReservationOutputRepresentation]
---

# ConnectApi.OCIUpdateReservationOutputRepresentation

# ConnectApi.OCIUpdateReservationOutputRepresentation

Result of an Omnichannel Inventory update request for reserved inventory.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| details | List ConnectApi.OCIUpdateReservationSingleOutputRepresentation [] | Details for each product in the reservation. | 61.0 |
| errors | List ConnectApi.OCIUpdateReservationErrorOutputRepresentation [] | Any errors returned by the reservation update request. | 61.0 |
| reservationTime | String | The time when the reservation was updated. | 61.0 |
| success | Boolean | Indicates whether the reservation was successfully updated. | 61.0 |