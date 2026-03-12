---
title: "Get Lookup Field Actions"
domain: uiapi
topic: get-lookup-field-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.451Z
estimatedTokens: 730
keywords: [Lookup, Actions]
---

# Get Lookup Field Actions

> Get the actions on lookup fields.

# Get Lookup Field Actions

Get the actions on lookup fields.

Resource

```

```

objectApiNames—A lookup field name, or a comma-delimited list of lookup field names.

Available Version

41.0

HTTP Method

GET

Example

As an example, let’s say we have a lookup field on a New Account dialog box. To get information about the actions on this lookup field, make this request:

```

```

The request returns a list of actions on the lookup field and the URLs of the request and subrequests.

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

#### See Also

-   [Get Lookup Field Suggestions](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")

-   [Get Lookup Field Suggestions for a Specified Object](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_object_get.htm "When a user edits a lookup field, use this resource to search for and display suggestions for a specified object. You can search for most recently used matches, for matching names, or for any match in a searchable field. You can also specify lookup filter bindings for dependent lookups.")

## Code Examples

```
/ui-api/actions/lookup/${objectApiNames}
```

```
GET /services/data/v66.0/ui-api/actions/lookup/Account
```

```
{
  "actions" : {
    "Account" : {
      "actions" : [ {
        "actionListContext" : "Lookup",
        "actionTarget" : null,
        "actionTargetType" : "Invoke",
        "apiName" : "CreateFromLookup",
        "externalId" : "00DR00000008n7M:Account::Lookup:Phone:StandardButton:CreateFromLookup",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/new_120.png",
        "id" : "0JVR00000000004OAA",
        "isMassAction" : "false",
        "label" : "New",
        "primaryColor" : "33BCE7",
        "relatedListRecordId" : null,
        "relatedSourceObject" : null,
        "section" : "Page",
        "sourceObject" : "Account",
        "subtype" : null,
        "targetObject" : "Account",
        "targetUrl" : null,
        "type" : "StandardButton"
      } ],
      "links" : [ ],
      "url" : "/services/data/v41.0/ui-api/actions/lookup/Account"
    }
  },
  "url" : "/services/data/v41.0/ui-api/actions/lookup/Account"
}
```

## Related Topics

- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
- Get Lookup Field Suggestions (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_get.htm)
- Get Lookup Field Suggestions for a Specified Object (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lookup_object_get.htm)
