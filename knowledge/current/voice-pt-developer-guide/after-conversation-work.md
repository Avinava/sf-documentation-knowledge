---
title: "After Conversation Work"
domain: voice-pt-developer-guide
topic: after-conversation-work
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:21.945Z
estimatedTokens: 866
keywords: [Conversation, Work, ACW, gives, reps, amount, time, customer, wrap, their, they, start, new]
---

# After Conversation Work

> After Conversation Work (ACW) gives reps a set amount of time after a customer
    conversation to wrap up their work before they start a new conversation.

# After Conversation Work

After Conversation Work (ACW) gives reps a set amount of time after a customer conversation to wrap up their work before they start a new conversation.

In order for reps to configure After Conversation Work, follow these steps to support the feature:

1.  Fire an AFTER\_CALL\_WORK\_STARTED event (using the [publishEvent()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm) method) with the callId to trigger after conversation work for the rep.

    1.  Fire this event regardless of whether the org has enabled After Conversation Work. In case After Conversation Work isn’t enabled, this event is ignored.
    2.  If there’s a case (for example, a missed call) when the rep isn’t put into wrap-up mode in the telephony system, the connector should not fire the AFTER\_CALL\_WORK\_STARTED event.

    ```

    ```

2.  Implement the [wrapUpCall()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_wrapupcall.htm) method in the connector. The implementation of this method should remove the rep from wrap-up and put the rep back into the queue for receiving calls.
3.  If you have Sales Engagement setup in your org and you’d like to advance a cadence after your rep wraps up a call, fire WRAP\_UP\_ENDED (using the publishEvent() method) event after you receive wrapUpCall(), with the following sample payload.

    ```

    ```


#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: Get Started with the Service Cloud Connector API](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_get_started.hm "Service Cloud Connector API Reference: Get Started with the Service Cloud Connector API - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: wrapUpCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_wrapupcall.hm "Service Cloud Connector API Reference: wrapUpCall - HTML (New Window)")

-   [*Service Cloud Connector API Reference*: publishEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.hm "Service Cloud Connector API Reference: publishEvent - HTML (New Window)")

-   [*Salesforce Help*: Configure After Conversation Work Time](https://help.salesforce.com/s/articleView?id=service.omnichannel_configure_after_conversation_work_time.htm&type=5&language=en_US "Salesforce Help: Configure After Conversation Work Time
    - HTML (New Window)")

-   [*Release Notes*: Give Agents Time for After-Conversation Work (Pilot)](https://help.salesforce.com/articleView?id=release-notes.rn_voice_acw.htm&type=5&release=230&language=en_US "Release Notes: Give Agents Time for After-Conversation Work
    (Pilot) - HTML (New Window)")

## Code Examples

```
publishEvent({ eventType: Constants.VOICE_EVENT_TYPE.AFTER_CALL_WORK_STARTED, 
  payload: { callId: <uniqueCallId> }
});
```

```
{ 
 callType: 'outbound' , 
 callId: <callId>, 
 callStatus: 'ended' 
}
```
