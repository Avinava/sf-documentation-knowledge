---
title: "Prediction Definition Model Cards Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definition-model-cards-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.460Z
estimatedTokens: 176
keywords: [Prediction, Definition, Model, Cards, Resource, card, Einstein, Discovery]
---

# Prediction Definition Model Cards Resource

> Returns a model card for an Einstein Discovery prediction definition.

# Prediction Definition Model Cards Resource

Returns a model card for an Einstein Discovery prediction definition.

Resource URL

```

```

Formats

JSON

Available Version

51.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to retrieve the model card for. | Required | 41.0 |

Response body for GET

[Smart Data Discovery Model Card](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_card.htm "An Einstein Discovery model card.")

## Code Examples

```
/smartdatadiscovery/predictiondefinitions/<predictionDefinitionIdOrName>/modelcards
```

## Related Topics

- Smart Data Discovery Model Card (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_model_card.htm)
