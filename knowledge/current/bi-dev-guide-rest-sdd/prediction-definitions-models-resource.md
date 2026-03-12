---
title: "Prediction Definitions Models Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definitions-models-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.469Z
estimatedTokens: 361
keywords: [Prediction, Definitions, Models, Resource, collection, Einstein, Discovery, definition]
---

# Prediction Definitions Models Resource

> Returns a collection of Einstein Discovery prediction definition models.

# Prediction Definitions Models Resource

Returns a collection of Einstein Discovery prediction definition models.

Resource URL

```

```

Formats

JSON

Available Version

41.0

HTTP Methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to retrieve the models for. | Required | 41.0 |
| status | Smart​Data​Discovery​Status​Enum | Filters the collection by status. Valid values are:DisabledEnabled | Optional | 41.0 |

Response body for GET

[Smart Data Discovery Model Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_collection.htm "A collection of Einstein Discovery prediction definitions.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model | Smart Data Discovery Model Input | The model to create. | Required | 41.0 |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to create a model for. | Required | 41.0 |

Response body for POST

[Smart Data Discovery Model](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model.htm "An Einstein Discovery model.")

## Code Examples

```
/smartdatadiscovery/predictiondefinitions/<predictionDefinitionIdOrName>/models
```

## Related Topics

- Smart Data Discovery Model Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_collection.htm)
- Smart Data Discovery Model Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_model_input.htm)
- Smart Data Discovery Model (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model.htm)
