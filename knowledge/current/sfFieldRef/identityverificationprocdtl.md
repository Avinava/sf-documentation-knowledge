---
title: "IdentityVerificationProcDtl"
domain: sfFieldRef
topic: identityverificationprocdtl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.714Z
estimatedTokens: 524
namespace: NamespacePrefix
keywords: [IdentityVerificationProcDtl, configure, search, function, well, minimum, number, verifiers, identity, verification, process, API, version, 54.0, later]
---

# IdentityVerificationProcDtl

> Used to configure the search function as well as the minimum number
         of verifiers for the identity verification process. Available in API version 54.0 and
         later.

**Namespace:** `NamespacePrefix`

# IdentityVerificationProcDtl

Used to configure the search function as well as the minimum number of verifiers for the identity verification process. Available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IdentityVerificationProcDtl in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataSourceType | Data Source Type | picklist |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DisplayRecordFieldName | Display Record Field Name | string |  | 30 |  |  |
| Id | Identity Verification Process Detail ID | id |  | 18 |  |  |
| IdentityVerificationProcDefId | Identity Verification Process Definition ID | reference |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LinkedIdVerfProcessDetId | Identity Verification Process Detail ID | reference |  | 18 |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ObjectName | Object Name | string |  | 80 |  |  |
| OptionalVerifiersMinVerfCount | Optional Verifiers Minimum Verification Count | int | 9 |  |  |  |
| SearchFilter | Search Filter | string |  | 255 |  |  |
| SearchRecordUniqueIdField | Search Record Unique ID Field | string |  | 255 |  |  |
| SearchResultSortBy | Search Result Sort By | string |  | 255 |  |  |
| SearchSequenceNumber | Search Sequence Number | int | 9 |  |  |  |
| SearchType | Search Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
