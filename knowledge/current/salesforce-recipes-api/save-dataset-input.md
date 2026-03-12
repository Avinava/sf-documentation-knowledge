---
title: "Save Dataset Input"
domain: salesforce-recipes-api
topic: save-dataset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.447Z
estimatedTokens: 188
keywords: [Save, Dataset, Input, node, recipe]
---

# Save Dataset Input

> The dataset for a save node in a recipe.

# Save Dataset Input

The dataset for a save node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folder​Name | String | The analytics folder for the dataset. | Optional | 51.0 |
| is​Staged | Boolean | Indicates whether the data is staged (true) or not (false). | Required | 53.0 |
| label | String | The label for the dataset. | Required | 51.0 |
| name | String | The name of the dataset. | Required | 51.0 |
| row​Level​Security​Filter | String | The security predicate. | Required | 51.0 |
| row​Level​Sharing​Source | String | The sobject security sharing source. | Required | 51.0 |
| type | String | The type of the dataset. | Required | 51.0 |
