---
title: "ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation"
domain: apex-reference
topic: connectapiconfirmheldfocapacityrequestinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.005Z
keywords: [ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation]
---

# ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation

# ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation

Request to confirm held fulfillment order capacity at one or more locations.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothing | Boolean | Controls whether a single failed request cancels all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 55.0 |
| capacityRequests | List<ConnectApi.​CapacityRequest​InputRepresentation> | List of requests to confirm held fulfillment order capacity. Each request is for one fulfillment order assigned to one location. | Required | 55.0 |