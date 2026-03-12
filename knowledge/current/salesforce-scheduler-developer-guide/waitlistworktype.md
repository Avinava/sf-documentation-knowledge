---
title: "WaitlistWorkType"
domain: salesforce-scheduler-developer-guide
topic: waitlistworktype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.897Z
estimatedTokens: 532
keywords: [WaitlistWorkType, relationship, Waitlist, Work, Salesforce, Scheduler, API, version, 58.0, later, Calls, Special, Access, Rules, Associated]
---

# WaitlistWorkType

> Represents the relationship between the Waitlist object and the Work
         Type object for Salesforce Scheduler. This object is available in API version 58.0 and
      later.

# WaitlistWorkType

Represents the relationship between the Waitlist object and the Work Type object for Salesforce Scheduler. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist work type record was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the waitlist work type record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number that identifies the waitlist-work type record. For example, WWT-0001 and WWT-0002. |
| WaitlistId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the waitlist that’s related to the wok type.This field is a relationship field.Relationship NameWaitlistRelationship TypeLookupRefers ToWaitlist |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the work type that’s related to the waitlist.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WaitlistWorkTypeFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm " HTML (New Window)")

Feed tracking is available for the object.

[WaitlistWorkTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm " HTML (New Window)")

History is available for tracked fields of the object.
