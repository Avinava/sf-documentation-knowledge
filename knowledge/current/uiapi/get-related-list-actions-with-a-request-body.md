---
title: "Get Related List Actions with a Request Body"
domain: uiapi
topic: get-related-list-actions-with-a-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.655Z
estimatedTokens: 357
keywords: [Actions, record, detail, resource, uses, POST, enter, instead, complex, URL]
---

# Get Related List Actions with a Request Body

> Get the actions on related lists for a record detail page. This resource uses the POST
  method so you can enter request parameters in the request body instead using complex URL
  parameters.

# Get Related List Actions with a Request Body

Get the actions on related lists for a record detail page. This resource uses the POST method so you can enter request parameters in the request body instead using complex URL parameters.

Resources

```

```

-   recordIds—The 15 or 18 character ID of a record.
-   relatedListId—(Optional) A related list ID. If this parameter isn’t specified, the request returns all related list actions for the specified record. To get actions for a batch of related lists, see [Get a Batch of Related List Actions with a Request Body](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_batch_get.htm "Get the actions on a batch of related lists for a record. This resource uses the POST method so you can enter request parameters in the request body instead using complex URL parameters.").

Available Version

57.0

HTTP Method

POST

Example

To get information about related list actions on a record detail page, use this request with a request body.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listRecordActionsQuery | Action Input | The data for related list actions. | Optional | 57.0 |

Response Body

[Action](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm#ui_api_responses_action "The actions for a single record or a collection of records.")

## Code Examples

```
/ui-api/actions/record/${recordIds}/related-list/${relatedListId}
```

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

- Get a Batch of Related List Actions with a Request Body (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_related_list_actions_batch_get.htm)
- Action Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_action_input.htm)
- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
