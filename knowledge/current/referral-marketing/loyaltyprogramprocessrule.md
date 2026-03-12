---
title: "LoyaltyProgramProcessRule"
domain: referral-marketing
topic: loyaltyprogramprocessrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.216Z
estimatedTokens: 563
keywords: [LoyaltyProgramProcessRule, rule, loyalty, program, process, API, version, 59.0, later, Calls, Associated, Objects]
---

# LoyaltyProgramProcessRule

> Represents the details of a rule in a loyalty program process.
      This object is available in API version 59.0 and later.

# LoyaltyProgramProcessRule

Represents the details of a rule in a loyalty program process. This object is available in API version 59.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| IsProcessEligibilityRule | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the rule is used to decide transaction journals’ eligibility for a process (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramProcessId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the loyalty program process that the rule is a part of.This field is a relationship field.Relationship NameLoyaltyProgramProcessRelationship TypeLookupRefers ToLoyaltyProgramProcess |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the rule. |
| PromotionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the promotion associated with the rule.This field is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the rule.Possible values are:ActiveDraftInactiveThe default value is Draft. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LoyaltyProgramProcessRuleHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LoyaltyProgramProcessRuleHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_associated_objects_history.htm)
