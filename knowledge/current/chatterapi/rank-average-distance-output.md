---
title: "Rank Average Distance Output"
domain: chatterapi
topic: rank-average-distance-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.763Z
estimatedTokens: 166
keywords: [Rank, Average, Distance, Output, results, calculating, distances, inventory, locations, order, recipient]
---

# Rank Average Distance Output

> The results of calculating the average distances from sets of
      inventory locations to an order recipient.

# Rank Average Distance Output

The results of calculating the average distances from sets of inventory locations to an order recipient.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| distanceUnit | String | The specified unit of distance (miles or kilometers). | Big, 51.0 | 51.0 |
| errors | Error Response Output[] | Any errors that were returned. | Big, 51.0 | 51.0 |
| results | ConnectApi.ResultOutputRepresentation[] | The results of the shipping distance calculations. | Big, 51.0 | 51.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 51.0 | 51.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
