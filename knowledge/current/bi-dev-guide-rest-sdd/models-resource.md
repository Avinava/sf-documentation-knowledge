---
title: "Models Resource"
domain: bi-dev-guide-rest-sdd
topic: models-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.382Z
estimatedTokens: 637
keywords: [Models, Resource, collection, Einstein, Discovery, creates, model]
---

# Models Resource

> Returns a collection of Einstein Discovery models and creates a model.

# Models Resource

Returns a collection of Einstein Discovery models and creates a model.

Resource URL

```

```

Formats

JSON

Available Version

48.0

HTTP Methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| order | Smart​Data​Discovery​Sort​Order​Enum | The sort order for the collection. Valid values are:AscendingDescending | Optional | 48.0 |
| page | String | A generated token that indicates the view of models to be returned. | Optional | 48.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 48.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 48.0 |
| sort | Smart​Data​Discovery​AI​Model​Collection​Sort​Order​Type​Enum | The sort order type for the collection. Valid values are:Created​DateDescriptionNamePrediction​Field​NamePrediction​TypeRuntime​Type | Optional | 48.0 |
| source​Type | Smart​Data​Discovery​Model​Source​Type​Enum | Filters the collection by source type. Valid values are:DiscoveryUser​Upload | Optional | 48.0 |
| status | Smart​Data​Discovery​AI​Model​Status​Enum | Filters the collection by status. Valid values are:DisabledEnabledUpload​CompletedUpload​FailedUploadingValidatingValidation​CompletedValidation​Failed | Optional | 48.0 |
| story​History​Id | String | Filters the collection by story history ID (9B4). | Optional | 48.0 |
| story​Id | String | Filters the collection by story ID (1Y3). | Optional | 48.0 |

Response body for GET

[Smart Data Discovery AI Model Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_collection.htm "A collection of Einstein Discovery AI models.")

Request body for POST

[Smart Data Discovery AI Model Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_input.htm "The Einstein Discovery AI model to create or update.")

Response body for POST

[Smart Data Discovery AI Model](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model.htm "An Einstein Discovery AI model to retrieve.")

## Code Examples

```
/smartdatadiscovery/models
```

## Related Topics

- Smart Data Discovery AI Model Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model_collection.htm)
- Smart Data Discovery AI Model Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_ai_model_input.htm)
- Smart Data Discovery AI Model (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_ai_model.htm)
