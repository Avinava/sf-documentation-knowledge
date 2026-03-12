---
title: "Get a Batch of Related List Actions with a Request Body"
domain: uiapi
topic: get-a-batch-of-related-list-actions-with-a-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.652Z
estimatedTokens: 267
keywords: [Batch, Actions, record, resource, uses, POST, enter, instead, complex, URL]
---

# Get a Batch of Related List Actions with a Request Body

> Get the actions on a batch of related lists for a record. This resource uses the POST
  method so you can enter request parameters in the request body instead using complex URL
  parameters.

# Get a Batch of Related List Actions with a Request Body

Get the actions on a batch of related lists for a record. This resource uses the POST method so you can enter request parameters in the request body instead using complex URL parameters.

Resources

```

```

-   recordIds—The 15 or 18 character ID of a record.

Available Version

57.0

HTTP Method

POST

Example

To get information about the actions for the Contacts and Opportunities related lists on an Account record page, use this request with parameters in a request body.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listRecordActionsQuery | Action Related Lists Batch Input | The data for a batch of related list actions. | Optional | 57.0 |

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/actions/record/${recordIds}/related-list/batch
```

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

- Action Related Lists
            Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_related_list_batch_input.htm)
- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
