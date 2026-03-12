---
title: "Perform Mass Deletes"
domain: dataLoader
topic: perform-mass-deletes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.340Z
estimatedTokens: 175
keywords: [Perform, Mass, Deletes, Data, Loader, large, number, records, time, total, depends, API, you've, configured]
---

# Perform Mass Deletes

> Use Data Loader to delete a large number of records at one time. The total number
                of records you can delete depends on which API you've configured Data Loader to
                use.

# Perform Mass Deletes

Use Data Loader to delete a large number of records at one time. The total number of records you can delete depends on which API you've configured Data Loader to use.


| User Permissions Needed |
| --- |
| To mass delete records: | Modify All Data |

1.  As a backup measure, export the records you wish to delete, being sure to select all fields. Save an extra copy of the generated CSV file.
2.  Next, export the records you wish to delete, this time using only the record ID as the desired criterion.
3.  Launch the Data Loader and follow the delete or hard delete wizard. Map only the record ID column.
4.  After the operation, review your success and error log files.
