---
title: "Metadata API Example: Create a Custom Channel and Add Real-Time Event Monitoring
        Events"
domain: platform-events
topic: metadata-api-example-create-a-custom-channel-and-add-real-time-event-monitoring-
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.729Z
estimatedTokens: 1093
keywords: [Metadata, API, Custom, Channel, Add, Real-Time, Event, Monitoring, Events, member, recommend, part, application, lifecycle, management]
---

# Metadata API Example: Create a Custom Channel and Add Real-Time Event Monitoring
        Events

> You can use Metadata API to create a channel and channel member. We recommend using
        Metadata API as part of the application lifecycle management process to develop, test,
        deploy, and release your apps to production. If you want to only configure the channel, we
        recommend using Tooling API with REST.

# Metadata API Example: Create a Custom Channel and Add Real-Time Event Monitoring Events

You can use Metadata API to create a channel and channel member. We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to only configure the channel, we recommend using Tooling API with REST.


| User Permissions Needed |
| --- |
| To deploy and retrieve metadata types: | Customize Application |
| To update metadata types: | Modify Metadata Through Metadata API Functions |
| To use Metadata API: | API Enabled |
| To use Real-Time Event Monitoring events: | Salesforce Shield or Event Monitoring add-on subscription and the View Real-Time Event Monitoring Data user permission. |

In this example, you create a channel for Real-Time Event Monitoring events named Event\_Monitoring\_Channel\_\_chn by using the eventType field in PlatformEventChannel. Also, you add two Real-Time Event Monitoring events as members: ApiAnomalyEvent and FileEvent.

To create a channel and channel member with Metadata API, you can use tools such as Visual Studio Code with the Salesforce Extension pack or Salesforce CLI. See [Metadata API Developer Tools](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_developer_tools.htm) and [Quick Start: Metadata API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_quickstart_retrieve.htm) in the Metadata API Developer Guide.

This sample custom channel definition is for the Event\_Monitoring\_Channel\_\_chn channel. The file name is Event\_Monitoring\_Channel\_\_chn.platformEventChannel. To have this channel accept Real-Time Event Monitoring events, event is specified for channelType and monitoring is specified for eventType.

```

```

This channel member definition associates ApiAnomalyEvent to the channel. The file name is Event\_Monitoring\_Channel\_chn\_ApiAnomalyEvent.platformEventChannelMember.

```

```

This sample channel member definition associates FileEvent to the channel. The file name is Event\_Monitoring\_Channel\_chn\_FileEvent.platformEventChannelMember.

```

```

This package.xml file references the channel and its two channel members.

```

```

Before you subscribe to the Event\_Monitoring\_Channel\_\_chn channel, enable Real-Time Event Monitoring and streaming for the specific events. See [Enable Access to Real-Time Event Monitoring](https://help.salesforce.com/s/articleView?id=xcloud.real_time_event_monitoring_enable.htm&type=5&language=en_US) and [Manage Real-Time Event Monitoring Events](https://help.salesforce.com/s/articleView?id=xcloud.event_monitoring_monitor_events_with_event_manager.htm&type=5&language=en_US) in Salesforce Help.

To subscribe to the channel, see [Subscribe to the Channel](atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_subscribe.htm "After creating a custom channel and its members, subscribe to the channel using a Pub/Sub API Java client, and receive event messages.") and use /event/Event\_Monitoring\_Channel\_\_chn for the TOPIC parameter. After you start the subscription, perform some actions in the Salesforce org to cause some events to be generated. For example, to receive FileEvent events on the channel, download a document.

#### See Also

-   [*Platform Events Developer Guide*: ApiAnomalyEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_apianomalyevent.htm "Platform Events Developer Guide: ApiAnomalyEvent - HTML (New Window)")

-   [*Platform Events Developer Guide*: FileEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_fileevent.htm "Platform Events Developer Guide: FileEvent - HTML (New Window)")

-   [*Metadata API Developer Guide*: PlatformEventChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannel.htm "Metadata API Developer Guide: PlatformEventChannel - HTML (New Window)")

-   [*Metadata API Developer Guide*: PlatformEventChannelMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformeventchannelmember.htm "Metadata API Developer Guide: PlatformEventChannelMember - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>event</channelType>
    <eventType>monitoring</eventType>
    <label>Custom Channel for Real-Time Event Monitoring events</label>
</PlatformEventChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>Event_Monitoring_Channel__chn</eventChannel>
    <selectedEntity>ApiAnomalyEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata">
    <eventChannel>Event_Monitoring_Channel__chn</eventChannel>
    <selectedEntity>FileEvent</selectedEntity>
</PlatformEventChannelMember>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Event_Monitoring_Channel__chn</members>
        <name>PlatformEventChannel</name>
    </types>
    <types>
        <members>Event_Monitoring_Channel_chn_ApiAnomalyEvent</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <types>
        <members>Event_Monitoring_Channel_chn_FileEvent</members>
        <name>PlatformEventChannelMember</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Subscribe to the Channel (atlas.en-us.platform_events.meta/platform_events/platform_events_custom_channel_subscribe.htm)
