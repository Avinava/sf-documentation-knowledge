---
title: "OCI Update Reservation Input"
domain: chatterapi
topic: oci-update-reservation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.276Z
estimatedTokens: 324
keywords: [OCI, Reservation, Input, Data, Omnichannel, Inventory, item, reservations]
---

# OCI Update Reservation Input

> Data to update one or more Omnichannel Inventory item reservations.

# OCI Update Reservation Input

Data to update one or more Omnichannel Inventory item reservations.

Root XML tag

<ociUpdateReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | Unique and idempotent action request ID. Use in response data to identify which requests succeeded or failed. | Required | 61.0 |
| allowPartialReservations | Boolean | When true, if the system can’t update the entire reservation, then it attempts to update a partial reservation. | Optional | 61.0 |
| externalRefId | String | External reference ID. | Optional | 61.0 |
| reservationId | String | The ID of the inventory reservation. |  | 61.0 |
| reservationTime | String | The time the reservation was updated. Example: 2020-07-24T21:13:00Z. | Optional | 61.0 |
| updateAllOrNothingRecords | Boolean | Controls whether a single failed request updates all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 61.0 |
| updateRecords | OCI Update Reservation Single Input [] | A list of product quantities and locations or location groups. The list can have up to 100 elements. | At least one element is required | 61.0 |

## Related Topics

- OCI Update Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_update_reservation_single_input.htm)
