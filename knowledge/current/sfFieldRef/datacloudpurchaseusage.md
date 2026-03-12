---
title: "DatacloudPurchaseUsage"
domain: sfFieldRef
topic: datacloudpurchaseusage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.938Z
estimatedTokens: 378
keywords: [DatacloudPurchaseUsage, identify, track, Data.com, record, purchases, API, version, 30.0, later]
---

# DatacloudPurchaseUsage

> Represents an
				object used to identify and track Data.com record purchases. This object is
			available in API version 30.0 or later.

# DatacloudPurchaseUsage

Represents an object used to identify and track Data.com record purchases. This object is available in API version 30.0 or later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DatacloudPurchaseUsage](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_datacloudpurchaseusage.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DatacloudEntityType | Data.com Object Type | picklist |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Data.com Usage ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Sequence ID | string |  | 255 |  |  |
| PurchaseType | Data.com Purchase Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Usage | Purchase Count | double |  |  | 18 | 0 |
| UserId | User ID | reference |  | 18 |  |  |
| UserType | Data.com Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
