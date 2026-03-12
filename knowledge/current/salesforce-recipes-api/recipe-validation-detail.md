---
title: "Recipe Validation Detail"
domain: salesforce-recipes-api
topic: recipe-validation-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.954Z
estimatedTokens: 245
keywords: [Recipe, Validation, Detail, data, prep]
---

# Recipe Validation Detail

> The validation details for a data prep recipe.

# Recipe Validation Detail

The validation details for a data prep recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | The message for the validation detail. | Small, 50.0 | 50.0 |
| node​Name | String | The name of the node referenced in the validation detail. | Small, 50.0 | 50.0 |
| node​Type | String | The type of node referenced in the validation detail. | Small, 50.0 | 50.0 |
| severity | Connect​Recipe​Validation​Severity​Enum | The severity of the validation detail. Valid values are:Error - The recipe is non-runnable and can’t be saved.Fatal - The validation process is stopped. The recipe is non-runnable and can’t be saved.Warning - The recipe is non-runnable, but can be saved. | Small, 50.0 | 50.0 |
| validation​Action | String | The validation action. | Small, 50.0 | 50.0 |
| validation​Code | Integer | The validation code. | Small, 50.0 | 50.0 |
