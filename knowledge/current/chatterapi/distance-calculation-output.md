---
title: "Distance Calculation Output"
domain: chatterapi
topic: distance-calculation-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.287Z
estimatedTokens: 141
keywords: [Distance, Calculation, Output, Shipping, data, inventory, locations]
---

# Distance Calculation Output

> Shipping distance data for a set of inventory
    locations.

# Distance Calculation Output

Shipping distance data for a set of inventory locations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| averageDistance | Double | The average distance from the locations to the order recipient. | Big, 51.0 | 51.0 |
| locations | Location Output[] | The list of locations and their distances to the order recipient. | Big, 51.0 | 51.0 |
| rank | Integer | This result’s rank among all results by average distance to the order recipient. | Big, 51.0 | 51.0 |

## Related Topics

- Location Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_location_output.htm)
