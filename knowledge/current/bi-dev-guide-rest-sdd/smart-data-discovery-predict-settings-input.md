---
title: "Smart Data Discovery Predict Settings Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-settings-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.270Z
estimatedTokens: 226
keywords: [Smart, Data, Discovery, Predict, Settings, Input, Einstein]
---

# Smart Data Discovery Predict Settings Input

> The predict settings input for Einstein Discovery.

# Smart Data Discovery Predict Settings Input

The predict settings input for Einstein Discovery.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Functions | String[] | A list of the aggregate functions to use. | Optional | 55.0 |
| max​Middle​Values | Integer | The maximum middle value count. The default value is 0 and the allowed range is [0, 3]. | Optional | 50.0 |
| max​Prescriptions | Integer | The maximum prescription count. The default value is -1 (unlimited) and the allowed range is [-1, 200]. | Optional | 46.0 |
| prescription​Impact​Percentage | Integer | The impact percentage of the prescriptions. The default value is 0. | Optional | 47.0 |
| projected​Predictions | Smart​Data​Discovery​Projected​Prediction​Settings​Input | The setting overrides for projected predictions. | Optional | 54.0 |

## Related Topics

- Smart​Data​Discovery​Projected​Prediction​Settings​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_prediction_settings_input.htm)
