---
title: "ConnectApi.ComplianceBulkUpdateResponse"
domain: omnistudio
topic: connectapicompliancebulkupdateresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.736Z
estimatedTokens: 132
keywords: [ConnectApi.ComplianceBulkUpdateResponse, Output, representation, asynchronously, bulk, status, clause, version, records]
---

# ConnectApi.ComplianceBulkUpdateResponse

> Output representation of the details to asynchronously bulk update the status of the
  clause version records.

# ConnectApi.ComplianceBulkUpdateResponse

Output representation of the details to asynchronously bulk update the status of the clause version records.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| message | String | Error message when a bulk update operation fails. | 65.0 |
| status | ConnectApi.BulkUpdate​StatusEnum | Status of the async bulk update operation.Valid values are:Error—Indicates that the request failed.Processing—Indicates that the async job is submitted. | 65.0 |
