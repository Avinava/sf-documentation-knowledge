---
title: "EmpUserProvisionProcessErr"
domain: sfFieldRef
topic: empuserprovisionprocesserr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.989Z
estimatedTokens: 392
keywords: [EmpUserProvisionProcessErr, employee-user, provisioning, process, error, API, version, 52.0, later]
---

# EmpUserProvisionProcessErr

> Represents an employee-user provisioning process error. This object is
      available in API version 52.0 and later.

# EmpUserProvisionProcessErr

Represents an employee-user provisioning process error. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EmpUserProvisionProcessErr](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_empuserprovisionprocesserr.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ErrorCode | Error Code | string |  | 32 |  |  |
| ErrorMessage | Error Message | string |  | 255 |  |  |
| Id | Employee User Provisioning Process Error ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Process Item Number | string |  | 255 |  |  |
| ProvisioningProcessId | Employee User Provisioning Process ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
