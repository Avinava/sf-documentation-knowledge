---
title: "LeadPreferredSeller"
domain: automotive-cloud
topic: leadpreferredseller
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.360Z
estimatedTokens: 672
keywords: [LeadPreferredSeller, relationship, lead, dealer, account, selects, API, version, 56.0, later, Calls, Associated, Objects]
---

# LeadPreferredSeller

> Represents the relationship between a lead and the dealer account that the
         lead selects, or the relationship between a lead and the account that provides the
         lead. This object is available in API version 56.0 and later.

# LeadPreferredSeller

Represents the relationship between a lead and the dealer account that the lead selects, or the relationship between a lead and the account that provides the lead. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated Account record.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AccountRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of the Account in relation to the associated Lead, such as the Lead's preferred dealer or lead provider.Possible values are:DealerLeadProvider—Lead Provider |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated Contact record.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LeadId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated Lead record.This field is a relationship field.Relationship NameLeadRelationship TypeLookupRefers ToLead |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the lead preferred seller. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LeadPreferredSellerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[LeadPreferredSellerFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[LeadPreferredSellerHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
