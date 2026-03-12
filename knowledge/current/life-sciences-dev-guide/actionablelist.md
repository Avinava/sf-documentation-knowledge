---
title: "ActionableList"
domain: life-sciences-dev-guide
topic: actionablelist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.914Z
estimatedTokens: 2226
keywords: [ActionableList, actionable, API, version, 65.0, later, Calls, Associated, Objects]
---

# ActionableList

> Represents an actionable list. This object is available in API version 65.0
         and later.

# ActionableList

Represents an actionable list. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionableListDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe list definition that's associated with the actionable list.This field is a relationship field.Relationship NameActionableListDefinitionRefers ToActionableListDefinition |
| ActionableListType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of the actionable list based on its definition. This value is derived from the ActionableListDefinition record. |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person to whom an actionable list is assigned.This field is a polymorphic relationship field.Relationship NameAssigneeRefers ToGroup, User |
| AssigneeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of assignee of an actionable list.Possible values are:QueueRecordOwnerUser |
| AssignmentStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the assignment done for an actionable list.Possible values are:FailedInProgressPartiallyCompleteSuccessWaiting |
| AutomaticAssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assignee to whom the new members in an actionable list are automatically assigned.This field is a polymorphic relationship field.Relationship NameAutomaticAssigneeRefers ToGroup, User |
| AutomaticAssigneeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of assignee to which the new members in an actionable list are automatically assigned.Possible values are:QueueRecordOwnerUser |
| BatchCalcJobDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe batch calculation job definition associated with the actionable list.This field is a relationship field.Relationship NameBatchCalcJobDefinitionRefers ToBatchCalcJobDefinition |
| CompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date for completing engagement with the members in an actionable list. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code for the postauthorization request.Possible values are:USD—U.S. DollarThe default value is USD. |
| DefaultMemberStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default actionable list member status.This field is a relationship field.Relationship NameDefaultMemberStatusRefers ToActionableListMemberStatus |
| DefaultSortMemberField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default field name used for sorting the actionable list members in Outreach List. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the actionable list. |
| IsActionableListConfigured | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether an actionable list is configured (true) or not (false).The default value is false. |
| IsAutoAssignmentAllowed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether automatic assignment of new actionable list members is allowed (true) or not (false).The default value is false. |
| LastMemberAddDateTime | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe date and time when the last member was added to an actionable list in epoch time format. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| ListStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the actionable list.Possible values are:ActiveArchivedDraftProcessing |
| MemberCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe actionable list members count. |
| MemberCountLastModDtTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the member count of an actionable list was last modified. |
| MemberSortOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the default sort order for sorting the actionable list members in Outreach List.Possible values are:AscendingDescending |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the actionable list. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the object for which the actionable list is created.Possible values are:AccountAssetCareRequestCareRequestItemCaseClaimClinicalServiceRequestContactHealthcareFacilityInsurancePolicyLeadMemberPlanOpportunityPersonLifeEvent |
| OmniScriptKey | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe key that's created by combining the type, subtype, and language of the OmniScript with a '/' separating these values. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the actionable list.Possible values are:HighLowMedium |
| SourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source type of the actionable list.Possible values are:CrmAnalytics—Crm AnalyticsDataCloudPlatform—Data Cloud Platform |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the status of the actionable list.Possible values are:FailedQueuedSuccess |
| SynchronizationOperationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of operation that's performed when an actionable list synchronizes with a Data Cloud segment.Possible values are:InsertUpdate |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableListChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ActionableListFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionableListHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActionableListShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ActionableListChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ActionableListFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ActionableListHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ActionableListShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
