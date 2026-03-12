---
title: "Best Practices with Any Data Loader"
domain: api
topic: best-practices-with-any-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:56.681Z
estimatedTokens: 592
keywords: [Best, Practices, Any, Data, Loader, may, want, migrate, whole, data—choose, objects, wish, contact, account, particular]
---

# Best Practices with Any Data Loader

> You may not want or need to migrate a whole set of
data—choose which objects you wish to migrate. For example, you may want to migrate only the
contact information from each account, or only migrate account information from a particular
division.

# Best Practices with Any Data Loader

While this section presents a best practice process using the Lightning Platform Data Loader, the general principles apply to any client data loader:

1.  Identify which data you will migrate.

    You may not want or need to migrate a whole set of data—choose which objects you wish to migrate. For example, you may want to migrate only the contact information from each account, or only migrate account information from a particular division.

2.  Create templates for the data.

    Create one template for each object, for example in an Excel worksheet.

    Identify the required fields for each object. In addition to the required fields for each standard object, there may be additional required fields such as those needed to follow business rules, or legacy ID fields. Use this guide or see the page layout definitions in the Salesforce user interface to find out which fields are required on standard objects.

    You may wish to highlight the required fields in red for easier review of the data after you populate the templates.

    You should also identify any ordering dependencies. Objects may have mandatory relationships, for example all accounts have an owner, and all opportunities are associated with an account. The dependencies in these relationships dictate the order of data migration. For Salesforce data, for example, you should load users first, then accounts, then opportunities.

    To identify dependencies, review the related lists and lookup fields in the page layout of the given object, and IDs (foreign keys) in the database.

3.  Populate the templates.

    Clean your data before populating the template, and review the data in the templates.

4.  Migrate the data.

    Create custom fields to store legacy ID information. Optionally, give the custom field the External ID attribute so it will be indexed. This will help maintain relationships, and help you build custom reports for validation.

    Load one record, check the results, then load all records.

5.  Validate the data.

    Use all of these techniques to validate your migration:

    -   Create custom reports that validate record counts and provide an overall snapshot of migration.
    -   Spot check the data.
    -   Review exception reports to see what data was not migrated.
6.  Re-migrate or update data as needed.
