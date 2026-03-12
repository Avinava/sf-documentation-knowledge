---
title: "Recipes List Resource"
domain: salesforce-recipes-api
topic: recipes-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.578Z
estimatedTokens: 1021
keywords: [Recipes, Resource, collection, Data, Prep, creates, recipe, URL, Formats, Version, Postman, Components, HTTP]
---

# Recipes List Resource

> Returns a collection of Data Prep recipes and creates a
  recipe.

# Recipes List Resource

Returns a collection of Data Prep recipes and creates a recipe.

## Resource URL

```

```

## Formats

JSON

## Available Version

38.0

## Available in Postman

To view and test a working example of this resource, see [getRecipeCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-a6ecbe75-38d5-455b-9b28-505ad8d28819?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quickstart](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "HTML (New Window)").

## Available Components

-   LWC — [lightning/analyticsWaveApi getRecipes()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-recipes.html)

## HTTP Methods

GET

## Request Parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folder​Id | Id | Returns a collection filtered by recipes belonging to the specified folder ID. | Optional | 61.0 |
| format | Connect​Recipe​Format​Type​Enum | Returns a collection filtered by the format of the current recipe definition. Valid values are:R2 (Data Prep Classic)R3 (Data Prep) | Optional | 48.0 |
| last​Modified​After | String | Returns a collection filtered by recipes with a last modified date after the given value. | Optional | 55.0 |
| last​Modified​Before | String | Returns a collection filtered by recipes with a last modified date before the given value. | Optional | 55.0 |
| license​Type | Connect​Analytics​License​Type​Enum | Filters the collection by the Analytics license type. Valid values areCdp (Data 360)Data​Pipeline​Query (Data Pipeline Query)Einstein​Analytics (CRM Analytics)Intelligent​Apps (Intelligent Apps)Mulesoft​Data​Path (Mulesoft Data Works)Sonic (Salesforce Data Pipeline) | Optional | 52.0 |
| next​Scheduled​After | String | Returns a collection filtered by recipes with a scheduled run after the given value. | Optional | 55.0 |
| next​Scheduled​Before | String | Returns a collection filtered by recipes with a scheduled run before the given value. | Optional | 55.0 |
| page | String | A generated token that indicates the view of the objects to be returned. | Optional | 38.0 |
| page​Size | Int | Number of items to be returned in a single page. Minimum is 1, maximum is 200, and the default is 25. | Optional | 38.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 38.0 |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​By​IdCreated​DateFolder​NameLast​ModifiedLast​Modified​ByLast​Modified​By​IdLast​Modified​DateLocationMru (Most Recently Used, last viewed date)NameOutcomeRefresh​Date (for assets like datasets)Run​Date (for assets like reports)StatusTitleType | Optional | 38.0 |
| status | Connect​Recipe​Status​Enum[] | Returns a collection filtered by the statuses of the recipe. Valid values are:CancelledFailureNew (Never run or has no recent run)QueuedRunningSuccessWarning | Optional | 55.0 |

The following REST URL shows how to use the q parameter as a search query in the GET request.

```

```

## Response Body for GET

[Recipe Collection](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_collection.htm "A collection of data prep recipes.")

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_recipes_api)

#### Important

Recipes require the recipe editor UI for creation and aren’t supported using POST via this API endpoint.

## Code Examples

```
/wave/recipes
```

```
/wave/recipes?q=MyRecipe
```

## Related Topics

- Recipe Collection (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_collection.htm)
