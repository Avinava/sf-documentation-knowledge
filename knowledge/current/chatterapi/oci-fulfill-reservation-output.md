---
title: "OCI Fulfill Reservation Output"
domain: chatterapi
topic: oci-fulfill-reservation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:21.176Z
estimatedTokens: 114
keywords: [OCI, Fulfill, Reservation, inventory, reservations]
---

> Response to a request to fulfill one or more inventory
      reservations.

# OCI Fulfill Reservation Output

Response to a request to fulfill one or more inventory reservations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | OCI Fulfill Reservation Error Output[] | Responses for the individual reservations in the fulfillment request. | Big, 51.0 | 51.0 |
| success | Boolean | Indicates whether the request was successful. | Big, 51.0 | 51.0 |

## Related Topics

- OCI Fulfill Reservation Error Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_fulfill_reservation_error_output.htm)
