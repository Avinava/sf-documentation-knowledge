---
title: "StandardObjectNameHistory"
domain: referral-marketing
topic: standardobjectnamehistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:36.085Z
estimatedTokens: 1535
keywords: [StandardObjectNameHistory, model, history, objects, associated, standard, represent, changes, Calls, Special, Access, Rules, Follow]
---

# StandardObjectNameHistory

> StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to
			the values in the fields of a standard object.

# StandardObjectNameHistory

StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.

The object name is variable and uses StandardObjectNameHistory syntax. For example, AccountHistory represents the history of changes to the values of an account record’s fields. We list the available associated history objects at the end of this topic. For specific version information, see the documentation for the standard object.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountHistory, see the special access rules for Account.

## Fields

| Field Name | Details |
| --- | --- |
| StandardObjectNameId | TypereferencePropertiesFilter, Group, SortDescriptionID of the standard object. |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionName of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionNew value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionOld value of the field that was changed. |

## Objects That Follow This Model

These objects follow the standard pattern for associated History objects.

-   [JournalSubType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journalsubtype.htm "Represents a subcategory of transaction journals. Journal subtypes identify the type of advocate or referred party activity for which transaction journals are created. This object is available in API version 59.0 and later.")
-   [JournalType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm "Represents a category of transaction journal. Journal types identify the reason for which transaction journals are created. This object is available in API version 59.0 and later.")
-   [LoyaltyPgmEngmtAttribute](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmengmtattribute.htm "Represents an event that’s tracked for advocates. For example, engagement attributes are used to track the number of times advocates have referred their friends or businesses in a day and the number of times advocates have been rewarded for successful referrals. This object is available in API version 59.0 and later.")
-   [LoyaltyPgmMbrAttributeValHistory](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmmbrattributeval.htm "Represents an advocate’s progress towards to target of an engagement attribute. This object is available in API version 49.0 and later.")
-   [LoyaltyProgram](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm "Represents the referral program. All records related to the referral program’s promotions, rewards, advocates, and referrals are associated with the referral program. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramMbrPromotion](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammbrpromotion.htm "Represents a junction between an advocate and a promotion and is used to track whether an advocate has signed up for a promotion. This object is available in API version 49.0 and later.")
-   [LoyaltyProgramMember](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm "Represents the details of a referral program advocate. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramProcess](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm "Represents information about a process that processes transaction journals for a referral promotion’s advocates and their referred party’s referral events. This object is available in API version 59.0 and later.")
-   [LoyaltyProgramProcessRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocessrule.htm "Represents the details of a rule in a loyalty program process. This object is available in API version 59.0 and later.")
-   [Promotion](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm "Represents information about a referral promotion. This object is available in API version 59.0 and later.")
-   [PromotionMarketSegment](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotionmarketsegment.htm "Represents a junction between a promotion and a Data Cloud segment. Associate a promotion with a segment when you want only the contacts associated with the segment to join as advocates of the referral promotion. This object is available in API version 59.0 and later. This object is available only for B2C referral programs.")
-   [Referral](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_referral.htm "Represents the details of a referral submitted by an advocate. This object is available in API version 59.0 and later.")
-   [Voucher](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucher.htm "Represents the details of a voucher that’s issued to an advocate or to a referred friend. This object is available in API version 59.0 and later.")
-   [VoucherDefinition](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucherdefinition.htm "Represents information about the voucher template. A voucher definition is used to issue vouchers to advocates and their referred parties. This object is available in API version 59.0 and later.")

## Related Topics

- JournalSubType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journalsubtype.htm)
- JournalType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm)
- LoyaltyPgmEngmtAttribute (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmengmtattribute.htm)
- LoyaltyPgmMbrAttributeValHistory (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmmbrattributeval.htm)
- LoyaltyProgram (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm)
- LoyaltyProgramMbrPromotion (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammbrpromotion.htm)
- LoyaltyProgramMember (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm)
- LoyaltyProgramProcess (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm)
- LoyaltyProgramProcessRule (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocessrule.htm)
- Promotion (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm)
