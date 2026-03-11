---
title: "ActionableListMember"
domain: omnistudio
topic: actionablelistmember
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:11.531Z
keywords: [ActionableListMember, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ActionableListMember

# ActionableListMember

Represents an individual actionable list item. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Access to this object requires the Industries Sales Excellence add-on and the Actionable Segmentation permission set license.

## Fields

| Field | Details |
| --- | --- |
| ActionableListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe actionable list that's associated with the member.This field is a relationship field.Relationship NameActionableListRelationship TypeLookupRefers ToActionableList |
| ActionableListMemberStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the actionable list member.This field is a relationship field.Relationship NameActionableListMemberStatusRelationship TypeLookupRefers ToActionableListMemberStatus |
| AdditionalIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the actionable list member record created by combining the record's actionable list ID and reference record values. Available in API version 61.0 and later. |
| AssignmentMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method used to assign members to an actionable list.Possible values are:Automatic Assignment—AutomaticAssignmentChange Assignee—ChangeAssigneeConfigure And Assign List—ConfigureAndAssignList |
| AssignmentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe assignment status of an actionable list member.Possible values are:AssignedFailedToBeAssignedUnassigned |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code for the postauthorization request.Valid values are:USD—U.S. DollarThe default value is USD. Available in API version 62.0 and later. |
| InsertOperationOnSync | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value to determine whether the insert operation is allowed or not on an actionable list when the list synchronizes with a Data Cloud segment.Valid values are:AllowedNot AllowedAvailable in API version 62.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the actionable list member. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner that's associated with the actionable list member.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the actionable list member.Possible values are:ActiveInactiveThe default value is Active. Available in API version 61.0 and later. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record of the reference object that's associated with the member.This field is a polymorphic relationship field.Relationship NameReferenceRecordRelationship TypeLookupRefers ToAccount, Asset, Case, Contact, Lead, Opportunity |
| SourceRecordStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the actionable list member record in the associated Data Cloud segment or other sources.Possible values are:existingnewremovedThe default value is new. Available in API version 61.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionableListMemberChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ActionableListMemberFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionableListMemberHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ActionableListMemberOwnerSharingRule](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ActionableListMemberShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.