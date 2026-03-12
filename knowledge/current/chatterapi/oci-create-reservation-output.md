---
title: "OCI Create Reservation Output"
domain: chatterapi
topic: oci-create-reservation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.962Z
estimatedTokens: 189
keywords: [OCI, Reservation, Output, Result, Omnichannel, Inventory, creation]
---

# OCI Create Reservation Output

> Result of an Omnichannel Inventory reservation creation
      request.

# OCI Create Reservation Output

Result of an Omnichannel Inventory reservation creation request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | OCI Create Reservation Single Output[] | Details for each product in the reservation. | Small, 51.0 | 51.0 |
| errors | OCI Create Reservation Error Output[] | Any errors returned by the reservation request. | Big, 51.0 | 51.0 |
| expirationTime | String | The time at which the reservation would expire. | Small, 51.0 | 51.0 |
| reservationTime | String | The time when the reservation was recorded. | Small, 51.0 | 51.0 |
| success | Boolean | Indicates whether the reservation was successfully created. | Big, 51.0 | 51.0 |

## Related Topics

- OCI Create Reservation Single Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_create_reservation_single_output.htm)
- OCI Create Reservation Error Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_create_reservation_error_output.htm)
