---
title: "Data Loader Behavior with Bulk API Enabled"
domain: dataLoader
topic: data-loader-behavior-with-bulk-api-enabled
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.338Z
estimatedTokens: 335
keywords: [Data, Loader, Behavior, Bulk, API, Enabled, Enabling, lets, load, large, number, records, faster, SOAP-based, However]
---

# Data Loader Behavior with Bulk API Enabled

> Enabling the Bulk API in Data Loader lets you load or delete a large number of records
  faster than using the default SOAP-based API. However, there are some differences in behavior in
  Data Loader when you enable the Bulk API. One important difference is that it allows you to
  execute a hard delete if you have the permission and license.

# Data Loader Behavior with Bulk API Enabled

Enabling the Bulk API in Data Loader lets you load or delete a large number of records faster than using the default SOAP-based API. However, there are some differences in behavior in Data Loader when you enable the Bulk API. One important difference is that it allows you to execute a hard delete if you have the permission and license.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


The following settings are not available on the **Settings** | **Settings** page in Data Loader when the Use Bulk API option is selected:

| Setting | Description |
| --- | --- |
| Insert null values | This option enables Data Loader to insert blank mapped values as null values during data operations when the Bulk API is disabled. Empty field values are ignored when you update records using the Bulk API. To set a field value to null when the Use Bulk API option is selected, use a field value of #N/A. |
| Allow field truncation | This option directs Data Loader to truncate data for certain field types when the Bulk API is disabled. A load operation fails for the row if a value is specified that is too large for the field when the Use Bulk API option is selected. |
