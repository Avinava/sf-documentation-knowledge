---
title: "Manage Prediction Jobs"
domain: bi-dev-guide-rest-sdd
topic: manage-prediction-jobs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:05.044Z
estimatedTokens: 400
keywords: [Manage, Prediction, Jobs, Einstein, Service, REST, API, endpoints, run, bulk, scoring, enable, score, predictions, multiple]
---

# Manage Prediction Jobs

> The Einstein Prediction Service provides REST API endpoints to run bulk scoring jobs
    for a prediction. Bulk scoring jobs enable you to score predictions on multiple records at a
    time. For example, after deploying an updated model, use bulk scoring to refresh all prediction
    scores. You can also run bulk scoring on historical data to see how well your model performs.
    With bulk scoring, you can score all records, a segment of the records, or records that haven’t
    reached the terminal state.

# Manage Prediction Jobs

The Einstein Prediction Service provides REST API endpoints to run bulk scoring jobs for a prediction. Bulk scoring jobs enable you to score predictions on multiple records at a time. For example, after deploying an updated model, use bulk scoring to refresh all prediction scores. You can also run bulk scoring on historical data to see how well your model performs. With bulk scoring, you can score all records, a segment of the records, or records that haven’t reached the terminal state.

Bulk scoring jobs are configured in Model Manager. To set up Bulk Scoring jobs, see [Score Records in Bulk](https://help.salesforce.com/s/articleView?id=analytics.bi_edd_model_manager_score.htm&type=5&language=en_US).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest_sdd)

#### Note

If the daily predictions limit is reached in your org, active scoring jobs are paused, then resumed the next day.

## Run a Bulk Scoring Job for a Prediction

```

```

POST Request Body

Use the [Smart Data Discovery Job Predict Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_job_input.htm "The predict job input for Einstein Discovery.") to create your request body. In the request body, specify the prediction definition Id associated with the bulk scoring request job, along with a user-defined label, and optional filter settings.

```

```

You can retrieve a list of available prediction definition Ids using the following API request:

```

```

## Get Scoring Jobs

```

```

## Code Examples

```
POST /smartdatadiscovery​/predict-jobs
```

```
{
   "predictionDefinition":{ "id":"{{predictionDefinitionId}}" },
   "label":"{{label}}",
   "useTerminalStateFilter" : false,
   "filters":{
      "filters":[
         {
            "fieldName":"Opportunity.Name",
            "values":[ "My Opportunity" ],
            "operator":"Equal"
         }
      ]
   }
}
```

```
GET ​/smartdatadiscovery​/predictiondefinitions
```

```
GET smartdatadiscovery/predict-jobs
```

## Related Topics

- Smart Data Discovery Job Predict Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_job_input.htm)
