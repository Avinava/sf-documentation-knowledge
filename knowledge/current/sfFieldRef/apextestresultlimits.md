---
title: "ApexTestResultLimits"
domain: sfFieldRef
topic: apextestresultlimits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.244Z
estimatedTokens: 519
keywords: [ApexTestResultLimits, Captures, Apex, test, limits, particular, execution, instance, associated, ApexTestResult, record, API, version, 37.0, later]
---

# ApexTestResultLimits

> Captures the Apex test limits used for a particular test method
   execution. An instance of this object is associated with each ApexTestResult record. This
  object is available in API version 37.0 and later.

# ApexTestResultLimits

Captures the Apex test limits used for a particular test method execution. An instance of this object is associated with each ApexTestResult record. This object is available in API version 37.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ApexTestResultLimits](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_apextestresultlimits.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexTestResultId | Apex Test Result ID | reference |  | 18 |  |  |
| AsyncCalls | Total number of async calls | int | 9 |  |  |  |
| Callouts | Total number of callouts | int | 9 |  |  |  |
| Cpu | Maximum CPU time on the Salesforce servers | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Dml | Total number of DML statements issued | int | 9 |  |  |  |
| DmlRows | Total number of records processed as a result of DML statements | int | 9 |  |  |  |
| Email | Total number of sendEmail methods allowed | int | 9 |  |  |  |
| Id | Apex Test Result Limit ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LimitContext | Limit Context | string |  | 255 |  |  |
| LimitExceptions | Limit Exceptions | string |  | 255 |  |  |
| MobilePush | Maximum number of push notification method calls allowed per Apex transaction | int | 9 |  |  |  |
| QueryRows | Total number of records retrieved by SOQL queries | int | 9 |  |  |  |
| Soql | Total number of SOQL queries issued | int | 9 |  |  |  |
| Sosl | Total number of SOSL queries issued | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
