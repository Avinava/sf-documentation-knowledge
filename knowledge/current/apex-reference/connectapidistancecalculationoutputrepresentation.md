---
title: "ConnectApi.DistanceCalculationOutputRepresentation"
domain: apex-reference
topic: connectapidistancecalculationoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.591Z
keywords: [ConnectApi.DistanceCalculationOutputRepresentation]
---

# ConnectApi.DistanceCalculationOutputRepresentation

# ConnectApi.DistanceCalculationOutputRepresentation

Shipping distance data for a set of inventory locations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| averageDistance | Double | The average distance from the locations to the order recipient. | 51.0 |
| locations | List<ConnectApi.​LocationOutput​Representation> | The list of locations and their distances to the order recipient. | 51.0 |
| rank | Integer | This result’s rank among all results by average distance to the order recipient. | 51.0 |