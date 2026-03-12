---
title: "OCI Transfer Reservation Input"
domain: chatterapi
topic: oci-transfer-reservation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.266Z
estimatedTokens: 254
keywords: [OCI, Transfer, Reservation, Input, inventory, transfers, whether, failure, cancels, entire]
---

# OCI Transfer Reservation Input

> A list of inventory reservation transfers and specifies whether a single failure
      cancels the entire list.

# OCI Transfer Reservation Input

A list of inventory reservation transfers and specifies whether a single failure cancels the entire list.

Root XML tag

<ociTransferReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothingTransferId | String | Controls whether a single failed transfer cancels all other transfers in the transferRecords list.To allow some transfers in the transferRecords list to succeed when others fail, don’t include this property.To cancel all the transfers in the transferRecords list when any of them fail, set this property to a UUID. The ID must be unique, but isn’t otherwise used in this version. | Optional | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| transferRecords | OCI Transfer Reservation Single Input[] | A list of inventory reservation transfers. The list can include up to 100 elements. | At least one element is required. | 51.0 |

## Related Topics

- OCI Transfer Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_transfer_reservation_single_input.htm)
