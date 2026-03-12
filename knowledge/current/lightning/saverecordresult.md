---
title: "SaveRecordResult"
domain: lightning
topic: saverecordresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.757Z
estimatedTokens: 352
keywords: [SaveRecordResult, result, Lightning, Data, Service, operation, persistent, change, record]
---

# SaveRecordResult

> Represents the result of a Lightning Data Service operation that makes a persistent
    change to record data.

# SaveRecordResult

Represents the result of a Lightning Data Service operation that makes a persistent change to record data.

## SaveRecordResult Object

Callback functions for the saveRecord and deleteRecord functions receive a SaveRecordResult object as their only argument.

| Attribute Name | Type | Description |
| --- | --- | --- |
| objectApiName | String | The object API name for the record. |
| entityLabel | String | The label for the name of the sObject of the record. |
| error | String | Error is one of the following.A localized message indicating what went wrong.An array of errors, including a localized message indicating what went wrong. It might also include further data to help handle the error, such as field- or page-level errors.error is undefined if the save state is SUCCESS or DRAFT. |
| recordId | String | The 18-character ID of the record affected. |
| state | String | The result state of the operation. Possible values are:SUCCESS—The operation completed on the server successfully.DRAFT—The server wasn’t reachable, so the operation was saved locally as a draft. The change is applied to the server when it’s reachable.INCOMPLETE—The server wasn’t reachable, and the device doesn’t support drafts. (Drafts are supported only in the Salesforce app.) Try this operation again later.ERROR—The operation couldn’t be completed. Check the error attribute for more information. |
