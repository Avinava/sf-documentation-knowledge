---
title: "HealthcareProvider"
domain: health-cloud-object-reference
topic: healthcareprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.251Z
estimatedTokens: 1711
keywords: [HealthcareProvider, business-level, healthcare, organization, practitioner, Calls, Associated, Objects]
---

# HealthcareProvider

> Represents business-level details about the healthcare organization or
      the practitioner.

# HealthcareProvider

Represents business-level details about the healthcare organization or the practitioner.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that this healthcare provider is associated with. This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Classification | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the classification of the healthcare provider. This field is available in API version 63.0 and later when Site Management is enabled.Possible values are:Key Opinion LeaderNovice MemberPrevious Partner |
| DoesParticipateInRsrchStudy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the healthcare provider participates in research studies (true) or not (false). This field is available in API version 63.0 and later when Site Management is enabled.The default value is false. |
| DoesUseElecDataCapture | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the healthcare provider uses Electronic Data Capture (EDC) system (true) or not (false). This field is available in API version 62.0 and later when Site Management is enabled.The default value is false. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date from which the provider becomes effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date from which the provider is no longer effective. |
| EhrSystem | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionName of the EHR system used at this facility or organization. |
| InitialStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the date when the facility first became operational or the practitioner first began practicing. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the provider. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe practitioner that this healthcare provider record is associated with. This field is a relationship field.Relationship NamePractitionerRefers ToContact |
| ProviderClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class of facility, such as an IPA, medical group, or solo practitioner.Possible values are:IPAMedical GroupSolo Practitioner |
| ProviderPhotoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Content Document file that is a photo of the Healthcare Provider. This field is a relationship field.Relationship NameProviderPhotoRelationship TypeLookupRefers ToContentDocument |
| ProviderType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of provider or facility. For example, pharmacist or ambulatory care facility.Possible values are:Ambulatory CareDentistHospitalLaboratoryMedical DirectorMedical DoctorPharmacistPharmacyResearch Study CoordinatorResearch Study DirectorResearch Study Feasibility ManagerResearch Study InvestigatorResearch Study NurseResearch Study Operations ManagerResearch Study Sub-InvestigatorSite Management Organization Coordinator |
| RelatedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe User record that relates to the Healthcare Provider record. This field is a relationship field.Relationship NameRelatedUserRelationship TypeLookupRefers ToUser |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the system from which the record was sourced. This field is unique within your organization |
| TerminationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for this provider. |
| TerminationReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for termination. |
| TotalLicensedBeds | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of licensed beds at this facility, if applicable. |

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
