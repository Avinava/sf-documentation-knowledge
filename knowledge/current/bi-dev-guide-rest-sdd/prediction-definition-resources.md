---
title: "Prediction Definition Resources"
domain: bi-dev-guide-rest-sdd
topic: prediction-definition-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.444Z
estimatedTokens: 1114
keywords: [Prediction, Definition, Resources, model, trying, predict, Salesforce, entity, associated, unique, certain, attributes, modified]
---

# Prediction Definition Resources

> A prediction definition specifies what the model is trying to predict and the Salesforce entity associated 
  with the prediction. Each prediction definition has a unique id. Only certain attributes of a prediction definition can be modified.

# Prediction Definition Resources

A prediction definition specifies what the model is trying to predict and the Salesforce entity associated with the prediction. Each prediction definition has a unique id. Only certain attributes of a prediction definition can be modified.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Prediction Definitions Resource | Returns a collection of Einstein Discovery prediction definitions. | GET | /smartdatadiscovery​/predictiondefinitions |
| Prediction Definition Resource | Returns or deletes a prediction definition. | GET DELETE | /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName> |
| Prediction Definition Model Cards Resource | Returns a model card for an Einstein Discovery prediction definition. | GET | /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/modelcards |
| Prediction Definition Model Card Resource | Deletes a prediction definition model card. | DELETE | /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/modelcards/<modelCardId> |
| Prediction Definition Models Resource | Returns a collection of Einstein Discovery prediction definition models. | GET POST | /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/models |
| Prediction Definition Model Resource | Returns or deletes a model for an Einstein Discovery prediction definition. | GET PATCH DELETE | /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/models/<modelId> |
| Prediction Definition Model Metrics Resource | Returns a collection of metrics for a prediction definition model. | GET | /smartdatadiscovery​/predictiondefinitions​/<predictionDefinitionIdOrName>​/models/<modelId>/metrics |

Examples

For use cases to manage prediction definitions, see [Manage Prediction Definitions](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_prediction_definition.htm "The Einstein Prediction Service provides REST API endpoints to manage prediction definitions. A prediction definition specifies what the model is trying to predict and the Salesforce entity associated with the prediction. Each prediction definition has a unique id. Only certain attributes of a prediction definition can be modified.").

For use cases to manage models, see [Manage Models](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_model.htm "The Einstein Prediction Service provides REST API endpoints to manage models. Each model has a unique id. A model is used to evaluate predictors and return predictions and improvements. These REST endpoints allow you to make updates to model metadata, but not update the actual predictive model.").

-   **[Prediction Definitions Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions.htm)**
    Returns a collection of Einstein Discovery prediction definitions.
-   **[Prediction Definition Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id.htm)**
    Returns or deletes an Einstein Discovery prediction definition.
-   **[Prediction Definition Model Cards Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_model_cards.htm)**
    Returns a model card for an Einstein Discovery prediction definition.
-   **[Prediction Definition Model Card Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_model_cards_id.htm)**
    Deletes a prediction definition model card.
-   **[Prediction Definitions Models Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models.htm)**
    Returns a collection of Einstein Discovery prediction definition models.
-   **[Prediction Definitions Model Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models_id.htm)**
    Returns or deletes a model for an Einstein Discovery prediction definition.
-   **[Prediction Definitions Model Metrics Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models_id_metrics.htm)**
    Returns a collection of metrics for a prediction definition model.

## Related Topics

- Prediction Definitions Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions.htm)
- Prediction Definition Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id.htm)
- Prediction Definition Model Cards Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_model_cards.htm)
- Prediction Definition Model Card Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_model_cards_id.htm)
- Prediction Definition Models Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models.htm)
- Prediction Definition Model Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models_id.htm)
- Prediction Definition Model Metrics Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models_id_metrics.htm)
- Manage Prediction Definitions (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_prediction_definition.htm)
- Manage Models (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_model.htm)
- Prediction Definitions Models Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_prediction_definitions_id_models.htm)
