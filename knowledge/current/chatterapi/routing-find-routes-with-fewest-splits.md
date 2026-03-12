---
title: "Routing, Find Routes with Fewest Splits"
domain: chatterapi
topic: routing-find-routes-with-fewest-splits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.614Z
estimatedTokens: 814
keywords: [Routing, Routes, Fewest, Splits, combinations, inventory, locations, fulfill, order, limit, shipment, checks, potential, returning, maximum]
---

# Routing, Find Routes with Fewest Splits

> Returns combinations of inventory locations that can fulfill an
      order within a specified limit of shipment splits. By default, checks up to 1,000,000
      potential routes, returning a maximum of 10,000 results.

# Routing, Find Routes with Fewest Splits

Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[Find Routes With Fewest Splits Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_input.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits.")

Root XML tag

<findRoutesWithFewestSplits>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| locationAvailable​Inventory | Location Availability Input[] | Each list element represents the available quantity of a product at an inventory location. | At least one element is required | 51.0 |
| maximumNumberOf​Splits | Integer | The maximum allowable number of shipment splits. Routing options that involve more than this number of splits are not returned.NoteEach split represents an additional shipment. Specifying a maximum of 0 returns only locations that can fulfill the entire order in a single shipment. A maximum of 1 returns combinations of locations that can fulfill the order in one or two shipments, and so on. | Optional | 51.0 |
| ordered​Quantities | Quantity With SKU Input[] | Each list element represents a quantity of a product to be routed for fulfillment. | At least one element is required | 51.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Find Routes With Fewest Splits Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_output.htm "A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Find Routes With Fewest Splits Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_output.htm "A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Routing, Find Routes with Fewest Splits Using OCI](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm "For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method combines the functionality of the Get Inventory Availability and Find Routes With Fewest Splits resources.")

## Code Examples

```
/commerce/order-management/routing/actions/find-routes-with-fewest-splits
```

## Related Topics

- Find Routes With Fewest Splits Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_input.htm)
- Location Availability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_location_availability_input.htm)
- Quantity With SKU Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_quantity_with_sku_input.htm)
- Find Routes With Fewest Splits Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Routing, Find Routes with Fewest Splits Using OCI (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm)
