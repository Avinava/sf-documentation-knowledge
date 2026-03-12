---
title: "OCI Release Reservation Input"
domain: chatterapi
topic: oci-release-reservation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.258Z
estimatedTokens: 132
keywords: [OCI, Release, Reservation, Input, inventory, reservations]
---

# OCI Release Reservation Input

> Details of one or more inventory reservations to release.

# OCI Release Reservation Input

Details of one or more inventory reservations to release.

Root XML tag

<ociReleaseReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| releaseRecords | OCI Release Reservation Single Input[] | List of inventory reservations to release. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |

## Related Topics

- OCI Release Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_release_reservation_single_input.htm)
