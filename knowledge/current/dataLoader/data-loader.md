---
title: "Data Loader"
domain: dataLoader
topic: data-loader
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.200Z
estimatedTokens: 436
keywords: [Data, Loader, client, application, bulk, import, export, insert, Salesforce, records, importing, reads, extracts, loads, comma-separated]
---

# Data Loader

> Data Loader is a client application for the bulk import or export of data. Use it to
   insert, update, delete, or export Salesforce records. When importing data, Data Loader reads,
   extracts, and loads data from comma-separated values (CSV) files or from a database connection.
   When exporting, Data Loader outputs CSV files.

# Data Loader

Data Loader is a client application for the bulk import or export of data. Use it to insert, update, delete, or export Salesforce records. When importing data, Data Loader reads, extracts, and loads data from comma-separated values (CSV) files or from a database connection. When exporting, Data Loader outputs CSV files.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=dataLoader)

#### Important

[Download](https://developer.salesforce.com/tools/data-loader) the latest version of Data Loader. Salesforce doesn't support older versions.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


Data Loader can be used on either MacOS or Windows, and offers these key features.

-   An easy-to-use wizard interface for interactive use
-   An alternative command-line interface for automated batch operations (Windows only)
-   Support for large files with up to 150 million records when used with Bulk API 2.0
-   Drag-and-drop field mapping
-   Support for all objects, including custom objects
-   Process data in both Salesforce and Database.com
-   Detailed success and error log files in CSV format
-   A built-in CSV file viewer

You can use Data Loader in two different ways:

-   User interface—Specify configuration parameters and CSV files used for import and export, and define field mappings that map field names in your import file to field names in Salesforce.
-   Command line (Windows only)—Specify the configuration, data sources, mappings, and actions in files. The command line enables you to set up Data Loader for automated processing.
