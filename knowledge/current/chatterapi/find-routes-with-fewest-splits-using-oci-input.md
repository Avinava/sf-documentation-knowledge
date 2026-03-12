---
title: "Find Routes With Fewest Splits Using OCI Input"
domain: chatterapi
topic: find-routes-with-fewest-splits-using-oci-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.739Z
estimatedTokens: 285
keywords: [Routes, Fewest, Splits, OCI, Input, Data, calculate, order, fulfillment, involving, number, shipment, taking, account, inventory]
---

# Find Routes With Fewest Splits Using OCI Input

> Data used to calculate order fulfillment routes involving the fewest number of shipment
    splits, taking into account inventory availability.

# Find Routes With Fewest Splits Using OCI Input

Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.

Root XML tag

<findRoutesWithFewestSplitsUsingOCI>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| findRoutesWithFewestSplitsUsingOCIInputs | Find Routes With Fewest Splits Group Using OCI Input[] | Each list element represents a routing request for one order. | At least one element is required | 54.0 |
| ociExpandAttributes | Collection | The string value groupEligibilityExclusion excludes specific locations. |  |  |

#### See Also

-   [Routing, Find Routes with Fewest Splits Using OCI](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method combines the functionality of the Get Inventory Availability and Find Routes With Fewest Splits resources.")

## Related Topics

- Find Routes With Fewest Splits Group Using OCI
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_group_using_o_c_i_input.htm)
- Routing, Find Routes with Fewest Splits Using OCI (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm)
