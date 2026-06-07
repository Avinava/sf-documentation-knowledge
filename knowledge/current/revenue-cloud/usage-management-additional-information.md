---
title: "Usage Management Additional Information"
domain: revenue-cloud
topic: usage-management-additional-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:41.585Z
estimatedTokens: 868
keywords: [Management, Additional, know, deployment, Revenue, Cloud, including, active, inactive, states, migration, considerations, Object-Specific]
---

> Get to know additional deployment information for Usage Management in Revenue Cloud,
    including active or inactive states, object information, and migration
    considerations.

# Usage Management Additional Information

Get to know additional deployment information for Usage Management in Revenue Cloud, including active or inactive states, object information, and migration considerations.

## Object-Specific Information

| Object Name | Object API | Notes |
| --- | --- | --- |
| Rate Card | RateCard | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Price Book Rate Card | PriceBookRateCard | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Product Usage Resource | ProductUsageResource | Effective end date can be extended in Active state. |
| Rate Card Entry | RateCardEntry | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context DefinitionsNo updates are allowed in Active or Inactive state. |
| Product Usage Grant | ProductUsageGrant | The Effective End Date can be extended in Active state. |
| Rate Adjustment By Tier | RateAdjustmentByTier | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Rate Adjustment By Attribute | RateAdjustmentByAttribute | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Usage Commitment Asset Related Object | UsageCmtAssetRelatedObj | The RelatedObjectId lookup field is polymorphic. |

## Other Information

-   For Selling (Revenue Cloud Advanced), perform these actions:
    -   Confirm that Rates, Grants, and Policies for usage products are set up correctly.
    -   Extend and sync the SalesTransaction context definition.
    -   Confirm that the pricing procedure is active and set up correctly in Revenue Settings.
    -   Refresh Decision Tables (DT) being referred in pricing procedures.
    -   Set up and activate the rating discovery procedure.
    -   Sync the RatingDiscovery context definition.
    -   Refresh all Decision Tables (DTs) being used in the rating discovery procedure.
-   For Consumption (Revenue Cloud Billing), perform these actions:
    -   Clone and set up the Orchestration Flow.
    -   Configure the Data Processing Engine (DPE) jobs.
    -   Set up and activate the rating procedure.
    -   Sync the Rate Management context definition.
    -   Refresh all Decision Tables (DTs) being used in the rating procedure.

-   These components have dependencies on Industries common Features:
    -   Rating or Discovery Procedures: Expression Set
    -   Rating, Discovery, or Selling Journey: Business Rules Engine and Context Service
    -   Rating or summary creation: Batch and Data Processing Engine
-   After migration, selling and consumption-related object records such as UnitOfMeasureClass, UsageResource, RateCardEntry, ProductUsageResource, ProductUsageGrant must be active before you use it.

For ProductUsageResource and ProductUsageGrant objects, review these considerations.

-   You can delete records in Draft or Inactive states. You can’t delete a record in Active state.
-   After you activate a record, you can extend end date only.
-   The applicable status transitions are Draft, Active, and Inactive.

You can edit a RateCardEntry object in Draft status only. You can’t edit this object after you've activated it. The applicable status transitions are:

-   Draft, Active, and Inactive
-   Inactive and Active
