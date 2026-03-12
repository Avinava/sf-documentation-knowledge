---
title: "Loyalty Management Standard Objects"
domain: loyalty
topic: loyalty-management-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.085Z
estimatedTokens: 5624
keywords: [Loyalty, Management, Standard, Objects, data, model, manage, programs, organization, partners, members, track, activities, reward, promotions]
---

# Loyalty Management Standard Objects

> Loyalty Management data model provides objects and fields to create and manage loyalty
    programs for your organization. Use the objects to manage partners and members, track members'
    activities, reward members, and manage promotions.

# Loyalty Management Standard Objects

Loyalty Management data model provides objects and fields to create and manage loyalty programs for your organization. Use the objects to manage partners and members, track members' activities, reward members, and manage promotions.

In addition to the standard objects included with the Loyalty Management license, the standard objects included with the Salesforce platform licenses enabled in your Org are available out-of-the-box.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=loyalty)

#### Warning

When you customize standard fields, we recommend that you don’t change the API names of the default picklist values.

-   **[Loyalty Management Data Model](atlas.en-us.loyalty.meta/loyalty/loyalty_management_data_model.htm)**
    Learn about the objects and relationships within the Loyalty Management data model.
-   **[Loyalty Clubs Data Model](atlas.en-us.loyalty.meta/loyalty/loyalty_clubs_data_model.htm)**
    Clubs are interest-based membership initiatives designed to provide exclusive benefits and privileges to customers.
-   **[AnalyticsDatasetDefinition](atlas.en-us.loyalty.meta/loyalty/loyalty_api_objects_analyticsdatasetdefinition.htm)**
    Represents the datasets used for analytics, such as those in CRM Analytics and Tableau. This object is available in API version 65.0 and later.
-   **[Benefit](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_benefit.htm)**
    Represents information about benefits associated with the loyalty program. Benefits are mapped to the members based on the tier or other program rules. This object is available in API version 51.0 and later.
-   **[BenefitParameterValue](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_benefitparametervalue.htm)**
    Represents the runtime value of a parameter that's used when executing a flow for benefit action. This object is available in API version 52.0 and later.
-   **[BenefitType](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_benefittype.htm)**
    Represents information about the type of benefits such as Support Benefits available to the loyalty program member. This object is available in API version 51.0 and later.
-   **[DigitalPass](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_digitalpass.htm)**
    Represents a user-facing representation generated from a digital pass template. It contains specific, relevant data, such as a membership number or voucher details, making each pass unique to the user. This pass can be optionally stored in a mobile or digital wallet. This object is available in API version 66.0 and later.
-   **[DigitalPassTemplate](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_digitalpasstemplate.htm)**
    Represents a template for creating digital passes, such as loyalty membership cards or coupons. It outlines the pass's design, data fields, and functionality, enabling the generation of multiple unique passes from a single, reusable template. This object is available in API version 66.0 and later.
-   **[DigitalPassTmplParameter](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_digitalpasstmplparameter.htm)**
    Represents a specific, configurable data field within a digital pass template. It defines the content type such as text, date, or image, and properties such as label and visibility, for a particular section of the pass. This object is available in API version 66.0 and later.
-   **[GameDefinition](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_gamedefinition.htm)**
    Represents information about a game that the loyalty program offers to its members. This object is available in API version 60.0 and later.
-   **[GameParticipant](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_gameparticipant.htm)**
    Represents a junction between a game definition and a participant who is either an account, a contact, or a loyalty program member. This object is available in API version 60.0 and later.
-   **[GameParticipantReward](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_gameparticipantreward.htm)**
    Represents the reward that’s provided to a participant after they’ve played a game. This object is available in API version 60.0 and later.
-   **[GameReward](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_gamereward.htm)**
    The reward that’s offered to participants of a game. This object is available in API version 60.0 and later.
-   **[JournalReason](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_journalreason.htm)**
    Represents a view that specifies the reason for the action that created a transaction journal. This object is available in API version 51.0 and later.
-   **[JournalSubType](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_journalsubtype.htm)**
    Represents the subcategory of transaction journal. This object is available in API version 51.0 and later.
-   **[JournalType](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_journaltype.htm)**
    Represents the category of transactions. For example: accrual, redemption. This object is available in API version 51.0 and later.
-   **[LoyaltyAggrPointExprLedger](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyaggrpointexprledger.htm)**
    Represents information about non-qualifying currency points that expire based on a fixed model tier group. This object is available in API version 54.0 and later.
