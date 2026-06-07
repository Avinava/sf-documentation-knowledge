---
title: "Salesforce Contracts Additional Information"
domain: revenue-cloud
topic: salesforce-contracts-additional-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:41.199Z
estimatedTokens: 412
keywords: [Salesforce, Contracts, Additional, know, deployment, Revenue, Cloud, including, active, inactive, states, migration, considerations]
---

> Get to know additional deployment information for Salesforce Contracts in Revenue
    Cloud, including active or inactive states, and migration considerations.

# Salesforce Contracts Additional Information

Get to know additional deployment information for Salesforce Contracts in Revenue Cloud, including active or inactive states, and migration considerations.

Document clauses can be in different states, such as Draft, In Approval, Active, and Archived. Keep these considerations in mind regarding the clause statuses.

-   A clause is created in Draft status.
-   During the import process, the clause must be in Draft status. You can update the status after you complete the import process.
-   An archived clause can’t be updated.
-   An active clause can’t be updated, but it can change to Draft status only if it’s not used.
-   An active clause must be moved to Draft status before you update it to Active status.

-   **[Clause Migration Considerations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_migration.htm)**
    Clause migration is a prerequisite for Microsoft 365 template migration. Review these considerations to understand how clause structure, versions, and relationships must exist in the target org before migrating document templates.
-   **[Clause Validations and Migration Constraints](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_validation_migration_constraints.htm)**
    Validation rules, data model constraints, and known migration behaviors that affect clause records during migration. Review this reference to understand sequencing, status handling, and dependency requirements that can impact migration success.

## Related Topics

- Clause Migration Considerations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_migration.htm)
- Clause Validations and Migration Constraints (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_validation_migration_constraints.htm)
