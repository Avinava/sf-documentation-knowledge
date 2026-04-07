---
title: "Product Configurator Additional Information"
domain: revenue-cloud
topic: product-configurator-additional-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:47.227Z
estimatedTokens: 511
keywords: [Product, Configurator, Additional, know, deployment, Revenue, Cloud, including, active, inactive, states, migration, considerations, Object-Specific]
---

> Get to know additional deployment information for Product Configurator in Revenue
    Cloud, including active or inactive states, object information, and migration
    considerations.

# Product Configurator Additional Information

Get to know additional deployment information for Product Configurator in Revenue Cloud, including active or inactive states, object information, and migration considerations.

## Object-Specific Information

| Object Name | Object API | Notes |
| --- | --- | --- |
| Product Configuration Rule | ProductConfiguration​Rule | ProductConfigurationRule has a Binary Large Object (BLOB) for the rule content. ConfigurationRuleDefinition contains a JSON with the rules details. The BLOB references product IDs, which can't be migrated as is. You must use the npm migration utility for the migration.ProductConfigurationRule has a status field. |
| Product Configuration Flow | ProductConfiguration​Flow | ProductConfigurationFlow has a status field. You don't require an API to set the status. |
| ExpressionSet​ConstraintObj | ExpressionSet​ConstraintObj | The ExpressionSet for Constraints has a status field. The ReferenceObjectId lookup field is polymorphic and references object IDs. |

## Other Information

-   You can't update rules in active status.
-   Product catalog management data must be migrated before the associations (ExpressionSetConstraintObj) are migrated and before the Business Rules Engine rules (ProductConfigurationRule) are migrated. When updating an Expression Set (Constraint Model), the target must be deactivated.
-   Cross-Module Synchronization—Constraint Modeling Language (CML) and Business Rules Engine rules both reference product catalog management data. This data must be migrated before the business rules or the constraint rules.
-   These components have dependencies on Industries common features.
    -   Business Rules Product Configuration Rules—Business Rules Engine and Context Service
    -   Constraint Builder Product Configuration Rules—Expression Set and Context Service
    -   Product Configurator—Flow

In a future version of this guide, we plan to add information for moving Constraint Modeling Language (CML) code and related expression sets.
