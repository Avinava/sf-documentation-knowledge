---
title: "Rebate Management Standard Objects"
domain: channel-revenue-management-dev-guide
topic: rebate-management-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.145Z
estimatedTokens: 2350
keywords: [Rebate, Management, Standard, Objects, data, model, manage, programs, payouts, transactions, optimize, incentives, offered, build, mutually]
---

# Rebate Management Standard Objects

> Rebate Management data model provides objects and fields to create and manage rebate
    programs and manage payouts and transactions. Use the objects to optimize the incentives offered
    to build a mutually profitable relationship with your partners.

# Rebate Management Standard Objects

Rebate Management data model provides objects and fields to create and manage rebate programs and manage payouts and transactions. Use the objects to optimize the incentives offered to build a mutually profitable relationship with your partners.

Rebate Management is available in Lightning Experience.

Available in: Enterprise, Unlimited, and Developer Editions.

-   **[AccountAccountRelation](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_accountaccountrelation.htm)**
    Represents a relationship between accounts, such as a relationship between a distributor account and a ship-to account. This object is available in API version 58.0 and later.
-   **[PartyRoleRelation](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partyrolerelation.htm)**
    Represents information about the type of relationship between the participants in a relationship. This object is available in API version 58.0 and later.
-   **[ProgramRebateType](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetype_rebate.htm)**
    Provide the rebate types that are part of this program. For example, volume rebate, revenue rebate, or rebate on every transaction. This object is available in API version 51.0 and later.
-   **[ProgramRebateTypeBenefit](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypebenefit.htm)**
    Defines the benefit matrix for the rebate type. For example, 5% or $200. This object is available in API version 51.0 and later.
-   **[PgmRebateTypBnftMapping](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_pgmrebatetypbnftmapping.htm)**
    If benefit table is extended, defines mapping of benefit field to the aggregate object fields. This object is available in API version 51.0 and later.
-   **[ProgramRebateTypeFilter](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypefilter.htm)**
    The definition that filters the transaction journals eligible for a rebate type. This filter definition is used in the rebates data processing engines. This object is available in API version 51.0 and later.
-   **[ProgramRebateTypePayout](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypepayout.htm)**
    The payout given to a member for a particular rebate type. For example, volume rebate payout in Jan'19 for ABC enterprises is $560, petrol engine payout for ABC in Jan'19 is $440. This object is available in API version 51.0 and later.
-   **[ProgramRebateTypPayoutSrc](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetyppayoutsrc.htm)**
    The rebate amount and the tier applied calculated for each row in the aggregate. There is a 1 to 1 relation between payout source and aggregate. This object is available in API version 51.0 and later.
-   **[ProgramRebateTypeProduct](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypeproduct.htm)**
    Represents a junction between a program rebate type and a product. This object is available in API version 53.0 and later.
-   **[ProgramRebateTypeReference](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypereference.htm)**
    Represents the association between the contract, opportunity, or any eligible standard or custom object, and rebate type. This object is available in API version 52.0 and later.
-   **[RebateClaim](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateclaim.htm)**
    Represents information about the claim submitted by the end customer or distributor for a ship and debit program. This object is available in API version 54.0 and later.
-   **[RebateClaimAdjustment](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateclaimadjustment.htm)**
    Represents information about the adjustments made to the rebate claim. This object is available in API version 58.0 and later.
-   **[RebateMemberAggregateItem](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebatememberaggregateitem.htm)**
    Represents a junction between a rebate member product aggregate and a transaction journal. This object is available in API version 54.0 and later.
-   **[RebateMemberClaimAggregate](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebatememberclaimaggregate.htm)**
    Represents information about the aggregated claim quantity and amount for a rebate member per product. This object is available in API version 58.0 and later.
-   **[RebateMemberProductAggregate](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebatememberproductaggregate.htm)**
    Stores the post calculation summary of journal transactions by member, period, and rebate type. For example, ABC enterprises for May 2021 against Vol Rebate on Radius category, did a total quantity of 150 units and transaction amount of $80,000. This object is available in API version 65.0 and later.
-   **[RebatePartnerSpecialPrcTrm](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebatepartnerspecialprctrm.htm)**
    Represents information about the special pricing term for a ship and debit program. This object is available in API version 58.0 and later.
-   **[RebatePayment](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebatepayment.htm)**
    Tracks if the payment has been generated for this member for back end processing. This object is available in API version 51.0 and later.
-   **[RebatePayoutAdjustment](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebatepayoutadjustment.htm)**
    Rebate amount adjustment that needs to be given manually. An adjustment is an amount added or subtracted to the calculated rebate amount. This object is available in API version 51.0 and later.
-   **[RebateProgram](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateprogram.htm)**
    The rebate program your organization runs with a single account, all accounts, or specific list of accounts. This object is available in API version 51.0 and later.
-   **[RebateProgramMember](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateprogrammember.htm)**
    The member of a rebate program. By virtue of being a member, the partner or business account is eligible to get rebate payments. For example, ABC Enterprises and HVAC Corp are members of GoldStone Volume Rebate Program. This object is available in API version 51.0 and later.
-   **[RebateProgramMemberPayout](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateprogrammemberpayout.htm)**
    The payout calculated for a member for the period. For example, $1000 Jan'21 payout for ABC enterprises. This object is available in API version 51.0 and later.
-   **[RebateProgramPayoutPeriod](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateprogrampayoutperiod.htm)**
    The period of the payout calculation. For example, 1st to 31st Jan, or 1st Dec to 14th Dec. This object is available in API version 51.0 and later.
-   **[RebatePtnrSpclPrcTrmBnft](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_rebateptnrspclprctrmbnft.htm)**
    Represents information about the benefit tier in a rebate partner special pricing term. This object is available in API version 58.0 and later.
-   **[ReceivedDocument](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_receiveddocument.htm)**
    Allows partners to upload .CSV document. This object is available in API version 51.0 and later.
-   **[TransactionJournal](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_transactionjournal.htm)**
    The transactions that need to be processed for a rebate program. For example, order line for 1000 units of $1200 for member ABC enterprises. This object is available in API version 51.0 and later.
-   **[UnitOfMeasureConversion](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_unitofmeasureconversion.htm)**
    Represents the information used to convert a measurement value from a unit of measure to another. This object is available in API version 52.0 and later.

## Related Topics

- AccountAccountRelation (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_accountaccountrelation.htm)
- PartyRoleRelation (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_partyrolerelation.htm)
- ProgramRebateType (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetype_rebate.htm)
- ProgramRebateTypeBenefit (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypebenefit.htm)
- PgmRebateTypBnftMapping (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_pgmrebatetypbnftmapping.htm)
- ProgramRebateTypeFilter (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypefilter.htm)
- ProgramRebateTypePayout (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypepayout.htm)
- ProgramRebateTypPayoutSrc (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetyppayoutsrc.htm)
- ProgramRebateTypeProduct (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypeproduct.htm)
- ProgramRebateTypeReference (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_objects_programrebatetypereference.htm)
