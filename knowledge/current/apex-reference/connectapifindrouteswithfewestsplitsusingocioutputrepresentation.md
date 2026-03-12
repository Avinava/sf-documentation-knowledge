---
title: "ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitsusingocioutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.521Z
estimatedTokens: 291
keywords: [order, fulfillment, routes, inventory, availability]
---

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation

> A list of order fulfillment routes with inventory availability
      information.

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation

A list of order fulfillment routes with inventory availability information.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| results | List<ConnectApi.​FindRoutesWithFewest​SplitsWithInventory​OutputRepresentation> | Each element of the list is the response for one element of the input list. | 54.0 |

#### See Also

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​FindRoutesWithFewest​SplitsWithInventory​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_with_inventory_output.htm)
- findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
