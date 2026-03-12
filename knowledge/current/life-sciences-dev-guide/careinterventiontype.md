---
title: "CareInterventionType"
domain: life-sciences-dev-guide
topic: careinterventiontype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.261Z
estimatedTokens: 924
keywords: [CareInterventionType, standard, defined, interventions, maintained, organization, API, version, 45.0, later, Calls, Associated, Objects]
---

# CareInterventionType

> Represents the standard, defined list of interventions maintained by
         an organization. Available in API version 45.0 and later.

# CareInterventionType

Represents the standard, defined list of interventions maintained by an organization. Available in API version 45.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Code | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMedical vocabulary code for the intervention. |
| CodeType | TypepicklistPropertiesDefaulted on Create, Filter, Group, Nillable, SortDescriptionMedical vocabulary code type for the intervention. |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the intervention. |
| HealthCareProcedureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionProcedure code for the intervention.This is a relationship field.Relationship NameHealthCareProcedureRelationship TypeLookupRefers ToHealthCareProcedure |
| InterventionType | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe type of intervention. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this intervention type is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the intervention type. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcedureCodeSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe procedure code set associated with the care intervention type.This is a polymorphic relationship field.Relationship NameProcedureCodeSetRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareInterventionTypeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 60.0)

Change events are available for the object.

[CareInterventionTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareInterventionTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[CareInterventionTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[CareInterventionTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
