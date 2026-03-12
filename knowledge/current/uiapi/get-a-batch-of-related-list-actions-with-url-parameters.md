---
title: "Get a Batch of Related List Actions with URL Parameters"
domain: uiapi
topic: get-a-batch-of-related-list-actions-with-url-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.721Z
estimatedTokens: 630
keywords: [Batch, Actions, URL, record, via]
---

# Get a Batch of Related List Actions with URL Parameters

> Get the actions on a batch of related lists for a record via URL
      parameters.

# Get a Batch of Related List Actions with URL Parameters

Get the actions on a batch of related lists for a record via URL parameters.

Resources

```

```

-   recordIds—The 15 or 18 character ID of a record.
-   relatedListIds—(Optional) A comma-delimited list of related list IDs. When this parameter isn’t specified, the request returns all related list actions for the specified record.

Available Version

50.0

HTTP Method

GET

Example

As an example, let’s say we have an Account record detail page with a record ID of 001R0000003IDlwIAG. The page has some related lists, including tasks and events. To get information about all the related list actions on this page, make this request.

```

```

The request returns a list of related list actions on the page and the URLs of the request and subrequests.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionTypes | String[] | The action type. One or more of these values:CustomButton—A button that opens a URL or Visualforce page or executes JavaScript.ProductivityAction—A pre-defined Salesforce action, attached to a limited set of objects.QuickAction—A global or object-specific action.StandardButton—A pre-defined Salesforce button, such as New, Edit, and Delete. | Optional | 41.0 |
| apiNames | String[] | The API names of one or more actions to be retrieved. Use this parameter only when passing retrievalMode=All. | Optional | 49.0 |
| formFactor | String | The layout display size. One of these values:Large—(Default) Use this value to get a layout for desktop display size.Medium—Use this value to get a layout for tablet display size.Small—Use this value to get a layout for phone display size. | Optional | 41.0 |
| retrievalMode | String | When the action context is Record, this parameter indicates which actions to retrieve from the record page. One of these values:All—Retrieves all actions specified in the apiNames parameter.PageLayout—(Default) Retrieves actions from the page layout. | Optional | 49.0 |
| sections | String[] | The section of the user interface that the actions reside in. One or more of these values:ActivityComposerCollaborateComposerPageSingleActionLinks | Optional | 41.0 |

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/actions/record/${recordIds}/related-list/batch/${relatedListIds}
```

```
GET /services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/related-list/batch
```

```
{
  "actions" : {
    "001R0000003IDlwIAG" : {
      "actions" : [ {
        "actionListContext" : "RelatedList",
        "actionTarget" : null,
        "actionTargetType" : "Invoke",
        "apiName" : "NewTask",
        "externalId" : "00DR00000008n7M:001R0000003IDlwIAG::RelatedList:Phone:StandardButton:NewTask",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/new_task_120.png",
        "id" : "0JVR00000000036OAA",
        "isMassAction" : "false",
        "label" : "New Task",
        "primaryColor" : "4BC076",
        "relatedListRecordId" : null,
        "relatedSourceObject" : "OpenActivities",
        "section" : "Page",
        "sourceObject" : "001R0000003IDlwIAG",
        "subtype" : null,
        "targetObject" : "Task",
        "targetUrl" : null,
        "type" : "StandardButton"
      }, {
        "actionListContext" : "RelatedList",
        "actionTarget" : null,
        "actionTargetType" : "Invoke",
        "apiName" : "NewEvent",
        "externalId" : "00DR00000008n7M:001R0000003IDlwIAG::RelatedList:Phone:StandardButton:NewEvent",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/new_event_120.png",
        "id" : "0JVR00000000037OAA",
        "isMassAction" : "false",
        "label" : "New Event",
        "primaryColor" : "EB7092",
        "relatedListRecordId" : null,
        "relatedSourceObject" : "OpenActivities",
        "section" : "Page",
        "sourceObject" : "001R0000003IDlwIAG",
        "subtype" : null,
        "targetObject" : "Event",
        "targetUrl" : null,
        "type" : "StandardButton"
      }

... Additional actions removed for brevity ...

],
      "links" : [ ],
      "url" : "/services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/related-list"
    }
  },
  "url" : "/services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/related-list"
}
```

## Related Topics

- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
