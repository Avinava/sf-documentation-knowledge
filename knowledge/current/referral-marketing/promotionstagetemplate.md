---
title: "PromotionStageTemplate"
domain: referral-marketing
topic: promotionstagetemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.273Z
estimatedTokens: 1151
keywords: [PromotionStageTemplate, reuseable, configuration, promotion, stage, template, API, version, 61.0, later, Calls]
---

# PromotionStageTemplate

> Represents the reuseable configuration details of a promotion stage
         template. This object is available in API version 61.0 and later.

# PromotionStageTemplate

Represents the reuseable configuration details of a promotion stage template. This object is available in API version 61.0 and later.

A promotion template includes templates for each promotion stage. Each promotion stage template contains the details of each promotion stage.

These templates are automatically created when you create a promotion template for a B2C referral program:

-   Promotion Launched—You can't change the stage name and you can't reward advocates or their referred friends.
-   Advocate Joins Promotion—You can't change the stage name and you can't reward advocates or their referred friends.
-   Advocate Refers Friend—You change the stage name and reward advocates or their referred friends.
-   Friend Signs Up—You change the stage name and reward advocates or their referred friends.
-   Friend Completes First Purchase—You change the stage name and reward advocates or their referred friends.

These templates are automatically created when you create a promotion template for a B2B referral program:

-   Promotion Launched—You can't change the stage name and you can't reward advocates or their referred friends.
-   Advocate Joins Promotion—You can't change the stage name and you can't reward advocates or their referred friends.
-   Advocate Submits Referral—You change the stage name and reward advocates.
-   Referral Qualifies—You change the stage name and reward advocates or their referred parties.
-   Referral Closure/Converts—You change the stage name and reward advocates or their referred parties.

When you use a promotion template to create a promotion, the promotion stage templates related to the promotion template are automatically used to create the stages of the promotion.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the referral promotion stage template. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The developer name of the referral promotion stage template. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the referral promotion stage template. |
| PromotionTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the referral promotion template that the referral promotion stage template is a part of.This field is a relationship field.Relationship NamePromotionTemplateRelationship TypeMaster-detailRefers ToPromotionTemplate (the master object) |
| ReferredPartyJournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the journal subtype that represents the activity for which referred parties are rewarded.This field is a relationship field.Relationship NameReferredPartyJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| ReferrerJournalSubTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the journal subtype that represents the activity for which advocates are rewarded.This field is a relationship field.Relationship NameReferrerJournalSubTypeRelationship TypeLookupRefers ToJournalSubType |
| RewardRecipient | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the audience of the promotion stage template's reward. Specify a value only when the promotion stage template represents a promotion stage that rewards advocates, their referred friends, or both.Possible values are:AdvocateFriend—For B2B referral programs friend represents referred party |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number of the referral promotion stage template in the associated referral promotion template. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of referral promotion stage that the referral promotion stage template belongs to.Possible values are:Advocate Joins PromotionAdvocate Refers FriendFriend Completes First PurchaseFriend Signs UpPromotion Launched |
