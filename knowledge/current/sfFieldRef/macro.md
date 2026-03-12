---
title: "Macro"
domain: sfFieldRef
topic: macro
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.513Z
estimatedTokens: 414
keywords: [Macro, instructions, tells, system, perform, tasks, API, version, 32.0, later]
---

# Macro

> Represents a macro, which is a set of instructions that tells the
			system to perform one or more tasks. This object is available in API version 32.0
		and later.

# Macro

Represents a macro, which is a set of instructions that tells the system to perform one or more tasks. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Macro](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_macro.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 4096 |  |  |
| FolderId | Folder ID | reference |  | 18 |  |  |
| FolderName | Folder Name | string |  | 256 |  |  |
| Id | Macro ID | id |  | 18 |  |  |
| IsAlohaSupported | Supports Classic | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLightningSupported | Supports Lightning | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Macro Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StartingContext | Apply To | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
