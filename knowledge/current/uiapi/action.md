---
title: "Action"
domain: uiapi
topic: action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.731Z
estimatedTokens: 177
keywords: [Action, actions, record, collection, records]
---

# Action

> The actions for a single record or a collection of
    records.

# Action

The actions for a single record or a collection of records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Map<String, Object Action> | A map of record IDs to the actions for each record. | Small, 41.0 | 41.0 |
| url | String | The URL of the current request. | Big, 41.0 | 41.0 |

#### See Also

-   [Get Related List Actions with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_get.htm "Get the actions on related lists for a record detail page. This resource uses the POST method so you can enter request parameters in the request body instead using complex URL parameters.")

## Related Topics

- Object
                  Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_object_action.htm)
- Get Related List Actions with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_get.htm)
