---
title: "Get Lightning Page Actions"
domain: uiapi
topic: get-lightning-page-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.360Z
estimatedTokens: 553
keywords: [Lightning, Actions, pages, FlexiPages]
---

# Get Lightning Page Actions

> Get the actions on Lightning pages (FlexiPages).

# Get Lightning Page Actions

Get the actions on Lightning pages (FlexiPages).

Resource

```

```

flexipageNames—A Lightning page name, or a comma-delimited list of Lightning page names.

Available Version

41.0

HTTP Method

GET

Example

As an example, let’s say we have a Lightning page named MyNewLightningPage. The page has quick actions for logging a call and creating an account. To get information about all the actions on this page, make this request:

```

```

The request returns a list of actions on the Lightning page and the URLs of the request and subrequests.

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
/ui-api/actions/flexipage/${flexipageNames}
```

```
GET /services/data/v66.0/ui-api/actions/flexipage/MyNewLightningPage
```

```
{
  "actions" : {
    "MyNewLightningPage" : {
      "actions" : [ {
        "actionListContext" : "Flexipage",
        "actionTarget" : "/services/data/v41.0/quickActions/LogACall/describe",
        "actionTargetType" : "Describe",
        "apiName" : "LogACall",
        "externalId" : "00DR00000008n7M:MyNewLightningPage::Flexipage:Desktop:09DR00000000Snt",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/log_a_call_120.png",
        "id" : "0JVR00000000009OAA",
        "isMassAction" : "false",
        "label" : "Log a Call",
        "primaryColor" : "48C3CC",
        "relatedListRecordId" : null,
        "relatedSourceObject" : null,
        "section" : null,
        "sourceObject" : "MyNewLightningPage",
        "subtype" : "LogACall",
        "targetObject" : "Task",
        "targetUrl" : null,
        "type" : "QuickAction"
      }, {
        "actionListContext" : "Flexipage",
        "actionTarget" : "/services/data/v41.0/quickActions/NewAccount/describe",
        "actionTargetType" : "Describe",
        "apiName" : "NewAccount",
        "externalId" : "00DR00000008n7M:MyNewLightningPage::Flexipage:Desktop:09DR00000000Sni",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/new_account_120.png",
        "id" : "0JVR00000000010OAA",
        "isMassAction" : "false",
        "label" : "New Account",
        "primaryColor" : "7F8DE1",
        "relatedListRecordId" : null,
        "relatedSourceObject" : null,
        "section" : null,
        "sourceObject" : "MyNewLightningPage",
        "subtype" : "Create",
        "targetObject" : "Account",
        "targetUrl" : null,
        "type" : "QuickAction"
      } ],
      "links" : [ ],
      "url" : "/services/data/v41.0/ui-api/actions/flexipage/MyNewLightningPage"
    }
  },
  "url" : "/services/data/v41.0/ui-api/actions/flexipage/MyNewLightningPage"
}
```

## Related Topics

- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
