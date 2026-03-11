---
title: "IndicatorAssignment"
domain: omnistudio
topic: indicatorassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.253Z
keywords: [IndicatorAssignment, Important, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# IndicatorAssignment

# IndicatorAssignment

Represents the assignment of an indicator definition that's used to measure the performance of an outcome or a related activity. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. 

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available in products that include the Outcome Management license where Outcome Management is enabled and the Manage Outcomes system permission is assigned to users.
-   This object is available in Net Zero Cloud with a Growth license where the Manage Environmental, Social, and Governance Programs system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| IndicatorAssignmentType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the object that the indicator assignment measures.Possible values are:OutcomeProgram |
| IndicatorDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe indicator definition that's associated with the indicator assignment.This field is a relationship field.Relationship NameIndicatorDefinitionRelationship TypeMaster-DetailRefers ToIndicatorDefinition |
| IntendedDirection | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the intended direction of change in the behavior, knowledge, skills, status, or level of functioning that's detailed in the parent indicator definition.Possible values are:DecreaseIncreaseMaintain |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the indicator assignment. |
| OutcomeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outcome that the indicator assignment measures.This field is a relationship field.Relationship NameOutcomeRelationship TypeLookupRefers ToOutcome |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of this indicator assignment.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program that the indicator assignment measures.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the indicator assignment.Possible values are:ActiveCanceledCompletedPlanned |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndicatorAssignmentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[IndicatorAssignmentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[IndicatorAssignmentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[IndicatorAssignmentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.