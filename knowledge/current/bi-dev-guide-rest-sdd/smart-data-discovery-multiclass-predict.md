---
title: "Smart Data Discovery Multiclass Predict"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-multiclass-predict
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.847Z
estimatedTokens: 179
keywords: [Smart, Data, Discovery, Multiclass, Predict, Einstein, result]
---

# Smart Data Discovery Multiclass Predict

> An Einstein Discovery multiclass predict result.

# Smart Data Discovery Multiclass Predict

An Einstein Discovery multiclass predict result.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Predict](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_predict.htm "The base Einstein Discovery predict result.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| class​Probabilities | Map<Double, Double> | A map of predict probabilities for each class. | Small, 52.0 | 52.0 |
| predicted​Class | String | The predict value. | Small, 52.0 | 52.0 |
| type | String | The type of the predict result. | Small, 52.0 | 52.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Predict (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_predict.htm)
