---
title: "HealthcareProviderSpecialty"
domain: life-sciences-dev-guide
topic: healthcareproviderspecialty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.056Z
estimatedTokens: 1437
keywords: [HealthcareProviderSpecialty, specialties, practitioner, service, provider, organization, multiple, anesthesiology, cardiovascular, Calls, Associated, Objects]
---

# HealthcareProviderSpecialty

> Represents specialties for a practitioner or a service provider
			organization. A provider can have multiple specialties such as
				anesthesiology and cardiovascular.

# HealthcareProviderSpecialty

Represents specialties for a practitioner or a service provider organization. A provider can have multiple specialties such as anesthesiology and cardiovascular.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount associated with this specialty.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActiveResearchStudyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of active research studies being performed by the healthcare provider for the specialty. This field is available in API version 62.0 and later when Site Management (Pilot) is enabled. |
| CompletedResearchStudyCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of research studies completed by the healthcare provider for the specialty. This field is available in API version 62.0 and later when Site Management (Pilot) is enabled. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this provider specialty is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this provider specialty is no longer effective. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| IsPrimarySpecialty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the specialty is the provider's primary specialty. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the provider’s specialty. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner associated with the specialty.This is a relationship field.Relationship NamePractitionerRelationship TypeLookupRefers ToContact |
| ResearchStudyPhase | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the research study phase that the healthcare provider has experience with. This field is available in API version 62.0 and later when Site Management (Pilot) is enabled.Possible values are:Phase 1Phase 2Phase 3Phase 4 |
| ResearchStudyType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the research study type that the healthcare provider has experience with. This field is available in API version 62.0 and later when Site Management (Pilot) is enabled.Possible values are:HybridTraditionalVirtual |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of an external record on its source system. |
| SpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCare specialty record associated with the provider.This is a relationship field.Relationship NameSpecialtyRelationship TypeLookupRefers ToCareSpecialty |
| SpecialtyRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRole of the specialty for the provider or practitioner. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcareProviderSpecialtyChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 59.0)

Change events are available for the object.

[HealthcareProviderSpecialtyFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[HealthcareProviderSpecialtyHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[HealthcareProviderSpecialtyOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[HealthcareProviderSpecialtyShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
