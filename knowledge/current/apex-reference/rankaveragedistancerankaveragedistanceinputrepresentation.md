---
title: "rankAverageDistance(rankAverageDistanceInputRepresentation)"
domain: apex-reference
topic: rankaveragedistancerankaveragedistanceinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.745Z
keywords: [rankAverageDistance, rankAverageDistanceInputRepresentation, Calculates, average, distance, sets, inventory, locations, order, recipient, ranks, them., method, compare, shipping, distances, different, fulfill, order., While]
---

# rankAverageDistance(rankAverageDistanceInputRepresentation)

> Calculates the average distance from sets of inventory locations to
      an order recipient, and ranks them. Use this method to compare the average shipping distances
      for different sets of locations that can fulfill an order. While this method is executing, you
      can’t invoke another Apex callout.

### rankAverageDistance(rankAverageDistanceInputRepresentation)

Calculates the average distance from sets of inventory locations to an order recipient, and ranks them. Use this method to compare the average shipping distances for different sets of locations that can fulfill an order. While this method is executing, you can’t invoke another Apex callout.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RankAverageDistanceOutputRepresentation rankAverageDistance(ConnectApi.RankAverageDistanceInputRepresentation rankAverageDistanceInputRepresentation)

#### Parameters

rankAverageDistanceInputRepresentation

Type: [ConnectApi.RankAverageDistanceInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_rank_average_distance.htm "An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.")

An order recipient’s geographic location and information about sets of inventory locations that can fulfill the order.

#### Return Value

Type: [ConnectApi.RankAverageDistanceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rank_average_distance_output.htm "The results of calculating the average distances from sets of inventory locations to an order recipient.")