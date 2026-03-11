---
title: "ConnectApi.LocationCapacityOutputRepresentation"
domain: apex-reference
topic: connectapilocationcapacityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.060Z
keywords: [ConnectApi.LocationCapacityOutputRepresentation]
---

# ConnectApi.LocationCapacityOutputRepresentation

# ConnectApi.LocationCapacityOutputRepresentation

Fulfillment order capacity values for a location.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| assigned | Integer | Value of the location’s Assigned Fulfillment Order Count. | 55.0 |
| capacity | Integer | Value of the location’s Fulfillment Order Capacity. This property represents the location’s maximum capacity. | 55.0 |
| error | ConnectApi.​ErrorResponse | Error returned by the request, if any. | 55.0 |
| heldCapacity | Integer | Number of fulfillment orders that the location is holding capacity for. | 55.0 |
| locationId | String | ID of the location. | 55.0 |