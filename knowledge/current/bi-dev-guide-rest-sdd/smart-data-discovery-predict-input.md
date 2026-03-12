---
title: "Smart Data Discovery Predict Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.250Z
estimatedTokens: 180
keywords: [Smart, Data, Discovery, Predict, Input, Einstein]
---

# Smart Data Discovery Predict Input

> The predict input for Einstein Discovery.

# Smart Data Discovery Predict Input

The predict input for Einstein Discovery.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Predict​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_predict_input.htm "The base predict input for Einstein Discovery.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entity​Id | String | The entity ID to run a prediction on. | Required | 43.0 |
| exploratory​Values | Map<String, String> | A map of data values. | Required | 43.0 |
| prediction​Definition​Id | String | The model ID to use for the prediction. | Required | 43.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Predict​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_predict_input.htm)
