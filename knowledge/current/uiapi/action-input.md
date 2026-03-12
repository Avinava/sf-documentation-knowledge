---
title: "Action Input"
domain: uiapi
topic: action-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.152Z
estimatedTokens: 499
keywords: [Action, Input, actions, record, detail]
---

# Action Input

> Get the actions on related lists on a record detail page.

# Action Input

Get the actions on related lists on a record detail page.

JSON example

To get information about related list actions on a record detail page, use this request with a request body.

```

```

```

```

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionTypes | String[] | The action type. One or more of these values:CustomButton—A button that opens a URL or Visualforce page or executes JavaScript.ProductivityAction—A pre-defined Salesforce action, attached to a limited set of objects.QuickAction—A global or object-specific action.StandardButton—A pre-defined Salesforce button, such as New, Edit, and Delete. | Optional | 57.0 |
| apiNames | String[] | The API names of one or more actions to be retrieved. Use this parameter only when passing retrievalMode=All. | Optional | 57.0 |
| formFactor | String | The layout display size. One of these values:Large—(Default) Use this value to get a layout for desktop display size.Medium—Use this value to get a layout for tablet display size.Small—Use this value to get a layout for phone display size. | Optional | 57.0 |
| retrievalMode | String | When the action context is Record, this parameter indicates which actions to retrieve from the record page. One of these values:All—Retrieves all actions specified in the apiNames parameter.PageLayout—(Default) Retrieves actions from the page layout. | Optional | 57.0 |
| sections | String[] | The section of the user interface that the actions reside in. One or more of these values:ActivityComposerCollaborateComposerPageSingleActionLinks | Optional | 57.0 |

#### See Also

-   [Get Related List Actions with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_get.htm "Get the actions on related lists for a record detail page. This resource uses the POST method so you can enter request parameters in the request body instead using complex URL parameters.")

## Code Examples

```
POST /services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/related-list
```

```
{
  "apiNames": ["New"],
  "retrievalMode": "All"
}
```

## Related Topics

- Get Related List Actions with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_get.htm)
