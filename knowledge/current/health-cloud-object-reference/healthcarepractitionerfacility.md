---
title: "HealthcarePractitionerFacility"
domain: health-cloud-object-reference
topic: healthcarepractitionerfacility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.229Z
estimatedTokens: 1494
keywords: [HealthcarePractitionerFacility, different, locations, practitioner, services, Calls, Associated, Objects]
---

# HealthcarePractitionerFacility

> Represents the different locations in which a practitioner provides
      services.

# HealthcarePractitionerFacility

Represents the different locations in which a practitioner provides services.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount associated with this practitioner facility.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this practitioner facility is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this practitioner facility is no longer effective. |
| GenderRestriction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether physician sees patients of a specific gender. |
| HealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Healthcare facility associated with this healthcare practitioner facility.Relationship TypeLookupRefers ToHealthcareFacility |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHealthcare provider associated with this healthcare practitioner facility.This is a relationship field.Relationship TypeLookupRefers ToHealthcareProvider |
| HighestValidAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest age of patients that the practitioner sees at this facility |
| InitialStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the practitioner started at this facility. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| IsDirectoryPrint | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this facility is displayed in an online or printed directory. |
| IsPrimaryCarePhysician | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the practitioner provides primary care services at this facility. |
| IsPrimaryFacility | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the facility is the primary facility for the practitioner. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LowestValidAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lowest age of patients that the practitioner sees at this facility. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the practitioner facility record. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the operating hours for this practitioner at this facility.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the practitioner associated with this facility.This is a relationship field.Relationship NamePractitionerRelationship TypeLookupRefers ToContact |
| ServiceTerritoryMember | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory member associated with the record. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of an external record on its source system. |
| TerminationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the practitioner stopped working at this facility. |
| TerminationReasonCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason the practitioner facility is no longer current. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[HealthcarePractitionerFacilityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[HealthcarePractitionerFacilityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[HealthcarePractitionerFacilityOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[HealthcarePractitionerFacilityShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
