---
title: "HealthcareProviderService"
domain: health-cloud-object-reference
topic: healthcareproviderservice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.266Z
estimatedTokens: 1023
keywords: [HealthcareProviderService, junction, HealthcareService, HealthcareProvider, HealthcareFacility, HealthcarePractitionerFacility, API, version, 59.0, later, Calls, Associated, Objects]
---

# HealthcareProviderService

> Represents a
         junction
         object between a HealthcareService and a HealthcareProvider or HealthcareFacility or
         HealthcarePractitionerFacility. This object is available in API version 59.0 and
      later.

# HealthcareProviderService

Represents a junction object between a HealthcareService and a HealthcareProvider or HealthcareFacility or HealthcarePractitionerFacility. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CareServiceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired.The ID of the healthcare service that is offered.This field is a relationship field.Relationship NameCareServiceRelationship TypeLookupRefers ToCareService |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility began offering this service. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility stopped offering this service. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this offering is active (true) or not active (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this association between a Healthcare Service and a Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired.The ID of the Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility that offers this service.This field is a polymorphic relationship field.Relationship NameProviderRelationship TypeLookupRefers ToHealthcareFacility, HealthcarePractitionerFacility, HealthcareProvider |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcareProviderServiceHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[HealthcareProviderServiceOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[HealthcareProviderServiceShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- HealthcareProviderServiceHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- HealthcareProviderServiceOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- HealthcareProviderServiceShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
