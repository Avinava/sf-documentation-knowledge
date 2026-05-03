---
title: "Clause Migration Considerations"
domain: revenue-cloud
topic: clause-migration-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-05-03T00:28:14.951Z
estimatedTokens: 1452
keywords: [Clause, Migration, Considerations, prerequisite, Microsoft, template, Review, understand, how, structure, versions, relationships, exist, target, org, migrating, document, templates, Category, Configuration, First-Time, Iterative]
---

> Clause migration is a prerequisite for Microsoft 365 template migration. Review these
    considerations to understand how clause structure, versions, and relationships must exist in the
    target org before migrating document templates.

# Clause Migration Considerations

Clause migration is a prerequisite for Microsoft 365 template migration. Review these considerations to understand how clause structure, versions, and relationships must exist in the target org before migrating document templates.

Clause migration prepares the target org with all required clause data so that template migration can resolve clause references correctly. Clause records don’t retain source org record IDs during migration. Instead, template migration resolves references based on clause attributes and relationships that already exist in the target org.

Clause migration requires careful sequencing and coordination because clause records enforce strict validation rules around status, hierarchy, and versioning.

Microsoft 365 template migration requires all clause records, clause categories, and related clause sets to exist in the target org.

During template migration, clause references resolve in the target org by matching this combination of attributes. Make sure that the target org contains clauses with the exact attribute values referenced by the Microsoft 365 template.

-   ClauseSetName
-   ClauseName
-   ClauseVersion
-   ClauseLanguage

If a referenced clause is missing in the target org, template migration stops to prevent broken references. This alignment helps maintain template integrity and reduces the need for manual corrections after migration.

Migrate clause-related objects separately by using a data migration tool, such as Data Loader.

Migrate the three document clause objects in the required order.

-   Clause Category Configuration
-   Document Clause Set
-   Document Clause

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Avoid modifying clause data in the target org after migration to prevent mismatches between source and target.

Avoid modifying clause data in the source org after exporting clause data and before Microsoft 365 template migration to prevent reference mismatches.

## Clause Category Configuration

Clause Category Configuration is a setup object that you migrate by using metadata deployment tools, such as Package Manager, and Salesforce CLI. Migrate all clause categories referenced by your clause sets.

## Clause Set

Clause sets must be migrated before you can migrate clauses. This needs to be either created explicitly on the target org or migrated from the source org by using data migration utilities. Resolve these clause category configuration references to IDs on the target org in your export set before you migrate.

-   CategoryReferenceId—Replace with the mapped ID obtained from clause category migration
-   Category—This is a 15-character ID of the clause category. Update CategoryReferenceId by removing the last three characters.

For iterative migrations, use upsert operation to update existing clause sets and insert newly created clause sets since the previous migration.

## Clause

Migrate clause category configuration and clause sets before initiating clause migration. Resolve the clause set references (DocumentClauseSet) to the IDs on the target in your export set before migrating.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

All clauses are inserted only in Draft status, regardless of their source status. Run a subsequent migration that includes status mapping to update the clauses to the correct status. See [Clause Status Mapping During Migration](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_validation_migration_constraints.htm#clausestatusmapping).

## First-Time Migration

Use this approach when migrating clause data for the first time from the source org to the destination org for Microsoft 365 template migration. Clauses enforce validation rules that affect insert and update operations during migration.

-   Insert main clauses before alternate clauses.
-   Clauses are inserted in Draft status. Run a subsequent migration to update the clause status. See [Clause Status Mapping During Migration](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_validation_migration_constraints.htm#clausestatusmapping) for details on how clause statuses are applied and updated.

## Iterative Migration

Use iterative migration when clause data exists in the target org and you must migrate updates or newly created clauses from the source org. Track the timestamp of the last successful export and migrate only records that were created or updated after that timestamp. This approach avoids validation failures when attempting to update unchanged clauses, especially clauses in Archived status.

-   Migrate clause records that were modified after the last export timestamp and created on or before the last export timestamp. This step migrates only updated records and preserves the correct status for existing clauses before introducing new draft versions.
-   Migrate main clause records that were created after the last export timestamp. Clauses are inserted in Draft status. Run a subsequent migration to update the clause status. See [Clause Status Mapping During Migration](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_validation_migration_constraints.htm#clausestatusmapping) for details on how clause statuses are applied and updated.
-   Migrate alternate clause records that were created after the last export timestamp. Clauses are inserted in Draft status. Run a subsequent migration to update the status.

## Related Topics

- Clause Status Mapping During
            Migration (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/deployment_contracts_clause_validation_migration_constraints.htm)
