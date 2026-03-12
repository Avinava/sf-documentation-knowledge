---
title: "PaymentIntentEvent"
domain: sfFieldRef
topic: paymentintentevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.283Z
estimatedTokens: 272
keywords: [PaymentIntentEvent, payment, intent, platform, event, Subscribe, events, listen, respond, they’re, published, Salesforce, Flow, triggered]
---

# PaymentIntentEvent

> Represents a payment intent platform event. Subscribe to these events so you
         can listen and respond to them when they’re published. For example, create a Salesforce
         Flow that is triggered when one of these events is published.

# PaymentIntentEvent

Represents a payment intent platform event. Subscribe to these events so you can listen and respond to them when they’re published. For example, create a Salesforce Flow that is triggered when one of these events is published.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentIntentEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentintentevent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ChangeType | Payment Intent Event Change Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| PaymentIntentId | Payment Intent ID | reference |  | 18 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
