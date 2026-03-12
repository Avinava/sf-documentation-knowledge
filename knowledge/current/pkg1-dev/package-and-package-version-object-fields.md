---
title: "Package and Package Version Object Fields"
domain: pkg1-dev
topic: package-and-package-version-object-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.428Z
estimatedTokens: 527
keywords: [Package, Version, License, Management, App, LMA, includes, custom, objects, display, 1GP, 2GP, you’ve, listed, AppExchange]
---

# Package and Package Version Object Fields

> The License Management App (LMA) includes a Package custom object and a Package Version
        custom object. These objects display details about each 1GP or 2GP package and package
        version you’ve listed on AppExchange.

# Package and Package Version Object Fields

The License Management App (LMA) includes a Package custom object and a Package Version custom object. These objects display details about each 1GP or 2GP package and package version you’ve listed on AppExchange.

To view details about a package record, from the LMA, select the **Packages** tab, and then select the package name. You can view package versions in the Package Version related list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

The LMA creates the package records, which contain critical information for tracking your licenses and packages. Treat these fields as read-only and ensure that your object permissions protect package records.

| Package Custom Object Fields | Description |
| --- | --- |
| Developer Name | The name of the org that owns the package. For 1GP, the org name is the packaging org. For 2GP, it’s the Dev Hub org. |
| Developer Org ID | The 18-character ID of the org that owns the package. For 1GP, the org ID is the packaging org ID. For 2GP, it’s the Dev Hub org ID. |
| Last License Refresh | The date when the License Refresh tool was last run. |
| Latest Version | The most recent package version you’ve released. |
| Lead Manager | The owner of the lead records that the LMA creates when a customer installs your package. |
| Next Available Refresh | The date when the License Refresh tool can be run again. |
| Owner | The LMA owns all package records. |
| Package ID | The 18-character ID that identifies the package. This ID starts with 033. |
| Package Name | The name you specified when you created the package. |

| Package Version Object Fields | Description |
| --- | --- |
| Package | The package name and links to the package record’s detail page. |
| Package Version Name | The name you specified when you created the package version. |
| Release Date | The date you created this package version. |
| Version Number | The version number in major.minor.patch format. For example, 3.1.0. |
| Version ID | The 18-character ID of this package version. |
