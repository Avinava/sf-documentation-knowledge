---
title: "OCI Release Reservation Output"
domain: chatterapi
topic: oci-release-reservation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.001Z
estimatedTokens: 113
keywords: [OCI, Release, Reservation, Output, inventory, reservations]
---

# OCI Release Reservation Output

> Response to a request to release one or more inventory
      reservations.

# OCI Release Reservation Output

Response to a request to release one or more inventory reservations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | OCI Release Reservation Error Output[] | Responses for the individual reservations in the release request. | Big, 51.0 | 51.0 |
| success | Boolean | Indicates whether the request was successful. | Big, 51.0 | 51.0 |

## Related Topics

- OCI Release Reservation Error Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_release_reservation_error_output.htm)
