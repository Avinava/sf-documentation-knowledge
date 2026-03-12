---
title: "Model Resource"
domain: bi-dev-guide-rest-sdd
topic: model-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.387Z
estimatedTokens: 257
keywords: [Model, Resource, Einstein, Discovery, updates, deletes]
---

# Model Resource

> Returns an Einstein Discovery model, updates a model, or deletes a model.

# Model Resource

Returns an Einstein Discovery model, updates a model, or deletes a model.

Resource URL

```

```

Formats

JSON

Available Version

48.0 GET DELETE, 50.0 PATCH

HTTP Methods

GET PATCH DELETE

Request parameters for GET and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Id | String | The ID of the model to retrieve, update, or delete. | Required | 48.0 |

Response body for GET and PATCH

[Smart Data Discovery AI Model](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model.htm "An Einstein Discovery AI model to retrieve.")

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model | Smart​Data​Discovery​AI​Model​Input | The model information to update. | Required | 50.0 |
| model​Id | String | The ID of the model to retrieve, update, or delete. | Required | 50.0 |

## Code Examples

```
/smartdatadiscovery/models/<modelId>
```

## Related Topics

- Smart Data Discovery AI Model (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model.htm)
- Smart​Data​Discovery​AI​Model​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_input.htm)
