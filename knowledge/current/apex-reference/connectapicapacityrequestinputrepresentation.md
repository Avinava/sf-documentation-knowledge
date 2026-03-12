---
title: "ConnectApi.CapacityRequestInputRepresentation"
domain: apex-reference
topic: connectapicapacityrequestinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.730Z
estimatedTokens: 128
keywords: [location’s, fulfillment, order, capacity]
---

# ConnectApi.CapacityRequestInputRepresentation

> Request related to a location’s fulfillment order
    capacity.

# ConnectApi.CapacityRequestInputRepresentation

Request related to a location’s fulfillment order capacity.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | Unique string that identifies the request. Can be a UUID. Use the action request IDs in response data to identify which requests succeeded or failed. | Required | 55.0 |
| locationId | String | ID of the location associated with the request. | Required | 55.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
