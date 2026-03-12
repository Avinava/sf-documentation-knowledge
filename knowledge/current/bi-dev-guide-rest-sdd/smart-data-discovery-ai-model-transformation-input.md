---
title: "Smart Data Discovery AI Model Transformation Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-ai-model-transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.156Z
estimatedTokens: 268
keywords: [Smart, Data, Discovery, Model, Transformation, Input, Einstein]
---

# Smart Data Discovery AI Model Transformation Input

> The input for an Einstein Discovery AI model transformation.

# Smart Data Discovery AI Model Transformation Input

The input for an Einstein Discovery AI model transformation.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| source​Fields​Names | String[] | A list of the model field names to use as input parameters by the transformation. | Required | 54.0 |
| state | Object | The model transformation state. | Required | 51.0 |
| target​Fields​Names | String[] | A list of the model field names to modify with the transformation. | Required | 54.0 |
| type | Smart​Data​Discovery​AI​Model​Transformation​Type​Enum | The model transformation type. Valid values are:Categorical​Imputation (Replace categorical missing values)Extract​Day​Of​Week (Extract day of week)Extract​Month​Of​Year (Extract month of year)Free​Text​Clustering (Free text clustering)Numerical​Imputation (Replace numerical missing values)Sentiment​Analysis (Detecting sentiment)Time​Series​Forecast (Projected predictions)Typographic​Clustering (Fuzzy matching) | Required | 51.0 |
