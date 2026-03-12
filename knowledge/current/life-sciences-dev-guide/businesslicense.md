---
title: "BusinessLicense"
domain: life-sciences-dev-guide
topic: businesslicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.168Z
estimatedTokens: 2343
keywords: [BusinessLicense, licenses, party, role, healthcare, provider, producer, Calls, Associated, Objects]
---

# BusinessLicense

> Represents the licenses of a party role like healthcare provider or
      producer.

# BusinessLicense

Represents the licenses of a party role like healthcare provider or producer.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the organization holding the license. This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ComplianceScope | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe scope of compliance for the business license.Possible values are:AddressJurisdictionStateDistributorLicenseThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the person who holds the license and is listed as a contact. This field is a relationship field.Relationship NameContactRefers ToContact |
| ContactPointAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the person who holds the license and is listed as a contact. This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameContactPointAddressRefers ToContactPointAddress |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the license. |
| HealthCareFacilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID associated with the healthcare facility. This field is a relationship field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later.Relationship NameHealthCareFacilityRefers ToHealthcareFacility |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Healthcare Provider who holds this license. This field is a relationship field. This field is a lookup to HealthcareProvider.Relationship NameHealthcareProviderRefers ToHealthcareProvider |
| Identifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIssuer's ID for the licensee. This field is unique within your organization. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the license is active (true) or not (false). The default value is false. |
| IsLicenseValidated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the business license is valid (true) or not (false). The default value is false. This field is a calculated field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| IsPrimaryLicense | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the license is the primary license. The default value is false. |
| IssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the license or certification was issued. |
| Issuer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense issuer's name. |
| JurisdictionCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry where license is valid. |
| JurisdictionOther | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of other jurisdiction. |
| JurisdictionState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState where license is valid. |
| JurisdictionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionJurisdiction for the license.Possible values are:COUNTRYCOUNTYPROVINCESTATEThe default value is STATE. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| LicenseClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class that the distributor’s license belongs to.Possible values are:APN - Advanced Practice NurseLPN - Licensed Practical NurseMD - Medical Doctor (MD)PC - Professional CounselorPT - Physical Therapist |
| LicenseNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the license. |
| LicenseValidatedIcon | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe icon used to indicate the validation status of the business license. This field is a calculated field. This field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| LineOfAuthority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe line of authority that the distributor is licensed for.Possible values are:Accident & Health or SicknessCasualtyPropertyThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the business or professional license. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PeriodEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLicense's expiration date. |
| PeriodStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLicense's effective start date. |
| ResidenceStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionResidence status of the producer.Possible values are:Non-residentResidentThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| SourceSystemUpdateDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the date when the record was last updated in the source system. |
| StateDstrLicenseCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe State Distributor License category for the business license.Possible values are:CategoryII—Category IICategoryIII—Category IIILimitedCategoryII—Limited Category IILimitedCategoryIII—Limited Category IIIThis field is available with the Life Sciences Cloud for Customer Engagement Add-on license in API version 65.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status of the license.Possible values are:DraftInactiveRevokedVerifiedThe default value is Inactive. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who holds the license and is listed as a user. This field is a relationship field.Relationship NameUserRefers ToUser |
| VerificationStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status for the license.Possible values are:AuthorizedThe default value is Authorized. |
| VerifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense was validated on this date. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessLicenseFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[BusinessLicenseHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[BusinessLicenseOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[BusinessLicenseShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
