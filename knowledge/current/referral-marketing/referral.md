---
title: "Referral"
domain: referral-marketing
topic: referral
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.305Z
estimatedTokens: 1658
keywords: [Referral, submitted, advocate, API, version, 59.0, later, Calls, Associated, Objects]
---

# Referral

> Represents the details of a referral submitted by an advocate.
      This object is available in API version 59.0 and later.

# Referral

Represents the details of a referral submitted by an advocate. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClientEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe email of the referred party |
| ClientName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the referred party. |
| ClientPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the referred party. |
| CurrentPromotionStageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the promotion stage that the referral is at.This field is a relationship field.Relationship NameCurrentPromotionStageRelationship TypeLookupRefers ToPromotionStage |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The unique number of the record. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe opportunity associated with the referral.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order associated with the referral.This field is a relationship field.Relationship NameOrderRefers ToOrder |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the referral promotion that the advocate signed up to submit the referral.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| ReferralDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the advocate submitted the referral. |
| ReferralType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of referral. In Referral Marketing, the type is always Inbound.Possible values are:INBOUNDINTERNAL—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.OUTBOUND—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation. |
| ReferredPartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Contact or the Person Account of the friend referred by the advocatefor a B2C referral program.The ID of the Lead or the Business Account of the party referred by the advocate for a B2B referral programThis field is a polymorphic relationship field.Relationship NameReferredPartyRelationship TypeLookupRefers ToAccount, Contact |
| ReferrerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Contact or the Person Account of the advocate who submitted the referral for a B2C referral program.The ID of the Business Account of the advocate who submitted the referral for a B2B referral programThis field is a polymorphic relationship field.Relationship NameReferrerRelationship TypeLookupRefers ToAccount, Contact, LoyaltyProgramMember |
| Source | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source where the advocate submitted the referral.Possible values are:ApplicationEmailMessageOtherPhoneSocial MediaWalk-In |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for internal use and isn't required for B2C or B2B referral programs. Don't use this field to customize or extend your implementation. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies which Salesforce product that created the record.Possible values are:Loyalty Management—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.Public Sector Solutions—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.Referral Management—Use this value for Referral Marketing activities. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReferralFeed](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ReferralHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ReferralOwnerSharingRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ReferralShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ReferralFeed (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_feed.htm)
- ReferralHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
- ReferralOwnerSharingRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_ownersharingrule.htm)
- ReferralShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
