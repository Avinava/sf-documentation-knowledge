---
title: "GroupCensus"
domain: financial-services-cloud-object-reference
topic: groupcensus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.382Z
estimatedTokens: 1981
keywords: [GroupCensus, snapshot, statistics, eligible, members, employees, group, employer, association, their, legal, dependents, entity, quoting, rating]
---

# GroupCensus

> Represents a snapshot of statistics about eligible members (employees or members) of a group (employer or association) and their legal dependents. Use this entity in quoting, rating, and the subsequent enrollment process. Child object of employer or group Account. This object is available in API version 55.0 and later.

# GroupCensus

Represents a snapshot of statistics about eligible members (employees or members) of a group (employer or association) and their legal dependents. Use this entity in quoting, rating, and the subsequent enrollment process. Child object of employer or group Account. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionGroup account associated with the census.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract associated with the census.This is a relationship field.Refers toContract |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEffective end date of the census. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEffective start date of the census. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionExternal ID used to identify the group census in search. Used as a cross reference field if the group census is externally imported. |
| FullTimeMemberCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of full-time members. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record |
| LeadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLead associated with the census.This is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| MbrWithMoreThan1ChldCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have one or more children as dependents. Use in tier-based rating during quote and contract. |
| MbrWithMoreThan2ChldCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have two or more children as dependents. Use in tier-based rating during quote and contract. |
| MbrWithoutDependentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of single members who haven't declared any dependents for plan enrollment. |
| MemberOptOutCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have opted out of plan enrollment and don't want to participate in the employer's benefits program. |
| MemberWithDependentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have dependents and no spouse. |
| MemberWithOneChildCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have only one child as a dependent. Use in rating during quote and contract. |
| MemberWithSpouseCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have a spouse and no dependents. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the census. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this account.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartTimeMemberCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of part-time members. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system of the census. |
| SourceSystemType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the source system type.Possible values are:ExternalUser |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the census.Possible values are:ActiveDraftInactive |
| TotalDependents | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of dependents. |
| TotalMemberPlusDependent | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members and dependents. |
| TotalMembers | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the stage this census is mapped to.Possible values are:EnrollmentLeadQuoteSystem |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionInternal field. Specifies the application using the group census to populate data.Possible values are:InsuranceThe default value is 'Insurance'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GroupCensusChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[GroupCensusFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GroupCensusHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GroupCensusOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[GroupCensusShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GroupCensusChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- GroupCensusFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- GroupCensusHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- GroupCensusOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- GroupCensusShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
