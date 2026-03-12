---
title: "BatchJobPart"
domain: sfFieldRef
topic: batchjobpart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.493Z
estimatedTokens: 580
keywords: [BatchJobPart, part, batch, job, API, version, 51.0, later]
---

# BatchJobPart

> Represents one part of a batch job. This object is available in API
    version 51.0 and later.

# BatchJobPart

Represents one part of a batch job. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BatchJobPart in the Industries Shared Features Guide and Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BatchJobId | Run ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndTime | End Date | datetime |  |  |  |  |
| ErrorDescription | Error | string |  | 1333 |  |  |
| FailedRecFileBody | Failed Records File Body | base64 |  |  |  |  |
| FailedRecFileContentType | Failed Records File ContentType | picklist |  | 255 |  |  |
| FailedRecFileLength | Failed Records File Length | int | 9 |  |  |  |
| FailedRecFileName | Failed Records File Name | string |  | 40 |  |  |
| FailedRecordCount | Total Failure | int | 9 |  |  |  |
| FailedRowCount | Total Failure Row | long | 18 |  |  |  |
| Id | Batch Job Part ID | id |  | 18 |  |  |
| InputRecordCount | Input Record | int | 9 |  |  |  |
| InputRowCount | Input Row | long | 18 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OutputRecordCount | Output Record | int | 9 |  |  |  |
| OutputRowCount | Output Row | long | 18 |  |  |  |
| ParentBatchJobPartId | Batch Job Part ID | reference |  | 18 |  |  |
| RecordFileBody | Record File Body | base64 |  |  |  |  |
| RecordFileContentType | Record File ContentType | picklist |  | 255 |  |  |
| RecordFileLength | Record File Length | int | 9 |  |  |  |
| RecordFileName | Record File Name | string |  | 40 |  |  |
| RetryCount | Retry Count | int | 9 |  |  |  |
| StartTime | Start Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Node | picklist |  | 255 |  |  |
| UserReference | User Reference | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
