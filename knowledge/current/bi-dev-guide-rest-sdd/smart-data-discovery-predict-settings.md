---
title: "Smart Data Discovery Predict Settings"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-settings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.928Z
estimatedTokens: 252
keywords: [Smart, Data, Discovery, Predict, Settings, Einstein, prediction]
---

# Smart Data Discovery Predict Settings

> The settings for an Einstein Discovery prediction.

# Smart Data Discovery Predict Settings

The settings for an Einstein Discovery prediction.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Functions | String[] | The list of the aggregate functions used to make the prediction. | Small, 55.0 | 55.0 |
| max​Middle​Values | Integer | The maximum middle values. Range is [0, 3]. | Small, 50.0 | 50.0 |
| max​Prescriptions | Integer | The maximum prescription count. Range is [-1, 200], where -1 indicates unlimited. | Small, 41.0 | 41.0 |
| prescription​Impact​Percentage | Integer | The impact percentage of prescriptions. If the value is 0, the default value, then all prescriptions are returned. If the value is 5, then only prescriptions that will improve the prediction by at least 5% are returned. | Small, 47.0 | 47.0 |
| settings | Smart​Data​Discovery​Projected​Prediction​Settings | The setting overrides for projected predictions. | Small, 54.0 | 54.0 |

## Related Topics

- Smart​Data​Discovery​Projected​Prediction​Settings (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_prediction_settings.htm)
