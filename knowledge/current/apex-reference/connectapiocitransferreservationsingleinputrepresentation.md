---
title: "ConnectApi.OCITransferReservationSingleInputRepresentation"
domain: apex-reference
topic: connectapiocitransferreservationsingleinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.377Z
keywords: [ConnectApi.OCITransferReservationSingleInputRepresentation]
---

# ConnectApi.OCITransferReservationSingleInputRepresentation

# ConnectApi.OCITransferReservationSingleInputRepresentation

An inventory reservation transfer.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | A UUID that identifies the request. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 51.0 |
| externalRefId | String | The external reference ID of the location receiving the transfer. | Optional | 51.0 |
| fromLocationGroupIdentifier | String | The identifier of the location group sending the reservation. | The identifier for a sending location or location group, but not both, is required | 51.0 |
| fromLocationIdentifier | String | The identifier of the location sending the reservation. | The identifier for a sending location or location group, but not both, is required | 51.0 |
| ignoreAvailabilityCheck | Boolean | If true, force the transfer even if the receiving location doesn’t have sufficient available inventory. The default value is false. | Optional | 52.0 |
| quantity | Double | The quantity of inventory being transferred. | Required | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| stockKeepingUnit | String | The SKU of the product being transferred. | Required | 51.0 |
| toLocationGroupIdentifier | String | The identifier of the location group receiving the reservation. | The identifier for a receiving location or location group, but not both, is required | 51.0 |
| toLocationIdentifier | String | The identifier of the location receiving the reservation. | The identifier for a receiving location or location group, but not both, is required | 51.0 |