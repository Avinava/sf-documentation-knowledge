---
title: "ConnectApi.RankAverageDistanceInputRepresentation"
domain: apex-reference
topic: connectapirankaveragedistanceinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.631Z
estimatedTokens: 236
keywords: [order, recipient’s, geographic, location, inventory, locations, fulfill]
---

# ConnectApi.RankAverageDistanceInputRepresentation

> An order recipient’s geographic location and information about sets
      of inventory locations that can fulfill the order.

# ConnectApi.RankAverageDistanceInputRepresentation

An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryCountryCode | String | The country code of the order recipient. | Required | 51.0 |
| deliveryPostalCode | String | The postal code of the order recipient. | Required | 51.0 |
| distanceUnit | String | Specify mi or km to return average distances in miles or kilometers, respectively. |  | 51.0 |
| sortResult | String | Specify ASC or DESC to rank the results by average shipping distance in ascending or descending order, respectively. |  | 51.0 |
| targetLocations | List<ConnectApi.​TargetLocation​InputRepresentation> | Each element is a set of inventory locations that can combine to fulfill the order. | At least one element is required | 51.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​TargetLocation​InputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_target_location.htm)
