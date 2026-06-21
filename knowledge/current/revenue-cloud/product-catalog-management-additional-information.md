---
title: "Product Catalog Management Additional Information"
domain: revenue-cloud
topic: product-catalog-management-additional-information
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-06-21T00:39:53.644Z
estimatedTokens: 786
keywords: [Product, Catalog, Management, Additional, know, deployment, Revenue, Cloud, including, active, inactive, states, migration, considerations, Object-Specific]
---

> Get to know additional deployment information for Product Catalog Management in Revenue
    Cloud, including active or inactive states, object information, and migration
    considerations.

# Product Catalog Management Additional Information

Get to know additional deployment information for Product Catalog Management in Revenue Cloud, including active or inactive states, object information, and migration considerations.

## Object-Specific Information

| Object Name | Object API | Notes |
| --- | --- | --- |
| Product Qualification | ProductQualification | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Product Disqualification | ProductDisqualification | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Product Category Qualification | ProductCategoryQualification | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |
| Product Category Disqualification | ProductCategoryDisqual | Considerations for Migrating Decision TablesConsiderations for Migrating Expression SetsMigrate Context Definitions |

## Other Information

-   All product data (product, class, product attributes, attributes, picklist, catalog, categories, and so on) definitions must be active to appear in the sales channels.
    -   These definitions need not be deactivated in the target to propagate updates as part of an org-to-org deployment. Exceptions are qualification rules that use decision tables, expression sets, and context definitions. The definitions in the target org must be deactivated to promote changes.
-   Use the Full Index Rebuild to rebuild the entire search index, when enabling the feature for the first time, or changing the index settings. Use the Partial Index Rebuild to update recent changes to products and categories assignment. For more information about indexing products, see [Manage Your Product Index](https://help.salesforce.com/s/articleView?id=ind.product_catalog_index_products.htm&language=en_US "HTML (New Window)").
    -   If indexing is enabled in source but not enabled in the target, then while deploying the indexing flag (enable indexed product=true), the Full indexing must be run on the target org before the feature flag can be enabled.
-   Migrating qualification rules records requires refreshing Qualification Rules Decision Table definitions (Product and Category Qualification and Disqualification Decision Tables).
-   Migrating price book Entries requires Decision Table refresh for Product Discovery to show list price.
-   Core to Near Core Sync Processes—[Configure Product Catalog Management Cache](https://help.salesforce.com/s/articleView?id=ind.product_catalog_configure_prodoct_catalog_management_cache.htm&language=en_US "HTML (New Window)") in the new org to populate the product details cache, essential for large-scale implementations.
-   Cross-Module Synchronization—Synchronization of catalog date to Constraint Modeling Language (CML) to support constraint rules.
-   Incremental Changes and cohesive Sync (Recommended)—Depending on the deployment scenario, for example, new or changed product, new or changed price, new price book, new or changed rules, and so on.