-   **[LoyaltyLedger](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyledger.htm)**
    Records the points that have been credited or debited for a member across the transactions. This object is available in API version 51.0 and later.
-   **[LoyaltyLedgerTraceability](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyledgertraceability.htm)**
    Represents a tracker for the loyalty ledger. The debit ledger consumes points from the linked credit ledger for a member redemption or an accrual cancellation. This object is available in API version 62.0 and later.
-   **[LoyaltyMemberCurrency](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltymembercurrency.htm)**
    Represents the information about point balance for a member and a particular currency. This object is available in API version 51.0 and later.
-   **[LoyaltyMembershipLifecycle](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltymembershiplifecycle.htm)**
    Represents information about a member's lifecycle in the loyalty program. This object is available in API version 57.0 and later.
-   **[LoyaltyMemberTier](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltymembertier.htm)**
    Represents information about the current tier of the member across tier groups. This object is available in API version 51.0 and later.
-   **[LoyaltyPartnerProduct](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypartnerproduct.htm)**
    Represents products and product categories offered by loyalty partners. This object is available in API version 51.0 and later.
-   **[LoyaltyPgmCurrencySubtype](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmcurrencysubtype.htm)**
    Represents a subtype of a fixed-model non-qualifying loyalty program currency. This object is available in API version 61.0 and later.
-   **[LoyaltyPgmEngmtAttribute](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmengmtattribute.htm)**
    Represents information about an engagement attribute for a loyalty program. This object is available in API version 55.0 and later.
-   **[LoyaltyPgmEngmtAttrProm](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmengmtattrprom.htm)**
    Represents a junction between Loyalty Program Engagement Attribute and Promotion. Associate an engagement attribute with a promotion if you want to track the engagement attribute during the promotion period. This object is available in API version 55.0 and later.
-   **[LoyaltyPgmGroupMbrRlnsp](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmgroupmbrrlnsp.htm)**
    Represents a junction between a Corporate or Individual type loyalty program member who is part of a group and the Group type loyalty program member. This object is available in API version 53.0 and later.
-   **[LoyaltyPgmMbrAttributeVal](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmmbrattributeval.htm)**
    Represents information about the value reached by a loyalty program member for an engagement attribute. This object is available in API version 55.0 and later.
-   **[LoyaltyPgmMbrLinkedPtnr](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmmbrlinkedptnr.htm)**
    Represents the association between a loyalty program member and their membership with a partner. It acts as an association that facilitates points accrual and data exchange in a joint loyalty program. This object is available in API version 66.0 and later.
-   **[LoyaltyPgmMbrPromEligView](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmmbrpromeligview.htm)**
    Represents a virtual object that provides a consolidated view of the loyalty program member’s eligibility for a promotion and their enrollment status in eligible promotions. This object is available in API version 56.0 and later.
-   **[LoyaltyPgmPartnerCurrency](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmpartnercurrency.htm)**
    Represents a junction between a loyalty program partner and a loyalty program currency. This object is available in API version 55.0 and later.
-   **[LoyaltyPgmPartnerPromotion](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmpartnerpromotion.htm)**
    Represents a junction between the Promotion and Loyalty Program Partner objects. This object is available in API version 55.0 and later.
-   **[LoyaltyPgmPtnrLdgrSummary](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmptnrldgrsummary.htm)**
    Represents the aggregated ledger used by a loyalty program to credit points to or debit points from a prepaid partner's points pack. This ledger can also be used to add or deduct the monetary value of points from the postpaid partner's bill. This object is available in API version 55.0 and later.
-   **[LoyaltyPgmPtnrPrepaidPack](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltypgmptnrprepaidpack.htm)**
    Represents information about a prepaid set of points purchased by a loyalty program partner. This object is available in API version 55.0 and later.
-   **[LoyaltyProgram](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogram.htm)**
    Represents the loyalty program within an organization. All the information related to members, tiers, tier groups, program currencies, vouchers, benefits, partners, promotions, transactions are associated with the program. This object is available in API version 51.0 and later.
-   **[LoyaltyProgramBadge](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrambadge.htm)**
    Represents information about the badge that's associated with a loyalty program. This object is available in API version 56.0 and later.
-   **[LoyaltyProgramCurrency](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramcurrency.htm)**
    Represents qualifying and non-qualifying currencies associated with the program. Qualifying currency represents the engagement of a member with the program and it’s associated with a tier group. Non-qualifying currency represent the points that the member earns for redemption. This object is available in API version 51.0 and later.
