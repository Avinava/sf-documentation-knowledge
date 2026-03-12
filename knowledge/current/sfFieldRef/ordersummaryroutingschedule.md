---
title: "OrderSummaryRoutingSchedule"
domain: sfFieldRef
topic: ordersummaryroutingschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.095Z
estimatedTokens: 410
keywords: [OrderSummaryRoutingSchedule, attempt, route, order, summary, inventory, locations, fulfillment, schedule, future, attempts, record, completed]
---

# OrderSummaryRoutingSchedule

> Represents an attempt to route an order summary to one or more inventory
      locations for fulfillment. You can use it to schedule future attempts and to record completed
      attempts.

# OrderSummaryRoutingSchedule

Represents an attempt to route an order summary to one or more inventory locations for fulfillment. You can use it to schedule future attempts and to record completed attempts.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderSummaryRoutingSchedule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ordersummaryroutingschedule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Order Summary Routing Schedule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Reason | Reason | picklist |  | 40 |  |  |
| ScheduleStatus | Status | picklist |  | 255 |  |  |
| ScheduledDatetime | Scheduled Date Time | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
