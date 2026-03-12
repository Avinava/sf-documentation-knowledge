---
title: "Model Resources"
domain: bi-dev-guide-rest-sdd
topic: model-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.414Z
estimatedTokens: 677
keywords: [Model, Resources, Einstein, Discovery, models, sophisticated, custom, mathematical, constructs, predict, particular, outcomes]
---

# Model Resources

> Einstein Discovery models are sophisticated, custom mathematical constructs that are used to predict particular outcomes.

# Model Resources

Einstein Discovery models are sophisticated, custom mathematical constructs that are used to predict particular outcomes.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Models Resource | Returns a collection of Einstein Discovery models and creates a model. | GET POST | /smartdatadiscovery/models |
| Model Resource | Returns a model, updates a model, or deletes a model. | GET PATCH DELETE | /smartdatadiscovery/models/<modelId> |
| Model Coefficients Resource | Returns the coefficients for a model. | GET | /smartdatadiscovery/models/<modelId>​/coefficients |
| Model File Resource | Returns a binary stream of the model file contents. | GET | /smartdatadiscovery/models/<modelId>​/file |
| Model Metrics Resource | Returns the metrics for a specified model. | GET | /smartdatadiscovery/models/<modelId>​/metrics |
| Model Metrics Residuals Resource | Returns the metrics residuals for a specified model. | GET | /smartdatadiscovery/models/<modelId>​/metrics​/residuals |
| Model Metrics Feature Importances Resource | Returns the importance metrics for a specified model. | GET | /smartdatadiscovery/models/<modelId>​/metrics​/feature-importances |

-   **[Models Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models.htm)**
    Returns a collection of Einstein Discovery models and creates a model.
-   **[Model Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id.htm)**
    Returns an Einstein Discovery model, updates a model, or deletes a model.
-   **[Model Coefficients Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_coefficients.htm)**
    Returns a collection of coefficients for an Einstein Discovery model.
-   **[Model File Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_file.htm)**
    Returns a binary stream of the Einstein Discovery model file contents.
-   **[Model Metrics Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics.htm)**
    Returns the metrics for an Einstein Discovery model.
-   **[Model Metrics Residuals Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics_residuals.htm)**
    Returns the metrics residuals for an Einstein Discovery model.
-   **[Model Metrics Feature Importances Resources](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics_feature_importances.htm)**
    Returns the importance metrics for an Einstein Discovery Model

## Related Topics

- Models Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models.htm)
- Model Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id.htm)
- Model Coefficients Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_coefficients.htm)
- Model File Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_file.htm)
- Model Metrics Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics.htm)
- Model Metrics Residuals Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics_residuals.htm)
- Model Metrics Feature Importances Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics_feature_importances.htm)
- Model Metrics Feature Importances Resources (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_models_id_metrics_feature_importances.htm)
