---
title: "OrderChangeLog"
domain: sfFieldRef
topic: orderchangelog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.653Z
estimatedTokens: 413
keywords: [OrderChangeLog, log, record, change, requests, made, order, post, activation, always, one-to-one, API, version, 48.0, later]
---

# OrderChangeLog

> Represents a log record of all change requests made to an order post
         activation. A log record is always one-to-one to change an order request. This object
      is available in API version 48.0 and later.

# OrderChangeLog

Represents a log record of all change requests made to an order post activation. A log record is always one-to-one to change an order request. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderChangeLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderchangelog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangeLineId | Change Line ID | reference |  | 18 |  |  |
| ChangeLineType | Change Line Type | picklist |  | 255 |  |  |
| ChangeOrderId | Order ID | reference |  | 18 |  |  |
| ChangeRequest | Change Request | string |  | 36 |  |  |
| ChangeSummary | Change Summary | textarea |  | 50000 |  |  |
| ChangeType | Change Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Order Change Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| RelatedLineId | Related Line ID | reference |  | 18 |  |  |
| RelatedOrderId | Order ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
