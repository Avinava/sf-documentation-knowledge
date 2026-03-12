---
title: "Quick Action Execution"
domain: uiapi
topic: quick-action-execution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.019Z
estimatedTokens: 307
keywords: [Quick, Action, Execution, results, executes]
---

# Quick Action Execution

> The results that are returned when a quick action executes.

# Quick Action Execution

The results that are returned when a quick action executes.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | The ID of the related record for the quick action. | Small, 57.0 | 57.0 |
| feedItemId | String | The ID of the feed item that the action created. | Small, 57.0 | 57.0 |
| id | String | The ID of the record that the action created or updated. | Small, 57.0 | 57.0 |
| isCreated | Boolean | Specifies whether the action created records (true), or not (false). | Small, 57.0 | 57.0 |
| isSuccess | Boolean | Specifies whether the action executed successfully (true), or not (false). | Small, 57.0 | 57.0 |
| successMessage | String | The action’s success message. | Small, 57.0 | 57.0 |

#### See Also

-   [Perform Quick Actions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_perform_action.htm "Perform a quick action that creates or updates a record.")

-   [Update a Record with a Quick Action](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_update_action.htm "Perform an Update a Record quick action. To perform a quick action that creates or updates a record, you can also use the POST method.")

## Related Topics

- Perform Quick Actions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_perform_action.htm)
- Update a Record with a Quick Action (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_update_action.htm)
