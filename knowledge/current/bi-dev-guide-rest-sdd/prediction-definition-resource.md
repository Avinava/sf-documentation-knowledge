---
title: "Prediction Definition Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definition-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.457Z
estimatedTokens: 182
keywords: [Prediction, Definition, Resource, deletes, Einstein, Discovery]
---

# Prediction Definition Resource

> Returns or deletes an Einstein Discovery prediction definition.

# Prediction Definition Resource

Returns or deletes an Einstein Discovery prediction definition.

Resource URL

```

```

Formats

JSON

Available Version

41.0

HTTP Methods

GET DELETE

Request parameters for GET and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to retrieve or delete. | Required | 41.0 |

Response body for GET

[Smart Data Discovery Prediction Definition](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition.htm "An Einstein Discovery prediction definition.")

## Code Examples

```
/smartdatadiscovery/predictiondefinitions/<predictionDefinitionIdOrName>
```

## Related Topics

- Smart Data Discovery Prediction Definition (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition.htm)
