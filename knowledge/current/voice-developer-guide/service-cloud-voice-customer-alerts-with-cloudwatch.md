---
title: "Service Cloud Voice Customer Alerts with CloudWatch"
domain: voice-developer-guide
topic: service-cloud-voice-customer-alerts-with-cloudwatch
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.500Z
estimatedTokens: 518
keywords: [Service, Cloud, Voice, Customer, Alerts, CloudWatch, Ensure, implementation, running, properly, Amazon, dashboards, alarms, provide, Monitor]
---

# Service Cloud Voice Customer Alerts with CloudWatch

> Ensure that your Service Cloud Voice implementation is running properly with the Amazon
    CloudWatch dashboards and alarms that we provide. Monitor the health of your contact center with
    two dashboards. Fine-tune the alarms so they trigger when something needs attention in your
    environment. Notify the right people about these events with the new RealtimeAlertEvent platform
    event.

# Service Cloud Voice Customer Alerts with CloudWatch

Ensure that your Service Cloud Voice implementation is running properly with the Amazon CloudWatch dashboards and alarms that we provide. Monitor the health of your contact center with two dashboards. Fine-tune the alarms so they trigger when something needs attention in your environment. Notify the right people about these events with the new RealtimeAlertEvent platform event.

![Customer Alerts overview](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_cloudwatch_overview.png&folder=voice_developer_guide)

These customer alert features are available to all customers running version 8.0 or later of the Service Cloud Voice contact center in Amazon. To learn how to view or update your contact center, see [Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US) in Salesforce Help.

-   **[Customer Alerts Alarms](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm)**
    Salesforce provides a set of alarms that you should fine-tune so that you can monitor the status of your contact center and get notified when important events are triggered. Some of these alarms are enabled by default, others must be enabled if you want them to operate in your environment.
-   **[Customer Alerts Dashboards](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_dashboards.htm)**
    Salesforce provides two CloudWatch custom dashboards to monitor potential issues with your contact center.
-   **[Customer Alerts Platform Event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm)**
    The RealtimeAlertEvent platform event notifies subscribers about triggered alarms in your Amazon Connect instance.

#### See Also

-   [*Salesforce Help:* Update Your Contact Center](https://help.salesforce.com/articleView?id=service.voice_update_cc.htm&type=5&language=en_US "Salesforce Help: Update Your Contact Center - HTML (New Window)")

## Related Topics

- Customer Alerts Alarms (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm)
- Customer Alerts Dashboards (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_dashboards.htm)
- Customer Alerts Platform Event (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm)
