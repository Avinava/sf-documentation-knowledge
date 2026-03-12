---
title: "ServiceTerritory"
domain: salesforce-scheduler-developer-guide
topic: serviceterritory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.793Z
estimatedTokens: 1282
keywords: [ServiceTerritory, geographic, functional, region, work, performed, Salesforce, Scheduler, API, version, 38.0, later, Calls, Special, Access]
---

# ServiceTerritory

> Represents a geographic or functional region in which work can be
			performed in Salesforce Scheduler. This object is available in API version 38.0 and
		later.

# ServiceTerritory

Represents a geographic or functional region in which work can be performed in Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilterDescriptionAn address to associate with the territory. You can want to list the address of the territory’s headquarters. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the associated address. Maximum length is 40 characters. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country to associate with the territory. Maximum length is 80 characters. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the territory. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service territory is meant to be used. If a territory is inactive, you can’t add members to it or link it to service appointments. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the territory. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe territory’s operating hours, which indicate when service appointments within the territory can occur. Service resources who are members of a territory automatically inherit the territory’s operating hours unless different hours are specified on the resource record.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address associated with the territory. Maximum length is 20 characters. |
| PricebookId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field creates a foreign key relationship with the PriceBook record, storing data related to pricing.This is a relationship field.Relationship NamePriceBookRelationship TypeLookupRefers ToPriceBook2 |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address associated with the territory. Maximum length is 80 characters. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name of the address associated with the territory. |

## Usage

If you want to use service territories, determine which territories you must create. Depending on how your business works, you can decide to create territories based on cities or counties, or on functional categories such as sales versus service. If you plan to build out a hierarchy of service territories, create the highest-level territories first.

For example, you can create a hierarchy of territories to represent the areas where your team works in California. Include a top-level territory named California, three child territories named Northern California, Central California, and Southern California, and a series of third-level territories corresponding to California counties. Assign service resources to each county territory to indicate who is available to work in that county.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceTerritoryChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[ServiceTerritoryFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ServiceTerritoryHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[ServiceTerritoryOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[ServiceTerritoryShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
