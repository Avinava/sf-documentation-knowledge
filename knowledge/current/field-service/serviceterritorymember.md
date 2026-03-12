---
title: "ServiceTerritoryMember"
domain: field-service
topic: serviceterritorymember
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:54.847Z
estimatedTokens: 1702
keywords: [ServiceTerritoryMember, service, resource, assigned, territory, Salesforce, Scheduler, Workforce, Engagement, API, version, 38.0, later, Calls, Special]
---

# ServiceTerritoryMember

> Represents a service resource who can be assigned in a service
			territory in Field Service, Salesforce Scheduler, or Workforce Engagement. This
		object is available in API version 38.0 and later.

# ServiceTerritoryMember

Represents a service resource who can be assigned in a service territory in Field Service, Salesforce Scheduler, or Workforce Engagement. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service or Workforce Engagement must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilterDescriptionThe member’s address. You may want to list the related service resource’s address in this field. |
| City | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the member’s address. Maximum length is 40 characters. |
| Country | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the member’s address. Maximum length is 80 characters. |
| EffectiveEndDate | TypedatetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the service resource is no longer a member of the territory. If the resource will be working in the territory for the foreseeable future, leave this field blank. This field is mainly useful for indicating when a temporary relocation ends. |
| EffectiveStartDate | TypedatetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the service resource becomes a member of the service territory. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. Usually provided by a geocoding service based on the address’s latitude and longitude coordinates.NoteThis field is available in the API only. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory member was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory member was last viewed. |
| Latitude | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the member’s address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places.NoteThis field is available in the API only. |
| Longitude | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the member’s address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places.NoteThis field is available in the API only. |
| MemberNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read only) An auto-generated number identifying the service territory member. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe operating hours assigned to the service territory member. If no operating hours are specified, the member is assumed to use their parent service territory’s operating hours. If a member needs special operating hours, create them in Setup and select them in the Operating Hours lookup field on the member’s detail page.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| PostalCode | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the member’s address. Maximum length is 20 characters. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource assigned to the service territory.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service territory that the service resource is assigned to.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| State | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the member’s address. Maximum length is 80 characters. |
| Street | TypetextareaPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe street number and name of the member’s address. |
| TerritoryType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPrimary, Secondary, or Relocation.The primary territory is typically the territory where the resource works most often—for example, near their home base. Service resources can only have one primary territory.Secondary territories are territories where the resource can be assigned to appointments if needed. Service resources can have multiple secondary territories.Relocation territories represent temporary moves for service resources. If you’re using the Field Service managed packages with the scheduling optimizer, resources with relocation territories are always assigned to services within their relocation territories during the specified relocation dates; if they don’t have a relocation territory, the primary territories are favored over the secondary.For example, a service resource might have the following territories:Primary territory: West ChicagoSecondary territories:East ChicagoSouth ChicagoRelocation territory: Manhattan, for a three-month period |
| TravelModeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the TravelMode used for travel time calculations. The travel mode includes information about the type of transportation, such as a car or walking, whether a vehicle can take toll roads, and whether a vehicle is transporting hazardous materials.This field is a relationship field.Relationship NameTravelModeRelationship TypeLookupRefers ToTravelMode |

## Usage

If you delete a service territory with members, the service resources who were members no longer have any connection to the territory.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ServiceTerritoryMemberChangeEvent (API version 48.0)

Change events are available for the object.

ServiceTerritoryMemberFeed

Feed tracking is available for the object.

ServiceTerritoryMemberHistory

History is available for tracked fields of the object.
