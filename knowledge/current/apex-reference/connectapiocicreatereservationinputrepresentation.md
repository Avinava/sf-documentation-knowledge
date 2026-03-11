---
title: "ConnectApi.OCICreateReservationInputRepresentation"
domain: apex-reference
topic: connectapiocicreatereservationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.355Z
keywords: [ConnectApi.OCICreateReservationInputRepresentation]
---

# ConnectApi.OCICreateReservationInputRepresentation

# ConnectApi.OCICreateReservationInputRepresentation

Data to reserve inventory at one or more Omnichannel Inventory locations or location groups.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. If the OmnichannelInventoryService class's createReservation method is called, the actionRequestId is used for the reservationId. | Required | 51.0 |
| allowPartial​Reservations | Boolean | When true, if the system can’t create the entire reservation, then it attempts to create a partial reservation. | Optional | 51.0 |
| createRecords | List<ConnectApi.​OCICreateReservation​SingleInput​Representation> | A list of product quantities and locations or location groups. The list can include up to 100 elements. | At least one element is required | 51.0 |
| expirationSeconds | Integer | A length of time in seconds. If the reservation isn’t fulfilled within this amount of time after the reservationTime, then it expires. The maximum value is 14400. | Optional | 51.0 |
| externalRefId | String | External reference ID. | Optional | 51.0 |
| reservationTime | String | The time at which to record the reservation. Example: 2020-07-24T21:13:00Z | Optional | 51.0 |