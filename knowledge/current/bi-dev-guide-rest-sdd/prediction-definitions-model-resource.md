---
title: "Prediction Definitions Model Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definitions-model-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.474Z
estimatedTokens: 322
keywords: [Prediction, Definitions, Model, Resource, deletes, Einstein, Discovery, definition]
---

# Prediction Definitions Model Resource

> Returns or deletes a model for an Einstein Discovery prediction definition.

# Prediction Definitions Model Resource

Returns or deletes a model for an Einstein Discovery prediction definition.

Resource URL

```

```

Formats

JSON

Available Version

41.0

HTTP Methods

GET PATCH DELETE

Request parameters for GET and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve or delete. | Required | 41.0 |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to retrieve or delete the model for. | Required | 41.0 |

Response body for GET and PATCH

[Smart Data Discovery Model](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model.htm "An Einstein Discovery model.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model | Smart Data Discovery Model Input | The model to create. | Required | 41.0 |
| model​Id | String | The ID of the model to retrieve or delete. | Required | 41.0 |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to retrieve or delete the model for. | Required | 41.0 |

## Code Examples

```
/smartdatadiscovery/predictiondefinitions/<predictionDefinitionIdOrName>/models/<modelId>
```

## Related Topics

- Smart Data Discovery Model (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model.htm)
- Smart Data Discovery Model Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_input.htm)
