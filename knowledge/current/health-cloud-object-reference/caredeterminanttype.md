---
title: "CareDeterminantType"
domain: health-cloud-object-reference
topic: caredeterminanttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.175Z
estimatedTokens: 798
keywords: [CareDeterminantType, standard, defined, determinants, health, maintained, organization, including, domain, API, version, 45.0, later, Calls, Associated]
---

# CareDeterminantType

> Represents the standard, defined list of determinants of health
			maintained by an organization, including the domain and type. Available in API
		version 45.0 and later.

# CareDeterminantType

Represents the standard, defined list of determinants of health maintained by an organization, including the domain and type. Available in API version 45.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionDescription of the determinant. |
| Domain | TypepicklistPropertiesFilter, Group, SortDescriptionThe domain for the determinant.The values are:Access to health careChild careClothingEducationEmploymentFinancesFoodGeneral (non-specific)HousingImmigration/MigrationIncarcerationPrimary LanguageRace/EthnicityResidential AddressSafetySocial Connections/IsolationStressTransportationUtilitiesVeteran Status |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this care determinant type is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the care determinant type. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, SortDescriptionThe type of determinant.The values are:SocialBehaviorGenetics |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CareDeterminantTypeChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 60.0)

Change events are available for the object.

[CareDeterminantTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[CareDeterminantTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[CareDeterminantTypeOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[CareDeterminantTypeShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
