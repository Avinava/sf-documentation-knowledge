---
title: "Recipe Resources"
domain: salesforce-recipes-api
topic: recipe-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.595Z
estimatedTokens: 666
keywords: [Recipe, Resources, Recipes, prepare, data, creating, dataset, updating, sObject, transformations, manipulate]
---

# Recipe Resources

> Recipes are used to prepare data, creating a dataset or updating an sObject using transformations to manipulate the data.

# Recipe Resources

Recipes are used to prepare data, creating a dataset or updating an sObject using transformations to manipulate the data.

## Available Resources

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Recipes List Resource | Returns a collection of Data Prep recipes and creates a recipe. | GET POST | /wave/recipes |
| Recipe Resource | Returns, updates, or deletes a Data Prep recipe. | GET DELETE PATCH | /wave/recipes/<id> |
| Recipe File Resource | Returns a Data Prep recipe's file content as JSON. | GET | /wave/recipes/<id>/file |
| Recipe Notification Resource | Returns a Data Prep recipe job notification, creates, or updates a Data Prep recipe job notification. | GET PATCH | /wave/recipes/<id>/notification |
| Recipe Configurations List Resource | Returns or updates a collection of Data Prep recipe configurations and creates a recipe configuration. | GET PATCH POST | /wave/recipes-configurations |
| Recipe Configuration Resource | Returns, updates, or deletes a Data Prep recipe configuration. | GET DELETE PATCH | /wave/recipe-configurations/<id> |

-   **[Recipes List Resource](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes.htm)**
    Returns a collection of Data Prep recipes and creates a recipe.
-   **[Recipe Resource](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes_id.htm)**
    Returns, updates, or deletes a Data Prep recipe.
-   **[Recipe File Resource](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes_id_file.htm)**
    Returns a Data Prep recipe's file content as JSON. This API endpoint is internal for the recipe UI and is available for debugging and reference purposes only. Modification of this content is not supported.
-   **[Recipe Notification Resource](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes_id_notification.htm)**
    Returns a Data Prep recipe job notification, creates, or updates a Data Prep recipe job notification.
-   **[Recipe Configurations List Resource](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipe_configurations.htm)**
    Returns and updates a collection of Data Prep recipe configurations and creates a recipe configuration.
-   **[Recipe Configuration Resource](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipe_configuration_id.htm)**
    Returns a Data Prep recipe configuration and updates or deletes the configuration.

## Related Topics

- Recipes List Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes.htm)
- Recipe Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes.htm)
- Recipe File Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes_id_file.htm)
- Recipe Notification Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes_id_notification.htm)
- Recipe
           Configurations List Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipe_configurations.htm)
- Recipe
           Configuration Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipe_configuration_id.htm)
- Recipe Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipes_id.htm)
- Recipe Configurations List Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipe_configurations.htm)
- Recipe Configuration Resource (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_resources_recipe_configuration_id.htm)
