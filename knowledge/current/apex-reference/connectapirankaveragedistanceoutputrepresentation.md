---
title: "ConnectApi.RankAverageDistanceOutputRepresentation"
domain: apex-reference
topic: connectapirankaveragedistanceoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.838Z
keywords: [ConnectApi.RankAverageDistanceOutputRepresentation]
---

# ConnectApi.RankAverageDistanceOutputRepresentation

# ConnectApi.RankAverageDistanceOutputRepresentation

The results of calculating the average distances from sets of inventory locations to an order recipient.

Subclass of [ConnectApi.BaseOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_output.htm "Base Order Management output class.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| distanceUnit | String | The specified unit of distance (miles or kilometers). | 51.0 |
| results | List<ConnectApi.​AverageDistanceResult​OutputRepresentation> | The results of the shipping distance calculations. | 51.0 |