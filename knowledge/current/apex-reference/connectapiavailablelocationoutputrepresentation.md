---
title: "ConnectApi.AvailableLocationOutputRepresentation"
domain: apex-reference
topic: connectapiavailablelocationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:26.323Z
estimatedTokens: 458
keywords: [inventory, locations, combine, fulfill, order]
---

# ConnectApi.AvailableLocationOutputRepresentation

> A set of inventory locations that can combine to fulfill an
      order.

# ConnectApi.AvailableLocationOutputRepresentation

A set of inventory locations that can combine to fulfill an order.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| locations | List<String> | A list of inventory locations. | 51.0 |

#### See Also

-   [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1 "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")

-   [ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_output.htm "A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments.")

-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_output.htm)
- ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm)
