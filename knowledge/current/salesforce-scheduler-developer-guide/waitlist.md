---
title: "Waitlist"
domain: salesforce-scheduler-developer-guide
topic: waitlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.876Z
estimatedTokens: 865
keywords: [Waitlist, queue, drop, customers, visit, branch, already, scheduled, appointment, added, API, version, 58.0, later, Calls]
---

# Waitlist

> Represents a queue to which drop in customers who visit the branch
         without an already scheduled appointment are added. This object is available in API
      version 58.0 and later.

# Waitlist

Represents a queue to which drop in customers who visit the branch without an already scheduled appointment are added. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the waitlist. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the waitlist is available to add drop in customers (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the waitlist. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the waitlist.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the service territory to which the waitlist belongs.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
|  |  |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the appointment type.Possible values are:DropInQueuedThe default value is DropIn. |

## Usage

Use waitlists to manage drop in customers. You can create multiple waitlists for a service territory. Depending on your business set up, assign work type groups and service resources to a waitlist. When customers visit the branch, the greeter can check them in to a specific waitlist based on the reason they’re visiting the branch. Depending on the availability of service resources on a particular day, you can choose to enable or disable a waitlist.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WaitlistFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[WaitlistHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.

[WaitlistOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[WaitlistShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_share.htm " HTML (New Window)")

Sharing is available for the object.
