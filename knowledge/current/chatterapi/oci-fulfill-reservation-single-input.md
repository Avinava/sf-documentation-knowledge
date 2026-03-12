---
title: "OCI Fulfill Reservation Single Input"
domain: chatterapi
topic: oci-fulfill-reservation-single-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.245Z
estimatedTokens: 226
keywords: [OCI, Fulfill, Reservation, Input, inventory]
---

# OCI Fulfill Reservation Single Input

> An inventory reservation to fulfill.

# OCI Fulfill Reservation Single Input

An inventory reservation to fulfill.

Root XML tag

<ociFulfillReservationSingle>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| externalRefId | String | The external reference ID of the location that’s fulfilling the reservation. | Optional | 51.0 |
| locationIdentifier | String | The identifier of the location that’s fulfilling the reservation. | Required | 51.0 |
| quantity | Double | The quantity being fulfilled. | Required | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| stockKeepingUnit | String | The SKU of the product being fulfilled. | Required | 51.0 |
