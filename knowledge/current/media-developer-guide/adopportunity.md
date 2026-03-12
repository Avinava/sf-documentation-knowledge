---
title: "AdOpportunity"
domain: media-developer-guide
topic: adopportunity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.427Z
estimatedTokens: 986
keywords: [AdOpportunity, slaes, specific, advertisment, campaign, opportunity, API, version, 59.0, later, Calls, Associated, Objects]
---

# AdOpportunity

> Represents ad slaes specific details of an advertisment campaign
         opportunity. This object is available in API version 59.0 and later.

# AdOpportunity

Represents ad slaes specific details of an advertisment campaign opportunity. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AgencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the account that belongs to the agency related to the ad opportunity.This field is a relationship field.Relationship NameAgencyRefers ToAccount |
| BuyerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the ad buy server account.This field is a relationship field.Relationship NameBuyerRelationship TypeLookupRefers ToAdBuyServerAccount |
| CampaignEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the advertisement campaign. |
| CampaignIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the advertisement campaign in an external system. |
| CampaignStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the advertisement campaign. |
| CampaignStrategy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of strategy adopted for the advertisement campaign. |
| DealType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe campaign type to be executed in the downstream ad server.Possible values are:Direct-salesPreferred (Non-Guaranteed)Programmatic GuaranteedThe default value is Direct-sales. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MediaType | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the media type of the ad opportunity.Possible values are:Digital |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the ad opportunity. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the opportunity associated with the ad opportunity.This field is a relationship field.Relationship NameOpportunityRelationship TypeLookupRefers ToOpportunity |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the ad opportunity.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdOpportunityFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdOpportunityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdOpportunityShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
