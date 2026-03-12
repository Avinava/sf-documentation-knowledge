---
title: "OCI Release Reservation Single Input"
domain: chatterapi
topic: oci-release-reservation-single-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.262Z
estimatedTokens: 294
keywords: [OCI, Release, Reservation, Input, inventory]
---

# OCI Release Reservation Single Input

> A single inventory reservation to release.

# OCI Release Reservation Single Input

A single inventory reservation to release.

Root XML tag

<ociReleaseReservationSingle>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| externalRefId | String | The external reference ID of the location or location group that has the reservation. | Optional | 51.0 |
| locationGroupIdentifier | String | The identifier of the location group that has the reservation. | The identifier for a location or location group, but not both, is required. | 51.0 |
| locationIdentifier | String | The identifier of the location that has the reservation. | The identifier for a location or location group, but not both, is required. | 51.0 |
| quantity | Double | The quantity of reserved inventory to release. | Required | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| stockKeepingUnit | String | The SKU of the product to release. | Required | 51.0 |
