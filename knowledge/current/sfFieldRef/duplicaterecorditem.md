---
title: "DuplicateRecordItem"
domain: sfFieldRef
topic: duplicaterecorditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.632Z
estimatedTokens: 347
keywords: [DuplicateRecordItem, record, that’s, identified, duplicate, DuplicateRecordItems, included, DuplicateRecordSet, processed, jobs, custom, report, duplicates]
---

# DuplicateRecordItem

> Represents a record that’s been identified as a duplicate.
			DuplicateRecordItems are included in a DuplicateRecordSet, which are processed in
			duplicate jobs. Use this object to create custom report types for
		duplicates.

# DuplicateRecordItem

Represents a record that’s been identified as a duplicate. DuplicateRecordItems are included in a DuplicateRecordSet, which are processed in duplicate jobs. Use this object to create custom report types for duplicates.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DuplicateRecordItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicaterecorditem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DuplicateRecordSetId | Duplicate Record Set ID | reference |  | 18 |  |  |
| Id | Duplicate Record Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Duplicate Record Item Name | string |  | 255 |  |  |
| RecordId | Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
