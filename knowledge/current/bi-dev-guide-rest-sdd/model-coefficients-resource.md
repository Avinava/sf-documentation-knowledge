---
title: "Model Coefficients Resource"
domain: bi-dev-guide-rest-sdd
topic: model-coefficients-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.391Z
estimatedTokens: 240
keywords: [Model, Coefficients, Resource, collection, Einstein, Discovery]
---

# Model Coefficients Resource

> Returns a collection of coefficients for an Einstein Discovery
   model.

# Model Coefficients Resource

Returns a collection of coefficients for an Einstein Discovery model.

Resource URL

```

```

Formats

JSON

Available Version

55.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve the coefficients for. | Required | 55.0 |
| page | String | A generated token that indicates the view of model metrics to be returned. | Optional | 55.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 55.0 |

Response body for GET

[Smart Data Discovery AI Model Coefficient Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_coefficient_collection.htm "A collection of Einstein Discovery AI model coefficients.")

## Code Examples

```
/smartdatadiscovery/models/<modelId>/coefficients
```

## Related Topics

- Smart Data Discovery AI Model Coefficient Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_coefficient_collection.htm)
