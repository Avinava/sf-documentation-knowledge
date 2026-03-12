---
title: "When to Use Data Loader"
domain: dataLoader
topic: when-to-use-data-loader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.359Z
estimatedTokens: 381
keywords: [Data, Loader, complements, web-based, import, wizards, accessible, Setup, menu, online, application, Wizard]
---

# When to Use Data Loader

> Data Loader complements the web-based import wizards that are accessible from the
        Setup menu in the online application.

# When to Use Data Loader

Data Loader complements the web-based import wizards that are accessible from the Setup menu in the online application.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


Refer to the following guidelines to determine which method best suits your business needs:

## Use Data Loader When:

-   Data loader supports CSV files with a maximum 150,000,000 records. If you must load more than 150 million records, we recommend you work with a Salesforce partner or visit the [AppExchange](https://appexchange.salesforce.com) for a suitable partner product.
-   You must load into an object that isn’t yet supported by Data Import Wizard.
-   Your data includes complex field mappings that you must load consistently on a regular basis.
-   You want to schedule regular data loads, such as nightly imports.
-   You want to export your data for backup purposes.

## Use Data Import Wizard When:

-   You’re loading less than 50,000 records.
-   The object you must import is supported by import wizards. To see what objects they support, from Setup, enter Data Import Wizard in the Quick Find box, then select **Import Wizard**.
-   You want to prevent duplicates by uploading records according to account name and site, contact email address, or lead email address.
-   Your target object has fewer than 50 fields.
-   Your data doesn’t include complex field mappings.
