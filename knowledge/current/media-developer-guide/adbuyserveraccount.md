---
title: "AdBuyServerAccount"
domain: media-developer-guide
topic: adbuyserveraccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.384Z
estimatedTokens: 725
keywords: [AdBuyServerAccount, user, account, buy, side, platform, send, RFPs, seller, accept, reject, review, proposals, Every, proposal]
---

# AdBuyServerAccount

> Represents a user account in the buy side platform. The user can send
         RFPs to the seller and can accept, reject, or review proposals. Every proposal in the ad
         server requires both buyer and seller account details. This object is available in API
      version 59.0 and later.

# AdBuyServerAccount

Represents a user account in the buy side platform. The user can send RFPs to the seller and can accept, reject, or review proposals. Every proposal in the ad server requires both buyer and seller account details. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Media Cloud license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the account associated with the ad buy server account.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AccountIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionRequired. The unique account ID in the buy side platform. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of user account in the buy side platform. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of account.Possible values are:Buyer |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AdBuyServerAccountFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AdBuyServerAccountHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AdBuyServerAccountShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
