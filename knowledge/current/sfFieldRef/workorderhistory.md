---
title: "WorkOrderHistory"
domain: sfFieldRef
topic: workorderhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.355Z
estimatedTokens: 275
keywords: [WorkOrderHistory, history, changes, made, tracked, work, order, API, version, 36.0, later]
---

# WorkOrderHistory

> Represents the history of changes made to tracked fields
				on a work order. This object is available in API version 36.0 and
		later.

# WorkOrderHistory

Represents the history of changes made to tracked fields on a work order. This object is available in API version 36.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WorkOrderHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorderhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Datatype | picklist |  | 40 |  |  |
| Field | Changed Field | picklist |  | 255 |  |  |
| Id | Work Order History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| NewValue | New Value | anyType |  | 255 |  |  |
| OldValue | Old Value | anyType |  | 255 |  |  |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
