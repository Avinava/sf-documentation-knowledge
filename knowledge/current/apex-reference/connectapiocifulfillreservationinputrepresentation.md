---
title: "ConnectApi.OCIFulfillReservationInputRepresentation"
domain: apex-reference
topic: connectapiocifulfillreservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.359Z
keywords: [ConnectApi.OCIFulfillReservationInputRepresentation]
---

# ConnectApi.OCIFulfillReservationInputRepresentation

# ConnectApi.OCIFulfillReservationInputRepresentation

A list of inventory reservations to fulfill.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentRecords | List<ConnectApi.​OCIFulfillReservation​SingleInput​Representation> | A list of inventory reservations. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |