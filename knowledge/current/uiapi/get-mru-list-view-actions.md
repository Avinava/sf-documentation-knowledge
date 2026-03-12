---
title: "Get MRU List View Actions"
domain: uiapi
topic: get-mru-list-view-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.483Z
estimatedTokens: 532
keywords: [MRU, View, Actions, recently, objects]
---

# Get MRU List View Actions

> Get the header actions on the most recently used (MRU) list view for
      objects.

# Get MRU List View Actions

Get the header actions on the most recently used (MRU) list view for objects.

Resource

```

```

objectApiNames—An object name, or a comma-delimited list of object names.

Available Version

41.0

HTTP Method

GET

Example

As an example, let’s say we have a most recently used Accounts list view. To get information about the header actions on this list view, make this request:

```

```

The request returns a list of header actions on the list view and the URLs of the request and subrequests.

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionTypes | String[] | The action type. One or more of these values:CustomButton—A button that opens a URL or Visualforce page or executes JavaScript.ProductivityAction—A pre-defined Salesforce action, attached to a limited set of objects.QuickAction—A global or object-specific action.StandardButton—A pre-defined Salesforce button, such as New, Edit, and Delete. | Optional | 41.0 |
| apiNames | String[] | The API names of one or more actions to be retrieved. Use this parameter only when passing retrievalMode=All. | Optional | 49.0 |
| formFactor | String | The layout display size. One of these values:Large—(Default) Use this value to get a layout for desktop display size.Medium—Use this value to get a layout for tablet display size.Small—Use this value to get a layout for phone display size. | Optional | 41.0 |
| retrievalMode | String | When the action context is Record, this parameter indicates which actions to retrieve from the record page. One of these values:All—Retrieves all actions specified in the apiNames parameter.PageLayout—(Default) Retrieves actions from the page layout. | Optional | 49.0 |
| sections | String[] | The section of the user interface that the actions reside in. One or more of these values:ActivityComposerCollaborateComposerPageSingleActionLinks | Optional | 41.0 |

Response Body

[Action](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm "The actions for a single record or a collection of records.")

## Code Examples

```
/ui-api/actions/mru-list/${objectApiNames}
```

```
GET /services/data/v66.0/ui-api/actions/mru-list/Account
```

## Related Topics

- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
