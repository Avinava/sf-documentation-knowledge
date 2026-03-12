---
title: "EventBusSubscriber"
domain: sfFieldRef
topic: eventbussubscriber
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.495Z
estimatedTokens: 340
keywords: [EventBusSubscriber, trigger, process, flow, that’s, subscribed, platform, event, change, data, capture, Doesn’t, include, CometD, Pub]
---

# EventBusSubscriber

> Represents a trigger, process, or flow that’s subscribed to a
         platform event or a change data capture event. Doesn’t include CometD or Pub/Sub API
         subscribers.

# EventBusSubscriber

Represents a trigger, process, or flow that’s subscribed to a platform event or a change data capture event. Doesn’t include CometD or Pub/Sub API subscribers.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [EventBusSubscriber](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventbussubscriber.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ExternalId | External ID | string |  | 255 |  |  |
| Id | Event ID | id |  | 18 |  |  |
| IsPartitioned | Is Partitioned | boolean |  |  |  |  |
| LastError | Last Error Message | string |  | 255 |  |  |
| LastProcessed | Last Processed | string |  | 1000 |  |  |
| LastPublished | Last Published | string |  | 1000 |  |  |
| Name | Subscriber Name | string |  | 80 |  |  |
| Position | Position | int | 9 |  |  |  |
| Retries | Retry Attempts | int | 9 |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Tip | Tip | int | 9 |  |  |  |
| Topic | Topic | string |  | 80 |  |  |
| Type | Type | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
