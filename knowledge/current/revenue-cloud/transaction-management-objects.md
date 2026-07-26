---
title: "Transaction Management Objects"
domain: revenue-cloud
topic: transaction-management-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-07-26T01:59:44.895Z
estimatedTokens: 303
keywords: [Transaction, Management, deployment, sequence, API, Revenue]
---

> This table provides the deployment sequence, object types, and API names for
    Transaction Management objects in Revenue Management.

# Transaction Management Objects

This table provides the deployment sequence, object types, and API names for Transaction Management objects in Revenue Management.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Metadata | App Usage Assignment | AppUsageAssignment | 1 | Order, Quote, Contract, Asset |
| Metadata | Sales Transaction Type | SalesTransactionType | 1 | PricingProcedure |
| Metadata | Quote Template Rich Text Data | QuoteTemplateRichTextData | 1 | None |
| Metadata | Transaction Processing Type | TransactionProcessingType | 1 | None |

#### See Also

-   [*Revenue Cloud Developer Guide*: Transaction Management Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.262.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/quote_and_order_capture_standard_objects.htm "Revenue Cloud Developer Guide: Transaction Management Standard
    Objects - HTML (New Window)")

-   [Explore the Revenue Cloud Data Model](https://help.salesforce.com/s/articleView?id=ind.data_model_overview.htm&language=en_US "Explore the Revenue Cloud Data Model - HTML (New Window)")
