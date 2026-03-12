---
title: "Event-Driven Software Architecture"
domain: platform-events
topic: event-driven-software-architecture
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.850Z
estimatedTokens: 732
keywords: [Event-Driven, Software, Architecture, message-driven, consists, event, producers, consumers, channels, suitable, large, distributed, systems, because, decouples]
---

# Event-Driven Software Architecture

> An event-driven (or message-driven) software architecture consists
      of event producers, event consumers, and channels. The architecture is suitable for large
      distributed systems because it decouples event producers from event consumers, thereby
      simplifying the communication model in connected systems.

# Event-Driven Software Architecture

An event-driven (or message-driven) software architecture consists of event producers, event consumers, and channels. The architecture is suitable for large distributed systems because it decouples event producers from event consumers, thereby simplifying the communication model in connected systems.

Event

A change in state that is meaningful in a business process. For example, placement of a purchase order is a meaningful event because the order fulfillment center expects to receive a notification before processing an order.

Event message

A message that contains data about the event. Also known as an event notification. For example, an event message can be a notification about an order placement containing information about the order.

Event producer

The publisher of an event message.

Event channel

A stream of events on which an event producer sends event messages and event consumers read those messages. For platform events, the channel is for a single platform event or a custom channel that groups event messages for multiple platform events.

Event consumer

A subscriber to a channel that receives messages from the channel. For example, an order fulfillment app that is notified of new orders.

Event bus

A multitenant, multicloud event storage and delivery service based on a publish-subscribe model. The event bus enables the retrieval of stored event messages at any time during the retention window. The event bus is based on a time-ordered event log, which ensures that event messages are stored and delivered in the order that they’re received by Salesforce.

Systems in request-response communication models make a request to a web service or database to obtain information about a certain state. The sender of the request establishes a connection to the service and depends on the availability of the service.

In comparison, systems in an event-based model obtain information and can react to it in near real time when the event occurs. Event producers don’t know the consumers that receive the events. Any number of consumers can receive and react to the same events. The only dependency between producers and consumers is the semantic of the message content.

## The Event Bus

Platform event messages are published to the event bus, where they’re stored temporarily. You can retrieve stored event messages from the event bus using Pub/Sub API . Each event message contains the Replay ID field, which identifies the event in the stream and enables replaying the stream after a specific event. For more information, see [Event Message Durability](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-message-durability.html) in the Pub/Sub API Developer Guide.

![Event-based software architecture diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_events%2Fimages%2Fsalesforce_event_bus.png&folder=platform_events)
