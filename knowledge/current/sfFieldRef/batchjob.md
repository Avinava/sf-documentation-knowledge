---
title: "BatchJob"
domain: sfFieldRef
topic: batchjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.470Z
estimatedTokens: 593
keywords: [BatchJob, instance, batch, job, either, running, run, API, version, 51.0, later]
---

# BatchJob

> Represents an instance of a batch job that is either running and has been
      run. This object is available in API version 51.0 and later.

# BatchJob

Represents an instance of a batch job that is either running and has been run. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BatchJob in the Industries Shared Features Guide and Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalInformation | Additional Information | textarea |  | 100000 |  |  |
| BatchJobDefinitionId | Batch Job Definition ID | reference |  | 18 |  |  |
| BatchJobDefinitionName | Batch Job Definition Name | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| ErrorDescription | Error Description | string |  | 1333 |  |  |
| ExecutionStage | Execution Stage | picklist |  | 255 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| Id | Run ID | id |  | 18 |  |  |
| IsDebugOn | Is Debug On | boolean |  |  |  |  |
| IsDebugRecipeDeleted | Is Debug Recipe Deleted | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessGroup | Group | string |  | 80 |  |  |
| RetryCount | Retry Count | int | 9 |  |  |  |
| RuntimeParameter | Runtime Parameter | textarea |  | 100000 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalInputRecordCount | Total Input Record Count | int | 9 |  |  |  |
| TotalProcessedRecordCount | Total Processed Record Count | int | 9 |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UtilisedExecutionLimit | Utilised Execution Limit | string |  | 255 |  |  |
| UtilisedWritebackLimit | Utilised Writeback Limit | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
