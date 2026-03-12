---
title: "Manage, Schedule, and Run Recipes with REST APIs"
domain: salesforce-recipes-api
topic: manage-schedule-and-run-recipes-with-rest-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.060Z
estimatedTokens: 1863
keywords: [Manage, Schedule, Run, Recipes, REST, APIs, Salesforce, Connect, API, work, automate, Discover, revert, recipe, versions]
---

# Manage, Schedule, and Run Recipes with REST APIs

> Use the Salesforce Connect REST API to work with and automate recipes. Discover your
        existing recipes, revert recipe versions, and schedule and run
        recipes.

# Manage, Schedule, and Run Recipes with REST APIs

Use the Salesforce Connect REST API to work with and automate recipes. Discover your existing recipes, revert recipe versions, and schedule and run recipes.

## Describe and Discover Recipes

Retrieve all your recipes with the GET wave/recipes endpoint. You can filter the recipes collection returned by:

-   format— specifies current Data Prep recipes: (R3) or Data Prep Classic recipes (R2).

    ```

    ```

-   licenseType— specifies the license type: EinsteinAnalytics, Sonic, MulesoftDataPath, or Cdp.

    ```

    ```

-   pageSize— the number of items to be returned in the collection for pagination. The minimum is 1, maximum is 200, and default is 25.

    ```

    ```

-   q— Use search terms to find recipes by name or label. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string.

    ```

    ```

-   sort— The type of sort order to be applied to the returned collection. Valid values are App, CreatedBy, CreatedDate, LastModified, LastModifiedBy, Mru, Name, and Type.

    ```

    ```


![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_recipes_api)

#### Tip

The Lightning Web Component wire adapter, [lightning/analyticsWaveApi getRecipes()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_wire_adapters_get_recipes) provides the same functionality inside Lightning Experience.

Describe an existing recipe by specifying the recipeId (starts with 05vB) and the format of the recipe: R3 or R2.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_recipes_api)

#### Important

Recipes created in v48 or higher can only be R3 and can’t be converted to R2.

The GET request returns a [Recipe](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe.htm "A data prep recipe.") response, which contains the recipe definition (nodes and UI metadata), schedule attributes, and validation details. It also contains the targetDataflowId, used to run the recipe. For example, GET /wave/recipes/05vB0000000xxxxxxx?format=R3 returns this Recipe JSON response:

```

```

Use the Recipe JSON response to work with the recipe as detailed.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_recipes_api)

#### Tip

The Lightning Web Component wire adapter, [lightning/analyticsWaveApi getRecipe()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_wire_adapters_get_recipe) provides the same functionality inside Lightning Experience.

## Inspect Recipe Nodes

The [Recipe Definition](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_definition.htm "The definition for a data prep recipe. Available on for R3 recipes.") contains the recipe name, the recipe API version, the UI metadata for recipe display (used by Data Manager), and a Map of [Recipe Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_node.htm "The base node for a recipe.") objects.

Here’s a closer look at the Map of Recipe Node objects in the Recipe Definition object from the Recipe JSON response. The example response is a simple recipe that loads data created from the Opportunities sObject, filters the data by Closed Won, and saves the results to a new dataset named **Opptys Closed Won**.

```

```

Each node entry in the map has a string name and Recipe Node. The Recipe Node contains the node action, parameters, and sources. Each node type has different parameters based on the action. For more information on each node type, see the [Recipe Node](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_node.htm "The base node for a recipe.") reference.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_recipes_api)

#### Important

The label attribute of the dataset attribute for the save action is the display name of the dataset users can explore in Analytics Studio.

## Delete a Recipe

To delete a recipe, use the DELETE /wave/recipes/<recipeId> endpoint. This action deletes the recipe and any associated dataflow jobs. No request body is required and the response is a success or error message.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_recipes_api)

#### Tip

The Lightning Web Component wire adapter, [lightning/analyticsWaveApi deleteRecipe()](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/reference_analytics_delete_recipe) provides the same functionality inside Lightning Experience.

## Work with Recipe Histories

Each time a user updates and saves a recipe, a version history is created, tracking the changes to the recipe over time. To see all of the histories for a recipe, use the GET /wave/recipes/<recipeId>/histories endpoint.

To revert a current recipe to a previous version, get the id of the history you want to revert to and use the PUT /wave/recipes/<recipeId> endpoint with the Asset Review History Input request.

```

```

For more information on asset version histories, see [Backup and Restore Previous Versions of CRM Analytics Assets with History API.](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_asset_history.htm)

## Schedule a Recipe

While the scheduleAttributes are part of the Recipe, to update a schedule, the /wave/asset/<assetId>/schedule endpoint must be used.

To see the current schedule, use GET /wave/asset/<assetId>/schedule, where <assetId> is the recipe id. The request returns a Schedule response.

To create or update the schedule, use PUT /wave/asset/<assetId>/schedule. See [Schedule Dataflows, Recipes, and Data Syncs](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_run_schedule_sync_data.htm#schedule_data_assets) for example Schedule Input requests.

To delete a schedule, use DELETE /wave/asset/<assetId>/schedule.

## Run a Recipe

To run a recipe, with or without a schedule, use the /wave/dataflowjobs POST endpoint.

The POST takes a dataflowId and a command to start the dataflow job. For a recipe, the dataflowId is the targetDataflowId from the Recipe. For recipes, the targetDataflowId starts with 02KB.

After retrieving the targetDataflowId from the GET /wave/recipes/05vB0000000xxxxxxx?format=R3 response, use it in the POST /wave/dataflowjobs JSON request body.

```

```

To stop a running recipe dataflow job, use the /wave/dataflowjobs/<dataflowjobId> PATCH endpoint with the command to stop.

```

```

## Recipe Notifications

Recipe notifications alert users when jobs are long running or fail. All recipes are created with a default notification level of warnings. To see the notification level for a recipe, use the GET /wave/recipes/<recipeId>/notification endpoint. To update the notification level or the long running alert timing, use the PUT /wave/recipes/<recipeId>/notification endpoint with a [Recipe Notification Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_notification_input.htm "A notification for a data prep recipe.") request.

```

```

## Code Examples

```
/wave/recipes?format=R2
```

```
/wave/recipes?licenseType=EinsteinAnalytics
```

```
/wave/recipes?pageSize=50
```

```
/wave/recipes?q=My Recipe
```

```
/wave/recipes?sort=Name
```

## Related Topics

- Recipe (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe.htm)
- Recipe
                    Definition (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_definition.htm)
- Recipe Node (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_node.htm)
- Recipe Notification Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_notification_input.htm)
