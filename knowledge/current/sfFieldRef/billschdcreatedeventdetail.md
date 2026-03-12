---
title: "BillSchdCreatedEventDetail"
domain: sfFieldRef
topic: billschdcreatedeventdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.810Z
estimatedTokens: 292
keywords: [BillSchdCreatedEventDetail, order, item, actions, any, errors, occurred, processing, included, BillingScheduleCreatedEvent, message, can't, subscribe, directly, API]
---

# BillSchdCreatedEventDetail

> Contains information about each order item in the  /actions/standardCreateBillingScheduleFromOrderItem
			request and any errors that occurred while processing the request. This object is
		included in an BillingScheduleCreatedEvent message. You
		can't subscribe to BillSchdCreatedEventDetail directly.
		This object is available in API version 55.0 and later.

# BillSchdCreatedEventDetail

Contains information about each order item in the /actions/standardCreateBillingScheduleFromOrderItem request and any errors that occurred while processing the request. This object is included in an BillingScheduleCreatedEvent message. You can't subscribe to BillSchdCreatedEventDetail directly. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BillSchdCreatedEventDetail in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingScheduleId | Billing Schedule ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | string |  | 1000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IsSuccess | Success | boolean |  |  |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
