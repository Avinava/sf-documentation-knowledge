---
title: "ActionableList"
domain: omnistudio
topic: actionablelist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.738Z
estimatedTokens: 2850
keywords: [ActionableList, actionable, API, version, 57.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ActionableList

> Represents an actionable list. This object is available in API version
      57.0 and later.

# ActionableList

Represents an actionable list. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Access to this object requires Industries Sales Excellence add-on and the Actionable Segmentation Permission Set License.

## Fields

| Field | Details |
| --- | --- |
| ActionableListDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe list definition that's associated with the actionable list.This field is a relationship field.Relationship NameActionableListDefinitionRelationship TypeLookupRefers ToActionableListDefinition |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person to whom an actionable list is assigned.This field is a polymorphic relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToGroup, User |
| AssigneeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of assignee of an actionable list. Available in API version 58.0 and later.Possible values are:QueueRecordOwnerUser |
| AssignmentStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the assignment done for an actionable list. Available in API version 58.0 and later.Possible values are:FailedInProgressPartiallyCompleteSuccessWaiting |
| AutomaticAssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assignee to whom the new members in an actionable list are automatically assigned. Available in API version 59.0 and later.This field is a polymorphic relationship field.Relationship NameAutomaticAssigneeRelationship TypeLookupRefers ToGroup, User |
| AutomaticAssigneeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of assignee to which the new members in an actionable list are automatically assigned. Available in API version 59.0 and later.Possible values are:QueueRecordOwnerUser |
| BatchCalcJobDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe batch calculation job definition associated with the actionable list. Available in API version 59.0 and later.This field is a relationship field.Relationship NameBatchCalcJobDefinitionRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| CompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date for completing engagement with the members in an actionable list. Available in API version 58.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code for the postauthorization request.Valid values are:USD—U.S. DollarThe default value is USD. Available in API version 62.0 and later. |
| DefaultMemberStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default actionable list member status.This field is a relationship field.Relationship NameDefaultMemberStatusRelationship TypeLookupRefers ToActionableListMemberStatus |
| DefaultSortMemberField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default field name used for sorting the actionable list members in Outreach List. Available in API version 58.0 and later. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description about the actionable list. |
| IsActionableListConfigured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if an actionable list is configured (true) or not (false).The default value is false. |
| IsAutoAssignmentAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether automatic assignment of new actionable list members is allowed (true) or not (false).The default value is false. |
| IsSynchronizationAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an actionable list is refreshed (true) or not (false).The default value is false. Available in API version 62.0 and later. |
| LastMemberAddDateTime | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe date and time when the last member was added to an actionable list in epoch time format. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| ListStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the actionable list.Possible values are:ActiveArchivedDraftProcessing |
| MemberCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe actionable list members count. |
| MemberCountLastModDtTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the member count of an actionable list was last modified. |
| MemberSortOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe default sort order used for sorting the actionable list members in Outreach List.Possible values are:AscendingDescending |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the actionable list. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object for which the actionable list is created.Possible values are organized by the API version in which they were introduced. Values are available in all versions after introduction unless noted otherwise.Possible values are:API version 60.0 and later:PersonLifeEventAPI version 60.0 and later with Insurance Managed Package:ClaimInsurancePolicyQuoteAPI version 59.0 and later with Health Cloud:CareFacilityBedCareRequestCareRequestItemCareServiceVisitCareServiceVisitPlanClinicalServiceRequestAPI version 59.0 and later with Loyalty Cloud:LoyaltyProgramMemberAPI version 59.0 and later:CaseAPI version 58.0 and later with Automotive Cloud:VehicleAPI version 58.0 and later:AssetLeadOpportunityAPI version 57.0 and later:AccountContact |
| OmniScriptKey | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe key that's created by combining the type, subtype, and language of the OmniScript with a '/' separating these values. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe key that's created by combining the type, subtype, and language of the OmniScript with a '/' separating these values.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe priority of an Actionable List.Possible values are:HighLowMedium |
| SegmentIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the segment on which an actionable list is created. Available in API version 62.0 and later. |
| SegmentMembershipTable | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the segment membership history table that tracks the existing records in a segment and the records that were added or removed from the segment. Available in API version 62.0 and later. |
| SourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe source type of the actionable list.Possible values are:CrmAnalytics—Crm AnalyticsDataCloudPlatform—Data Cloud Platform |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the actionable list.Possible values are:FailedQueuedSuccess |
| SyncStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when an actionable list started to synchronize with a Data Cloud segment. Available in API version 62.0 and later. |
| SynchronizationFailureCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of times an actionable list fails to synchronize with a Data Cloud segment. Available in API version 62.0 and later. |
| SynchronizationOperationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of operation that's performed when an actionable list synchronizes with a Data Cloud segment.Valid values are:InsertUpdateAvailable in API version 62.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableListChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ActionableListFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionableListHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActionableListOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ActionableListShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ActionableListChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- ActionableListFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- ActionableListHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)
- ActionableListOwnerSharingRule (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ActionableListShare (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)
