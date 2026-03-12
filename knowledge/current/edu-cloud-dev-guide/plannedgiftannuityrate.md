---
title: "PlannedGiftAnnuityRate"
domain: edu-cloud-dev-guide
topic: plannedgiftannuityrate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.326Z
estimatedTokens: 882
keywords: [PlannedGiftAnnuityRate, rate, calculate, payments, charitable, gift, annuity, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# PlannedGiftAnnuityRate

> The rate used to calculate payments for a charitable gift annuity. This
      object is available in API version 64.0 and later.

# PlannedGiftAnnuityRate

The rate used to calculate payments for a charitable gift annuity. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the annuity rate becomes effective. |
| GiftType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe gift type associated with the gift annuity. Determines the payout rate for the gift.Possible values are:BequestCharitable Gift AnnuityCharitable Lead Annuity TrustCharitable Remainder Annuity TrustCharitable Remainder TrustDeferred Gift AnnuityDonor Advised FundLife InsuranceOther Planned GiftPersonal PropertyPooled Income FundReal EstateSecurities |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| MaturityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the annuity payments end. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift annuity rate record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PlannedGiftId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe planned gift associated with the gift annuity rate.This field is a relationship field.Relationship NamePlannedGiftRefers ToPlannedGift |
| Rate | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionThe annuity rate used to calculate payments to the donor or beneficiary. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the annuity payments begin. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PlannedGiftAnnuityRateChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)

Change events are available for the object.

[PlannedGiftAnnuityRateFeed](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)

Feed tracking is available for the object.

[PlannedGiftAnnuityRateHistory](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)

History is available for tracked fields of the object.

[PlannedGiftAnnuityRateOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[PlannedGiftAnnuityRateShare](https://developer.salesforce.com/docs/atlas.en-us.258.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)

Sharing is available for the object.
