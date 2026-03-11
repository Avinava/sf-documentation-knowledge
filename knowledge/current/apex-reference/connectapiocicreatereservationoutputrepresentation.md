---
title: "ConnectApi.OCICreateReservationOutputRepresentation"
domain: apex-reference
topic: connectapiocicreatereservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.377Z
keywords: [ConnectApi.OCICreateReservationOutputRepresentation]
---

# ConnectApi.OCICreateReservationOutputRepresentation

# ConnectApi.OCICreateReservationOutputRepresentation

Result of an Omnichannel Inventory reservation creation request.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| details | List<ConnectApi.​OCICreateReservation​SingleOutputRepresentation> | Details for each product in the reservation. | 51.0 |
| errors | List<ConnectApi.​OCICreateReservation​ErrorOutputRepresentation> | Any errors returned by the reservation request. | 51.0 |
| expirationTime | String | The time at which the reservation would expire. | 51.0 |
| reservationTime | String | The time when the reservation was recorded. | 51.0 |
| success | Boolean | Indicates whether the reservation was successfully created. | 51.0 |