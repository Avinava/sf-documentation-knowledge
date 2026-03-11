---
title: "ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation"
domain: apex-reference
topic: connectapifindrouteswithfewestsplitsgroupusingociinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.187Z
keywords: [ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation, See]
---

# ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation

# ConnectApi.FindRoutesWithFewestSplitsGroupUsingOCIInputRepresentation

Data used to calculate inventory availability and fulfillment routes for one order involving the fewest number of shipment splits.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| excludeLocations | List<String> | List of locations to exclude from the routing calculations. | Optional | 55.0 |
| maximumNumber​OfSplits | Integer | Maximum allowable number of shipment splits. Routing options that involve more than this number of splits are not returned.NoteEach split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on. | Required | 54.0 |
| orderedItems | List<ConnectApi.FindRoutesWithFewestSplits​UsingOCIItemInputRepresentation> | Each list element represents a quantity of a product to be routed for fulfillment and the assigned location group or location. | At least one element is required | 54.0 |

#### See Also

-   [findRoutesWithFewestSplitsUsingOCI(findRoutesWithFewestSplitsUsingOCIInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Routing_static_methods.htm#apex_ConnectAPI_Routing_findRoutesWithFewestSplitsUsingOCI_1 "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. This method combines the functionality of the getInventoryAvailability() and findRoutesWithFewestSplits() methods.")
    
-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_find_routes_with_fewest_splits_using_o_c_i.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")