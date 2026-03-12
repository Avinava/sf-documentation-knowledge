---
title: "ConnectApi.DistanceCalculationOutputRepresentation"
domain: apex-reference
topic: connectapidistancecalculationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.140Z
estimatedTokens: 137
keywords: [Shipping, distance, data, inventory, locations]
---

# ConnectApi.DistanceCalculationOutputRepresentation

> Shipping distance data for a set of inventory
    locations.

# ConnectApi.DistanceCalculationOutputRepresentation

Shipping distance data for a set of inventory locations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| averageDistance | Double | The average distance from the locations to the order recipient. | 51.0 |
| locations | List<ConnectApi.​LocationOutput​Representation> | The list of locations and their distances to the order recipient. | 51.0 |
| rank | Integer | This result’s rank among all results by average distance to the order recipient. | 51.0 |

## Related Topics

- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​LocationOutput​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_location_output.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
