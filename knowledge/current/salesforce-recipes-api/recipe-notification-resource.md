---
title: "Recipe Notification Resource"
domain: salesforce-recipes-api
topic: recipe-notification-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.591Z
estimatedTokens: 379
keywords: [Recipe, Notification, Resource, Data, Prep, job, creates, updates, URL, Formats, Version, Postman, Components, HTTP, PUT]
---

# Recipe Notification Resource

> Returns a Data Prep recipe job notification, creates, or updates a Data Prep recipe job
  notification.

# Recipe Notification Resource

Returns a Data Prep recipe job notification, creates, or updates a Data Prep recipe job notification.

## Resource URL

```

```

## Formats

JSON

## Available Version

49.0

## Available in Postman

To view and test a working example of this resource, see [getRecipeNotification](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-ea72c293-5c81-4712-a523-aa68ace4d1f8?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, [CRM Analytics Rest API Quickstart](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "HTML (New Window)").

## Available Components

-   LWC — [lightning/analyticsWaveApi getRecipeNotification()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-recipe-notification.html)

## HTTP Methods

GET PUT

## Response Body for GET and PUT

[Recipe Notification](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_notification.htm "A notification for a data prep recipe.")

## Request Body for PUT

[Recipe Notification Input](atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_notification_input.htm "A notification for a data prep recipe.") The following JSON shows how to update an existing recipe notification.

```

```

## Code Examples

```
/wave/recipes/<id>/notification
```

```
{
    "longRunningAlertInMins" : 60,
    "notificationLevel": "Warnings"
}
```

## Related Topics

- Recipe Notification (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_notification.htm)
- Recipe Notification Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_notification_input.htm)
