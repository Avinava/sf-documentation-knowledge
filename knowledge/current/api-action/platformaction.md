---
title: "PlatformAction"
domain: api-action
topic: platformaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.293Z
estimatedTokens: 1985
keywords: [PlatformAction, virtual, read-only, query, actions, user, context, device, record, Examples, include, standard, custom, buttons, quick]
---

# PlatformAction

> PlatformAction is a virtual read-only object. It enables you to query
   for actions displayed in the UI, given a user, a context, device format, and a record ID.
   Examples include standard and custom buttons, quick actions, and productivity
  actions.

# PlatformAction

PlatformAction is a virtual read-only object. It enables you to query for actions displayed in the UI, given a user, a context, device format, and a record ID. Examples include standard and custom buttons, quick actions, and productivity actions.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| ActionListContext | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRequired. The list context this action applies to. Valid values are:AssistantBannerPhotoChatterDockableFeedElementFlexipageGlobalListViewListViewDefinitionListViewRecordLookupMruListMruRowObjectHomeChartPhotoRecordRecordEditRelatedListRelatedListRecord |
| ActionTarget | TypetextareaPropertiesNillableDescriptionThe URL to invoke or describe the action when the action is invoked. If the action is a standard button overridden by a Visualforce page, the ActionTarget returns the URL of the Visualforce page, such as /apex/pagename.This field is available in API version 35.0 and later. |
| ActionTargetType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the target when this action is triggered. Valid values are:Describe—applies to actions with a user interface, such as quick actionsInvoke—applies to actions with no user interface, such as action links or invocable actionsVisualforce—applies to standard buttons overridden by a Visualforce page |
| ActionTargetUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL to invoke or describe the action when the action is invoked. This field is deprecated in API version 35.0 and later. Use ActionTarget instead. |
| Category | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionApplies only to action links. Denotes whether the action link shows up in the feed item list of actions or the overflow list of actions. Valid values are:PrimaryOverflow |
| ConfirmationMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionApplies only to action links. The message to display before the action is invoked. Field is null if no confirmation is required before invoking the action. |
| DeviceFormat | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies which action icon the PlatformAction query returns. If this field isn’t specified, it defaults to Phone. Valid values are:AlohaDesktopPhoneTablet |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID for the PlatformAction. If the action doesn’t have an ID, its API name is used. |
| GroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a group of action links. |
| IconContentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe content type—such as .jpg, .gif, or .png—of the icon for this action. Applies to both custom and standard icons assigned to actions. |
| IconHeight | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe height of the icon for this action. Applies only to standard icons. |
| IconUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the icon for this action. |
| IconWidth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe width of the icon for this action. Applies only to standard icons. |
| InvocationStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the action within the feed item. Applies to action links only. Valid values are:FailedNewPendingSuccessful |
| InvokedByUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user who most recently invoked this action within the current feed item. Applies to action links only.This is a relationship field.Relationship NameInvokedByUserRelationship TypeLookupRefers ToUser |
| IsGroupDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDenotes whether this action is the default in an action link group. False for other action types. Applies to action links only. |
| IsMassAction | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the action can be performed on multiple records.This field is available in API version 38.0 and later. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe label to display for this action. |
| PrimaryColor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe primary color of the icon for this action. |
| RelatedListRecordId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the ID of a record in an object’s related list.This field is available in API version 38.0 and later. |
| RelatedSourceEntity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionWhen the ActionListContext is RelatedList or RelatedListRecord, this field represents the API name of the related list to which the action belongs. |
| Section | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe section of the user interface the action resides in. Applicable only to Lightning Experience. Valid values are:ActivityComposerCollaborateComposerNotesComposerPageSingleActionLinksThis field is available in API version 35.0 and later. |
| SourceEntity | TypestringPropertiesFilter, Group, SortDescriptionRequired. The object or record with which this action is associated. |
| Subtype | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe subtype of the action. For quick actions, the subtype is QuickActionType. For custom buttons, the subtype is WebLinkTypeEnum. For action links, subtypes are Api, ApiAsync, Download, and Ui. Standard buttons and productivity actions have no subtype. |
| TargetObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of object record the action creates, such as a contact or opportunity.This field is available in API version 41.0 and later. |
| TargetUrl | TypestringPropertiesFilter, Nillable, SortDescriptionThe URL that a custom button or link points to.This field is available in API version 41.0 and later. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the action. Valid values are:ActionLink—An indicator on a feed element that targets an API, a web page, or a file, represented by a button in the Salesforce Chatter feed UI.CustomButton—When clicked, opens a URL or a Visualforce page in a window or executes JavaScript.InvocableActionProductivityAction—Productivity actions are predefined and attached to a limited set of objects. Productivity actions include Send Email, Call, Map, View Website, and Read News. Except for the Call action, you can’t edit productivity actions.QuickAction—A global or object-specific action.StandardButton—A predefined Salesforce button such as New, Edit, and Delete. |

## Usage

PlatformAction can be described using describeSObject().

You can directly query for PlatformAction. For example, this query returns all fields for actions associated with each of the records of the listed objects:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_action)

#### Note

To query PlatformAction, provide the ActionListContext and SourceEntity. If you query for ActionListContext with a value of RelatedList, and don't specify a RelatedSourceEntity, the query returns the API name of the related list. In API v43.0 and before, SourceEntity = 'Object API Name' and ActionListContext = 'ListView' is an invalid combination to fetch quick actions in a SOQL query. Use SourceEntity = 'Object ID' and ActionListContext = 'ListView' instead.

This query uses multiple ActionListContext values in its WHERE clause to return all actions in the Lightning Experience user interface (DeviceFormat = 'Desktop') for the specified object:

```

```

## Code Examples

```
SELECT ExternalId, ActionTargetType, ActionTargetUrl, ApiName, Category,
      ConfirmationMessage, ExternalId, GroupId, UiTheme, IconUrl, IconContentType, 
      IconHeight, IconWidth, PrimaryColor, InvocationStatus, InvokedByUserId, 
      IsGroupDefault, Label, LastModifiedDate, Subtype, SourceEntity, Type 
FROM PlatformAction 
WHERE SourceEntity IN ('001xx000003DGsH', '001xx000003DHBq', ‘Task’) AND 
      ActionListContext = ‘Record’;
```

```
SELECT ActionListContext, Label, Type, Subtype, Section, SourceEntity,
     RelatedSourceEntity, ActionTarget, ActionTargetType, ApiName, Category, 
     ConfirmationMessage, DeviceFormat, ExternalId, GroupId, IconContentType, 
     IconHeight, IconUrl, IconWidth, Id, InvocationStatus, InvokedByUserId, 
     IsGroupDefault, LastModifiedDate, PrimaryColor 
FROM PlatformAction 
WHERE ActionListContext IN ('Record','Chatter','RelatedList') AND 
      SourceEntity = '001xx000003DlvX' AND 
      DeviceFormat = 'Desktop'
```
