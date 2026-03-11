---
title: "ConnectApi.OCIReleaseReservationInputRepresentation"
domain: apex-reference
topic: connectapiocireleasereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.368Z
keywords: [ConnectApi.OCIReleaseReservationInputRepresentation]
---

# ConnectApi.OCIReleaseReservationInputRepresentation

# ConnectApi.OCIReleaseReservationInputRepresentation

Details of one or more inventory reservations to release.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| releaseRecords | List<ConnectApi.​OCIReleaseReservation​SingleInput​Representation> | List of inventory reservations to release. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
|  |  |  |  |  |