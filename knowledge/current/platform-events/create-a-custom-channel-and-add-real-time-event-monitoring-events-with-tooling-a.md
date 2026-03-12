---
title: "Create a Custom Channel and Add Real-Time Event Monitoring Events with Tooling API"
domain: platform-events
topic: create-a-custom-channel-and-add-real-time-event-monitoring-events-with-tooling-a
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.748Z
estimatedTokens: 1146
keywords: [Custom, Channel, Add, Real-Time, Event, Monitoring, Events, Tooling, API, named, Event_Monitoring_Channel__chn, eventType, PlatformEventChannel, two, members]
---

# Create a Custom Channel and Add Real-Time Event Monitoring Events with Tooling API

> Create a channel for Real-Time Event Monitoring events named Event_Monitoring_Channel__chn by using the eventType field in PlatformEventChannel. Also, add two Real-Time
    Event Monitoring events as members: ApiAnomalyEvent and FileEvent.

# Create a Custom Channel and Add Real-Time Event Monitoring Events with Tooling API

Create a channel for Real-Time Event Monitoring events named Event\_Monitoring\_Channel\_\_chn by using the eventType field in PlatformEventChannel. Also, add two Real-Time Event Monitoring events as members: ApiAnomalyEvent and FileEvent.


| User Permissions Needed |
| --- |
| To create or update PlatformEventChannel and PlatformEventChannelMember objects: | Customize Application |
| To use REST API: | API Enabled |
| To use Real-Time Event Monitoring events: | Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission. |

You can use your preferred REST API tool to perform these steps. We recommend using Postman with the Salesforce Platform APIs collection, which contains handy templates for Salesforce API calls. To set up Postman, see [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce) in Trailhead.

1.  Create the channel using PlatformEventChannel, set the channelType field to event and the eventType field to monitoring. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel**.

2.  Use this request body.

    ```

    ```

    You receive a response similar to this response.

    ```

    ```

3.  Add the Order\_NorthAmer\_\_e platform event to the channel using PlatformEventChannelMember. The channel member references the channel it’s part of (Order\_Channel\_\_chn) through the eventChannel field. Specify the platform event in the selectedEntity field. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and then click **Create channel member**.

4.  Use this request body.

    ```

    ```

    You receive a response similar to this response.

    ```

    ```

5.  Add the second channel member that specifies the platform event, Order\_EMEA\_\_e. Send a POST request to this URI.

    ```

    ```

    If you're using Postman, expand **Event Platform** | **Custom Channels** | **Platform Event**, and click **Create channel member**.

6.  Use this request body.

    ```

    ```

    You receive a response similar to this response.

    ```

    ```


Before you subscribe to the Event\_Monitoring\_Channel\_\_chn channel, enable Real-Time Event Monitoring and streaming for the specific events. See [Enable Access to Real-Time Event Monitoring](https://help.salesforce.com/s/articleView?id=xcloud.real_time_event_monitoring_enable.htm&type=5&language=en_US) and [Manage Real-Time Event Monitoring Events](https://help.salesforce.com/s/articleView?id=xcloud.event_monitoring_monitor_events_with_event_manager.htm&type=5&language=en_US) in Salesforce Help.

To subscribe to the channel, see [Subscribe to the Channel](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_subscribe.htm "After creating a custom channel and its members, subscribe to the channel using a Pub/Sub API Java client, and receive event messages.") and use /event/Event\_Monitoring\_Channel\_\_chn for the TOPIC parameter. After you start the subscription, perform some actions in the Salesforce org to cause some events to be generated. For example, to receive FileEvent events on the channel, download a document.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm "Platform Events Developer Guide: ApiAnomalyEvent - HTML (New Window)")

-   [*Platform Events Developer Guide*: FileEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_fileevent.htm "Platform Events Developer Guide: FileEvent - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannel.htm "Tooling API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Tooling API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_platformeventchannelmember.htm "Tooling API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
/services/data/v66.0/tooling/sobjects/PlatformEventChannel
```

```
{
  "FullName": "Event_Monitoring_Channel__chn",
  "Metadata": {
    "channelType": "event",
    "eventType": "monitoring",
    "label": "Custom Channel for Real-Time Event Monitoring events"
  }
}
```

```
{
  "id": "0YLZM000000CaR74AK",
  "success": true,
  "errors": [],
  "warnings": [],
  "infos": []
}
```

```
/services/data/v66.0/tooling/sobjects/PlatformEventChannelMember
```

```
{
 "FullName": "Event_Monitoring_Channel_chn_ApiAnomalyEvent",
 "Metadata": {
  "eventChannel": "Event_Monitoring_Channel__chn",
  "selectedEntity": "ApiAnomalyEvent"
 }
}
```

## Related Topics

- Subscribe to the Channel (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_subscribe.htm)
