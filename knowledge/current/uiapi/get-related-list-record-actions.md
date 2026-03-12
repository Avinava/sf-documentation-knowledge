---
title: "Get Related List Record Actions"
domain: uiapi
topic: get-related-list-record-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.693Z
estimatedTokens: 568
keywords: [Record, Actions, records]
---

# Get Related List Record Actions

> Get the actions on records in related lists.

# Get Related List Record Actions

Get the actions on records in related lists.

Resource

```

```

relatedListRecordIds—A related list record ID, or a comma-delimited list of related list record IDs.

Available Version

41.0

HTTP Method

GET

Example

As an example, let’s say we have an Account record detail page with a record ID of 001R0000003IDlwIAG. The page has a Contacts related list, and one of the Contacts has a record ID of 003R0000007qfC7. To get information about the actions for this contact, make this request:

```

```

The request returns a list of actions for the contact and the URLs of the request and subrequests.

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
/ui-api/actions/record/${recordId}/related-list-record/${relatedListRecordIds}
```

```
GET /services/data/v66.0/ui-api/actions/record/001R0000003IDlwIAG/related-list-record/003R0000007qfC7
```

```
{
        "actionListContext" : "RelatedListRecord",
        "actionTarget" : null,
        "actionTargetType" : "Invoke",
        "apiName" : "Delete",
        "externalId" : "00DR00000008n7M:001R0000003IDlwIAG::RelatedListRecord:Phone:StandardButton:Delete",
        "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/action/delete_120.png",
        "id" : "0JVR00000000014OAA",
        "isMassAction" : "false",
        "label" : "Delete",
        "primaryColor" : "E6717C",
        "relatedListRecordId" : "003R0000007qfC7",
        "relatedSourceObject" : "Contacts",
        "section" : "Page",
        "sourceObject" : "001R0000003IDlwIAG",
        "subtype" : null,
        "targetObject" : "Contact",
        "targetUrl" : null,
        "type" : "StandardButton"
      }

... Additional actions removed for brevity ...

],
      "links" : [ ],
      "url" : "/services/data/v41.0/ui-api/actions/record/001R0000003IDlwIAG/related-list-record/003R0000007qfC7"
    }
  },
  "url" : "/services/data/v41.0/ui-api/actions/record/001R0000003IDlwIAG/related-list-record/003R0000007qfC7"
}
```

## Related Topics

- Action (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_action.htm)
