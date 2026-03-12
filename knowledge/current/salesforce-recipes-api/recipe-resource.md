---
title: "Recipe Resource"
domain: salesforce-recipes-api
topic: recipe-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.586Z
estimatedTokens: 1176
keywords: [Recipe, Resource, updates, deletes, Data, Prep, URL, Formats, Version, Postman, Components, HTTP, Run, Schedule, PATCH]
---

# Recipe Resource

> Returns, updates, or deletes a Data Prep recipe.

# Recipe Resource

Returns, updates, or deletes a Data Prep recipe.

## Resource URL

```

```

## Formats

JSON

## Available Version

38.0

## Available in Postman

To view and test a working example of this resource, see [getRecipe](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-51418077-f2ba-4cfc-ba89-67003b67327e?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quickstart](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "HTML (New Window)").

## Available Components

-   LWC — [lightning/analyticsWaveApi deleteRecipe()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-recipe.html)
-   LWC — [lightning/analyticsWaveApi getRecipe()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-recipe.html)
-   LWC — [lightning/analyticsWaveApi updateRecipe()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-recipe.html)

## HTTP Methods

DELETE GET PATCH PUT

## Run a Recipe

To run a Data Prep recipe, use the [Dataflow Jobs Resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataflowjobs.htm) API. For examples of how to start and stop recipes, see [Start and Stop a Dataflow Job or Recipe](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#start_stop_dataflows).

## Schedule a Recipe

To schedule a recipe, use the [Schedule Resource](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_schedule.htm) API. For examples of how to schedule recipes, see [Schedule Dataflows, Recipes, and Data Syncs](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#schedule_data_assets).

## Request Parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| format | Connect​Recipe​Format​Type​Enum | Specifies the format of the returned recipe. Valid values are:R2 (Data Prep Classic)R3 (Data Prep) | Required for Data Prep recipes, Optional for Data Prep Classic recipes. | 49.0 |
| history​Id | Id | Use the history ID to request a specific recipe version. | Optional | 51.0 |

The following REST URL shows how to use the format request parameter to return a Data Prep recipe via the GET request.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_recipes_api)

#### Note

With API version 49.0 and higher, the format request parameter is required for recipes created in the Data Prep format. For recipes created in the Data Prep Classic format, the format request parameter isn’t needed. If you want to up-convert the Data Prep Classic recipe format to the Data Prep recipe format, use the format request parameter set to R3.

## Response Body for GET, PATCH, and PUT

[Recipe](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe.htm "A data prep recipe.")

## Request Body for PATCH

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| enable​Editor​Validation | Boolean | Indicates whether editor validation for the recipe is enabled (true) or not ( false). | Required | 53.0 |
| recipe​File | Binary | The recipe file. | Required | 38.0 |
| recipe​Object | Recipe​Input[] | The recipe definition. | Required | 38.0 |
| validation​Context | Connect​Recipe​Validation​Context​Enum | The recipe validation context. Valid values are:DefaultEditor | Required | 53.0 |

The following JSON shows how to update a recipe, specifically the license type for the recipe.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_recipes_api)

#### Note

If the recipe was created in the Data Prep Classic format, then is retrieved in the Data Prep format, a PATCH request with the Data Prep format up-converts the recipe permanently to the Data Prep format.

## Request Body for PUT

Use the PUT API request to revert to a previous historical version. [Asset Revert History Input](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_revert_history_input.htm) The following JSON shows the revert request for a recipe version.

```

```

## Code Examples

```
/wave/recipes/<id>
```

```
/wave/recipes/<05vS7000000xxxxxxx>?format=R3
```

```
{
  "recipeObject" : {
     "licenseAttributes": { "type": "Sonic" }
  } 
}
```

```
{
    "historyId" : "0RmRM000000xxxxxxx"
}
```

## Related Topics

- Recipe (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe.htm)
- Recipe​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_input.htm)
