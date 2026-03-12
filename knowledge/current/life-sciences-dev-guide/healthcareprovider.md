---
title: "HealthcareProvider"
domain: life-sciences-dev-guide
topic: healthcareprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.028Z
estimatedTokens: 3297
keywords: [HealthcareProvider, business-level, healthcare, organization, practitioner, Special, Access, Rules, Calls, Associated, Objects]
---

# HealthcareProvider

> Represents business-level details about the healthcare organization or
      the practitioner.

# HealthcareProvider

Represents business-level details about the healthcare organization or the practitioner.

## Special Access Rules

In Life Sciences Cloud, the HealthCareProvider object and its fields are used by the Account Management and the Segmentation feature areas. This topic lists fields used in both features.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AbbreviatedName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the abbreviated name of the Japanese healthcare organization (HCO) for INS-DOC records. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that this healthcare provider is associated with. This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AssociatedSampleLimit | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe JSON comprising the list of Sample Limits for the HealthcareProvider record. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| CaqhIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThis field is unique within your organization. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| DataChangeComments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCaptures comments explaining the reasons or context for changes made to the data. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| DoesDispenseMedication | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account dispenses medication.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date from which the provider becomes effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date from which the provider is no longer effective. |
| EhrSystem | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionName of the EHR system used at this facility or organization. |
| HasCarrierContract | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider’s contract follows a CMS model MA contract amendment, based on Centers for Medicare and Medicaid Services (CMS) guidelines.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| HasSalesDataRestriction | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether access to the sales data about the healthcare provider is restricted.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| InitialStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the facility first became operational or the practitioner first began practicing. |
| IsNotSearchable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider is excluded from search results.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| IsPrivacyLawEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the privacy law regulations are enabled.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| IsSpeaker | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider is designated as a speaker for engagement.The default value is false. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the provider. |
| OperatingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the country code of the country to which the account belongs.Possible values are:USThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentOrganizationAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ID of the parent account, used to establish the account hierarchy. This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameParentOrganizationAccountRefers ToAccount |
| PhoneticName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Japanese phonetic name, applicable to both HCP and HCO, which is used for sorting and text-based searches. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| PhoneticName2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Japanese phonetic name, applicable to both HCP and HCO, which is used for sorting and text-based searches. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner that this healthcare provider record is associated with. This field is a relationship field.Relationship NamePractitionerRefers ToContact |
| ProfessionalDesignation | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the professional designation of the healthcare professional. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| ProfessionalTitle | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the professional title of the healthcare professional. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| ProviderClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class of facility, such as an IPA, medical group, or solo practitioner.Possible values are:IPAMedical GroupSolo Practitioner |
| ProviderFullName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe full name of the healthcare provider. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| ProviderPhotoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Content Document file that is a photo of the Healthcare Provider. This field is a relationship field.Relationship NameProviderPhotoRelationship TypeLookupRefers ToContentDocument |
| ProviderType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of provider or facility. For example, pharmacist or ambulatory care facility.Possible values are:Ambulatory CareDentistHospitalLaboratoryMedical DoctorPharmacistPharmacy |
| ReferredByContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the provider who originated the referral. This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameReferredByContactRefers ToContact |
| RelatedHealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the HCP account associated with the INS-DOC. This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameRelatedHealthcareProviderRefers ToHealthcareProvider |
| RelatedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User record that relates to the Healthcare Provider record. This field is a relationship field.Relationship NameRelatedUserRelationship TypeLookupRefers ToUser |
| SalesDataRstrcEffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the sales data restriction becomes effective. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the system from which the record was sourced. This field is unique within your organization |
| SourceSystemModifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the record was last updated in the source system |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the provider.Possible values are:ActiveInactivePendingThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| TerminationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for this provider. |
| TerminationReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for termination. |
| TotalLicensedBeds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of licensed beds at this facility, if applicable. |
| WrittenName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the Chines character name of the organization, applicable only to healthcare professionals (HCPs), which is required for INS-DOC records. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[HealthcareProviderChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 59.0)

Change events are available for the object.

[HealthcareProviderFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[HealthcareProviderHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[HealthcareProviderOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[HealthcareProviderShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