-   **[LoyaltyProgramCurrencyTier](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramcurrencytier.htm)**
    Repesents a junction between non-qualifying loyalty program currency and loyalty tier. This object is available in API version 61.0 and later.
-   **[LoyaltyProgramMbrPromotion](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammbrpromotion.htm)**
    Represents details about the promotions to be applied for a loyalty program member. Tracks the enrollment status, promotion status, and progress for a promotion of a member. This object is available in API version 51.0 and later.
-   **[LoyaltyProgramMember](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammember.htm)**
    Represents information about member who belongs to a loyalty program. The member can be individual or corporate type. This object is available in API version 51.0 and later.
-   **[LoyaltyProgramMemberBadge](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammemberbadge.htm)**
    Represents a badge that’s assigned to a loyalty program member. This object is available in API version 56.0 and later.
-   **[LoyaltyProgramMemberCase](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammembercase.htm)**
    Represents a junction between a loyalty program member and a case. This object is available in API version 52.0 and later.
-   **[LoyaltyProgramMemberMerge](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrammembermerge.htm)**
    Represents information about merged loyalty program memberships. This object is available in API version 56.0 and later.
-   **[LoyaltyProgramPartner](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrampartner.htm)**
    Represents partners that are associated with a given loyalty program. Partners can be an accrual partner, a redemption partner, or both. This object is available in API version 51.0 and later.
-   **[LoyaltyProgramPartnerLedger](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogrampartnerledger.htm)**
    Represents the ledger used by a loyalty program to credit points to or debit points from a prepaid partner's points pack or from a postpaid partner’s point balance. This ledger can also be used to add or deduct the monetary value of points from the partner's postpaid bill. This object is available in API version 55.0 and later.
-   **[LoyaltyProgramProcess](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramprocess.htm)**
    Represents information about loyalty program processes that determine how transaction journals are processed. This object is available in API version 54.0 and later.
-   **[LoyaltyProgramWidget](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltyprogramwidget.htm)**
    Represents the configuration of a widget that a user can apply to the out-of-the-box widget templates and FlexCards provided by Omnistudio. The configuration helps implement custom UI changes, such as promotion type, promotion tag line, and so on for a user. This object is available in API version 57.0 and later.
-   **[LoyaltyTier](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytier.htm)**
    Represents information about tiers of a loyalty program. A tier group has a set of tiers in a sequential order. This object is available in API version 51.0 and later.
-   **[LoyaltyTierBenefit](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytierbenefit.htm)**
    A junction object that associates the loyalty benefits with the loyalty program tiers. This object is available in API version 51.0 and later.
-   **[LoyaltyTierEligibilitySrc](atlas.en-us.loyalty.meta/loyalty/loyalty_loyaltytiereligibilitysrc.htm)**
    Represents the customer groups that are eligible for club membership. This object is available in API version 64.0 and later.
-   **[LoyaltyTierGroup](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytiergroup.htm)**
    Represents information about tier groups of a loyalty program. Tier group categorizes members based on their loyalty points. This object is available in API version 51.0 and later.
-   **[LoyaltyTierMshpFeeOption](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytiermshpfeeoption.htm)**
    Represents the options by which members can pay for tier or club memberships. This object is available in API version 63.0 and later.
-   **[LoyaltyTierPromotion](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_loyaltytierpromotion.htm)**
    Represents a junction between a member tier and a loyalty promotion. This object is available in API version 63.0 and later.
-   **[MemberBenefit](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_memberbenefit.htm)**
    Represents details about a benefit that’s assigned to a loyalty program member and has a benefit action that’s triggered. This object is available in API version 51.0 and later.
-   **[NetworkReferencedObject](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_networkreferencedobject.htm)**
    A junction object that associates the loyalty program with the Experience Cloud site. This object is available in API version 51.0 and later.
-   **[Promotion](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotion.htm)**
    Represents a promotion associated with the loyalty program. It captures the information such as type of the promotion, issue of a voucher or credit points, promotion enrollment, and status of the promotion. This object is available in API version 51.0 and later.
-   **[PromotionActionableList](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionactionablelist.htm)**
    Represent of a junction between a promotion and an actionable list. This object is available in API version 62.0 and later.
