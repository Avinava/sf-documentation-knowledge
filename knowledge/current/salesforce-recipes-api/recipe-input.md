---
title: "Recipe Input"
domain: salesforce-recipes-api
topic: recipe-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:18.609Z
estimatedTokens: 526
keywords: [Recipe, prep]
---

> A data prep recipe.

# Recipe Input

A data prep recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conversion​Details | Recipe​Conversion​Detail​Input[] | The list of conversion details when converting the recipe to R3 that are saved. | Optional | 51.0 |
| dataflow​Definition | String | The recipe's definition. | Optional | 38.0 |
| execution​Engine | Connect​Recipe​Execution​Engine​Enum | The recipe's execution engine. Valid values are:V1V2 | Optional | 41.0 |
| file​Content | String | The recipe's JSON file content (see /wave/recipes/<recipeId>/file for more information). This property is internal to the recipe UI and is available for debugging and reference purposes only. This property is valid only for Data Prep Classic recipes. | Required for POST and PATCH | 38.0 |
| folder | Asset​Reference​Input | The Analytics app the recipe is published in. | Required when dataflow​Definition is present | 38.0 |
| format | Connect​Recipe​Format​Type​Enum | Specifies the format of the recipe. Valid values are:R2 (Data Prep Classic)R3 (Data Prep) | Required | 48.0 |
| history​Label | String | A history label to tag the version of the recipe. | Optional | 51.0 |
| label | String | A short label for the recipe. | Optional | 38.0 |
| license​Attributes | Licenses​Attributes​Input | The recipe license type and other properties. | Optional | 51.0 |
| publishing​Target | Connect​Recipe​Publishing​Target​Enum | The target format or system to publish the recipe to. Valid values are:Dataset (Publish to Dataset) | Optional | 42.0 |
| recipe​Definition | Recipe​Definition​Input | The recipe definition for the Data Prep recipe only. This property isn’t supported for Data Prep Classic recipes. | Optional | 49.0 |
| row​Level​Security​Predicate | String | The security predicate of the target dataset. | Optional | 38.0 |
| schedule | String | The recipe's schedule dataflow run. | Optional | 38.0 |
| source​Dataflow | Asset​Reference​Input | The source dataflow asset used to upconvert to the recipe to R3. | Optional | 51.0 |

## Related Topics

- Recipe​Conversion​Detail​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_conversion_detail_input.htm)
- Recipe​Definition​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_definition_input.htm)
