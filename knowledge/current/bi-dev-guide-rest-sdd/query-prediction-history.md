---
title: "Query Prediction History"
domain: bi-dev-guide-rest-sdd
topic: query-prediction-history
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.057Z
estimatedTokens: 390
keywords: [Query, Prediction, History, Einstein, Service, REST, API, endpoint, histories, Predict, POST, maxLookBack]
---

# Query Prediction History

> The Einstein Prediction Service provides a REST API endpoint to query prediction histories.

# Query Prediction History

The Einstein Prediction Service provides a REST API endpoint to query prediction histories.

## Predict History Request

```

```

## POST Request Body

Use the [Predict History Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_input.htm "The query input for prediction history.") to create your request body.

In the request body, you specify the ID of the goal, the prediction history range, and a list of targets.

| Format | Description |
| --- | --- |
| goalId | The ID of the prediction definition to query for historical predictions. |
| targets | A list of opportunity IDs as strings to use for the target entities of the query. The list is limited to 1 entry. |
| range | An optional range for the query. Use the Predict History Range Input to specify the range. The range includes:maxLookBack an optional value to specify the number of prediction history values. 1-3 are the valid values, with a default value of 1.interval an optional value to specify the prediction history interval. Valid values are Weekly or None, with a default value of Weekly. |

## Query prediction history with a maxLookBack of 2

Query the prediction history using the following API request:

```

```

Request body:

```

```

## POST Response Body

The POST response is a [Predict History Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_predict_history_collection.htm "A collection of historical predictions for a goal.").

## Response body:

```

```

## Code Examples

```
POST ​/smartdatadiscovery​/predict-history
```

```
POST ​/smartdatadiscovery​/predict-history
```

```
{
    "targets" : [ "1Otxx00000000304AA" ],
    "goalId" : "1ORxx00000000509BA",
    "range" : {
        "maxLookBack" : 2 
     }
}
```

```
{
    "history" : [
        {
            "target" : "006xx000001a2p3AAA",
            "predictions" : [
                {
                    "createdDate" : "2022-09-16T19:47:14.000Z",
                    "value" : "21.69962721629",
                    "model" { "id" : "1Otxx00000000304AA" }
                },
                {
                    "createdDate" : "2022-09-16T19:47:15.000Z",
                    "value" : "21.83126271983",
                    "model" { "id" : "1Otxx00000000304AA" }
                }
            ]
        }
    ],
    "range" : {
        "maxLookBack" : 2,
        "interval" : "Weekly"
    }
}
```

## Related Topics

- Predict History Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_input.htm)
- Predict History Range Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_predict_history_range_input.htm)
- Predict History Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_predict_history_collection.htm)
