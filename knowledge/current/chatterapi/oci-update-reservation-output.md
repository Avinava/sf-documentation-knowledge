---
title: "OCI Update Reservation Output"
domain: chatterapi
topic: oci-update-reservation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.019Z
estimatedTokens: 169
keywords: [OCI, Reservation, Output, Result, Omnichannel, Inventory, reserved]
---

# OCI Update Reservation Output

> Result of an Omnichannel Inventory update request for reserved inventory.

# OCI Update Reservation Output

Result of an Omnichannel Inventory update request for reserved inventory.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | OCI Update Reservation Single Output [] | Details for each product in the reservation. | Small, 61.0 | 61.0 |
| errors | OCI Update Reservation Error Output [] | Any errors returned by the reservation update request. | Big, 61.0 | 61.0 |
| reservationTime | String | The time when the reservation was updated. | Small, 61.0 | 61.0 |
| success | Boolean | Indicates whether the reservation was successfully updated. | Big, 61.0 | 61.0 |

## Related Topics

- OCI Update Reservation Single Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_update_reservation_single_output.htm)
- OCI Update Reservation Error Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_update_reservation_error_output.htm)
