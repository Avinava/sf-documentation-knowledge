---
title: "WaitlistServiceResource"
domain: salesforce-scheduler-developer-guide
topic: waitlistserviceresource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.892Z
estimatedTokens: 698
keywords: [WaitlistServiceResource, relationship, Waitlist, Service, Resource, Salesforce, Scheduler, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# WaitlistServiceResource

> Represents the relationship between the Waitlist object and the
         Service Resource object for Salesforce Scheduler. This object is available in API
      version 58.0 and later.

# WaitlistServiceResource

Represents the relationship between the Waitlist object and the Service Resource object for Salesforce Scheduler. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe access level of the user. The level determines the information that's masked from the service resource for a drop-in participant.Possible values are:DefaultEnhancedThe default value is Default. |
| IsAvailable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the service resource is available to accept a drop-in participant from the waitlist (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist service resource record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist service resource record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number that identifies the waitlist-service resource type record. For example, WSR-0001 and WSR-0002. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service resource that’s related to the waitlist.This field is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| WaitlistId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the waitlist that’s related to the service resource.This field is a relationship field.Relationship NameWaitlistRelationship TypeLookupRefers ToWaitlist |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WaitlistServiceResourceFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[WaitlistServiceResourceHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.
