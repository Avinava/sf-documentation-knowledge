---
title: "BusinessLicense"
domain: financial-services-cloud-object-reference
topic: businesslicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.648Z
estimatedTokens: 1334
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
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the organization holding the license. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the person who holds the license and is listed as a contact. |
| Identifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIssuer's ID for the licensee. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the license is active. |
| Issuer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense issuer's name. |
| JurisdictionCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry where license is valid. |
| JurisdictionOther | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of other jurisdiction. |
| JurisdictionState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState where license is valid. |
| JurisdictionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionJurisdiction for the license. Example values:StateCountyProvinceCountry |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LicenseClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class that the distributor’s license belongs to. This field is available from API version 48.0 and later.Possible values are:Insurance ProducerManaging General AgentPublic Adjuster |
| LineOfAuthority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe line of authority that the distributor is licensed for. This field is available from API version 48.0 and later.Possible values are:Accident & Health or SicknessCasualtyProperty |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the business or professional license. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PeriodEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLicense's expiration date. |
| PeriodStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLicense's effective start date. |
| ResidenceStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionResidence status of the producer. This field is available from API version 48.0 and later.Possible values are:Non-residentResident |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status of the license. Example values:InactiveRevokedDraftVerified |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson who holds the license and is listed as a user. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCurrent status for the license. Example values:AuthorizedPendingUnverified |
| VerifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLicense was validated on this date. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessLicenseChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change event tracking is available for the object.

[BusinessLicenseFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[BusinessLicenseHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[BusinessLicenseOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[BusinessLicenseShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
