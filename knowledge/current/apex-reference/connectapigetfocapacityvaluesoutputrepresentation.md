---
title: "ConnectApi.GetFOCapacityValuesOutputRepresentation"
domain: apex-reference
topic: connectapigetfocapacityvaluesoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.613Z
estimatedTokens: 135
keywords: [fulfillment, order, capacity, locations]
---

# ConnectApi.GetFOCapacityValuesOutputRepresentation

> Response to a request for fulfillment order capacity values for one or
      more locations.

# ConnectApi.GetFOCapacityValuesOutputRepresentation

Response to a request for fulfillment order capacity values for one or more locations.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| locations | List<ConnectApi.​LocationCapacity​OutputRepresentation> | List of fulfillment order capacity values for one or more locations. | 55.0 |

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​LocationCapacity​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_location_capacity_output.htm)
