---
title: "LoyaltyPgmMbrAttributeVal"
domain: referral-marketing
topic: loyaltypgmmbrattributeval
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.169Z
estimatedTokens: 836
keywords: [LoyaltyPgmMbrAttributeVal, advocate’s, progress, towards, target, engagement, attribute, API, version, 49.0, later, Calls, Associated, Objects]
---

# LoyaltyPgmMbrAttributeVal

> Represents an advocate’s progress towards to target of an engagement
         attribute. This object is available in API version 49.0 and later.

# LoyaltyPgmMbrAttributeVal

Represents an advocate’s progress towards to target of an engagement attribute. This object is available in API version 49.0 and later.

When you assign an engagement attribute to an advocate, you can create and update LoyaltyPgmMbrAttributeVal records to update the advocate’s progress towards the engagement attribute target.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Fields

| Field | Details |
| --- | --- |
| CumulativeValue | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionThe cumulative value achieved by the advocate for the related engagement attribute until date across all the periods. |
| CurrentValue | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe value achieved by the advocate for the related engagement attribute during a specific period. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe end date of the period for which the advocate's progress towards achieving the related engagement attribute target is tracked. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastResetDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe date on which the current value was last reset during a specific period. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyPgmEngmtAttributeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The associated engagement attribute for which the advocate’s progress is tracked.This field is a relationship field.Relationship NameLoyaltyPgmEngmtAttributeRelationship TypeLookupRefers ToLoyaltyPgmEngmtAttribute |
| LoyaltyProgramMemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated advocate for whom engagement attribute progress is tracked.This field is a relationship field.Relationship NameLoyaltyProgramMemberRelationship TypeLookupRefers ToLoyaltyProgramMember |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique number of the engagement attribute value. |
| ResetCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of times the current value has been reset during a specific period. |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionRequired. The start date of the period for which the advocate's progress towards achieving the related engagement attribute target is tracked. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyPgmMbrAttributeValHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoyaltyPgmMbrAttributeValHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
