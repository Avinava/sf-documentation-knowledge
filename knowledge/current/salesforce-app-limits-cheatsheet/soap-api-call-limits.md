---
title: "SOAP API Call Limits"
domain: salesforce-app-limits-cheatsheet
topic: soap-api-call-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.195Z
estimatedTokens: 544
keywords: [SOAP, API, Call, Limits, SOQL, statement, selects, two, custom, long, text, batch, size, can’t, greater]
---

# SOAP API Call Limits

> If the SOQL statement selects two or
									more custom fields of type long text, the batch size can’t be
									greater than 200 records. This limit prevents large SOAP
									messages from being returned.

# SOAP API Call Limits

| API Name | API Limit | Limit Description |
| --- | --- | --- |
| create() | Maximum number of records created | Your client application can add up to 200 records in a single create() call. If a create request exceeds 200 records, then the entire operation fails. |
| describeSObjects() | Maximum number of objects returned | The describeSObjects() call is limited to a maximum of 100 objects returned. |
| getDeleted() | Limits for returned records | If a getDeleted() call returns more than 600,000 records, the exception EXCEEDED_ID_LIMIT is returned. |
| login() | Login request size limit | The login request size is limited to 10 KB. |
| merge() | Merge request limits | Up to 200 merge requests can be made in a single SOAP call.Up to three records can be merged in a single request, including the master record. This limit is the same as the limit enforced by the Salesforce user interface. To merge more than 3 records, do a successive merge.External ID fields can’t be used with merge().If you selected the option to retain the most recently updated data privacy record for merging leads and contacts, but the caller doesn’t have CRUD permission for the selected data privacy record, the merge process selects the data privacy record already associated with the master record. |
| update() | Maximum number of records updated | Your client application can change up to 200 records in a single update() call. If an update request exceeds 200 records, the entire operation fails. |
| query() and queryMore() | Batch size limits | The maximum batch size is 2,000 records, but this number is only a suggestion. To maximize performance, the requested batch size isn’t necessarily the actual batch size. Salesforce Web Service Connector (WSC) clients can set the batch size by calling setQueryOptions() on the connection object. C# client applications can change the batch size in the QueryOptions portion of the SOAP header before invoking the query() call.If the SOQL statement selects two or more custom fields of type long text, the batch size can’t be greater than 200 records. This limit prevents large SOAP messages from being returned. |
