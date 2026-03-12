---
title: "Analytics, Text Classifications"
domain: chatterapi
topic: analytics-text-classifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.638Z
estimatedTokens: 401
keywords: [Analytics, Text, Classifications, classified, different, analysis]
---

# Analytics, Text Classifications

> Get text classified into different classifications using text analysis.

# Analytics, Text Classifications

Get text classified into different classifications using text analysis.

Resource

```

```

Available version

59.0

HTTP methods

GET, POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| classifiers | String[] | List of classifiers according to which text has to be classified. | Required | 59.0 |
| textList | String[] | List of text to be classified. | Required | 59.0 |

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ids | String[] | List of request IDs. | Required | 59.0 |

Response body for GET

[Text Classifications Bulk Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_text_classifications_bulk_results.htm "Text classification bulk results.")

Request body for POST

[Text Classifications Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_text_classification_input.htm "Input representation for text classifications request submission.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| llmType | String | The large language model that’s used for analysis. Supports open-ai only. | Required | 59.0 |

Response body for POST

[Text Classifications](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_text_classifications.htm "HTTP headers containing URLs associating text strings and classifications.")

## Code Examples

```
commerce/order-management/analytics/ai/text-classifications
```

```
{
    "textList": [
        "description not matching one aaa",
        "Runs big",
        "color is different",
        "color is different",
        "Didn't fit",
        "bad quality",
        "Wrong color",
        "Didn't like",
        "Didn't like"
    ],
    "classifiers": [
       "Runs big",
       "Runs small",
       "Defective",
       "Inaccurate Description",
       "Color does",
       "Item arrived late",
       "Other"
    ]
}
```

## Related Topics

- Text Classifications
              Bulk Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_text_classifications_bulk_results.htm)
- Text Classifications
              Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_text_classification_input.htm)
- Text Classifications (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_text_classifications.htm)
