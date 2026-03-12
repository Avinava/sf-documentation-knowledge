---
title: "IdentityVerificationProcFld"
domain: sfFieldRef
topic: identityverificationprocfld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.722Z
estimatedTokens: 436
namespace: NamespacePrefix
keywords: [IdentityVerificationProcFld, configure, questions, criteria, verifying, identity, caller, API, version, 54.0, later]
---

# IdentityVerificationProcFld

> Used to configure the questions or criteria for verifying the
         identity of a caller. Available in API version 54.0 and later.

**Namespace:** `NamespacePrefix`

# IdentityVerificationProcFld

Used to configure the questions or criteria for verifying the identity of a caller. Available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IdentityVerificationProcFld in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomFieldLabel | Custom Field Label | string |  | 255 |  |  |
| DataSourceType | Data Source Type | picklist |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| FieldDataType | Field Data Type | picklist |  | 255 |  |  |
| FieldName | Field Name | string |  | 255 |  |  |
| FieldType | Field Type | picklist |  | 255 |  |  |
| FieldValueFormula | Field Value Formula | string |  | 255 |  |  |
| Id | Identity Verification Process Field ID | id |  | 18 |  |  |
| IdentityVerificationProcDtlId | Identity Verification Process Detail ID | reference |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsManualInput | Manual Input | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SequenceNumber | Sequence Number | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
