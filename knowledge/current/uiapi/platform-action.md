---
title: "Platform Action"
domain: uiapi
topic: platform-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.041Z
estimatedTokens: 946
keywords: [Platform, Action, metadata, layout, data]
---

# Platform Action

> The metadata, layout information, and data for a platform
    action.

# Platform Action

The metadata, layout information, and data for a platform action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionListContext | String | The context of the action. One of these values:ChatterDockableFlexiPageGlobalListViewListViewRecordLookupMruListObjectHomeChartPhotoRecordRecordEditRelatedListRelatedListRecord | Small, 41.0 | 41.0 |
| actionTarget | String | The URL to invoke or describe the action when the action is invoked. Applies only to quick actions. | Big, 41.0 | 41.0 |
| actionTargetType | String | The type of the target when this action is invoked. One of these values:Describe—applies to actions with a user interface, such as quick actionsInvoke—applies to actions with no user interface, such as action links or invocable actionsVisualforce—applies to standard buttons overridden by a Visualforce page | Big, 41.0 | 41.0 |
| apiName | String | The API name of the action.In API version 46.0 and later, for global actions the prefix Global. is prepended to the API name. | Small, 41.0 | 41.0 |
| externalId | String | External information associated with the action.1 | Medium, 41.0 | 41.0 |
| iconUrl | String | The URL of the action’s icon image. | Small, 41.0 | 41.0 |
| id | String | The ID of this platform action record, which is the 18-character PlatformAction SObject ID, with a prefix of 0JV. | Small, 41.0 | 41.0 |
| isMassAction | String | Indicates whether the action can be performed on multiple records. | Small, 41.0 | 41.0 |
| label | String | The label to display for this action. | Small, 41.0 | 41.0 |
| lwcComponent | String | The Lightning web component associated with this action. | Small, 56.0 | 56.0 |
| primaryColor | String | The primary color of the icon for this action, in Hex color code. For example, 7F8DE1. | Small, 41.0 | 41.0 |
| relatedListRecordId | String | When the actionListContext property is RelatedListRecord, this field represents the ID of the record in an object's related list. | Small, 41.0 | 41.0 |
| relatedSourceObject | String | When the actionListContext property is RelatedList or RelatedListRecord, this field represents the API name of the related list to which the action belongs. | Small, 41.0 | 41.0 |
| section | String | The section of the user interface the action resides in. One of these values:ActivityComposerCollaborateComposerPageSingleActionLinks | Medium, 41.0 | 41.0 |
| sourceObject | String | The object that this action is associated with. Either an API name or record ID, depending on the resource. | Small, 41.0 | 41.0 |
| subtype | String | The subtype of the action. For quick actions, one of these values:CanvasCaseCommentChangeDueDateChangePriorityChangeStatusCreateEmailLightningComponentLogACallMobileCreateFullMobileSmartActionsPostSendEmailSocialPostUpdateVisualforcePageFor custom buttons, one of these values:flowjavascriptpagesControlurlFor action links, one of these values:ApiApiAsyncDownloadUiStandard buttons and productivity actions have no subtype. | Medium, 41.0 | 41.0 |
| targetObject | String | The target object that is created when the action is invoked. | Small, 41.0 | 41.0 |
| targetUrl | String | The target URL for custom button actions. | Small, 41.0 | 41.0 |
| type | String | The type of the action. One of these values:CustomButton—A button that opens a URL or Visualforce page or executes JavaScript.ProductivityAction—A pre-defined Salesforce action, attached to a limited set of objects.QuickAction—A global or object-specific action.StandardButton—A pre-defined Salesforce button, such as New, Edit, and Delete. | Small, 41.0 | 41.0 |

1The format for a quick action is:

```

```

For example:

```

```

The format for a standard action is:

```

```

## Code Examples

```
OrgId:SourceObject::Context:deviceFormat::QuickActionDefinitionId
```

```
00Dxx0000001gGh:x01xx0000000007AAA::Record:Phone:09Dxx00000000B6
```

```
OrgId:SourceObject::Context:deviceFormat::StandardButton:ApiName
```
