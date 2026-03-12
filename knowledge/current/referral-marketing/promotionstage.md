---
title: "PromotionStage"
domain: referral-marketing
topic: promotionstage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.259Z
estimatedTokens: 1000
keywords: [PromotionStage, stage, referral, promotion, API, version, 59.0, later, Calls]
---

# PromotionStage

> Represents a stage in a referral promotion. This object is
      available in API version 59.0 and later.

# PromotionStage

Represents a stage in a referral promotion. This object is available in API version 59.0 and later.

When you create a referral promotion, five stages are created to the promotion by default.

These stages are created by default for B2C referral programs:

-   Promotion Launched—During this stage, an email is sent to the referral promotion’s target audience.
-   Advocate Joins Promotion—During this stage, existing customers join the referral promotion as advocates.
-   Advocate Refers Friend—During this stage, advocates refer their friends.
-   Friend Signs Up—During this stage, referred friends sign up as new customers.
-   Friend Completes First Purchase—During this stage, a referred friend completes their first purchase.

These stages are created by default for B2B referral programs:

-   Promotion Launched—During this stage, the promotion launches, and its target audience can join.
-   Advocate Joins Promotion—During this stage, existing partners join the referral promotion as advocates.
-   Advocate Submits Referral—During this stage, advocates refer a business.
-   Referral Qualifies—During this stage, the referred party qualifies as a potential business client, and Opportunity and Account records are created for the referred party.
-   Referral Closure/Converts—During this stage, the opportunity created is won or closed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The unique name of the promotion stage. |
| Configuration | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe configuration of the promotion stage. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the promotion stage. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the promotion stage. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the referral promotion that the stage belongs to.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| ReferredPartyJournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the journal subtype that represents the activity for which the referred party is rewarded during the referral promotion stage.This field is a relationship field.Relationship NameReferredPartyJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| ReferrerJournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the journal subtype that represents the activity for which the advocate is rewarded during the referral promotion stage.This field is a relationship field.Relationship NameReferrerJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The sequence number of the stage in a referral promotion. For example, the sequence number of the Promotion Launched stage is 1. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of promotion stage. Each of the default Promotion Stage records are assigned its own promotion stage type. For example, Promotion Launch is the type for the Promotion Launched stage.Possible values are:Advocate Joins PromotionAdvocate Refers FriendFriend Completes First PurchaseFriend Signs UpPromotion Launched |
