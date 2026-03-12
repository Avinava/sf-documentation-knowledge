---
title: "Define Data Loader Field Mappings"
domain: dataLoader
topic: define-data-loader-field-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.210Z
estimatedTokens: 285
keywords: [Define, Data, Loader, Mappings, insert, files, Loader's, Mapping, Dialog, window, associate, Salesforce, columns, CSV, file]
---

# Define Data Loader Field Mappings

> When you insert, delete, or update files, use Data Loader's Mapping Dialog window to
      associate Salesforce fields with the columns of your CSV file.

# Define Data Loader Field Mappings

When you insert, delete, or update files, use Data Loader's Mapping Dialog window to associate Salesforce fields with the columns of your CSV file.

1.  To automatically match fields with columns, click **Auto-Match Fields to Columns**. The Data Loader populates the list at the bottom of the window based on the similarity of field and column names. For a delete operation, automatic matching works only on the ID field.
2.  To manually match fields with columns, click and drag fields from the list of Salesforce fields at the top to the list of CSV column header names at the bottom. For example, if you are inserting new Account records where your CSV file contains the names of new accounts, click and drag the Name field to the right of the NAME column header field.
3.  Optionally, click **Save Mapping** to save this mapping for future use. Specify a name for the SDL mapping file. If you select an existing file, the export replaces its contents. To confirm the action, click **Yes**, or choose another file by clicking **No**.
4.  Click **OK** to use your mapping for the current operation.
