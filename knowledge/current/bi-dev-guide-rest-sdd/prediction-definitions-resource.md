---
title: "Prediction Definitions Resource"
domain: bi-dev-guide-rest-sdd
topic: prediction-definitions-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.453Z
estimatedTokens: 669
keywords: [Prediction, Definitions, Resource, collection, Einstein, Discovery]
---

# Prediction Definitions Resource

> Returns a collection of Einstein Discovery prediction definitions.

# Prediction Definitions Resource

Returns a collection of Einstein Discovery prediction definitions.

Resource URL

```

```

Formats

JSON

Available Version

41.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model​Source | Smart​Data​Discovery​Model​Source​Type​Enum | The model source type to filter the collection by. Valid values are:DiscoveryUser​Upload | Optional | 41.0 |
| order | Smart​Data​Discovery​Sort​Order​Enum | The sort order for the collection. Valid values are:AscendingDescending | Optional | 41.0 |
| outcome​Field | String | The outcome field to filter the collection by. | Optional | 41.0 |
| outcome​Goal | Connect​Smart​Data​Discovery​Outcome​Goal​Enum | The outcome goal to filter the collection by. Valid values are:MaximizeMinimizeNone | Optional | 41.0 |
| page | String | A generated token that indicates the view of models to be returned. | Optional | 41.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 41.0 |
| prediction​Type | Connect​Smart​Data​Discovery​Prediction​Type​Enum | The prediction type to filter the collection by. Valid values are:ClassificationMulticlass​ClassificationRegressionUnknown | Optional | 41.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 41.0 |
| sort | Prediction​Definition​Collection​Sort​Order​Type​Enum | The sort order type for the collection. Valid values are:Last​UpdateNameOutcome​Field​LabelPrediction​TypeSubscribed​Entity | Optional | 41.0 |
| source​Type | Smart​Data​Discovery​Model​Source​Type​Enum | Filters the collection by source type. Valid values are:DiscoveryUser​Upload | Optional | 41.0 |
| status | Smart​Data​Discovery​Status​Enum | Filters the collection by status. Valid values are:DisabledEnabled | Optional | 41.0 |
| story​Id | Id | Filters the collection by story ID (1Y3). | Optional | 41.0 |
| subscribed​Entity | String | Filters the collection by subscribed entity. | Optional | 41.0 |

Response body for GET

[Smart Data Discovery Prediction Definition Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition_collection.htm "A collection of Einstein Discovery prediction definitions.")

## Code Examples

```
/smartdatadiscovery/predictiondefinitions
```

## Related Topics

- Smart Data Discovery Prediction Definition Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prediction_definition_collection.htm)
