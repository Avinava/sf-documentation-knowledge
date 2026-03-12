---
title: "Reservations, Release"
domain: chatterapi
topic: reservations-release
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.033Z
estimatedTokens: 259
keywords: [Reservations, Release, inventory, free]
---

# Reservations, Release

> Release one or more existing inventory reservations to free up that
      inventory.

# Reservations, Release

Release one or more existing inventory reservations to free up that inventory.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[OCI Release Reservation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_release_reservation_input.htm "Details of one or more inventory reservations to release.")

Root XML tag

<ociReleaseReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| releaseRecords | OCI Release Reservation Single Input[] | List of inventory reservations to release. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |

Response body for POST

[OCI Release Reservation Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_release_reservation_output.htm "Response to a request to release one or more inventory reservations.")

## Code Examples

```
/commerce/oci/reservation/actions/releases
```

## Related Topics

- OCI Release Reservation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_release_reservation_input.htm)
- OCI Release Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_release_reservation_single_input.htm)
- OCI Release Reservation Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_release_reservation_output.htm)
