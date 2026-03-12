---
title: "ConnectApi.FindRoutesWithFewestSplitsWithInventoryOutputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitswithinventoryoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.524Z
estimatedTokens: 411
keywords: [inventory, locations, combine, fulfill, order, availability, data]
---

# ConnectApi.FindRoutesWithFewestSplitsWithInventoryOutputRepresentation

> Sets of inventory locations that can combine to fulfill an order, with
      availability data for those locations.

# ConnectApi.FindRoutesWithFewestSplitsWithInventoryOutputRepresentation

Sets of inventory locations that can combine to fulfill an order, with availability data for those locations.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| inventory | ConnectApi.​OCIGetInventoryAvailability​OutputRepresentation | Inventory availability data for the location groups and locations specified in the input. | 54.0 |
| targetLocations | List<ConnectApi.​AvailableLocation​OutputRepresentation> | Each entry in the list is a set of inventory locations that can combine to fulfill an order. | 54.0 |

#### See Also

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")

-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- ConnectApi.​OCIGetInventoryAvailability​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_o_c_i_get_inventory_availability_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AvailableLocation​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_available_location_output.htm)
- findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm)
