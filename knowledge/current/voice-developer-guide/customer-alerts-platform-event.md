---
title: "Customer Alerts Platform Event"
domain: voice-developer-guide
topic: customer-alerts-platform-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.497Z
estimatedTokens: 428
keywords: [Customer, Alerts, Platform, Event, RealtimeAlertEvent, notifies, subscribers, triggered, alarms, Amazon, Connect, instance]
---

# Customer Alerts Platform Event

> The RealtimeAlertEvent platform event notifies subscribers about triggered alarms in
    your Amazon Connect instance.

# Customer Alerts Platform Event

The RealtimeAlertEvent platform event notifies subscribers about triggered alarms in your Amazon Connect instance.

This event is a standard Salesforce [platform event](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm) and can be accessed from the following endpoint: /event/RealtimeAlertEvent. You can handle this event from within Apex code, or by using a Salesforce flow. For example, you can create a flow that is triggered by the platform event and then posts a message to Chatter.

![Sample flow for customer alerts](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_customer_alerts_flow.png&folder=voice_developer_guide)

To learn more about this platform event and to view some sample code, see [RealtimeAlertEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_realtimealertevent.htm) in the Platform Events Developer Guide.

#### See Also

-   [*Platform Events Developer Guide:* RealtimeAlertEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_realtimealertevent.htm "Platform Events Developer Guide: RealtimeAlertEvent - HTML (New Window)")

-   [Customer Alerts Alarms](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm "Salesforce provides a set of alarms that you should fine-tune so that you can monitor the status of your contact center and get notified when important events are triggered. Some of these alarms are enabled by default, others must be enabled if you want them to operate in your environment.")

## Related Topics

- Customer Alerts Alarms (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm)
