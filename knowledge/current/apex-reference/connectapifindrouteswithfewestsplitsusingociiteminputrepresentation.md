---
title: "ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitsusingociiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.950Z
estimatedTokens: 467
keywords: [ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation, quantity, product, location, group, assigned, fulfill, it.]
---

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation

> A quantity of a product and a location group or location assigned to
      fulfill it.

# ConnectApi.FindRoutesWithFewestSplitsUsingOCIItemInputRepresentation

A quantity of a product and a location group or location assigned to fulfill it.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroup​Identifier | String | The External Reference of the location group or location assigned to the order item. If you specify a location group, inventory is considered for all locations belonging to that group. | Required | 54.0 |
| quantity | Double | Quantity of the product. | Required | 54.0 |
| stockKeepingUnit | String | SKU of the product. | Required | 54.0 |

#### See Also

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")

-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")

-   [ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_group_using_o_c_i.htm "Data used to calculate inventory availability and fulfillment routes for one order involving the fewest number of shipment splits.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm)
- ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm)
- ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_group_using_o_c_i.htm)
