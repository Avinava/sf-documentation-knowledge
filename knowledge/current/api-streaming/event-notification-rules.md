---
title: "Event Notification Rules"
domain: api-streaming
topic: event-notification-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:51.397Z
estimatedTokens: 123
keywords: [Event, Notification, Notifications, generated, record, events, how, configure, PushTopic, Streaming, API, matching, logic, uses, NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, NotifyForOperationUndelete, NotifyForFields, determine]
---

> Notifications are generated for record events based on how you
configure your PushTopic. The Streaming API matching logic uses the NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, NotifyForOperationUndelete, and NotifyForFields fields in a PushTopic record to determine w

# Event Notification Rules

Notifications are generated for record events based on how you configure your PushTopic. The Streaming API matching logic uses the NotifyForOperationCreate, NotifyForOperationUpdate, NotifyForOperationDelete, NotifyForOperationUndelete, and NotifyForFields fields in a PushTopic record to determine whether to generate a notification.

Clients must connect using the cometd/29.0 (or later) Streaming API endpoint to receive delete and undelete event notifications.