-   **[PromotionChannel](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionchannel.htm)**
    Represents a promotion’s eligible channel. This object is available in API version 60.0 and later.
-   **[PromotionExecutionEvalGrp](atlas.en-us.loyalty.meta/loyalty/sforce_api_objetcs_promotionexecutionevalgrp.htm)**
    Represents a collection of promotions that are evaluated for execution as a group. This object is available in API version 65.0 and later.
-   **[PromotionExecEvalGrpItem](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionexecevalgrpitem.htm)**
    Represents either a promotion or a promotion group in a promotion execution evaluation group. This object is available in API version 65.0 and later.
-   **[PromotionLimit](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionlimit.htm)**
    Represents the limit of a promotion. This object is available in API version 60.0 and later.
-   **[PromotionLimitUsage](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionlimitusage.htm)**
    Represents information about the total usage of a promotion limit. This object is available in API version 60.0 and later.
-   **[PromotionLoyaltyPtnrProdt](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionloyaltyptnrprodt.htm)**
    Represents a relationship between a promotion and a loyalty partner product. It indicates the products or product categories that are applied to a particular promotion. This object is available in API version 51.0 and later.
-   **[PromotionMarketSegment](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionmarketsegment.htm)**
    Represents a relationship between a promotion and Data Cloud segment. It indicates the segments targeted for a particular promotion. This object is available in API version 51.0 and later.
-   **[PromotionPartyUsage](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionpartyusage.htm)**
    Represents the details of number of times a promotion has been used by a customer. This object is available in API version 60.0 and later.
-   **[PromotionPartyUsageDetail](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionpartyusagedetail.htm)**
    Represents the amount that's discounted by a promotion for a transaction journal. This object is available in API version 60.0 and later.
-   **[PromotionProduct](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionproduct.htm)**
    Represents a junction between a promotion and an product that’s eligible for the promotion. This object is available in API version 60.0 and later.
-   **[PromotionProductCategory](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionproductcategory.htm)**
    Represents a junction between a promotion and an product category that’s eligible for the promotion. This object is available in API version 60.0 and later.
-   **[PromotionRuleTemplate](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionruletemplate.htm)**
    Represents the configuration of a promotion rule template. This object is available in API version 60.0 and later.
-   **[PromotionStage](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionstage.htm)**
    Represents a stage when the promotion sends an email to the promotion's target audience. With Global Promotions Management, a promotion launch email is sent after the promotion is activated. This object is available in API version 60.0 and later.
-   **[PromotionStageEmailTemplate](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_promotionstageemailtemplate.htm)**
    Represents a junction between a promotion stage and an email template. With Global Promotions Management, a promotion's launch email is associated with the promotion's Promotion Launched stage. You can customize the promotion launch email based on your company’s branding. This object is available in API version 60.0 and later.
-   **[TransactionJournal](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_transactionjournal.htm)**
    Represents information about loyalty transactions that track activities, member behavior, and adjustments. This object is available in API version 51.0 and later.
-   **[Voucher](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_voucher.htm)**
    Represents details about a voucher that's issued to a loyalty program member. This object is available in API version 51.0 and later.
-   **[VoucherDefinition](atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_voucherdefinition.htm)**
    Represents details about a voucher definition that’s associated with a loyalty program. This object is available in API version 51.0 and later.

#### See Also

-   [Object Reference for the Salesforce Platform: Overview of Salesforce Platform Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Platform Objects and Fields - HTML (New Window)")

-   [SOAP API Developer Guide: About SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: About SOAP API - HTML (New Window)")

## Related Topics

- Loyalty Management Data Model (atlas.en-us.loyalty.meta/loyalty/loyalty_management_data_model.htm)
- Loyalty Clubs Data Model (atlas.en-us.loyalty.meta/loyalty/loyalty_clubs_data_model.htm)
- AnalyticsDatasetDefinition (atlas.en-us.loyalty.meta/loyalty/loyalty_api_objects_analyticsdatasetdefinition.htm)
- Benefit (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_benefit.htm)
- BenefitParameterValue (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_benefitparametervalue.htm)
- BenefitType (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_benefittype.htm)
- DigitalPass (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_digitalpass.htm)
- DigitalPassTemplate (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_digitalpasstemplate.htm)
- DigitalPassTmplParameter (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_digitalpasstmplparameter.htm)
- GameDefinition (atlas.en-us.loyalty.meta/loyalty/sforce_api_objects_gamedefinition.htm)
