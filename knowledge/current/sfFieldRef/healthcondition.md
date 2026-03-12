---
title: "HealthCondition"
domain: sfFieldRef
topic: healthcondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.066Z
estimatedTokens: 407
keywords: [HealthCondition, clinical, condition, problem, any, clinically, relevant, occurrence, matter, concern, API, version, 51.0, later]
---

# HealthCondition

> Represents a clinical condition, problem, or any clinically relevant occurrence
      that is a matter of concern. This object is available in API version 51.0 and later.

# HealthCondition

Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see HealthCondition in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConditionCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| ConditionStatus | Condition Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DiagnosticStatusCategory | Diagnostic Status Category | picklist |  | 255 |  |  |
| Id | Health Condition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| ProblemDescription | Problem Description | textarea |  | 32000 |  |  |
| RelatedHealthConditionId | Health Condition ID | reference |  | 18 |  |  |
| RelatedHealthConditionType | Related Health Condition Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
