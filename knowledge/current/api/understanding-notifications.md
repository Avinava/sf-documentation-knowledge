---
title: "Understanding Notifications"
domain: api
topic: understanding-notifications
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.788Z
estimatedTokens: 707
keywords: [Understanding, Notifications, SOAP, message, include, notification, associated, sObject, data, changes, queued, it’s, sent, latest, delivered]
---

# Understanding Notifications

> A single SOAP message can include up to 100 notifications. Each notification contains
  the object ID and a reference to the associated sObject data. If the information in the object
  changes after the notification is queued but before it’s sent, only the latest data is delivered
  and not the intermediate changes.

# Understanding Notifications

A single SOAP message can include up to 100 notifications. Each notification contains the object ID and a reference to the associated sObject data. If the information in the object changes after the notification is queued but before it’s sent, only the latest data is delivered and not the intermediate changes.

If you issue multiple discrete calls, the calls are sometimes batched together into one or more SOAP messages.

Messages are queued locally. A separate background process performs the actual sending. To preserve message reliability:

-   If the endpoint is unavailable, messages stay in the queue until sent successfully, or until they’re 24 hours old. After 24 hours, messages are dropped from the queue.
-   If a message can’t be delivered, the interval between retries increases exponentially, up to a maximum of two hours between retries.
-   Messages are retried independent of their order in the queue. As a result, messages can be delivered out of order.
-   You can’t build an audit trail using outbound messaging. While each message is usually delivered one time, it can sometimes be delivered more than one time. If delivery can’t be done within 24 hours, a message isn’t delivered at all. Finally, if the source object changes after a notification is queued but before it’s sent, the endpoint only receives the latest data, not any intermediate changes.
-   Because a message can sometimes be delivered more than one time, check the notification IDs in the notifications delivered to your listener client before processing.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Instead of polling, which was required in previous releases, you can now use outbound messaging to trigger execution logic when Salesforce raises an event. In previous versions of the API, client applications had to poll Salesforce to find out if relevant changes had occurred. Because most changes eventually trigger a workflow if a rule exists for it, you can use the workflow rule to trigger actions based on Salesforce events.

The metadata needed for outbound messaging, including the definition of the [notifications()](atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_wsdl.htm#i1473596) call, which sends the outbound SOAP message to an external service, is in a separate WSDL. The WSDL is created and available from the Salesforce user interface after a workflow rule has been associated with an outbound message. The WSDL is bound to the outbound message and contains the instructions about how to reach the endpoint service and what data is sent to it. For more information about setting up outbound messaging, see [Defining Outbound Messaging](atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_setting_up.htm#api_om_defining).

## Related Topics

- notifications() (atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_wsdl.htm)
- Defining Outbound Messaging (atlas.en-us.api.meta/api/sforce_api_om_outboundmessaging_setting_up.htm)
