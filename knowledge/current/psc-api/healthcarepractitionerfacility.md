---
title: "HealthcarePractitionerFacility"
domain: psc-api
topic: healthcarepractitionerfacility
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.896Z
estimatedTokens: 1810
keywords: [HealthcarePractitionerFacility, different, locations, practitioner, services, Calls, Special, Access, Rules, Associated, Objects]
---

# HealthcarePractitionerFacility

> Represents the different locations in which a practitioner provides
         services.

# HealthcarePractitionerFacility

Represents the different locations in which a practitioner provides services.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management is enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| AvailabilityExceptions | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe times when the facility is not available. Only non-standard time-offs are recorded in this field. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this practitioner facility is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this practitioner facility is no longer effective. |
| GenderRestriction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether physician sees patients of a specific gender.Possible values are:FemaleMaleNonbinary |
| Has24x7Service | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the facility offers round-the-clock service.The default value is false. |
| HealthcareFacilityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Healthcare facility associated with this healthcare practitioner facility.Relationship TypeLookupRefers ToHealthcareFacility |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionHealthcare provider associated with this healthcare practitioner facility.This is a relationship field.Relationship TypeLookupRefers ToHealthcareProvider |
| HighestValidAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest age of patients that the practitioner sees at this facility |
| InitialStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the practitioner started at this facility. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is active. |
| IsDirectoryPrint | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this facility is displayed in an online or printed directory.Available only if View Healthcare Details is enabled under Provider Management Settings. |
| IsPrimaryCarePhysician | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the practitioner provides primary care services at this facility.Available only if View Healthcare Details is enabled under Provider Management Settings. |
| IsPrimaryFacility | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the facility is the primary facility for the practitioner. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LowestValidAge | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lowest age of patients that the practitioner sees at this facility. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the practitioner facility record. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the operating hours for this practitioner at this facility.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of an external record on its source system. |
| SsaCountyCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSocial Security Administration identifier for the county. |
| TerminationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate the practitioner stopped working at this facility. |
| TerminationReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason the practitioner facility is no longer current.Possible values are:Facility ClosedLeft Organization |
| TerminationRequestedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the person or organization requesting the termination.This field is a relationship field.Relationship NameTerminationRequestedByRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcarePractitionerFacilityFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[HealthcarePractitionerFacilityHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthcarePractitionerFacilityOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HealthcarePractitionerFacilityShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthcarePractitionerFacilityFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- HealthcarePractitionerFacilityHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- HealthcarePractitionerFacilityOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- HealthcarePractitionerFacilityShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
