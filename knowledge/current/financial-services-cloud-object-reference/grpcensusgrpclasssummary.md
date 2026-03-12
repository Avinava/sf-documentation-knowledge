---
title: "GrpCensusGrpClassSummary"
domain: financial-services-cloud-object-reference
topic: grpcensusgrpclasssummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.438Z
estimatedTokens: 1209
keywords: [GrpCensusGrpClassSummary, junction, group, census, statistics, members, associated, Calls, Objects]
---

# GrpCensusGrpClassSummary

> Represents a junction between group census and group class to get statistics about the
      group class members for the associated group census.

# GrpCensusGrpClassSummary

Represents a junction between group census and group class to get statistics about the group class members for the associated group census.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FullTimeMemberCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of full-time members. |
| GroupCensusId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe group census associated with the record.This field is a relationship field.Relationship NameGroupCensusRelationship TypeMaster-detailRefers ToGroupCensus (the master object) |
| GroupClassId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe group class associated with the record.This field is a relationship field.Relationship NameGroupClassRefers ToGroupClass |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MbrWithMoreThan1ChldCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have one or more children as dependents. Use in tier-based rating during quote and contract. |
| MbrWithMoreThan2ChldCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have two or more children as dependents. Use in tier-based rating during quote and contract. |
| MbrWithoutDependentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of single members who haven't declared any dependents for plan enrollment. |
| MemberOptOutCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have opted out of plan enrollment and don't want to participate in the employer's benefits program. |
| MemberWithDependentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have dependents and no spouse. |
| MemberWithOneChildCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have only one child as a dependent. Use in rating during quote and contract. |
| MemberWithSpouseCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members who have a spouse and no dependents. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the census. |
| PartTimeMemberCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of part-time members. |
| TotalDependents | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of dependents. |
| TotalMemberPlusDependent | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members and dependents. |
| TotalMembers | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of members. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GrpCensusGrpClassSummaryChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[GrpCensusGrpClassSummaryHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- GrpCensusGrpClassSummaryChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- GrpCensusGrpClassSummaryHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
