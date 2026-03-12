---
title: "CareProviderSearchableField"
domain: health-cloud-object-reference
topic: careprovidersearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.505Z
estimatedTokens: 2068
keywords: [CareProviderSearchableField, holds, denormalized, data, certain, Provider, Relationship, Management, model, search, APIs, query, instead, multiple, objects]
---

# CareProviderSearchableField

> This object holds denormalized data from certain fields in the
      Provider Relationship Management data model. Provider search APIs query this object
    instead of multiple objects, which improves search performance. This object is available in API
    version 47.0 and later.

# CareProviderSearchableField

This object holds denormalized data from certain fields in the Provider Relationship Management data model. Provider search APIs query this object instead of multiple objects, which improves search performance. This object is available in API version 47.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| Address | TypetextareaPropertiesNillableDescriptionSpecified in Account.ShippingAddress. |
| CertificationType | TypetextareaPropertiesNillableDescriptionSpecified in BoardCertification.CertificationType.NoteBoardCertification.HealthcareProvider must also be specified. |
| Condition | TypetextareaPropertiesNillableDescriptionThe conditions represented by the problem definitions that the healthcare provider offers treatment for. |
| EducationLevel | TypetextareaPropertiesNillableDescriptionSpecified in PersonEducation.EducationLevel. Not applicable for a facility.NoteDegree, Status, DegreeEarner, and HealthCareProvider must also be specified. |
| FacilityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents the facility with which the practitioner is associated. Use for practitioner records only. If the provider is a facility, set this field value to null. |
| FacilityName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecified in Account.Name. |
| FacilityPhone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionFacility's main contact phone number. Specified in Account.Phone. |
| IsAcceptingNewPatients | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the practitioner is accepting new patients. Specified in HealthcareFacilityNetwork.PanelStatus, where PanelStatus = Open indicates Accepting New Patients = true. The default value is false.NoteThis field applies only to practitioners, not facilities. |
| IsUpdateNeeded | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a change to data in a healthcare provider record or a related record requires a data sync (true) or not (false). The default value is false. |
| LanguagesSpoken | TypetextareaPropertiesNillableDescriptionThe languages spoken by the person. Specified in PersonLanguage.Language. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LicenseJurisdictionCountry | TypeStringPropertiesFilter, NillableDescriptionThe country where the license of the Healthcare Provider is registered. Specified in BusinessLicense.JurisdictionCountry.This field is available in API version 57.0 or later. |
| LicenseJurisdictionRegion | TypeStringPropertiesFilter, NillableDescriptionThe region where the license of the Healthcare Provider is registered. Specified in BusinessLicense.JurisdictionRegion.This field is available in API version 57.0 or later. |
| LicenseJurisdictionState | TypeStringPropertiesFilter, NillableDescriptionThe state where the license of the Healthcare Provider is registered. Specified in BusinessLicense.JurisdictionState.This field is available in API version 57.0 or later. |
| LicenseName | TypeStringPropertiesFilter, NillableDescriptionThe name of the license associated with the Healthcare Provider. Specified in BusinessLicense.Name.This field is available in API version 57.0 or later. |
| LicenseStatus | TypeStringPropertiesFilter, NillableDescriptionSpecifies the status of the license given to the Healthcare Provider. Specified in BusinessLicense.Status.This field is available in API version 57.0 or later. |
| NationalProviderIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionProvider’s unique NPI number. Specified in HealthcareProviderNpi.Account for a facility, and HealthcareProviderNpi.Practitioner for a practitioner. |
| OperatingHoursId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIdentifies a set of operating hours for this practitioner at this facility. Specified in Account.OperatingHoursId for a facility, or in HeathcarePractitionerFacility.OperatingHoursId for a practitioner-facility combination. |
| PhotoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL for a photograph of the practitioner. Field is synced based on Account-PhotoUrl or Contact.PhotoUrl. |
| PlanType | TypetextareaPropertiesNillableDescriptionThe type of plan, with the following default options:PPOHMOMedicareMedicaidWorkers CompSpecified in HealthcareFacilityNetwork.Account for a facility, or HealthcareFacilityNetwork.PractitionerFacility for a practitioner-facility combination.NoteHealthcareFacilityNetwork.Name and PayerNetwork.Name must also be populated. |
| ProviderGender | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe gender of the HealthcareProvider. Specified in Contact.Gender or Account.PersonGender. |
| ProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionLookup to HealthcareProvider. Represents a facility or practitioner-facility combination. |
| ProviderName | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionName of the provider. Specified in Account for a facility, or in Contact for a practitioner. |
| ProviderType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of provider or facility. For example, a pharmacist or an ambulatory care facility. Specified in HealthCareProvider.ProviderType. |
| Service | TypetextareaPropertiesNillableDescriptionThe list of services that the healthcare provider offers. |
| ServiceCode | TypetextareaPropertiesNillableDescriptionThe list of codes associated with the service that the healthcare provider offers. |
| Specialty | TypetextareaPropertiesNillableDescriptionSpecialty associated with the provider. Specified in CareSpecialty.SpecialtyType.For a facility, the Specialty is sourced from a Care Provider Facility Specialty record, which connects a facility (CareProviderFacilitySpecialty.AccountId) to a care specialty (CareProviderFacilitySpecialty.SpecialtyId).For a practitioner, the Specialty is sourced from a Care Provider Facility Specialty record, which connects a Healthcare Practitioner Facility record (CareProviderFacilitySpecialty.PractitionerFacilityId) to a care specialty (CareProviderFacilitySpecialty.SpecialtyId). The Healthcare Practitioner Facility record then connects the facility (HealthcarePractitionerFacility.AccountId) to a practitioner (HealthcarePractitionerFacility.PractitionerId).All source records must be active. |
| SubSpecialty | TypetextareaPropertiesNillableDescriptionProvider's subspecialty. Specified in HealthcareProviderTaxonomy.TaxonomyType. Not valid for a practitioner-facility combination.NoteTaxonomy.TaxonomyType must also be specified. |
| SyncLogRecord | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe provider search sync log record that shows the data sync status of a healthcare provider record. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareProviderSearchableFieldChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

## Related Topics

- CareProviderSearchableFieldChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
