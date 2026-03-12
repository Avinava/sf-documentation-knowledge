---
title: "Perform Mass Updates"
domain: dataLoader
topic: perform-mass-updates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.342Z
estimatedTokens: 162
keywords: [Perform, Mass, Updates, data, Loader, large, number, records, time]
---

# Perform Mass Updates

> Use data Loader to update a large number of records at one time.

# Perform Mass Updates

Use data Loader to update a large number of records at one time.

1.  Obtain your data by performing an export of the objects you wish to update, or by running a report. Make sure your report includes the record ID.
2.  As a backup measure, save an extra copy of the generated CSV file.
3.  Open your working file in a CSV editor such as Excel, and update your data.
4.  Launch Data Loader, then click Update. Note that matching is done according to record ID.
5.  After the operation, review your success and error log files.
6.  If you made a mistake, use the backup file to update the records to their previous values.
