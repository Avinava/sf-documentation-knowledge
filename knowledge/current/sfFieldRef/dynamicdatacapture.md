---
title: "DynamicDataCapture"
domain: sfFieldRef
topic: dynamicdatacapture
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.652Z
estimatedTokens: 510
keywords: [DynamicDataCapture, junction, adds, Form, tab, Work, Order, line, item, service, appointment, mobile, app, API, version]
---

# DynamicDataCapture

> DynamicDataCapture is a junction object that adds a Form tab to Work Order
         Overview, and to the related list of a work order, work order line item, or service
         appointment in the Field Service mobile app.  This object is available in API version
      62.0 and later.

# DynamicDataCapture

DynamicDataCapture is a junction object that adds a Form tab to Work Order Overview, and to the related list of a work order, work order line item, or service appointment in the Field Service mobile app. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [DynamicDataCapture](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_dynamicdatacapture.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDefinition | Action Definition | string |  | 255 |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| ExecutionOrder | Execution Order | int | 9 |  |  |  |
| Id | Form ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentRecordId | Parent Record ID | reference |  | 18 |  |  |
| ParentRecordType | Parent Record Type | string |  | 50 |  |  |
| PausedFlowInterviewId | Paused Flow Interview ID | reference |  | 18 |  |  |
| ProcessType | Process Type | picklist |  | 255 |  |  |
| StatusCategory | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
