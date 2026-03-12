---
title: "PromotionTemplate"
domain: referral-marketing
topic: promotiontemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.282Z
estimatedTokens: 1028
keywords: [PromotionTemplate, JSON, configuration, referral, promotion, template, API, version, 61.0, later, Calls, Associated, Objects]
---

# PromotionTemplate

> Represents the JSON configuration and details of a referral promotion
         template. This object is available in API version 61.0 and later.

# PromotionTemplate

Represents the JSON configuration and details of a referral promotion template. This object is available in API version 61.0 and later.

You can create a promotion template and use the template to create promotions. After you create a promotion template, these PromotionStageTemplate records are automatically created and associated with the promotion template.

For B2C referral programs:

-   Promotion Launched
-   Advocate Joins Promotion
-   Advocate Refers Friend
-   Friend Signs Up
-   Friend Completes First Purchase

The Refer a Friend promotion template and its related PromotionStageTemplate records are provided by default for B2C referral programs.

For B2B referral programs:

-   Promotion Launched
-   Advocate Joins Promotion
-   Advocate Submits Referral
-   Referral Qualifies
-   Referral Closure/Converts

The Refer a Lead promotion template and its related PromotionStageTemplate records are provided by default for B2B referral programs.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the referral promotion template. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The developer name of the referral promotion template. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the referral program that the referral promotion template is a part of.This field is a relationship field.Relationship NameLoyaltyProgramRelationship TypeLookupRefers ToLoyaltyProgram |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the referral promotion template. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the referral promotion template.Possible values are:ActiveDraftInactiveThe default value is Draft. |
| TemplateCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of referral promotion template.Possible values are:Loyalty—Reserved for internal use and isn't required for B2C or B2B referral programs. Don't use this value to customize or extend your implementation.ReferralThe default value is Referral. |
| TemplateVersion | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe version number of the referral promotion template. |
| TemplateCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of promotion template based on target markets.Possible values are:B2B - Business to BusinessB2C - Business to CustomerThe default value is B2C - Business to Customer. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PromotionTemplateShare](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PromotionTemplateShare (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_share.htm)
