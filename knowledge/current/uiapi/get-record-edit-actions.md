---
title: "Get Record Edit Actions"
domain: uiapi
topic: get-record-edit-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.286Z
estimatedTokens: 516
keywords: [Record, Edit, Actions]
---

# Get Record Edit Actions

> Get the actions on a record edit page.

# Get Record Edit Actions

Get the actions on a record edit page.

Resource

```

```

Available Version

41.0

HTTP Method

GET

Example

As an example, let’s say we have an Account page with a record ID of 001R0000003IDlwIAG. To get information about all the actions on the edit page for this record, make this request:

```

```

The request returns a list of actions on the edit page and the URLs of the request and subrequests.

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

[Action](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm#ui_api_responses_action "The actions for a single record or a collection of records.")

## Code Examples

```
/ui-api/actions/record/${recordId}/record-edit
```

```
GET /services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/record-edit
```

```
{
  "actions" : {
    "001R0000003IDlwIAG" : {
      "actions" : [ {
        "actionListContext" : "RecordEdit",
        "actionTarget" : null,
        "actionTargetType" : "Invoke",
        "apiName" : "SaveEdit",
        "externalId" : "00DR00000008n7M:001R0000003IDlwIAG::RecordEdit:Phone:StandardButton:SaveEdit",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/new_custom19_120.png",
        "id" : "0JVR00000000001OAA",
        "isMassAction" : "false",
        "label" : "Save",
        "primaryColor" : null,
        "relatedListRecordId" : null,
        "relatedSourceObject" : null,
        "section" : "Page",
        "sourceObject" : "001R0000003IDlwIAG",
        "subtype" : null,
        "targetObject" : "Account",
        "targetUrl" : null,
        "type" : "StandardButton"
      }

... Additional actions removed for brevity ...

],
      "links" : [ ],
      "url" : "/services/data/v41.0/ui-api/actions/record/001R0000003IDlwIAG/record-edit"
    }
  },
  "url" : "/services/data/v41.0/ui-api/actions/record/001R0000003IDlwIAG/record-edit"
}
```

## Related Topics

- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
