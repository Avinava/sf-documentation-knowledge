---
title: "Action Related List Single Batch Input"
domain: uiapi
topic: action-related-list-single-batch-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.160Z
estimatedTokens: 542
keywords: [Action, Batch, Input, actions, record]
---

# Action Related List Single Batch Input

> Get the actions on a batch of related lists for a record.

# Action Related List Single Batch Input

Get the actions on a batch of related lists for a record.

JSON example

To get information about the actions for the Contacts and Opportunities related lists on an Account record page, use this request with parameters in a request body.

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
| relatedListId | String | The ID of the related list. | Optional | 57.0 |
| retrievalMode | String | When the action context is Record, this parameter indicates which actions to retrieve from the record page. One of these values:All—Retrieves all actions specified in the apiNames parameter.PageLayout—(Default) Retrieves actions from the page layout. | Optional | 57.0 |
| sections | String[] | The section of the user interface that the actions reside in. One or more of these values:ActivityComposerCollaborateComposerPageSingleActionLinks | Optional | 57.0 |

#### See Also

-   [Get a Batch of Related List Actions with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_batch_get.htm "Get the actions on a batch of related lists for a record. This resource uses the POST method so you can enter request parameters in the request body instead using complex URL parameters.")

## Code Examples

```
POST /services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/related-list/batch
```

```
{
  "relatedListsActionParameters":
  [
    {
      "relatedListId": "Contacts",
      "apiNames": [ "New" ],
      "retrievalMode": "All"
    },
    {
      "relatedListId": "Opportunities",
      "apiNames": ["New" ],
      "retrievalMode": "All"
    }
  ]
}
```

## Related Topics

- Get a Batch of Related List Actions with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_batch_get.htm)
