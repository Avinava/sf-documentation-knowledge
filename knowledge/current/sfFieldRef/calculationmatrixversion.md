---
title: "CalculationMatrixVersion"
domain: sfFieldRef
topic: calculationmatrixversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.995Z
estimatedTokens: 529
namespace: Namespace
keywords: [CalculationMatrixVersion, version, Decision, Matrix, label, API, 53.0, later]
---

# CalculationMatrixVersion

> Defines a version of a Decision Matrix. The label for this object is
         Decision Matrix Version. This object is available in API version 53.0 and
      later.

**Namespace:** `Namespace`

# CalculationMatrixVersion

Defines a version of a Decision Matrix. The label for this object is Decision Matrix Version. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalculationMatrixVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calculationmatrixversion.htm "HTML (New Window)") in the Lookup Tables Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | API Name | string |  | 80 |  |  |
| CalculationMatrixId | Decision Matrix ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DecisionMatrixDefinitionVerId | Decision Matrix Definition Version ID | reference |  | 18 |  |  |
| DscnModelNoteExportStatus | Decision Model and Notation Export Status | picklist |  | 255 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| GroupKey | Group Key | string |  | 255 |  |  |
| GroupKeyValue | Group Key Value | string |  | 255 |  |  |
| Id | Decision Matrix Version ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEnabled | Active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoadProcessStatus | Load Process Status | picklist |  | 255 |  |  |
| MatrixType | Matrix Type | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 255 |  |  |
| Rank | Rank | int | 9 |  |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| SubGroupKey | Sub Group Key | string |  | 255 |  |  |
| SubGroupKeyValue | Sub Group Key Value | string |  | 255 |  |  |
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
