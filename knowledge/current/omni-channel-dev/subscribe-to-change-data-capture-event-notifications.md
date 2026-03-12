---
title: "Subscribe to Change Data Capture Event Notifications"
domain: omni-channel-dev
topic: subscribe-to-change-data-capture-event-notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.976Z
estimatedTokens: 1189
keywords: [Subscribe, Change, Data, Capture, Event, Notifications, Select, subscription, track, CDC, listener, real-time, routing, provide, updates]
---

# Subscribe to Change Data Capture Event Notifications

> Select a subscription method to track Change Data Capture (CDC) event notifications and
  set up a listener for real-time routing data. Event notifications provide real-time updates to the
  partner routing application for data synchronization and routing decisions.

# Subscribe to Change Data Capture Event Notifications

Select a subscription method to track Change Data Capture (CDC) event notifications and set up a listener for real-time routing data. Event notifications provide real-time updates to the partner routing application for data synchronization and routing decisions.

You have two options to subscribe to CDC event notifications and listen to case routing data:

-   Subscribe using Pub/Sub API
-   Subscribe using Apex Triggers

## Subscribe Using Pub/Sub API

With Pub/Sub API you can subscribe to event notifications in an external client to integrate your systems. You can create custom channels to receive event notifications specifically for create, update, and delete events necessary for external routing. To receive all updates about external routing:

-   Create a custom channel. The new channel’s name must follow this structure:

    ```

    ```

    .
-   Define the channel members. This channel receives CDC event notifications for objects critical to external routing, such as PendingServiceRouting.
-   Configure the channel members. This example code provides a sample channel structure definition.

    ```

    ```

-   Listen for event notifications.

To receive updates only when the records are ready for external routing:

-   Create a custom channel. Define a channel member record that subscribes to the PendingServiceRoutingChangeEvent. Use this filename structure for the channel member metadata:

    ```

    ```

-   Define the channel members. The channel members must have (ExternalRoutingChannel\_\_chn) as the destination channel , and PendingServiceRoutingChangeEvent as the monitored object.
-   Configure the channel members. This example code provides a sample channel filter logic:

    ```

    ```

    This filter expression ensures that events are only delivered when the routing model is set to ExternalRouting and the IsReadyForRouting field is true.
-   Listen for event notifications.

To ensure the external routing system receives notificatons when a rep logs in, logs out, or changes status:

-   Create a custom channel. Define a channel member record that subscribes to the UserServicePresenceChangeEvent. Use this filename structure for the channel member metadata:

    ```

    ```

-   Define the channel members. The channel members must have (ExternalRoutingChannel\_\_chn) as the destination channel , and UserServicePresenceChangeEvent as the monitored object.
-   Configure the channel members. The channel member record should include this configuration, which is critical for allowing the external routing system to monitor rep availability:

    ```

    ```

-   Listen for event notifications.

To filter for updates to externally routed AgentWork records:

-   Create a custom channel. Define a channel member record that subscribes to the AgentWorkChangeEvent. Use this filename for the channel member metadata:

    ```

    ```

-   Define the channel members. The channel members must have (ExternalRoutingChannel\_\_chn) as the destination channel , and AgentWorkChangeEvent as the monitored object.
-   Configure the channel members. The channel member record should include this configuration, which is necessary to monitor the real-time status and lifecycle of work items being managed by the partner routing application:

    ```

    ```


To receive the Pub/Sub API event notifications, the partner routing application must use the setting: /data/ExternalRoutingChannel\_chn.

## Subscribe Using Apex Triggers

You can use Apex Triggers to capture event notifications. With Apex Triggers, it isn't possible to filter for specific events.

To implement a listener for real-time external routing, define an Apex trigger that runs whenever a change event is generated for a PSR record. This example shows an Apex trigger for thePendingServiceRoutingChangeEvent. This trigger identifies and prepares new work for processing by the partner routing application:

```

```

To allow the partner routing application to monitor agent status changes in real time, define an Apex trigger that executes automatically after an event is inserted into the event stream for the UserServicePresence object. This example shows an Apex trigger for the UserServicePresenceChangeEvent. This trigger monitors the presence status of reps and conveys them to the partner routing application:

```

```

To help synchronize the state of assigned work items between Salesforce and the partner routing application, define an Apex trigger to capture and process CDC events for the AgentWork object. This example shows an Apex trigger for the AgentWorkPresenceChangeEvent. This trigger identifies when a new AgentWork record has been created:

```

```

## Code Examples

```
ExternalRoutingChannel__chn.platformEventChannel
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformEventChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <channelType>data</channelType>
    <label>External Routing Channel</label>
</PlatformEventChannel>
```

```
ExtPSRChangeEvent.platformEventChannelMember
```

```
<?xml version="1.0" encoding="UTF-8"?> <PlatformEventChannelMember xmlns="http://soap.sforce.com/2006/04/metadata"> <eventChannel>ExternalRoutingChannel__chn</eventChannel> <selectedEntity>PendingServiceRoutingChangeEvent</selectedEntity> <filterExpression>RoutingModel = 'ExternalRouting' AND IsReadyForRouting = true</filterExpression> </PlatformEventChannelMember>
```

```
ExtUSPUpdateEvent.platformEventChannelMember
```
