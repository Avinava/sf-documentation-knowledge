---
title: "ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation"
domain: apex-reference
topic: connectapiconfirmheldfocapacityrequestinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.662Z
estimatedTokens: 175
keywords: [ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation, Request, confirm, held, fulfillment, order, capacity, locations.]
---

# ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation

> Request to confirm held fulfillment order capacity at one or more
      locations.

# ConnectApi.ConfirmHeldFOCapacityRequestInputRepresentation

Request to confirm held fulfillment order capacity at one or more locations.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothing | Boolean | Controls whether a single failed request cancels all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 55.0 |
| capacityRequests | List<ConnectApi.​CapacityRequest​InputRepresentation> | List of requests to confirm held fulfillment order capacity. Each request is for one fulfillment order assigned to one location. | Required | 55.0 |

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CapacityRequest​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_capacity_request.htm)
