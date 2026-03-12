---
title: "LoyaltyProgramMbrPromotion"
domain: loyalty
topic: loyaltyprogrammbrpromotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.234Z
estimatedTokens: 751
keywords: [LoyaltyProgramMbrPromotion, promotions, applied, loyalty, program, member, Tracks, enrollment, status, promotion, progress, API, version, 51.0, later]
---

# LoyaltyProgramMbrPromotion

> Represents details about the promotions to be applied for a loyalty program
      member. Tracks the enrollment status, promotion status, and progress for a promotion of a
      member. This object is available in API version 51.0 and later.

# LoyaltyProgramMbrPromotion

Represents details about the promotions to be applied for a loyalty program member. Tracks the enrollment status, promotion status, and progress for a promotion of a member. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CumulativeUsageCompletePercent | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of the promotion completed by the member. |
| CumulativeUsageCompleted | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of the frequency type promotion completed by the member. |
| CumulativeUsageTarget | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe target of the frequency type promotion that must be achieved by the member to complete the promotion. |
| IsAutoEnrolled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the loyalty program member is automatically enrolled in the promotion.The default value is false. |
| IsEnrollmentActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the enrollment for the promotion is active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe loyalty program member associated with the promotion.This is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the loyalty program member promotion. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the loyalty program member promotion.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramMbrPromotionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[LoyaltyProgramMbrPromotionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
