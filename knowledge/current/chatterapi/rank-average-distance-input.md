---
title: "Rank Average Distance Input"
domain: chatterapi
topic: rank-average-distance-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.654Z
estimatedTokens: 236
keywords: [Rank, Average, Distance, Input, order, recipient’s, geographic, location, inventory, locations, fulfill]
---

# Rank Average Distance Input

> An order recipient’s geographic location and information about sets
      of inventory locations that can fulfill the order.

# Rank Average Distance Input

An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.

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

## Related Topics

- Target Location Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_target_location_input.htm)
