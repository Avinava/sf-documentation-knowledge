---
title: "BenefitSpecialty"
domain: psc-api
topic: benefitspecialty
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.218Z
estimatedTokens: 693
keywords: [BenefitSpecialty, junction, benefit, care, specialty, maps, benefits, provided, constituents, specialties, offered, network, service, providers, API]
---

# BenefitSpecialty

> Represents a junction between a benefit and a care specialty. The
         object maps the benefits provided to constituents with the specialties offered by the
         network of service providers. This object is available in API version 59.0 and
      later.

# BenefitSpecialty

Represents a junction between a benefit and a care specialty. The object maps the benefits provided to constituents with the specialties offered by the network of service providers. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe benefit associated with the benefit specialty record.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| CareSpecialtyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe care specialty associated with the benefit specialty record.This field is a relationship field.Relationship NameCareSpecialtyRelationship TypeLookupRefers ToCareSpecialty |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the benefit specialty. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitSpecialtyFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitSpecialtyHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BenefitSpecialtyFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitSpecialtyHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
