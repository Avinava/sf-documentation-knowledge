---
title: "Find Routes With Fewest Splits Using OCI Item Input"
domain: chatterapi
topic: find-routes-with-fewest-splits-using-oci-item-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.742Z
estimatedTokens: 441
keywords: [Routes, Fewest, Splits, OCI, Item, Input, quantity, product, location, group, assigned, fulfill]
---

# Find Routes With Fewest Splits Using OCI Item Input

> A quantity of a product and a location group or location assigned to
      fulfill it.

# Find Routes With Fewest Splits Using OCI Item Input

A quantity of a product and a location group or location assigned to fulfill it.

Root XML tag

<findRoutesWithFewestSplitsUsingOCIItemInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationGroupIdentifier | String | The External Reference of the location group or location assigned to the order item. If you specify a location group, inventory is considered for all locations belonging to that group. | Required | 54.0 |
| quantity | Double | Quantity of the product. | Required | 54.0 |
| stockKeepingUnit | String | SKU of the product. | Required | 54.0 |

#### See Also

-   [Routing, Find Routes with Fewest Splits Using OCI](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method combines the functionality of the Get Inventory Availability and Find Routes With Fewest Splits resources.")

-   [Find Routes With Fewest Splits Using OCI Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_input.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")

-   [Find Routes With Fewest Splits Group Using OCI Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_group_using_o_c_i_input.htm "Data used to calculate inventory availability and fulfillment routes for one order involving the fewest number of shipment splits.")

## Related Topics

- Routing, Find Routes with Fewest Splits Using OCI (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm)
- Find Routes With Fewest Splits Using OCI Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_input.htm)
- Find Routes With Fewest Splits Group Using OCI Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_group_using_o_c_i_input.htm)
