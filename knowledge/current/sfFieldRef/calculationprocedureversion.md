---
title: "CalculationProcedureVersion"
domain: sfFieldRef
topic: calculationprocedureversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.081Z
estimatedTokens: 488
namespace: Namespace
keywords: [CalculationProcedureVersion, version, Expression, label, API, 53.0, later]
---

# CalculationProcedureVersion

> Defines a version of an Expression Set. The label for this object is
         Expression Set Version. This object is available in API version 53.0 and later.

**Namespace:** `Namespace`

# CalculationProcedureVersion

Defines a version of an Expression Set. The label for this object is Expression Set Version. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalculationProcedureVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calculationprocedureversion.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculationProcedureId | Calculation Procedure ID | reference |  | 18 |  |  |
| Constants | Constants | textarea |  | 131072 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| Id | Calculation Procedure Version ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Enabled | boolean |  |  |  |  |
| IsLoopingEnabled | Looping Enabled | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastSimulatedVariablesInput | Last Simulated Variables Input | textarea |  | 131072 |  |  |
| LoopEnd | Loop End | textarea |  | 255 |  |  |
| LoopIncrement | Loop Increment | textarea |  | 255 |  |  |
| LoopStart | Loop Start | textarea |  | 255 |  |  |
| Name | Version Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 255 |  |  |
| Rank | Rank | int | 9 |  |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VersionNumber | Version Number | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
