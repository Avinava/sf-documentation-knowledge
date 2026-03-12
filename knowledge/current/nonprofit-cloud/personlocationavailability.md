---
title: "PersonLocationAvailability"
domain: nonprofit-cloud
topic: personlocationavailability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.735Z
estimatedTokens: 946
keywords: [PersonLocationAvailability, availability, person, specific, location, API, version, 64.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PersonLocationAvailability

> Represents a the availability of a person at a specific
         location.. This object is available in API version 64.0 and later.

# PersonLocationAvailability

Represents a the availability of a person at a specific location.. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the VolunteerManagementPsl permission set license is enabled and the Manage Volunteer Data permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lookup to the related account.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the related contact.This field is a relationship field.Relationship NameContactRefers ToContact |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lookup to the related location.This field is a relationship field.Relationship NameLocationRefers ToLocation |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the person location availability. |
| OperatingHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lookup to the related operating hours.This field is a relationship field.Relationship NameOperatingHoursRefers ToOperatingHours |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of usage for the location availability. For example, Volunteer Management is a usage type.Possible values are:VolunteerManagementThe default value is VolunteerManagement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as PersonLocationAvailability.

[PersonLocationAvailabilityChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[PersonLocationAvailabilityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PersonLocationAvailabilityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PersonLocationAvailabilityOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PersonLocationAvailabilityShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
