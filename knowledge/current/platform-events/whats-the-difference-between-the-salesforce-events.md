---
title: "What’s the Difference Between the Salesforce Events?"
domain: platform-events
topic: whats-the-difference-between-the-salesforce-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.861Z
estimatedTokens: 935
keywords: [What’s, Difference, Salesforce, Events, offers, various, features, standard, platform, event-like, aren’t, event, notifications, Custom, Data]
---

# What’s the Difference Between the Salesforce Events?

> Salesforce offers various features that use events, some of which
      are based on standard platform events. Other features are event-like but aren’t event
      notifications.

# What’s the Difference Between the Salesforce Events?

Salesforce offers various features that use events, some of which are based on standard platform events. Other features are event-like but aren’t event notifications.

## Custom Events

You can use the following types of events to generate and deliver custom messages.

Custom Platform Events

Use custom platform events to deliver secure, scalable, and customizable event notifications within Salesforce or from external sources. Custom platform event fields are defined in Salesforce and determine the data that you send and receive. Apps can publish and subscribe to platform events on the Lightning Platform or in external systems.

Generic Events

Generic events are custom events that contain arbitrary payloads. With a generic event, you can’t define the schema of the event.

## Data Events

The following types of events are tied to Salesforce records.

Change Data Capture Events

Salesforce publishes Change Data Capture events for record and field changes.

PushTopic Events

PushTopic events track field changes in Salesforce records and are tied to Salesforce records.

## Custom and Data Event Comparison

For a comparison of custom and data events, see [Streaming Event Features](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/event_comparison.htm) in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm).

## Standard Events: Security, Apex, and Monitoring

Salesforce publishes the following examples of standard platform events. These predefined events enable monitoring of security-related actions and user actions in Salesforce.

Asset Token Events

Subscribe to an AssetTokenEvent stream to monitor OAuth 2.0 authentication activity. Salesforce publishes an asset token event upon successful completion of an OAuth 2.0 asset token flow for a connected device.

Batch Apex Error Events

Subscribe to an BatchApexErrorEvent stream to catch errors that occur during batch Apex job execution. You can receive all types of errors and exceptions, including uncatchable exceptions, such as Apex limit exceptions.

Real-Time Event Monitoring

Real-Time Event Monitoring provides standard platform events that you can subscribe to for monitoring user activity in real time, such as logins and running reports. For example, you can subscribe to the event channel for LoginEventStream to receive notifications when users log in.

## Event-Like Features

The following features can trick you into being streaming events, but they’re not.

Event Monitoring Log

Like Real-Time Event Monitoring, you can use Event Monitoring to track user activity, such as logins and running reports. Unlike Real-Time Events, Event Monitoring doesn’t send real-time notifications. Instead, it stores user activity in a log that you can query.

Transaction Security Policies

A transaction security policy evaluates user activity, such as logins and data exports, and trigger actions in real time. When a policy is triggered, notifications are sent through email or in-app notifications. You can use standard actions, such as blocking an operation, or custom actions defined in Apex.

Calendar Events

A calendar event is an appointment or meeting that you create and view in the user interface. In SOAP API, the Event object represents a calendar event. These events are calendar items and not notifications that software systems send.

#### See Also

-   [Standard Platform Event Objects](atlas.en-us.platform_events.meta/platform_events/platform_events_standard_platform_event_objects.htm "Check out the standard platform events that Salesforce publishes.")

## Related Topics

- Standard Platform Event Objects (atlas.en-us.platform_events.meta/platform_events/platform_events_standard_platform_event_objects.htm)
