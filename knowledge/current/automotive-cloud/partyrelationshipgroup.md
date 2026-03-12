---
title: "PartyRelationshipGroup"
domain: automotive-cloud
topic: partyrelationshipgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.419Z
estimatedTokens: 1580
keywords: [PartyRelationshipGroup, group, people, living, together, household, affiliated, Automotive, Cloud, API, version, 56.0, later, Calls, Associated]
---

# PartyRelationshipGroup

> Represents a group of people living together such as a household, or a group
         of people affiliated with each other. This object is available in Automotive Cloud in
      API version 56.0 and later.

# PartyRelationshipGroup

Represents a group of people living together such as a household, or a group of people affiliated with each other. This object is available in Automotive Cloud in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent account associated with the party relationship group. This field is unique within your organization.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the party relationship group.Possible values are:Meals togetherStaying under same roof |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the party relationship group. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date associated with the party relationship group. |
| GroupIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total income of the party relationship group. |
| GroupSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of active members in the party relationship group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LifetimeAcsryPurchaseValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of vehicle accessories purchased by all members in the party relationship group. |
| LifetimeSvcPurchaseCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total value of vehicle services purchased by all members in the party relationship group. |
| LifetimeVehPurchaseCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe total count of vehicles purchased by all members in the party relationship group. |
| LifetimeVehPurchaseValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of vehicles purchased by all members in the party relationship group. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the party relationship group. |
| PrimaryAddress | TypeaddressPropertiesFilter, NillableDescriptionThe primary address of the party relationship group. |
| PrimaryCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary city of the party relationship group. |
| PrimaryCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary country of the party relationship group. |
| PrimaryGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the primary relationship group’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| PrimaryLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the party relationship group. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| PrimaryLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the party relationship group. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| PrimaryPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary postal code of the party relationship group. |
| PrimaryState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary state of the party relationship group. |
| PrimaryStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary street of the party relationship group. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date associated with the party relationship group. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the party relationship group.Possible values are:ActiveInactiveThe default value is Active. |
| Subtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subclassification of the party relationship group type.Possible values are:Extension HouseholdNuclear HouseholdThree Person Household |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the party relationship group.Possible values are:GroupHouseholdThe default value is Group. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyRelationshipGroupChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[PartyRelationshipGroupFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[PartyRelationshipGroupHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
