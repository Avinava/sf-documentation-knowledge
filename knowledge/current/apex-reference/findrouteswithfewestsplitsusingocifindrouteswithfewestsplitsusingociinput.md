---
title: "findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)"
domain: apex-reference
topic: findrouteswithfewestsplitsusingocifindrouteswithfewestsplitsusingociinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [findRoutesWithFewestSplitsUsingOCI, findRoutesWithFewestSplitsUsingOCIInput, order, summaries, find, inventory, availability, Omnichannel, Inventory, identify, fulfillment, routes, fewest, splits., default, checks, 000, potential, returning, maximum]
---

# findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)

> For one or more order summaries, find inventory availability using
      Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default,
      checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method
      combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.

### findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)

For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation findRoutesWithFewestSplitsUsingOCI(ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation findRoutesWithFewestSplitsUsingOCIInput)

#### Parameters

findRoutesWithFewestSplitsUsingOCIInput

Type: [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")

The input includes, for each order, the ordered item quantities, the assigned location group or locations, and, optionally, a maximum allowable number of shipment splits and a list of locations to exclude from the calculation.

#### Return Value

Type: [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")

#### See Also

-   [getInventoryAvailability(inventoryAvailabilityInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OmnichannelInventoryService_static_methods.htm#apex_ConnectAPI_OmnichannelInventoryService_getInventoryAvailability_1 "Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.")
    
-   [findRoutesWithFewestSplits(findRoutesWithFewestSplitsInputRepresentation)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplits_1 "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")