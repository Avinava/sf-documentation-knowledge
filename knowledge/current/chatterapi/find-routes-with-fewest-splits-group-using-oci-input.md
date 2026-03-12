---
title: "Find Routes With Fewest Splits Group Using OCI Input"
domain: chatterapi
topic: find-routes-with-fewest-splits-group-using-oci-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.732Z
estimatedTokens: 484
keywords: [Routes, Fewest, Splits, Group, OCI, Input, Data, calculate, inventory, availability, fulfillment, order, involving, number, shipment]
---

# Find Routes With Fewest Splits Group Using OCI Input

> Data used to calculate inventory availability and fulfillment routes for one order
    involving the fewest number of shipment splits.

# Find Routes With Fewest Splits Group Using OCI Input

Data used to calculate inventory availability and fulfillment routes for one order involving the fewest number of shipment splits.

Root XML tag

<findRoutesWithFewestSplitsGroupUsingOCIInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| excludeLocations | String[] | List of locations to exclude from the routing calculations. | Optional | 55.0 |
| maximumNumber​OfSplits | Integer | The maximum allowable number of shipment splits. Routing options that involve more than this number of splits are not returned.NoteEach split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on. | Optional | 54.0 |
| orderedItems | Find Routes With Fewest Splits Using OCI Item Input[] | Each list element represents a quantity of a product to be routed for fulfillment and the assigned location group or location. | At least one element is required | 54.0 |

#### See Also

-   [Routing, Find Routes with Fewest Splits Using OCI](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method combines the functionality of the Get Inventory Availability and Find Routes With Fewest Splits resources.")

-   [Find Routes With Fewest Splits Using OCI Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_input.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")

## Related Topics

- Find Routes With Fewest Splits Using OCI Item
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_item_input.htm)
- Routing, Find Routes with Fewest Splits Using OCI (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm)
- Find Routes With Fewest Splits Using OCI Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_input.htm)
