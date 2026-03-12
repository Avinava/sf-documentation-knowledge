---
title: "Standard Objects"
domain: referral-marketing
topic: standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:36.057Z
estimatedTokens: 2551
keywords: [Standard, Objects, Referral, Marketing, B2B, Management, data, models, come, manage, program, design, advocate, rewards, Developers]
---

# Standard Objects

> The Referral Marketing and B2B Referral Management data models come with a set of
        objects and fields to manage referral program information such as program design, advocate
        and referral details, and rewards. Developers can extend the objects in the data model based
        on your company’s requirements.

# Standard Objects

The Referral Marketing and B2B Referral Management data models come with a set of objects and fields to manage referral program information such as program design, advocate and referral details, and rewards. Developers can extend the objects in the data model based on your company’s requirements.

-   **[Objects for B2B and B2C Referral Programs](atlas.en-us.referral_marketing.meta/referral_marketing/referral_marketing_btob_btoc_objects.htm)**
    Objects form the data model foundation for managing referral program information. Discover which objects are available for B2B and B2C referral programs.
-   **[CommunicationChannelTemplate](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_communicationchanneltemplate.htm)**
    Represents the template for different communication channels. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.
-   **[CommunicationChannelType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_communicationchanneltype.htm)**
    Represents the type of communication channel such as WhatsApp, SMS, or Telegram. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.
-   **[ExtendedReward](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_extendedreward.htm)**
    Represents the instance of an extended reward that's issued to a customer, a partner, or a member. This object is available in API version 64.0 and later.
-   **[ExtendedRewardDefinition](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_extendedrewarddefinition.htm)**
    Represents the definition of an extended reward that is associated with a loyalty program. This object is available in API version 64.0 and later.
-   **[InternalOrgUnitCommChannel](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_internalorgunitcommchannel.htm)**
    Represents the communication channel for the internal organization unit. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.
-   **[JournalSubType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journalsubtype.htm)**
    Represents a subcategory of transaction journals. Journal subtypes identify the type of advocate or referred party activity for which transaction journals are created. This object is available in API version 59.0 and later.
-   **[JournalType](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm)**
    Represents a category of transaction journal. Journal types identify the reason for which transaction journals are created. This object is available in API version 59.0 and later.
-   **[LoyaltyPgmEngmtAttribute](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmengmtattribute.htm)**
    Represents an event that’s tracked for advocates. For example, engagement attributes are used to track the number of times advocates have referred their friends or businesses in a day and the number of times advocates have been rewarded for successful referrals. This object is available in API version 59.0 and later.
-   **[LoyaltyPgmMbrAttributeVal](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmmbrattributeval.htm)**
    Represents an advocate’s progress towards to target of an engagement attribute. This object is available in API version 49.0 and later.
-   **[LoyaltyProgram](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogram.htm)**
    Represents the referral program. All records related to the referral program’s promotions, rewards, advocates, and referrals are associated with the referral program. This object is available in API version 59.0 and later.
-   **[LoyaltyProgramMbrPromotion](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammbrpromotion.htm)**
    Represents a junction between an advocate and a promotion and is used to track whether an advocate has signed up for a promotion. This object is available in API version 49.0 and later.
-   **[LoyaltyProgramMember](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogrammember.htm)**
    Represents the details of a referral program advocate. This object is available in API version 59.0 and later.
-   **[LoyaltyProgramProcess](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocess.htm)**
    Represents information about a process that processes transaction journals for a referral promotion’s advocates and their referred party’s referral events. This object is available in API version 59.0 and later.
-   **[LoyaltyProgramProcessRule](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramprocessrule.htm)**
    Represents the details of a rule in a loyalty program process. This object is available in API version 59.0 and later.
-   **[LoyaltyProgramWidget](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltyprogramwidget.htm)**
    Represents information about a widget that advocates use to enroll in the referral program and refer their friends This object is available in API version 59.0 and later. This object is available only for B2C referral programs.
