---
title: "Routing, Find Routes with Fewest Splits Using OCI"
domain: chatterapi
topic: routing-find-routes-with-fewest-splits-using-oci
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.618Z
estimatedTokens: 761
keywords: [Routing, Routes, Fewest, Splits, OCI, order, summaries, inventory, availability, Omnichannel, identify, fulfillment, combines, functionality, resources]
---

# Routing, Find Routes with Fewest Splits Using OCI

> For one or more order summaries, find inventory availability using
      Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method
      combines the functionality of the Get Inventory Availability and Find Routes With Fewest
      Splits resources.

# Routing, Find Routes with Fewest Splits Using OCI

For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method combines the functionality of the Get Inventory Availability and Find Routes With Fewest Splits resources.

Resource

```

```

Available version

54.0

HTTP methods

POST

Request body for POST

[Find Routes With Fewest Splits Using OCI Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_input.htm "Data used to calculate order fulfillment routes involving the fewest number of shipment splits, taking into account inventory availability.")

Root XML tag

<findRoutesWithFewestSplitsUsingOCI>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| findRoutesWithFewestSplitsUsingOCIInputs | Find Routes With Fewest Splits Group Using OCI Input[] | Each list element represents a routing request for one order. | At least one element is required | 54.0 |
| ociExpandAttributes | Collection | The string value groupEligibilityExclusion excludes specific locations. |  |  |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Find Routes With Fewest Splits Using OCI Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Find Routes With Fewest Splits Using OCI Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Routing, Find Routes with Fewest Splits](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits.htm "Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results.")

-   [Availability Records, Get Availability](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_get_availability.htm "Retrieve inventory availability data for one or more products at one or more inventory locations or location groups.")

## Code Examples

```
/commerce/order-management/routing/actions/find-routes-with-fewest-splits-using-oci
```

## Related Topics

- Find Routes With Fewest Splits Using OCI Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_using_o_c_i_input.htm)
- Find Routes With Fewest Splits Group Using OCI
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_find_routes_with_fewest_splits_group_using_o_c_i_input.htm)
- Find Routes With Fewest Splits Using OCI Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_using_o_c_i_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Routing, Find Routes with Fewest Splits (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits.htm)
- Availability Records, Get Availability (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oci_availability_records_get_availability.htm)
