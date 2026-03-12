---
title: "BenefitPrvdSearchableFld"
domain: psc-api
topic: benefitprvdsearchablefld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.195Z
estimatedTokens: 3614
keywords: [BenefitPrvdSearchableFld, collection, denormalized, data, certain, Provider, Management, model, search, queries, instead, multiple, objects, improves, performance]
---

# BenefitPrvdSearchableFld

> Represents a collection of denormalized data from certain fields in
         the Provider Management data model. Provider search queries this object instead of multiple
         objects, which improves search performance. This object is available in API version
      59.0 and later.

# BenefitPrvdSearchableFld

Represents a collection of denormalized data from certain fields in the Provider Management data model. Provider search queries this object instead of multiple objects, which improves search performance. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management, Benefit Management, and Criteria-Based Search and Filter are enabled in your org. To access the object, you need the Provider Management Access permission set or the Provider Management permission set license. Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit associated with the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProviderSpecialty.Specialty.BenefitSpecialty.Benefit.Id.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| BenefitName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the benefit associated with the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to Benefit.Name. |
| BenefitTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit type associated with the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProviderSpecialty.Specialty.BenefitSpecialty.Benefit.BenefitType.Id.This field is a relationship field.Relationship NameBenefitTypeRelationship TypeLookupRefers ToBenefitType |
| BenefitTypeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the benefit type associated with the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to BenefitType.Type. |
| FacilityAddress | TypelocationPropertiesNillableDescriptionThe address of the service provider facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Account.ShippingAddress. |
| FacilityAddressLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with facility address longitude to specify the precise geolocation of the service provider facility. Acceptable values are numbers between –90 and 90 with up to 14 decimal places.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Account.ShippingLatitude. |
| FacilityAddressLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with facility address latitude to specify the precise geolocation of the service provider facility. Acceptable values are numbers between –90 and 90 with up to 14 decimal places.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Account.ShippingLongitude. |
| FacilityGeoLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe geolocation ID of the facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Location.This field is a relationship field.Relationship NameFacilityGeoLocationRelationship TypeLookupRefers ToLocation |
| FacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe facility ID associated with the practitioner.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.HealthcarePractitionerFacility.Id.This field is a relationship field.Relationship NameFacilityRelationship TypeLookupRefers ToHealthcarePractitionerFacility |
| FacilityName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the facility where the service is being provided.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Name. |
| FacilityPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary phone number of the facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Account.Phone. |
| GenderRestriction | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gender preference specified by the physician for their patients.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcarePractitionerFacility.GenderRestriction. |
| HighestAgeServed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe highest age of patients that the practitioner sees at the facility. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LicenseJurisdictionCountry | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe country where the license of the provider is registered.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.BusinessLicense.JurisdictionCountry. |
| LicenseJurisdictionRegion | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe region where the license of the provider is registered.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.BusinessLicense.JurisdictionOther. |
| LicenseJurisdictionState | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe state where the license of the provider is registered.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.BusinessLicense.JurisdictionState. |
| LicenseName | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe name of the license given to the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.BusinessLicense.Name. |
| LicenseStatus | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe status of the license given to the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.BusinessLicense.Status. |
| LowestAgeServed | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lowest age of patients that the practitioner sees at the facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcarePractitionerFacility.LowestValidAge. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of this benefit provider searchable field record. |
| NationalProviderIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for a provider from the National Plan and Provider Enumeration System.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProvider.HealthcareProviderNpi.Npi. |
| OperatingDaysList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of days when the practitioner is available at the facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to OperatingHours.TimeSlot.DayOfWeek. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies a set of operating hours for the practitioner at a facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HeathcarePractitionerFacility.OperatingHoursId.This field is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| OperatingTimeSlotList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of time slots when the practitioner is available at the facility on the operating days of the week. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PractitionerCertificationType | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe type of certification obtained by the practitioner.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthCareProvider.BoardCertification.CertificationType. |
| ProviderEducationLevel | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe education level of a person in a provider role.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthCareProvider.PersonEducation.EducationLevel. |
| ProviderGender | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gender of the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthCareProvider.Contact.Gender or HealthCareProvider.Account.PersonGenderIdentity. |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider or practitioner facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthCareProvider.Id.This field is a relationship field.Relationship NameProviderRelationship TypeLookupRefers ToHealthcareProvider |
| ProviderName | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionName of the provider.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthCareProvider.Name. |
| ProviderPhotoUrl | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL for the photograph of the provider or practitioner.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareFacility.Account.PhotoUrl or HealthcareProvider.Practitioner.PhotoUrl. |
| ProviderSpeciality | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecialty of the provider. Available in API version 59.0 only.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthcareProviderSpecialty.Specialty.SpecialtyType. |
| ProviderType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the provider or facility.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to HealthCareProvider.ProviderType. |
| SpecialtyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA specialty offered at the provider facility that's associated with the benefit provider searchable field.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to CareSpecialty.Id.Available in API version 60.0 and later.This field is a relationship field.Relationship NameSpecialtyRelationship TypeLookupRefers ToCareSpecialty |
| SpecialtyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the specialty offered at the provider facility that's associated with the benefit provider searchable field.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records maps this field to CareSpecialty.Name.Available in API version 60.0 and later. |
| UniqueKey | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique identifier for the benefit provider searchable field record.The Data Processing Engine definition Upsert Benefit Provider Searchable Field Records concatenates ProviderId, FacilityId, and BenefitId to generate the key. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BenefitPrvdSearchableFldFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BenefitPrvdSearchableFldHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BenefitPrvdSearchableFldOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BenefitPrvdSearchableFldShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BenefitPrvdSearchableFldFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BenefitPrvdSearchableFldHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BenefitPrvdSearchableFldOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BenefitPrvdSearchableFldShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
