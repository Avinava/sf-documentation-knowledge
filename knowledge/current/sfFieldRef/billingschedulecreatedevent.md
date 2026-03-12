---
title: "BillingScheduleCreatedEvent"
domain: sfFieldRef
topic: billingschedulecreatedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.994Z
estimatedTokens: 248
keywords: [BillingScheduleCreatedEvent, Notifies, subscribers, actions, API, version, 55.0, later]
---

# BillingScheduleCreatedEvent

> Notifies subscribers when the /actions/standardCreateBillingScheduleFromOrderItem request is
			complete. This object is available in API version 55.0 and later.

# BillingScheduleCreatedEvent

Notifies subscribers when the /actions/standardCreateBillingScheduleFromOrderItem request is complete. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BillingScheduleCreatedEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingScheduleCreatedEventDetail | Billing Schedule Created Event Detail ID | complexvalue |  |  |  |  |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RequestIdentifier | Request Identifier | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
