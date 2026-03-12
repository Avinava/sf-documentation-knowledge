---
title: "Access External Data with Data Access Objects"
domain: dataLoader
topic: access-external-data-with-data-access-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.231Z
estimatedTokens: 306
keywords: [Access, External, Data, Objects, running, Loader, batch, mode, command, line, several, source, outside, Salesforce, implement]
---

# Access External Data with Data Access Objects

> When running Data Loader in batch mode from the command line, several data access
    objects are supported.  allows access to an external data source outside of Salesforce. A data
    access object can implement a read interface (DataReader), a write
    interface (DataWriter), or both.

# Access External Data with Data Access Objects

When running Data Loader in batch mode from the command line, several data access objects are supported. allows access to an external data source outside of Salesforce. A data access object can implement a read interface (DataReader), a write interface (DataWriter), or both.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

Here's a list of object names and descriptions.

-   csvRead—Allows the reading of a comma or tab-delimited file. There must be a header row at the top of the file that describes each column.
-   csvWrite—Allows writing to a comma-delimited file. A header row is added to the top of the file based on the column list provided by the caller.
-   databaseRead—Allows the reading of a database. Use database-conf.xml to configure database access.
-   databaseWrite—Allows writing to a database. Use database-conf.xml to configure database access.
