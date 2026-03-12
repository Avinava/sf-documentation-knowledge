---
title: "Find Routes With Fewest Splits Output"
domain: chatterapi
topic: find-routes-with-fewest-splits-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.903Z
estimatedTokens: 160
keywords: [Routes, Fewest, Splits, Output, inventory, location, combinations, fulfill, order, exceeding, maximum, number, shipments]
---

# Find Routes With Fewest Splits Output

> A list of inventory location combinations that can fulfill an order
      without exceeding the maximum number of shipments.

# Find Routes With Fewest Splits Output

A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 51.0 | 51.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 51.0 | 51.0 |
| targetLocations | Available Location Output[] | Each element of the list is a set of inventory locations that together can fulfill the order being routed. | Big, 51.0 | 51.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Available Location Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_available_location_output.htm)
