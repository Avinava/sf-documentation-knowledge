---
title: "Real-Time Event Monitoring Definitions"
domain: securityImplGuide
topic: real-time-event-monitoring-definitions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.026Z
estimatedTokens: 242
keywords: [Real-Time, Event, Monitoring, Definitions, Keep, terms, mind, working]
---

# Real-Time Event Monitoring Definitions

> Keep these terms in mind when working with Real-Time Event Monitoring.

# Real-Time Event Monitoring Definitions

Keep these terms in mind when working with Real-Time Event Monitoring.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Event

An event is anything that happens in Salesforce, including user clicks, record state changes, and measuring values. Events are immutable and timestamped.

Event Channel

A stream of events on which an event producer sends event messages and event consumers read those messages.

Event Subscriber

A subscriber to a channel that receives messages from the channel. For example, a security app is notified of new report downloads.

Event Message

A message used to transmit data about the event.

Event Publisher

The publisher of an event message over a channel, such as a security and auditing app.
