---
title: "ApexTestResult"
domain: sfFieldRef
topic: apextestresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.236Z
estimatedTokens: 393
namespace: TestNamespace
keywords: [ApexTestResult, result, Apex, test, execution, API, version, 23.0, later]
---

# ApexTestResult

> Represents the result of an Apex test method execution. This
  object is available in API version 23.0 and later.

**Namespace:** `TestNamespace`

# ApexTestResult

Represents the result of an Apex test method execution. This object is available in API version 23.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexTestResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestresult.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| ApexLogId | Log ID | reference |  | 18 |  |  |
| ApexTestRunResultId | Apex Test Run Result ID | reference |  | 18 |  |  |
| AsyncApexJobId | Apex Job ID | reference |  | 18 |  |  |
| Id | Apex Test Result ID | id |  | 18 |  |  |
| IsTestSetup | Is Test Setup | boolean |  |  |  |  |
| Message | Error Message | string |  | 4000 |  |  |
| MethodName | Method Name | string |  | 255 |  |  |
| Outcome | Pass/Fail | picklist |  | 40 |  |  |
| QueueItemId | Apex Test Queue Item ID | reference |  | 18 |  |  |
| RunTime | Run Time | int | 9 |  |  |  |
| StackTrace | Stack Trace | string |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TestCategory | Test Category | string |  | 81 |  |  |
| TestName | Dynamic test class name | string |  | 255 |  |  |
| TestNamespace | Dynamic test class namespace | string |  | 81 |  |  |
| TestTimestamp | Time Started | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
