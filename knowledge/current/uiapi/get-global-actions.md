---
title: "Get Global Actions"
domain: uiapi
topic: get-global-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.366Z
estimatedTokens: 514
keywords: [Actions, menu]
---

# Get Global Actions

> Get the actions in the Global Actions menu.

# Get Global Actions

Get the actions in the Global Actions menu.

Resource

```

```

Available Version

41.0

HTTP Method

GET

Example

As an example, let’s say we have a **New Opportunity** global action, among other actions. To get information about global actions, make this request:

```

```

The request returns a list of global actions, including **New Opportunity**, and the URLs of the request and subrequests.

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

```apex
/ui-api/actions/global
```

```apex
GET /services/data/v66.0/ui-api/actions/global
```

```apex
{
  "actions" : {
    "001R0000003IDlwIAG" : {
        "actionListContext" : "Global",
        "actionTarget" : "/services/data/v41.0/quickActions/NewOpportunity/describe",
        "actionTargetType" : "Describe",
        "apiName" : "NewOpportunity",
        "externalId" : "00DR00000008n7M:Global::Global:Phone:09DR00000000Snl",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/new_opportunity_120.png",
        "id" : "0JVR00000000030OAA",
        "isMassAction" : "false",
        "label" : "New Opportunity",
        "primaryColor" : "FCB95B",
        "relatedListRecordId" : null,
        "relatedSourceObject" : null,
        "section" : "Page",
        "sourceObject" : "Global",
        "subtype" : "Create",
        "targetObject" : "Opportunity",
        "targetUrl" : null,
        "type" : "QuickAction"
      }

... Additional actions removed for brevity ...

],
      "links" : [ ],
      "url" : "/services/data/v41.0/ui-api/actions/global"
    }
  },
  "url" : "/services/data/v41.0/ui-api/actions/global"
}
```

## Related Topics

- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
