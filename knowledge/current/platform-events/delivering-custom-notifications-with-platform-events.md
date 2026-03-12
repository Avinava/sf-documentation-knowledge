---
title: "Delivering Custom Notifications with Platform Events"
domain: platform-events
topic: delivering-custom-notifications-with-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.916Z
estimatedTokens: 350
keywords: [Delivering, Custom, Notifications, Platform, Events, part, Salesforce’s, enterprise, messaging, event-driven, architecture, enable, apps, communicate, inside]
---

# Delivering Custom Notifications with Platform Events

> Platform events are part of Salesforce’s enterprise messaging platform.
    The platform provides an event-driven messaging architecture to enable apps to communicate
    inside and outside of Salesforce. Before
    diving into platform events, take a look at what an event-based software system is.

# Delivering Custom Notifications with Platform Events

Platform events are part of Salesforce’s enterprise messaging platform. The platform provides an event-driven messaging architecture to enable apps to communicate inside and outside of Salesforce. Before diving into platform events, take a look at what an event-based software system is.

-   **[Event-Driven Software Architecture](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_architecture.htm)**
    An event-driven (or message-driven) software architecture consists of event producers, event consumers, and channels. The architecture is suitable for large distributed systems because it decouples event producers from event consumers, thereby simplifying the communication model in connected systems.
-   **[Enterprise Messaging Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm)**
    The Salesforce enterprise messaging platform offers the benefits of event-driven software architectures. Platform events are the event messages (or notifications) that your apps send and receive to take further action. Platform events simplify the process of communicating changes and responding to them without writing complex logic. Publishers and subscribers communicate with each other through events. One or more subscribers can listen to the same event and carry out actions.

## Related Topics

- Event-Driven Software Architecture (atlas.en-us.platform_events.meta/platform_events/platform_events_intro_architecture.htm)
- Enterprise Messaging Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_intro_emp.htm)
