---
title: "Fundraising Standard Objects"
domain: nonprofit-cloud
topic: fundraising-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.746Z
estimatedTokens: 2409
keywords: [Fundraising, Standard, Objects, data, model, manage, gifts, donors, nonprofit, education, organization]
---

# Fundraising Standard Objects

> Fundraising data model provides objects and fields to manage gifts and donors for your
    nonprofit or education organization.

# Fundraising Standard Objects

Fundraising data model provides objects and fields to manage gifts and donors for your nonprofit or education organization.

| Available in: Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions. |


-   **[DocGenerationQueryResult](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_docgenerationqueryresult.htm)**
    Represents information, including a report, template, and process lookup, for a document generation job. This object is available in API version 61.0 and later.
-   **[DonorGiftConcept](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_donorgiftconcept.htm)**
    The initial idea or proposal for a gift, including the donor’s intent and preliminary purpose. This object is available in API version 64.0 and later.
-   **[DonorGiftConceptOpportunity](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_donorgiftconceptopportunity.htm)**
    The junction between a Donor Gift Concept and an Opportunity. This object is available in API version 66.0 and later.
-   **[DonorGiftSummary](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_donorgiftsummary.htm)**
    Represents gift summaries for accounts and contacts. This object is available in API version 59.0 and later.
-   **[GiftActuarialEntry](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftactuarialentry.htm)**
    Represents the foundational data for calculating the future value of a planned gift, including life expectancy and discount rates. This object is available in API version 65.0 and later.
-   **[GiftStewardship](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftstewardship.htm)**
    Represents stewardship of a gift by a contact or an organization that isn't a donor. This object is available in API version 65.0 and later.
-   **[GiftStewardshipActivity](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftstewardshipactivity.htm)**
    Represents an activity carried out as part of gift stewardship. This object is available in API version 65.0 and later.
-   **[GiftAgreement](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftagreement.htm)**
    The agreement to accept a gift. This object is available in API version 64.0 and later.
-   **[GiftBatch](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftbatch.htm)**
    Represents the details and status of the batch of gifts. This object is available in API version 59.0 and later.
-   **[GiftCommitment](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftcommitment.htm)**
    Represents the commitment made by a donor. This object is available in API version 59.0 and later.
-   **[GiftCmtChangeAttrLog](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftcmtchangeattrlog.htm)**
    Represents the history of changes to a Gift Commitment over time with attribution to the source campaign or source code attributed to that change. This object is available in API version 60.0 and later.
-   **[GiftCommitmentSchedule](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftcommitmentschedule.htm)**
    Represents the schedule for fulfilling the commitment. This object is available in API version 59.0 and later.
-   **[GiftDefaultDesignation](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftdefaultdesignation.htm)**
    Represents the default designation for gifts that originate from an opportunity, campaign, or commitment. This object is available in API version 59.0 and later.
-   **[GiftDefaultSoftCredit](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftdefaultsoftcredit.htm)**
    Represents the default allocation for soft credits on gift commitment transactions that are created by a recurrence engine and credited to constituents who influenced the commitment. This object is available in API version 62.0 and later.
-   **[GiftDesignation](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftdesignation.htm)**
    Represents a designation that can be assigned to a gift transaction. This object is available in API version 59.0 and later.
-   **[GiftEntry](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftentry.htm)**
    Represents gifts created individually or in a batch before they're processed and logged in their target records. After processing, these records serve as an audit trail for gift transactions. This object is available in API version 59.0 and later.
-   **[GiftRefund](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftrefund.htm)**
    Represents a refund of a gift. This object is available in API version 59.0 and later.
-   **[GiftSoftCredit](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftsoftcredit.htm)**
    Represents the soft credit attributed to a person or organization for the gift transaction. This object is available in API version 59.0 and later.
-   **[GiftTransaction](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_gifttransaction.htm)**
    Represents a completed transaction from a gift. This object is available in API version 59.0 and later.
-   **[GiftTransactionDesignation](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_gifttransactiondesignation.htm)**
    Represents a junction between a gift transaction and a gift designation. This object is available in API version 59.0 and later.
-   **[GiftTribute](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_gifttribute.htm)**
    Represents the details and status of the gift tribute. This object is available in API version 59.0 and later.
-   **[GiftValueForecast](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftvalueforecast.htm)**
    The past, current, and projected monetary value of a gift. This object is available in API version 64.0 and later.
-   **[OutreachSourceCode](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_outreachsourcecode.htm)**
    Represents information about a source code that's associated with an outreach campaign. This object is available in API version 59.0 and later.
-   **[OutreachSummary](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_outreachsummary.htm)**
    Represents a summary of results of the outreach campaign. This object is available in API version 59.0 and later.
-   **[PartyCategory](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_partycategory.htm)**
    The criteria for categorizing contacts and accounts based on specific classification information for a specified time period. This object is available in API version 64.0 and later.
-   **[PartyPhilanthropicAssessment](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_partyphilanthropicassessment.htm)**
    Represents a formalized assessment of wealth when a rating takes place, such as a third-party wealth assessment, a property valuation, a financial asset assessment, or an internal assessment. This object is available in API version 63.0 and later.
-   **[PartyPhilanthropicIndicator](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_partyphilanthropicindicator.htm)**
    Represents an unconfirmed or soft indication that highlights a person's wealth or growth potential. This object is available in API version 63.0 and later.
-   **[PartyPhilanthropicMilestone](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_partyphilanthropicmilestone.htm)**
    Represents philanthropic activities and financial status for a period of time. This object is available in API version 63.0 and later.
-   **[PartyPhilanthropicOccurrence](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_partyphilanthropicoccurrence.htm)**
    xxx This object is available in API version XX.0 and later.
-   **[PartyPhilanthropicRsrchPrfl](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_partyphilanthropicrsrchprfl.htm)**
    Captures information associated with a contact or an organization in a many-to-one relationship. Serves as a pivot point for research on the person or organization. This object is available in API version 64.0 and later.
-   **[PaymentInstrument](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_paymentinstrument.htm)**
    Represents the details related to the Payment Instrument used to complete the transaction. This object is available in API version 60.0 and later.
-   **[PlannedGift](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_plannedgift.htm)**
    A complex gift such as an annuity, bequest, or trust. This object is available in API version 64.0 and later.
-   **[PlannedGiftAnnuityRate](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_plannedgiftannuityrate.htm)**
    The rate used to calculate payments for a charitable gift annuity. This object is available in API version 64.0 and later.
-   **[PlannedGiftPerformance](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_plannedgiftperformance.htm)**
    The performance of a planned gift over time, including returns, expenses, and net value. This object is available in API version 64.0 and later.

## Related Topics

- DocGenerationQueryResult (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_docgenerationqueryresult.htm)
- DonorGiftConcept (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_donorgiftconcept.htm)
- DonorGiftConceptOpportunity (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_donorgiftconceptopportunity.htm)
- DonorGiftSummary (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_donorgiftsummary.htm)
- GiftActuarialEntry (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftactuarialentry.htm)
- GiftStewardship (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftstewardship.htm)
- GiftStewardshipActivity (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftstewardshipactivity.htm)
- GiftAgreement (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/fundraising_api_objects_giftagreement.htm)
- GiftBatch (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftbatch.htm)
- GiftCommitment (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_fundraising_api_objects_giftcommitment.htm)
