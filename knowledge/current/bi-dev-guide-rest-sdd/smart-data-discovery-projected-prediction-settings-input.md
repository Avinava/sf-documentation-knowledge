---
title: "Smart Data Discovery Projected Prediction Settings Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-projected-prediction-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.275Z
estimatedTokens: 183
keywords: [Smart, Data, Discovery, Projected, Prediction, Settings, Input, Einstein]
---

# Smart Data Discovery Projected Prediction Settings Input

> The projected prediction settings input for Einstein Discovery.

# Smart Data Discovery Projected Prediction Settings Input

The projected prediction settings input for Einstein Discovery.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| confidence​Interval | Integer | The confidence interval to display at each point. Allowed values are 80 and 95. | Optional | 55.0 |
| number​Of​Intervals​To​Project​Ahead | Integer | Override the number of intervals to project ahead. The allowed range is [1, 12]. | Optional | 54.0 |
| show​Projected​Prediction​By​Interval | Boolean | Indicates whether the projected prediction calculation is enabled for every interval into the future (true) or not (false). | Optional | 54.0 |
