---
title: "ConnectApi.RankAverageDistanceOutputRepresentation"
domain: apex-reference
topic: connectapirankaveragedistanceoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.789Z
estimatedTokens: 158
keywords: [results, calculating, average, distances, inventory, locations, order, recipient]
---

# ConnectApi.RankAverageDistanceOutputRepresentation

> The results of calculating the average distances from sets of
      inventory locations to an order recipient.

# ConnectApi.RankAverageDistanceOutputRepresentation

The results of calculating the average distances from sets of inventory locations to an order recipient.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| distanceUnit | String | The specified unit of distance (miles or kilometers). | 51.0 |
| results | List<ConnectApi.​AverageDistanceResult​OutputRepresentation> | The results of the shipping distance calculations. | 51.0 |

## Related Topics

- ConnectApi.BaseOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AverageDistanceResult​OutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_average_distance_result_output.htm)
