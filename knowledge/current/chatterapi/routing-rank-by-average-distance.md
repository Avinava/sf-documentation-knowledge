---
title: "Routing, Rank By Average Distance"
domain: chatterapi
topic: routing-rank-by-average-distance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.629Z
estimatedTokens: 656
keywords: [Routing, Rank, Average, Distance, Calculates, inventory, locations, order, recipient, ranks, compare, shipping, distances, different, fulfill]
---

# Routing, Rank By Average Distance

> Calculates the average distance from sets of inventory locations to
      an order recipient, and ranks them. Use this method to compare the average shipping distances
      for different sets of locations that can fulfill an order. While this method is executing, you
      can’t invoke another Apex callout.

# Routing, Rank By Average Distance

Calculates the average distance from sets of inventory locations to an order recipient, and ranks them. Use this method to compare the average shipping distances for different sets of locations that can fulfill an order. While this method is executing, you can’t invoke another Apex callout.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[Rank Average Distance Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_rank_average_distance_input.htm "An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.")

Root XML tag

<rankAverageDistanceInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryCountryCode | String | The country code of the order recipient. | Required | 51.0 |
| deliveryPostalCode | String | The postal code of the order recipient. | Required | 51.0 |
| distanceUnit | String | Specify mi or km to return average distances in miles or kilometers, respectively. |  | 51.0 |
| sortResult | String | Specify ASC or DESC to rank the results by average shipping distance in ascending or descending order, respectively. |  | 51.0 |
| targetLocations | Target Location Input[] | Each element is a set of inventory locations that can combine to fulfill the order. | At least one element is required | 51.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Rank Average Distance Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_rank_average_distance_output.htm "The results of calculating the average distances from sets of inventory locations to an order recipient."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Rank Average Distance Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_rank_average_distance_output.htm "The results of calculating the average distances from sets of inventory locations to an order recipient."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/order-management/routing/actions/rank-byaverage-distance
```

## Related Topics

- Rank Average Distance Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_rank_average_distance_input.htm)
- Target Location Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_location_input.htm)
- Rank Average Distance Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_rank_average_distance_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
