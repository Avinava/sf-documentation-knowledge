---
title: "Prediction Definition Model Card Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definition-model-card-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.463Z
estimatedTokens: 139
keywords: [Prediction, Definition, Model, Card, Resource, Deletes]
---

# Prediction Definition Model Card Resource

> Deletes a prediction definition model card.

# Prediction Definition Model Card Resource

Deletes a prediction definition model card.

Resource URL

```

```

Formats

JSON

Available Version

51.0

HTTP Methods

DELETE

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Card​Id | String | The ID of the model card to delete. | Required | 41.0 |
| prediction​Definition​Id​Or​Name | String | The ID or developer name of the prediction definition to delete the model card from. | Required | 41.0 |

## Code Examples

```
/smartdatadiscovery/predictiondefinitions/<predictionDefinitionIdOrName>/modelcards/<modelCardId>
```
