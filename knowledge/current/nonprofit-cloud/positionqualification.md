---
title: "PositionQualification"
domain: nonprofit-cloud
topic: positionqualification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.747Z
estimatedTokens: 962
keywords: [PositionQualification, position-based, qualification, API, version, 64.0, later, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# PositionQualification

> Represents a position-based qualification.  This object is
      available in API version 64.0 and later.

# PositionQualification

Represents a position-based qualification. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the qualification. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the position. |
| PositionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe position related to the position qualification.This field is a relationship field.Relationship NamePositionRelationship TypeMaster-detailRefers ToPosition (the master object) |
| ProficiencyLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe proficiency level that's required for this qualifiation.Possible values are:AdvancedBeginnerIntermediate |
| QualificationLevel | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number that represents the level requirement for the qualification. |
| QualificationReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionA lookup to the record that confirms the qualification. Options include Competency, Certification, Examination, Education, and Disability records.This field is a polymorphic relationship field.Relationship NameQualificationReferenceRecordRefers ToCompetency and Examination |

## Usage

If a job position requires the person who fills it hold a qualification, the qualification requirement is referenced here. For example, to work as a child care volunteer, the person performing the work is required to hold a current CPR certification. The CPR certification requirement would be referenced in this object.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PositionQualificationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[PositionQualificationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PositionQualificationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PositionQualificationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PositionQualificationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
