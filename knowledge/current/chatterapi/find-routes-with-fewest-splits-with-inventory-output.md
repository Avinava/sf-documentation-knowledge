---
title: "Find Routes With Fewest Splits With Inventory Output"
domain: chatterapi
topic: find-routes-with-fewest-splits-with-inventory-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.912Z
estimatedTokens: 264
keywords: [Routes, Fewest, Splits, Inventory, Output, locations, combine, fulfill, order, availability, data]
---

# Find Routes With Fewest Splits With Inventory Output

> Sets of inventory locations that can combine to fulfill an order, with
      availability data for those locations.

# Find Routes With Fewest Splits With Inventory Output

Sets of inventory locations that can combine to fulfill an order, with availability data for those locations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 54.0 | 54.0 |
| inventory | OCI Get Inventory Availability Output | Inventory availability data for the location groups and locations specified in the input. | Big, 54.0 | 54.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 54.0 | 54.0 |
| targetLocations | Available Location Output[] | Each entry in the list is a set of inventory locations that can combine to fulfill an order. | Big, 54.0 | 54.0 |

#### See Also

-   [Find Routes With Fewest Splits Using OCI Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- OCI Get Inventory Availability Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_get_inventory_availability_output.htm)
- Available Location Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_available_location_output.htm)
- Find Routes With Fewest Splits Using OCI Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_find_routes_with_fewest_splits_using_o_c_i_output.htm)
