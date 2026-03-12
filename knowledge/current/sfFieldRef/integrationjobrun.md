---
title: "IntegrationJobRun"
domain: sfFieldRef
topic: integrationjobrun
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.658Z
estimatedTokens: 445
keywords: [IntegrationJobRun, statistical, asynchronous, integration, jobs, run, system]
---

# IntegrationJobRun

> Represents the statistical details of asynchronous integration jobs that are
         run on the system.

# IntegrationJobRun

Represents the statistical details of asynchronous integration jobs that are run on the system.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IntegrationJobRun in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangeEndRange | Change End Range | double |  |  | 18 | 0 |
| ChangeStartRange | Change Start Range | double |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| Id | Integration Job Run ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JobAdditionalInfo | Job Additional Info | string |  | 255 |  |  |
| JobExectionSummary | Job Exection Summary | textarea |  | 131072 |  |  |
| JobIdentifier | Job Identifier | string |  | 255 |  |  |
| JobName | Job Name | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Origin | Origin | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalRecordsFailed | Total Records Failed | double |  |  | 18 | 0 |
| TotalRecordsProcessed | Total Records Processed | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
