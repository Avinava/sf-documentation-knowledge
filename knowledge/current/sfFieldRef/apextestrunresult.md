---
title: "ApexTestRunResult"
domain: sfFieldRef
topic: apextestrunresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.254Z
estimatedTokens: 526
keywords: [ApexTestRunResult, summary, test, were, run, particular, Apex, job, API, version, 37.0, later]
---

# ApexTestRunResult

> Contains summary information about all the test methods that were run
   in a particular Apex job. This object is available in API version 37.0 and
  later.

# ApexTestRunResult

Contains summary information about all the test methods that were run in a particular Apex job. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexTestRunResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestrunresult.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AsyncApexJobId | Apex Job ID | reference |  | 18 |  |  |
| ClassesCompleted | Number of classes completed in this test run | int | 9 |  |  |  |
| ClassesEnqueued | Number of classes enqueued in this test run | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndTime | End time of the test run | datetime |  |  |  |  |
| Id | Apex Test Run Result ID | id |  | 18 |  |  |
| IsAllTests | allTests | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JobName | Name of the job | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MethodsCompleted | Number of methods completed in this test run | int | 9 |  |  |  |
| MethodsEnqueued | Number of methods enqueued in this test run | int | 9 |  |  |  |
| MethodsFailed | Number of methods failed in this test run | int | 9 |  |  |  |
| Source | Client that kicked off the test run | string |  | 255 |  |  |
| StartTime | Start time of the test run | datetime |  |  |  |  |
| Status | Status of the test run | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TestSetupTime | Time(ms) spent running test setup | int | 9 |  |  |  |
| TestTime | Time(ms) actually spent running tests | int | 9 |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
