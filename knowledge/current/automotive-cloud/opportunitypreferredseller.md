---
title: "OpportunityPreferredSeller"
domain: automotive-cloud
topic: opportunitypreferredseller
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.366Z
estimatedTokens: 700
keywords: [OpportunityPreferredSeller, relationship, opportunity, dealer, account, provided, lead, created, API, version, 56.0, later, Calls, Associated, Objects]
---

# OpportunityPreferredSeller

> Represents the relationship between an opportunity and a dealer account, or
         the relationship between an opportunity and the account that provided the lead from which
         the opportunity was created. This object is available in API version 56.0 and
      later.

# OpportunityPreferredSeller

Represents the relationship between an opportunity and a dealer account, or the relationship between an opportunity and the account that provided the lead from which the opportunity was created. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe associated Account record.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AccountRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of the Account in relation to the associated Opportunity, such as the opportunity's preferred dealer, or the lead provider.Possible values are:DataProvider—Data ProviderDealer |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated Contact record.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the opportunity preferred seller. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated Opportunity record.This field is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OpportunityPreferredSellerChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[OpportunityPreferredSellerFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[OpportunityPreferredSellerHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
