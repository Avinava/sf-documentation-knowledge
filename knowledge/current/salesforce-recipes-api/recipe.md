---
title: "Recipe"
domain: salesforce-recipes-api
topic: recipe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:19.442Z
estimatedTokens: 776
keywords: [Recipe, prep]
---

> A data prep recipe.

# Recipe

A data prep recipe.

## Properties

Recipe inherits properties from the abstract [Base Wave Asset](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_base_wave_asset.htm). These base properties appear alongside Recipe specific properties in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conversion​Details | Recipe​Conversion​Detail[] | The list of upconversion details when converting the recipe to R3. | Small, 51.0 | 51.0 |
| dataflow​Last​Update | Date | The date of the last recipe dataflow update. | Small, 38.0 | 38.0 |
| dataset | Asset​Reference | The target dataset. | Small, 38.0 | 38.0 |
| file​Url | String | The URL to get the recipe's JSON file content (see /wave/recipes/<recipeId>/file for more information). | Small, 38.0 | 38.0 |
| format | Connect​Recipe​Format​Type​Enum | Specifies the format of the returned recipe. Valid values are:R2 (Data Prep Classic)R3 (Data Prep) | Small, 48.0 | 48.0 |
| histories​Url | String | The URL for the version histories associated with the recipe. | Small, 51.0 | 51.0 |
| license​Type | Connect​Analytics​License​Type​Enum | The Analytics license type. Valid values areCdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Mulesoft​Data​Path (Mulesoft Data Works)Sonic (Salesforce Data Pipeline) | Small, 52.0 | 52.0 |
| next​Scheduled​Date | Date | The next scheduled run of this recipe. | Small, 47.0 | 47.0 |
| publishing​Target | Connect​Recipe​Publishing​Target​Enum | The target format or system to publish the recipe to. Valid values are:Dataset (Publish to Dataset) | Small, 42.0 | 42.0 |
| recipe​Definition | Recipe​Definition | The recipe definition for the Data Prep recipe only. This property isn’t supported for Data Prep Classic recipes. | Small, 49.0 | 49.0 |
| row​Level​Security​Predicate | String | The security predicate of the target dataset. | Small, 38.0 | 38.0 |
| schedule | String | The schedule cron expression for the current dataflow. | Small, 38.0 | 38.0 |
| schedule​Attributes | Schedule | The schedule for the recipe. | Small, 53.0 | 53.0 |
| schedule​Type | Connect​Recipe​Schedule​Type​Enum | The schedule type of the recipe. Valid values are:Event​DrivenTime​Driven | Small, 49.0 | 49.0 |
| source​Dataflow | String | The dataflow used to upconvert or revert the current recipe. | Small, v51.0 | 51.0 |
| source​Recipe | String | The recipe used to upconvert or revert the current recipe. | Small, 50.0 | 50.0 |
| status | Connect​Recipe​Status​Enum | The status of the recipe. Valid values are:CancelledFailureNew (Never run or has no recent run)QueuedRunningSuccessWarning | Small, 54.0 | 54.0 |
| target​Dataflow​Id | String | The target dataflow ID. | Small, 42.0 | 42.0 |
| validation​Details | Recipe​Validation​Detail[] | The collection of validation details for a Data Prep recipe. This property isn’t supported for Data Prep Classic recipes. | Small, 50.0 | 50.0 |

## Related Topics

- Recipe​Conversion​Detail (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_conversion_detail.htm)
- Recipe​Definition (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_definition.htm)
- Recipe​Validation​Detail (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_validation_detail.htm)
