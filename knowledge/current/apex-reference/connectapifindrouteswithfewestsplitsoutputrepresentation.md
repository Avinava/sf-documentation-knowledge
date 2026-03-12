---
title: "ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.517Z
estimatedTokens: 265
keywords: [inventory, location, combinations, fulfill, order, exceeding, maximum, number, shipments]
---

# ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation

> A list of inventory location combinations that can fulfill an order
      without exceeding the maximum number of shipments.

# ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation

A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| targetLocations | List<ConnectApi.​AvailableLocation​OutputRepresentation> | Each element of the list is a set of inventory locations that together can fulfill the order being routed. | 51.0 |

#### See Also

-   [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1 "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AvailableLocation​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_available_location_output.htm)
- findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
