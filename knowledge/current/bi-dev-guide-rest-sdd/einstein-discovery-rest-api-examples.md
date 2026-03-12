---
title: "Einstein Discovery REST API Examples"
domain: bi-dev-guide-rest-sdd
topic: einstein-discovery-rest-api-examples
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:05.009Z
estimatedTokens: 733
keywords: [Einstein, Discovery, REST, API, Examples, perform, tasks, Considerations]
---

# Einstein Discovery REST API Examples

> Use Einstein Discovery REST API examples to perform tasks.

# Einstein Discovery REST API Examples

Use Einstein Discovery REST API examples to perform tasks.

## Considerations

While using the Einstein Discovery REST API, keep this in mind:

-   Request parameters may be included as part of the Einstein Discovery REST API resource URL, for example, /smartdatadiscovery/models?q=status. A request body is a rich input which may be included as part of the request. When accessing a resource, you can use either a request body or request parameters. You cannot use both.
-   With a request body, use Content-Type: application/json or Content-Type: application/xml.
-   With request parameters, use Content-Type: application/x-www-form-urlencoded.

-   **[Get Predictions](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict.htm)**
    The Einstein Prediction Service provides a REST API endpoint to request a prediction.
-   **[Manage Prediction Definitions](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_prediction_definition.htm)**
    The Einstein Prediction Service provides REST API endpoints to manage prediction definitions. A prediction definition specifies what the model is trying to predict and the Salesforce entity associated with the prediction. Each prediction definition has a unique id. Only certain attributes of a prediction definition can be modified.
-   **[Manage Models](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_model.htm)**
    The Einstein Prediction Service provides REST API endpoints to manage models. Each model has a unique id. A model is used to evaluate predictors and return predictions and improvements. These REST endpoints allow you to make updates to model metadata, but not update the actual predictive model.
-   **[Manage Prediction Jobs](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_job.htm)**
    The Einstein Prediction Service provides REST API endpoints to run bulk scoring jobs for a prediction. Bulk scoring jobs enable you to score predictions on multiple records at a time. For example, after deploying an updated model, use bulk scoring to refresh all prediction scores. You can also run bulk scoring on historical data to see how well your model performs. With bulk scoring, you can score all records, a segment of the records, or records that haven’t reached the terminal state.
-   **[Manage Model Refresh Jobs](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_refresh_job.htm)**
    The Einstein Prediction Service provides REST API endpoints to retrieve metadata for model refresh jobs.
-   **[Query Prediction History](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict_history.htm)**
    The Einstein Prediction Service provides a REST API endpoint to query prediction histories.

## Related Topics

- Get Predictions (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict.htm)
- Manage Prediction Definitions (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_prediction_definition.htm)
- Manage Models (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_model.htm)
- Manage Prediction Jobs (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_job.htm)
- Manage Model Refresh Jobs (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_refresh_job.htm)
- Query Prediction History (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict_history.htm)
