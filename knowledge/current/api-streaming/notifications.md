---
title: "Notifications"
domain: api-streaming
topic: notifications
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.413Z
estimatedTokens: 334
keywords: [Notifications, record, created, updated, event, evaluated, against, PushTopic, query, notification, generated, message, sent, channel, result]
---

# Notifications

> After a record is created or updated (an event), the record is evaluated against the PushTopic
   query and a notification might be generated. A notification is the message sent to the channel as
   the result of an event. The notification is a JSON formatted message. The PushTopic field
    NotifyF

# Notifications

After a record is created or updated (an event), the record is evaluated against the PushTopic query and a notification might be generated. A notification is the message sent to the channel as the result of an event. The notification is a JSON formatted message. The PushTopic field NotifyForFields specifies how the record is evaluated against the PushTopic query. The NotifyForFields values are:

| NotifyForFields Value | Description |
| --- | --- |
| All | Notifications are generated for all record field changes, provided the evaluated records match the criteria specified in the WHERE clause. |
| Referenced (default) | Changes to fields referenced in the SELECT and WHERE clauses are evaluated. Notifications are generated for the evaluated records only if they match the criteria specified in the WHERE clause. |
| Select | Changes to fields referenced in the SELECT clause are evaluated. Notifications are generated for the evaluated records only if they match the criteria specified in the WHERE clause. |
| Where | Changes to fields referenced in the WHERE clause are evaluated. Notifications are generated for the evaluated records only if they match the criteria specified in the WHERE clause. |

The fields that you specify in the PushTopic query SELECT clause are contained in the notification message.
