---
title: "AppUsageAssignment"
domain: sfFieldRef
topic: appusageassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.401Z
estimatedTokens: 362
keywords: [AppUsageAssignment, application, context, record, different, allowed, actions, objects, it’s, created, applications, Revenue, Lifecycle, Management, order]
---

# AppUsageAssignment

> Provides application context for a record. A record can have
         different allowed actions or different related objects when it’s created for different
         applications. For example, a Revenue Lifecycle Management order has a related RevenueLifecycleManagement AppUsageAssignment, so
         Salesforce knows it can create assets for that order.  Available in API version 50.0
      and later.

# AppUsageAssignment

Provides application context for a record. A record can have different allowed actions or different related objects when it’s created for different applications. For example, a Revenue Lifecycle Management order has a related RevenueLifecycleManagement AppUsageAssignment, so Salesforce knows it can create assets for that order. Available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AppUsageAssignment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appusageassignment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppUsageType | Application Usage Type | string |  | 100 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Application Usage Assignment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
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