-   **[OutboundEngagementTmplView](atlas.en-us.referral_marketing.meta/referral_marketing/referral_api_objects_outboundengagementtmplview.htm)**
    Represents the details of an outbound engagement template. This object is available in API version 65.0 and later.
-   **[OutboundEngmtContentRsrc](atlas.en-us.referral_marketing.meta/referral_marketing/referral_api_objects_outboundengmtcontentrsrc.htm)**
    Represents the details of an outbound engagement. This object is available in API version 65.0 and later.
-   **[Promotion](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotion.htm)**
    Represents information about a referral promotion. This object is available in API version 59.0 and later.
-   **[PromotionMarketSegment](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotionmarketsegment.htm)**
    Represents a junction between a promotion and a Data Cloud segment. Associate a promotion with a segment when you want only the contacts associated with the segment to join as advocates of the referral promotion. This object is available in API version 59.0 and later. This object is available only for B2C referral programs.
-   **[PromotionStage](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotionstage.htm)**
    Represents a stage in a referral promotion. This object is available in API version 59.0 and later.
-   **[PromStageCommChannelTmpl](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promstagecommchanneltmpl.htm)**
    Represents a junction between promotion stage and communication channel template. This object is available in API version 63.0 and later. This object is available only for B2C referral programs.
-   **[PromotionStageEmailTemplate](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotionstageemailtemplate.htm)**
    Represents a junction between a promotion stage and an email template. When a referral promotion is created, an email template is associated with each stage of the promotion. You can customize the email template for each stage based on your company’s branding. This object is available in API version 59.0 and later. This object is available only for B2C referral programs.
-   **[PromotionStageEvent](atlas.en-us.referral_marketing.meta/referral_marketing/referral_api_objects_promotionstageevent.htm)**
    Represents the event details associated with creating or updating a promotion stage, including information about the related promotion, promotion code, and target audience. This object is available in API version 65.0 and later.
-   **[PromotionStageTemplate](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotionstagetemplate.htm)**
    Represents the reuseable configuration details of a promotion stage template. This object is available in API version 61.0 and later.
-   **[PromotionTemplate](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promotiontemplate.htm)**
    Represents the JSON configuration and details of a referral promotion template. This object is available in API version 61.0 and later.
-   **[PromTmplExtdRewardDef](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_promtmplextdrewarddef.htm)**
    Represents a junction between promotion template and extended reward definition. This object is available in API version 64.0 and later.
-   **[Referral](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_referral.htm)**
    Represents the details of a referral submitted by an advocate. This object is available in API version 59.0 and later.
-   **[TransactionJournal](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_transactionjournal.htm)**
    Represents the details of an advocate or their referred party's activity. This object is available in API version 49.0 and later.
-   **[Voucher](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucher.htm)**
    Represents the details of a voucher that’s issued to an advocate or to a referred friend. This object is available in API version 59.0 and later.
-   **[VoucherDefinition](atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_voucherdefinition.htm)**
    Represents information about the voucher template. A voucher definition is used to issue vouchers to advocates and their referred parties. This object is available in API version 59.0 and later.

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)

## Related Topics

- Objects for B2B and B2C Referral Programs (atlas.en-us.referral_marketing.meta/referral_marketing/referral_marketing_btob_btoc_objects.htm)
- CommunicationChannelTemplate (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_communicationchanneltemplate.htm)
- CommunicationChannelType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_communicationchanneltype.htm)
- ExtendedReward (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_extendedreward.htm)
- ExtendedRewardDefinition (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_extendedrewarddefinition.htm)
- InternalOrgUnitCommChannel (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_internalorgunitcommchannel.htm)
- JournalSubType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journalsubtype.htm)
- JournalType (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_journaltype.htm)
- LoyaltyPgmEngmtAttribute (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmengmtattribute.htm)
- LoyaltyPgmMbrAttributeVal (atlas.en-us.referral_marketing.meta/referral_marketing/sforce_api_objects_loyaltypgmmbrattributeval.htm)
