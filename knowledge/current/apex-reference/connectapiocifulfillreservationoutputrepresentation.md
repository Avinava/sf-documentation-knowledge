---
title: "ConnectApi.OCIFulfillReservationOutputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.385Z
keywords: [ConnectApi.OCIFulfillReservationOutputRepresentation]
---

# ConnectApi.OCIFulfillReservationOutputRepresentation

# ConnectApi.OCIFulfillReservationOutputRepresentation

Response to a request to fulfill one or more inventory reservations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​OCIFulfillReservation​ErrorOutputRepresentation> | Responses for the individual reservations in the fulfillment request. | 51.0 |
| success | Boolean | Indicates whether the request was successful. | 51.0 |