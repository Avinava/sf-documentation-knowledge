---
title: "Reservations, Create"
domain: chatterapi
topic: reservations-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.026Z
estimatedTokens: 466
keywords: [Reservations, inventory, reservation, Omnichannel]
---

# Reservations, Create

> Create an inventory reservation in Omnichannel
    Inventory.

# Reservations, Create

Create an inventory reservation in Omnichannel Inventory.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[OCI Create Reservation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_create_reservation_input.htm "Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.")

Root XML tag

<ociCreateReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. If the OmnichannelInventoryService class's createReservation method is called, the actionRequestId is used for the reservationId. | Required | 51.0 |
| allowPartial​Reservations | Boolean | When true, if the system can’t create the entire reservation, then it attempts to create a partial reservation. | Optional | 51.0 |
| createRecords | OCI Create Reservation Single Input[] | A list of product quantities and locations or location groups. The list can include up to 100 elements. | At least one element is required | 51.0 |
| expirationSeconds | Integer | A length of time in seconds. If the reservation isn’t fulfilled within this amount of time after the reservationTime, then it expires. The maximum value is 14400. | Optional | 51.0 |
| externalRefId | String | External reference ID. | Optional | 51.0 |
| reservationTime | String | The time at which to record the reservation. Example: 2020-07-24T21:13:00Z | Optional | 51.0 |

Response body for POST

[OCI Create Reservation Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_create_reservation_output.htm "Result of an Omnichannel Inventory reservation creation request.")

## Code Examples

```
/commerce/oci/reservation/actions/reservations
```

## Related Topics

- OCI Create Reservation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_create_reservation_input.htm)
- OCI Create Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_create_reservation_single_input.htm)
- OCI Create Reservation Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_create_reservation_output.htm)
