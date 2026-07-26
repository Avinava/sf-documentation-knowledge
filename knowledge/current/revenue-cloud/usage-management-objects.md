---
title: "Usage Management Objects"
domain: revenue-cloud
topic: usage-management-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-07-26T01:59:44.945Z
estimatedTokens: 671
keywords: [Management, deployment, sequence, API, lookup, Revenue]
---

> This table provides the deployment sequence, object types, API names, and lookup fields
    for Usage Management objects in Revenue Management.

# Usage Management Objects

This table provides the deployment sequence, object types, API names, and lookup fields for Usage Management objects in Revenue Management.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Configuration | Usage Aggregation Policy | UsageResourceBillingPolicy | 1 | None |
| Configuration | Usage Grant Rollover Policy | UsageGrantRolloverPolicy | 2 | None |
| Configuration | Usage Grant Renewal Policy | UsageGrantRenewalPolicy | 3 | None |
| Configuration | Usage Overage Policy | UsageOveragePolicy | 4 | None |
| Configuration | Usage Commitment Policy | UsageCommitmentPolicy | 5 | None |
| Configuration | Rate Card | RateCard | 6 | None |
| Configuration | Usage Resource | UsageResource | 7 | UnitOfMeasure, UnitOfMeasureClass, Product2, UsageResourceBillingPolicy |
| Configuration | Price Book Rate Card | PriceBookRateCard | 8 | PriceBook2, RateCard |
| Configuration | Rating Frequency Policy | RatingFrequencyPolicy | 9 | Product2, UsageResource |
| Configuration | Product Usage Resource | ProductUsageResource | 10 | Product2, UsageResource |
| Configuration | Rate Card Entry | RateCardEntry | 11 | RateCard, UnitOfMeasure, UnitOfMeasureClass, UsageResource, Product2, ProductSellingModel |
| Configuration | Usage Resource Policy | UsageResourcePolicy | 12 | UsageResource, UsageOveragePolicy, RatingFrequencyPolicy, UsageResourceBillingPolicy, UsageCommitmentPolicy |
| Configuration | Product Usage Grant | ProductUsageGrant | 13 | ProductUsageResource, UnitOfMeasure, UnitOfMeasureClass, UsageGrantRolloverPolicy, UsageGrantRenewalPolicy, Product2, ProductSellingModel |
| Configuration | Product Usage Resource Policy | ProductUsageResourcePolicy | 14 | ProductUsageResource, UsageOveragePolicy, RatingFrequencyPolicy, UsageResourceBillingPolicy, UsageCommitmentPolicy, ProductSellingModel |
| Configuration | Rate Adjustment By Tier | RateAdjustmentByTier | 15 | RateCardEntry |
| Configuration | Rate Adjustment By Attribute | RateAdjustmentByAttribute | 16 | RateCardEntry, AttributeBasedAdjRule |

#### See Also

-   [*Revenue Cloud Developer Guide*: Usage Management Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.262.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/usage_management_std_objects_parent.htm "Revenue Cloud Developer Guide: Usage Management Standard Objects - HTML (New Window)")

-   [Explore the Revenue Cloud Data Model](https://help.salesforce.com/s/articleView?id=ind.data_model_overview.htm&language=en_US "Explore the Revenue Cloud Data Model - HTML (New Window)")
