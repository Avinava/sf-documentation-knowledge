---
title: "Action Related Lists Batch Input"
domain: uiapi
topic: action-related-lists-batch-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.155Z
estimatedTokens: 230
keywords: [Action, Batch, Input, actions, record]
---

# Action Related Lists Batch Input

> Get the actions on a batch of related lists for a record.

# Action Related Lists Batch Input

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
| relatedListsActionParameters | Action Related List Single Batch Input | Parameters for each related list in the batch request. | Required | 57.0 |

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

- Action
                        Related List Single Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_related_list_single_batch_input.htm)
- Get a Batch of Related List Actions with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_batch_get.htm)
