---
title: "ServiceTerritoryMember"
domain: salesforce-scheduler-developer-guide
topic: serviceterritorymember
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.802Z
estimatedTokens: 1114
keywords: [ServiceTerritoryMember, service, resource, assigned, appointments, territory, Salesforce, Scheduler, API, version, 38.0, later, Calls, Special, Access]
---

# ServiceTerritoryMember

> Represents a service resource who can be assigned to service
			appointments in a service territory in Salesforce Scheduler. This object is
		available in API version 38.0 and later.

# ServiceTerritoryMember

Represents a service resource who can be assigned to service appointments in a service territory in Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilterDescriptionThe member’s address. You can want to list the related service resource’s address in this field. |
| EffectiveEndDate | TypedatetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the service resource is no longer a member of the territory. If the resource will be working in the territory for the foreseeable future, leave this field blank. This field is useful for indicating when a temporary relocation ends. |
| EffectiveStartDate | TypedatetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the service resource becomes a member of the service territory. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory member was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory member was last viewed. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operating hours assigned to the service territory member. If no operating hours are specified, the member is assumed to use their parent service territory’s operating hours. If a member needs special operating hours, create them in Setup and select them in the Operating Hours lookup field on the member’s detail page.This is a relationship field.Relationship NameOperatingHoursRelationship TypeLookupRefers ToOperatingHours |
| Role | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role associated with the service resource. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource assigned to the service territory.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service territory that the service resource is assigned to.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| TerritoryType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPrimary, Secondary, or Relocation.The primary territory is typically the territory where the resource works most often—for example, near their home base. Service resources can only have one primary territory.Secondary territories are territories where the resource can be assigned to appointments, if needed. Service resources can have multiple secondary territories.Relocation territories represent temporary moves for service resources.For example, a service resource can have the following territories:Primary territory: West ChicagoSecondary territories:East ChicagoSouth ChicagoRelocation territory: Manhattan, for a three-month period |

## Usage

If you delete a service territory with members, the service resources who were members no longer have any connection to the territory.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceTerritoryMemberChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_change_event.htm "HTML (New Window)") (API version 48.0)

Change events are available for the object.

[ServiceTerritoryMemberFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ServiceTerritoryMemberHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
