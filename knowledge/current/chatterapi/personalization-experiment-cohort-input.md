---
title: "Personalization Experiment Cohort Input"
domain: chatterapi
topic: personalization-experiment-cohort-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.382Z
estimatedTokens: 263
keywords: [Personalization, Experiment, Cohort, Input, specific]
---

# Personalization Experiment Cohort Input

> Defines a specific cohort within an experiment.

# Personalization Experiment Cohort Input

Defines a specific cohort within an experiment.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The cohort's API name. | Required | 65.0 |
| label | String | The cohort's UI label. | Required | 65.0 |
| description | String | An optional description for the cohort. | Optional | 65.0 |
| attributeValues | Personalization Experiment Attribute Value Input | The list of personalization attribute values. | Optional | 65.0 |
| isControl | Boolean | Indicates if the cohort is the control group. | Required | 65.0 |
| allocationWeight | Integer | Traffic allocation in basis points (0–10,000). Required for non-control cohorts. | Optional | 65.0 |
| personalizerName | String | Associated personalizer API name. | Optional | 65.0 |
| isFallThrough | Boolean | Whether the control cohort uses the existing experience. If true, attributeValues and personalizerName are ignored. Can only be true if isControl is true. | Optional | 65.0 |

## Related Topics

- Personalization Experiment Attribute Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_personalization_experiment_attribute_value_input.htm)
