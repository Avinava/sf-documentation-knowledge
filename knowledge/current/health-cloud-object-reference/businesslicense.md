---
title: "BusinessLicense"
domain: health-cloud-object-reference
topic: businesslicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.099Z
estimatedTokens: 1495
keywords: [BusinessLicense, licenses, party, role, healthcare, provider, producer, Special, Access, Rules, Calls, Associated, Objects]
---

# BusinessLicense

> Represents the licenses of a party role like healthcare provider or
      producer.

# BusinessLicense

Represents the licenses of a party role like healthcare provider or producer.

## Special Access Rules

In Health Cloud, this object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the organization holding the license. This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the person who holds the license and is listed as a contact. This field is a relationship field.Relationship NameContactRefers ToContact |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the license. |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Healthcare Provider who holds this license. This field is a relationship field. This field is a lookup to HealthcareProvider.Relationship NameHealthcareProviderRefers ToHealthcareProvider |
| Identifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIssuer's ID for the licensee. This field is unique within your organization. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the license is active (true) or not (false). The default value is false. |
| IsPrimaryLicense | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the license is the primary license. The default value is false. |
| IssueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the license or certification was issued. |
| Issuer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense issuer's name. |
| JurisdictionCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry where license is valid. |
| JurisdictionOther | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of other jurisdiction. |
| JurisdictionState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState where license is valid. |
| JurisdictionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionJurisdiction for the license.Possible values are:COUNTRYCOUNTYPROVINCESTATEThe default value is STATE. |
| LicenseClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class that the distributor’s license belongs to.Possible values are:APN - Advanced Practice NurseLPN - Licensed Practical NurseMD - Medical Doctor (MD)PC - Professional CounselorPT - Physical TherapistIn Health Cloud, this field is available from API version 48.0 and later. |
| LicenseNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the license. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the business or professional license. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PeriodEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLicense's expiration date. |
| PeriodStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLicense's effective start date. |
| SourceSystemUpdateDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the date when the record was last updated in the source system. |
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
